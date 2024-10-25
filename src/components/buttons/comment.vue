<template>
  <div class="commentContainer">
    <div class="box">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tianjiapizhu"></use>
      </svg>
      <div class="title">添加文字批注</div>
    </div>
    <div class="box">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-pizhu"></use>
      </svg>
      <div class="title">添加涂鸦批注</div>
    </div>

    <div class="box">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yuyin"></use>
      </svg>
      <div class="title">添加语音批注</div>
    </div>

    <div class="box">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-pizhushijiao"></use>
      </svg>
      <div class="title">定位到批注视角</div>
    </div>
  </div>
</template>

<script setup></script>
<style lang="less" scoped>
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.commentContainer {
  display: flex;
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 110px;
    border: 1px solid #ccc;
    border-radius: 1px;
    margin: 1px;
    cursor: pointer;
  }
}
</style>
