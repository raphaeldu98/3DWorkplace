<template>
  <div class="home">
    <div class="canvas-container" ref="canvasDom"></div>
  </div>

  <div class="buttonContainer">
    <div class="toggle-renderer button" @click="toggleRenderer">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-neibukuoda2"></use>
      </svg>
      <div class="title">{{ useSdk ? '默认渲染' : '3D渲染' }}</div>
    </div>

    <div class="environment button" @click="setEnvMap()">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-dengguang"></use>
      </svg>
      <div class="title">切换环境</div>
    </div>

    <div class="comment button" @click="createComment">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-pizhu"></use>
      </svg>
      <div class="title">添加批注</div>
    </div>

    <a-popover trigger="click" placement="top">
      <template #content>
        <Camera />
      </template>
      <div class="camera button">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-ziyuan"></use>
        </svg>
        <div class="title">协同设计</div>
      </div>
    </a-popover>
  </div>

  <div class="inputBox" v-show="inputShow">
    <label for="input">请输入文字标注：</label>
    <input
      id="input"
      v-model="inputMessage"
      @keyup.enter="onEnter"
      @blur="onEnter"
    />
  </div>

  <!-- Button to toggle terminal visibility, now in the top left -->
  <button class="toggle-terminal-button" @click="toggleTerminal">
    {{ terminalVisible ? 'Hide Comments' : 'Show Comments' }}
  </button>

<!-- Terminal for comment history, conditionally rendered based on terminalVisible -->
<div v-if="terminalVisible" class="comment-terminal">
    <div class="terminal-header">
      <h3>Comment History</h3>
    </div>
    <div class="terminal-content">
      <ul>
        <li v-for="(comment, index) in commentsOBJ" :key="index">
          <div class="comment-list">
            <div class="comment-details">
              <span class="timestamp">{{ comment.timestamp }}</span>
              <span class="text">{{ comment.text }}</span>
            </div>
            <button @click="deleteComment(index)" class="delete-button">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { io } from "socket.io-client";
import * as ZXKJ from './sdk/zx-three-sdk';
// import Comment from "./components/buttons/comment.vue";
// import Environment from "./components/buttons/environment.vue";
import Camera from "./components/buttons/camera.vue";
// import Inner from "./components/buttons/internalStructure.vue";
import SpriteText from "three-spritetext";
import { TransformControls } from "three/addons/controls/TransformControls.js";
import { DragControls } from "three/examples/jsm/controls/DragControls.js";

// Socket.IO setup for real-time communication
const socket = io("http://localhost:3000");

// Define ref for terminal visibility
const terminalVisible = ref(false);

const useSdk = ref(false);

// Original variables
const canvasDom = ref(null);
let controls;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 2, 6);
let renderer = null;
let zxRenderer = null;
const objects = [];
let startPosition;
let inputShow = ref(false);
const inputMessage = ref("");
const commentsOBJ = ref([]);
const comments = [];
let dragControls;
let selectedComment = null; // Track the selected comment
let resizeBorders = []; // Array to hold resize borders

// Function to toggle terminal visibility
const toggleTerminal = () => {
  terminalVisible.value = !terminalVisible.value;
};

// Create a new comment on the canvas
const createComment = () => {
  const userInput = prompt("Enter your comment:"); // Prompt user for comment text
  if (!userInput) return; 
  const timestamp = new Date().toLocaleString();
  const commentText = addCommentToScene(userInput, timestamp);

  // Add the comment to the scene
  scene.add(commentText);
  comments.push(commentText);
  commentsOBJ.value.push({
    text: commentText.text,
    timestamp: timestamp,
    object: commentText,
  });

  // Emit 'addComment' event for real-time collaboration
  socket.emit("addComment", { text: userInput, timestamp, position: commentText.position });
  console.log("emit addComment", { text: userInput, timestamp, position: commentText.position });

  // Attach click listener to select and show resize borders
  commentText.onClick = () => {
    if (selectedComment !== commentText) {
      clearResizeBorders();
      selectedComment = commentText;
      // showResizeBorders(commentText);
    }
  };

  // Add double-click event to edit the text
  commentText.onDblClick = () => {
    const newText = prompt('Edit Comment:', commentText.text);
    if (newText) {
      commentText.text = newText;
      commentText.scale.set(0.5, 0.5, 0.5);
    }
  };

  updateDragControls();

  // Add double-click and click event listener for editing and selecting
  renderer.domElement.addEventListener('dblclick', (event) => {
    checkInteraction(event, 'dblclick');
  });

  renderer.domElement.addEventListener('click', (event) => {
    checkInteraction(event, 'click');
  });
};

