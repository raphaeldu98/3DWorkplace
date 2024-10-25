import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
// 导入控制器，轨道控制器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// 导入模型解析器
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

class Base3d {
  constructor(selector, onFinish) {
    this.container = document.querySelector(selector);
    this.camera;
    this.scene;
    this.renderer;
    this.init();
  }

  init() {
    //   初始化场景
    this.initScene();
    // 初始化相机
    this.initCamera();

    // 初始化渲染器
    this.initRenderer();
    // 控制器
    // this.initControls();

    // 监听场景大小改变，调整渲染尺寸
    window.addEventListener("resize", this.onWindowResize.bind(this));
  }
  initScene() {
    this.scene = new THREE.Scene();
    this.setEnvMap("000");
  }
  initCamera() {
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.25,
      200
    );
    this.camera.position.set(-1.8, 0.6, 2.7);
  }
  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    // 设置屏幕像素比
    this.renderer.setPixelRatio(window.devicePixelRatio);
    // 渲染的尺寸大小
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    // 色调映射
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 3;
    this.container.appendChild(this.renderer.domElement);
  }
  setEnvMap(hdr) {
    new RGBELoader().setPath("./files/hdr2/").load(hdr + ".hdr", (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      this.scene.background = texture;
      this.scene.environment = texture;
    });
  }
  render() {
    this.renderer.render(this.scene, this.camera);
  }
  initControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
  }
  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    // this.render();
  }
}

export default Base3d;
