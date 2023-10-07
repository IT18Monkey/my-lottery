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
  <el-container>
    <el-container>
   
        <!-- 侧边栏 -->
      <Sidebar/>
    
      <el-container>
        <el-main>    
           <LotteryDisplay  v-bind="lotteryDisplayData"/>
          </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
