<template>
  <div class="card">
    <div class="top">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiangshang"></use>
      </svg>
    </div>
    <div class="middle">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiangzuo"></use>
      </svg>
      <div class="round">控制转台</div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiangyou"></use>
      </svg>
    </div>
    <div class="bottom">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiangxia"></use>
      </svg>
    </div>
  </div>
</template>

<script setup></script>
<style lang="less" scoped>
.card {
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  .icon {
    width: 50px;
    height: 50px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .top {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .middle {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .bottom {
    display: flex;
    justify-content: center;
    height: 40px;
    align-items: center;
  }
}
</style>
