<!-- 
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
     可以添加其他彩票类型的导航项
  </div>
</template>
 -->

<template>
  <el-aside class='aside' width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>抽奖功能</template>
        <el-menu-item-group>
          <router-link to="/lottery/super"> 
          <el-menu-item index="1-1">
            <!-- <router-link to="/lottery/super"> -->
              大乐透
            <!-- </router-link> -->
          </el-menu-item>
        </router-link>
        <router-link to="/lottery/union">
          <el-menu-item index="1-2">
              双色球
          </el-menu-item>
        </router-link>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>
<style>
.aside{
  height: 600px
}
</style>
