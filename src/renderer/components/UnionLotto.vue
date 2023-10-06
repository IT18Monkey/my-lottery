<script setup>
// eslint-disable-next-line no-unused-vars
import LotteryDisplay from './LotteryDisplay.vue'
// eslint-disable-next-line no-unused-vars
import Sidebar from './Sidebar.vue'
import Axios from 'axios'
import { ref } from 'vue'

const lotteryDisplayData = ref({
  title: '双色球',
  redNumberTotalCount: 33,
  blueNumberTotalCount: 16,
  redNumberCount: 6,
  blueNumberCount: 1,
  lastLotteryDate: '',
  lastLotteryNumber: ''
})
async function getLastLottery () {
  Axios.defaults.withCredentials = true
  const response = await Axios.get('http://www.cwl.gov.cn/cwl_admin/front/cwlkj/search/kjxx/findDrawNotice?name=ssq&issueCount=1')
  lotteryDisplayData.value.lastLotteryDate = response.data.result[0].date
  lotteryDisplayData.value.lastLotteryNumber = response.data.result[0].red + response.data.result[0].blue
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
  