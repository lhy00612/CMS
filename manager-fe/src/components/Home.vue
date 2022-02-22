<template>
  <div class="basic-layout">
    <!-- 导航栏 -->
    <div class="nav-side"></div>
    <!-- 右布局 -->
    <div class="content-right">
      <!-- 面包屑 -->
      <div class="nav-top">
        <div class="bread">面包屑</div>
        <div class="user">用户</div>
      </div>

      <div class="wrapper">
        <div class="main">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss">
.basic-layout {
  position: relative;
  .nav-side {
    position: fixed;
    width: 200px;
    height: 100vh;
    background-color: #001529;
    color: #fff;
    overflow: auto;
    transition: width 0.5s;
  }
  .content-right {
    margin-left: 200px;
    .nav-top {
      height: 50px;
      line-height: 50px;
      display: flex;
      /* 俩端对齐 */
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      padding: 0 20px;
    }
    .wrapper {
      background-color: #eef0f3;
      padding: 20px;
      height: calc(100vh - 50px);
      .main {
        background-color: #fff;
        height: 100%;
      }
    }
  }
}
</style>