// Function to delete a comment using timestamp
const deleteComment = (index) => {
  const commentToDelete = commentsOBJ.value[index];

  if (commentToDelete) {
    // Locate the comment in the scene by timestamp
    const commentObject = comments.find(c => c.userData.timestamp === commentToDelete.timestamp);
    if (commentObject) {
      scene.remove(commentObject); // Remove from Three.js scene

      // Remove from comments array
      const commentIndex = comments.indexOf(commentObject);
      if (commentIndex > -1) comments.splice(commentIndex, 1);
    }

    commentsOBJ.value.splice(index, 1);

    // Emit 'deleteComment' event
    socket.emit("deleteComment", { index });
  }
};


// Function to check interaction with comments
const checkInteraction = (event, type) => {
  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects([...comments, ...resizeBorders]);
  if (intersects.length > 0) {
    const selectedObject = intersects[0].object;
    if (type === 'dblclick') {
      selectedObject.onDblClick?.();
    } else if (type === 'click') {
      selectedObject.onClick?.();
    }
  } else if (type === 'click' && selectedComment) {
    // Deselect if clicking elsewhere
    clearResizeBorders();
    selectedComment = null;
  }
};

// Function to show resize borders around the comment
const showResizeBorders = (comment) => {
  const borderSize = 0.1;
  const resizePositions = [
    { x: -0.3, y: 0 }, // Left
    { x: 0.3, y: 0 },  // Right
    { x: 0, y: 0.15 }, // Top
    { x: 0, y: -0.15 } // Bottom
  ];

  resizePositions.forEach((pos) => {
    const border = new THREE.Mesh(
      new THREE.BoxGeometry(borderSize, borderSize, 0.01),
      new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    );
    border.position.set(
      comment.position.x + pos.x,
      comment.position.y + pos.y,
      comment.position.z
    );
    border.userData.isResizeHandle = true;
    border.userData.direction = pos; // Store direction for resizing

    border.onDrag = (draggedBorder) => resizeComment(comment, draggedBorder);

    scene.add(border);
    resizeBorders.push(border);
  });

  updateDragControls();
};

// Function to resize the comment by dragging borders
const resizeComment = (comment, draggedBorder) => {
  const direction = draggedBorder.userData.direction;
  const scaleChange = direction.x ? Math.abs(draggedBorder.position.x - comment.position.x) : Math.abs(draggedBorder.position.y - comment.position.y);

  comment.scale.set(scaleChange * 2, scaleChange * 2, 1);

  // Update the positions of all borders around the comment
  clearResizeBorders();
  showResizeBorders(comment);
};

// Function to clear resize borders
const clearResizeBorders = () => {
  resizeBorders.forEach(border => scene.remove(border));
  resizeBorders = [];
};

// Function to update drag controls for comments and borders
const updateDragControls = () => {
  if (dragControls) dragControls.dispose(); // Remove previous drag controls

  dragControls = new DragControls([...comments, ...resizeBorders], camera, renderer.domElement);
  dragControls.addEventListener('dragstart', (event) => {
    if (event.object.userData.isResizeHandle) {
      event.object.onDrag(event.object); // Trigger resize
    } else {
      controls.enabled = false;
    }
  });
  dragControls.addEventListener('dragend', () => controls.enabled = true);

    // Emit the position of the dragged comment for real-time collaboration
    dragControls.addEventListener('drag', (event) => {
    const draggedComment = event.object;
    const position = draggedComment.position.clone();

    // Emit the drag event with the comment's timestamp (to identify) and new position
    socket.emit('moveComment', {
      timestamp: draggedComment.userData.timestamp,
      position: { x: position.x, y: position.y, z: position.z },
    });

    render(); // Ensure scene re-renders
  });
};

