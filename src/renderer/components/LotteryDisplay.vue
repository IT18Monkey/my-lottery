<template>

  <div class="lottery-container">
    <el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark"><h1>{{title}}</h1></div></el-col>
</el-row>
<el-row>
  <el-col :span="24">
    <div class="grid-content bg-purple-dark">
    上期开奖：日期：{{ lastLotteryDate}} 号码：{{ lastLotteryNumber }}
    </div>
  </el-col>
</el-row>
    
    <!-- 第二行显示按钮 -->
    <div  class="lottery-numbers">
    
    </div>
    <el-button type="primary" @click="generateNumbers(1)" class="red-button">机选一注</el-button>
    <el-button type="primary" @click="generateNumbers(5)" class="red-button">机选五注</el-button>
       <!-- 第一行显示大乐透数字 -->
    <div v-for="numbers in numberArray" class="lottery-numbers">
      <div class="red-balls">
        <span v-for="number in numbers.redNumbers" class="ball red">{{ number }}</span>
      </div>
      <div class="blue-balls">
        <span v-for="number in numbers.blueNumbers" class="ball blue">{{ number }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    redNumberTotalCount: Number,
    blueNumberTotalCount: Number,
    redNumberCount: Number,
    blueNumberCount: Number,
    lastLotteryDate: String,
    lastLotteryNumber: String
  },
  data () {
    return {
      numberArray: []
    }
  },
  methods: {
    generateNumbers (count) {
      const redArray = Array.from({ length: this.redNumberTotalCount }, (_, index) => index + 1)
      const blueArray = Array.from({ length: this.blueNumberTotalCount }, (_, index) => index + 1)
      this.numberArray = []
      for (let i = 0; i < count; i++) {
        let redNumbers = redArray.sort(() => Math.random() - 0.5).slice(0, this.redNumberCount).sort((a, b) => (a - b))
        let blueNumbers = blueArray.sort(() => Math.random() - 0.5).slice(0, this.blueNumberCount).sort((a, b) => (a - b))
        this.numberArray.push({'redNumbers': redNumbers, 'blueNumbers': blueNumbers})
      }
    }
  },
  mounted () {
    // 在组件创建时生成一次数字
    this.generateNumbers(1)
  }
}
</script>

<style>
.lottery-container {
  /* display: flex; */
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.lottery-numbers {
  margin-top: 20px;
}

.red-balls, .blue-balls {
  display: inline-block;
  margin: 0 10px;
}

.ball {
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: #f00; /* 红球或蓝球的颜色 */
  color: #fff;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  margin-right: 5px;
}

.blue {
  background-color: #00f; /* 蓝球的颜色 */
}

.red-button {
  background-color: #39a2db;
  color: #fff;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
}
</style>
