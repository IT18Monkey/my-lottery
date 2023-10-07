<script setup>
// eslint-disable-next-line no-unused-vars
import LotteryDisplay from './LotteryDisplay.vue'
// eslint-disable-next-line no-unused-vars
import Sidebar from './Sidebar.vue'
// import Axios from 'axios'
import { ref } from 'vue'

// eslint-disable-next-line no-unused-vars
const lotteryDisplayData = ref({
  title: '双色球',
  redNumberTotalCount: 33,
  blueNumberTotalCount: 16,
  redNumberCount: 6,
  blueNumberCount: 1,
  lastLotteryDate: '',
  lastLotteryNumber: ''
})
// async function getLastLottery () {
//   Axios.defaults.withCredentials = true
//   const response = await Axios.get('http://www.cwl.gov.cn/cwl_admin/front/cwlkj/search/kjxx/findDrawNotice?name=ssq&issueCount=1')
//   lotteryDisplayData.value.lastLotteryDate = response.data.result[0].date
//   lotteryDisplayData.value.lastLotteryNumber = response.data.result[0].red + response.data.result[0].blue
// }
// getLastLottery()
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