socket.on("moveComment", (data) => {
  const { timestamp, position } = data;

  // Find the comment with the matching timestamp
  const commentToMove = comments.find((c) => c.userData.timestamp === timestamp);

  if (commentToMove) {
    // Update its position to match the incoming data
    commentToMove.position.set(position.x, position.y, position.z);
    render(); // Ensure the scene re-renders to reflect changes
  }
});

const addCommentToScene = (text, timestamp, position = { x: 0, y: 1, z: 0 }) => {
  const commentText = new SpriteText(text);
  commentText.color = "black";
  commentText.fontSize = 200;
  commentText.scale.set(0.5, 0.5, 0.5);
  commentText.position.set(position.x, position.y, position.z);
  commentText.userData = { timestamp };
  scene.add(commentText);
  comments.push(commentText);
  return commentText;
};

// Socket listeners for real-time updates
socket.on("addComment", (data) => {
  console.log("Received new comment:", data);
  const { text, timestamp, position } = data;
  const commentText = addCommentToScene(text, timestamp, position);
  commentsOBJ.value.push({ text, timestamp, object: commentText });
  comments.push(commentText);
});

socket.on("deleteComment", (data) => {
  deleteComment(data.index);
});

// Function to broadcast object movement
function broadcastObjectMovement(data) {
  socket.emit('objectMoved', {
    id: data.id,
    position: {
      x: data.position.x,
      y: data.position.y,
      z: data.position.z,
    },
    rotation: {
      _x: data.rotation.x,
      _y: data.rotation.y,
      _z: data.rotation.z,
    },
  });
}

function findObjectById(id) {
  let foundObject = null;
  scene.traverse((child) => {
    if (child.userData && child.userData.id === id) {
      foundObject = child;
    }
  });
  return foundObject;
}

// Function to handle incoming object movement
function handleObjectMovement(data) {
  console.log("Trying to find object with ID:", data.id);
  console.log("Current objects in the scene:");
  scene.children.forEach((child) => {
    console.log("Object ID:", child.userData.id, "Position:", child.position);
  });

  const object = findObjectById(data.id);
  if (!object) {
    console.warn(`Object with ID ${data.id} not found in the scene!`);
    return;
  }

  console.log("Object found:", object);
  // Log the current object position before applying the update
  console.log("Before movement:", object.position);

  // Apply the new position and rotation
  object.position.set(data.position.x, data.position.y, data.position.z);
  object.rotation.set(data.rotation._x, data.rotation._y, data.rotation._z);

  // Log the new object position to verify the change
  console.log("After movement:", object.position);

  // Ensure the controls are updated if necessary
  controls.update();
}

// Listen for object movement events from the server
socket.on('objectMoved', (data) => {
  console.log('Received objectMoved data:', data); // Add log to confirm receipt
  handleObjectMovement(data); // Make sure this is being called
});

// // Listen for any event
// socket.onAny((eventName, ...args) => {
//   console.log(`Received event: ${eventName}`, args);
// });

// Function to broadcast environment change
const setEnvMap = () => {
  const rgbeLoader = new RGBELoader();
  rgbeLoader.loadAsync("/public/files/hdr2/5.hdr").then((texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = texture;
    scene.environment = texture;
    socket.emit('envMapChanged'); // Broadcast environment change
  });
};

// Listen for environment change events from the server
socket.on('envMapChanged', () => {
  setEnvMap();
});

// Function to broadcast a new text annotation
function broadcastTextAnnotation(annotationData) {
  socket.emit('addTextAnnotation', annotationData);
}

// Listen for text annotation events
socket.on('addTextAnnotation', (data) => {
  addMarkers(scene.children[4], data.position, data.position, 3, data.text, 1);
});

