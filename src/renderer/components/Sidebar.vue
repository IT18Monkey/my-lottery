<template>
  <div class="sidebar">
    <div class="lottery-type">
      <router-link to="/lottery/super">
        <h2>大乐透</h2>
      </router-link>
    </div>
    <div class="lottery-type">
      <router-link to="/lottery/union">
        <h2>双色球</h2>
      </router-link>
    </div>
    <!-- 可以添加其他彩票类型的导航项 -->
  </div>
</template>
<style>
.sidebar {
  flex: 0 0 100px;
  /* 固定宽度的侧边栏 */
  background-color: #f0f0f0;
  padding: 20px;
}

.lottery-type {
  margin-bottom: 20px;
}


h2 {
  cursor: pointer;
  color: #333;
  text-decoration: underline;
}

h2:hover {
  color: #39a2db;
}
</style>