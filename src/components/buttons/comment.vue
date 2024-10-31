<template>
  <a-modal
    v-model:visible="visible"
    title="批注"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <div>
      <label for="comment-input">请输入您的批注：</label>
      <textarea
        id="comment-input"
        v-model="newComment"
        rows="4"
        placeholder="添加您的批注..."
      ></textarea>
    </div>
    <div>
      <h4>已有批注：</h4>
      <ul>
        <li v-for="(comment, index) in comments" :key="index">
          <p>{{ comment }}</p>
        </li>
      </ul>
    </div>
  </a-modal>
</template>

<script setup>
import { ref, defineProps, watch } from "vue";

// In Comment.vue
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  existingComments: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['update:visible', 'add-comment']);

// Function to handle adding a new comment
const addComment = (position, text) => {
  emit('add-comment', { position, text });
};

const visible = ref(props.visible);
const newComment = ref("");
const comments = ref([...props.existingComments]);

// Handle the OK action
const handleOk = () => {
  if (newComment.value.trim()) {
    comments.value.push(newComment.value.trim());
    emit("add-comment", { objectId: props.objectId, comment: newComment.value.trim() });
    newComment.value = ""; // Clear the input
  }
  visible.value = false;
  emit("update:visible", visible.value);
};

// Handle the Cancel action
const handleCancel = () => {
  visible.value = false;
  emit("update:visible", visible.value);
};

// Watch for changes to visibility
watch(() => props.visible, (newVal) => {
  visible.value = newVal;
});
</script>