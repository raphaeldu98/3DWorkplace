<template>
  <div class="scene" id="scene"></div>
</template>

<script setup>
//导入relative路径的文件
import { ref, reactive, onMounted, defineComponent } from "vue";
import Base3D from "../utils/Base3D";
const data = reactive({
  base3D: {},
});

onMounted(() => {
  data.base3D = new Base3D("#scene");
  data.base3D.init();
  data.base3D.animate();
});
</script>
<style lang="less" scoped></style>