const setupRenderer = async () => {
  let domElement;
  if (useSdk.value) {
    // If using SDK renderer
    const binaryContent = await fetch('/mask.bin').then((res) => res.arrayBuffer());
    const uint8Array = new Uint8Array(binaryContent);
    const kniter = new ZXKJ.Knit(uint8Array);

    zxRenderer = new ZXKJ.Renderer({
      three: THREE,
      knit: kniter,
      deg: 60,
      focus: 7,
      layout: { x: 10, y: 5 },
      size: { width: 7200, height: 8100 },
      resiton: { width: 5120, height: 2880 },
      viewMode: 0,
    });

    zxRenderer.mixRenderer.setClearColor("#000");
    canvasDom.value.innerHTML = ''; // Clear existing renderer
    canvasDom.value.appendChild(zxRenderer.domElement);
    domElement = zxRenderer.domElement; // Use SDK domElement
  } else {
    // If using default THREE.js renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor("#000");
    canvasDom.value.innerHTML = ''; // Clear existing renderer
    canvasDom.value.appendChild(renderer.domElement);
    domElement = renderer.domElement; // Use default THREE.js domElement
  }

  // Initialize OrbitControls only once, using the correct DOM element
  controls = new OrbitControls(camera, domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.1;
  controls.update();

  // Update the `domElement` for drag and transform controls
  initDragControls(domElement);
  updateDragControls();
  return domElement;
};

const render = () => {
  controls && controls.update();
  if (useSdk.value) {
    zxRenderer.render(scene, camera);
  } else {
    renderer.render(scene, camera);
  }
  requestAnimationFrame(render);
};

const toggleRenderer = async () => {
  useSdk.value = !useSdk.value; // Switch rendering mode
  await setupRenderer(); // Re-initialize renderer
  render(); // Start rendering
};

onMounted(async () => {

  await setupRenderer();
  render();

  const domElement = useSdk.value ? zxRenderer.domElement : renderer.domElement;

  canvasDom.value.appendChild(domElement);
  if(useSdk.value) {
    zxRenderer.mixRenderer.setClearColor("#000");
  } else {
    renderer.setClearColor("#000");
  }
  // zxRenderer.mixRenderer.setClearColor("#000");
  scene.background = new THREE.Color("#ccc");
  scene.environment = new THREE.Color("#ccc");
  socket.on('objectMoved', handleObjectMovement);
  render();

  //controls = new OrbitControls(camera, domElement);
  // controls.update();

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({ color: 0xff0000 }); // Red color for visibility
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(-2, -2.2, 0); 
  cube.userData.id = "testCube"; 
  scene.add(cube);
  objects.push(cube);
  //initDragControls(cube);

  const loader = new OBJLoader();
  loader.load("../public/model/computer.obj", (obj) => {
    obj.scale.set(0.01, 0.01, 0.01);
    obj.rotateY(4.2);
    obj.position.set(1.5, -1, 0);
    obj.userData.id = "computerModel";
    scene.add(obj);
    objects.push(obj);

    // Initialize dragging for collaboration
    // initDragControls(obj);
  });

  const fbxLoader = new FBXLoader();
fbxLoader.load("/public/model/monitor2.fbx", (obj) => {
  obj.scale.set(0.1, 0.1, 0.1);
  obj.position.set(-1.5, -1, 0);
  obj.rotateY(-0.5);
  let index = 0;
  // Traverse through all child meshes to assign unique IDs
  obj.traverse((child) => {
    if (child.isMesh) {
      console.log('index', index);
      // Assign a unique ID to each part based on its name or index
      child.userData.id = `monitorModel_part_${index}`;
      // Add each part to the objects list for DragControls
      objects.push(child);
      index++;
    }
  });

  // Add the full model to the scene
  scene.add(obj);

  // Initialize dragging for all parts within the FBX
  // initDragControls();
});

  // Additional lights (no changes)
  const light1 = new THREE.DirectionalLight("#fff", 0.8);
  light1.position.set(0, 0, 50);
  scene.add(light1);
  const light2 = new THREE.DirectionalLight("#fff", 0.5);
  light2.position.set(0, 0, -10);
  scene.add(light2);
  const light3 = new THREE.DirectionalLight("#fff", 0.5);
  light3.position.set(0, 10, 0);
  scene.add(light3);
  const light4 = new THREE.DirectionalLight("#fff", 0.5);
  light4.position.set(0, -10, 0);
  scene.add(light4);
});


function initDragControls(domElement) {
  // Initialize TransformControls
  const transformControls = new TransformControls(camera, domElement);
  scene.add(transformControls);

  // Initialize DragControls for all objects in the scene
  const dragControls = new DragControls(objects, camera, domElement);

  // Attach the object to TransformControls when hover starts
  dragControls.addEventListener("hoveron", (event) => {
    transformControls.attach(event.object);
  });

  // Detach the object when the mouse is no longer hovering
  dragControls.addEventListener("hoveroff", () => {
    transformControls.detach();
  });

  // Disable OrbitControls while dragging
  dragControls.addEventListener("dragstart", () => {
    controls.enabled = false;
  });

  // Re-enable OrbitControls after dragging ends
  dragControls.addEventListener("dragend", () => {
    controls.enabled = true;
  });

  // Update object movement during dragging
  dragControls.addEventListener("drag", (event) => {
    const draggedObject = event.object;

    // Capture the current position and rotation
    const currentPosition = draggedObject.position.clone();
    const currentRotation = draggedObject.rotation.clone();

    // Broadcast the object's new position and rotation
    broadcastObjectMovement({
      id: draggedObject.userData.id,
      position: currentPosition,
      rotation: currentRotation,
    });

    // Re-render the scene to reflect changes
    render();
  });

  // Manage dragging behavior with TransformControls
  transformControls.addEventListener('dragging-changed', (event) => {
    controls.enabled = !event.value;
  });
}

// Handling text input for annotation (unchanged)
const onEnter = () => {
  if (inputMessage.value) {
    // Add text annotation
    const annotationData = {
      position: startPosition,
      text: inputMessage.value,
    };
    addMarkers(scene.children[4], startPosition, startPosition, 3, inputMessage.value, 1);

    // Broadcast the annotation
    broadcastTextAnnotation(annotationData);

    // Clear and hide input box
    inputMessage.value = "";
    inputShow.value = false;
  }
};

// AddMarkers function (unchanged)
const addMarkers = (
  group,
  startPosition,
  endPosition,
  multiple,
  text,
  num = 1
) => {
  // Your existing implementation for markers remains intact
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array([
    startPosition.x,
    startPosition.y,
    startPosition.z,
    endPosition.x * multiple,
    endPosition.y * multiple + 1,
    endPosition.z * multiple,
  ]);

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const material = new THREE.LineBasicMaterial({ vertexColors: true });
  const colors = new Float32Array([0, 0, 0, 0, 0, 0]);
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const line = new THREE.Line(geometry, material);
  scene.add(line);

  const myText = new SpriteText(text);
  myText.color = "black";
  myText.fontSize = 200;
  myText.scale.set(0.5, 0.5, 0.5);
  myText.position.set(
    endPosition.x * multiple,
    endPosition.y * multiple + 1,
    endPosition.z * multiple
  );
  scene.add(myText);

  const texture = new THREE.TextureLoader().load(
    "/public/files/images/atar.png"
  );

  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture }));
  sprite.scale.set(1, 1, 1);
  sprite.position.set(
    endPosition.x * multiple - 0.1,
    endPosition.y * multiple + 1.1,
    endPosition.z * multiple - 0.4
  );
  scene.add(sprite);
};

// Window resize event (unchanged)
addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
</script>

<style type="text/css">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.home {
  display: flex;
  .canvas-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
.buttonContainer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  .button {
    width: 100px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon {
      width: 4em;
      height: 4em;
      vertical-align: -0.15em;
      fill: #fff;
      overflow: hidden;
    }

    .title {
      color: #fff;
    }
  }
}
.inputBox {
  margin: 113px 450px;
}

.toggle-terminal-button {
  position: fixed;
  top: 10px;
  left: 10px; /* Move to top left */
  background-color: #4a4a4a;
  color: #fff;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  z-index: 1000;
}

.comment-terminal {
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  height: 100%;
  background-color: #f5f5f5;
  border-left: 1px solid #ccc;
  overflow-y: auto;
  padding: 10px;
}

.terminal-header {
  text-align: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

.terminal-content ul {
  list-style: none;
}

.comment-list {
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}

.comment-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.timestamp {
  font-size: 0.8em;
  color: #666;
}

.delete-button {
  background-color: #ff4444;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  margin-left: 10px;
}
</style>