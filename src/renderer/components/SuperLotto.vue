<script setup>
// eslint-disable-next-line no-unused-vars
import LotteryDisplay from './LotteryDisplay.vue'
// eslint-disable-next-line no-unused-vars
import Sidebar from './Sidebar.vue'

import Axios from 'axios'
import { ref } from 'vue'

const lotteryDisplayData = ref({
  title: '大乐透',
  redNumberTotalCount: 35,
  blueNumberTotalCount: 12,
  redNumberCount: 5,
  blueNumberCount: 2,
  lastLotteryDate: '',
  lastLotteryNumber: ''
})
async function getLastLottery () {
  const response = await Axios.get('https://webapi.sporttery.cn/gateway/lottery/getHistoryPageListV1.qry?gameNo=85&provinceId=0&pageSize=1&isVerify=1&pageNo=1')
  lotteryDisplayData.value.lastLotteryDate = response.data.value.lastPoolDraw.lotteryDrawTime
  lotteryDisplayData.value.lastLotteryNumber = response.data.value.lastPoolDraw.lotteryDrawResult
}
getLastLottery()
</script>


<template>
    <div class="page-container">
      <!-- 侧边栏 -->
      <Sidebar/>
  
      <!-- 主要内容 -->
      <div class="main-content">
        <LotteryDisplay  v-bind="lotteryDisplayData"/>
      </div>
    </div>
  </template>
  <style>
  .page-container {
    display: flex;
    flex-direction: row;
  }
  
  .main-content {
    flex: 1; /* 主要内容区域占满剩余宽度 */
    padding: 20px;
  }
  </style>
  