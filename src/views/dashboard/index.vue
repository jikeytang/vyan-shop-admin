<template>
  <app-view class="app-dashboard">
    <div class="account-info">
      <div class="media-body">
        <h4 class="mb-5">
          <i class="fa fa-user-o" aria-hidden="true" /> 欢迎您，<span>二零三</span><strong>系统管理员</strong>
        </h4>
        <div>
          <i class="icon icon-color wb-bell" aria-hidden="true" /> 这是您第<span>27101</span>次登录，上次登录日期：<span>2019-03-30 08:45:53</span>。
        </div>
      </div>
    </div>

    <div class="app-total-tab">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="total-frame">
            <div class="total-title">今日订单总数</div>
            <div class="total-value">200</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="total-frame">
            <div class="total-title">今日销售总额</div>
            <div class="total-value">￥5000.00</div>
          </div>
        </el-col>
        <el-col class="last-num" :span="8">
          <div class="total-frame">
            <div class="total-title">昨日销售总额</div>
            <div class="total-value">￥5000.00</div>
          </div>
        </el-col>
      </el-row>
    </div>

    <el-row class="app-chart-model" :gutter="20">
      <div class="layout-title">图表展示</div>
      <el-col :span="8">
        <div class="chart-wrapper">
          <bar-chart />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col>
      <el-col class="last-chart" :span="8">
        <div class="chart-wrapper">
          <line-chart />
        </div>
      </el-col>
    </el-row>

    <div class="un-handle-layout">
      <div class="layout-title">待处理事务</div>
      <div class="un-handle-content">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">待付款订单</span> <span style="float: right" class="color-danger">(10)</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">已完成订单</span> <span style="float: right" class="color-danger">(10)</span>
            </div>
          </el-col>
          <el-col class="last-item" :span="8">
            <div class="un-handle-item">
              <span class="font-medium">待确认收货订单</span> <span style="float: right" class="color-danger">(10)</span>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">待发货订单</span> <span style="float: right" class="color-danger">(10)</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">新缺货登记</span> <span style="float: right" class="color-danger">(10)</span>
            </div>
          </el-col>
          <el-col class="last-item" :span="8">
            <div class="un-handle-item">
              <span class="font-medium">待处理退款申请</span> <span style="float: right" class="color-danger">(10)</span>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">已发货订单</span> <span style="float: right" class="color-danger">(10)</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="un-handle-item">
              <span class="font-medium">待处理退货订单</span> <span style="float: right" class="color-danger">(10)</span>
            </div>
          </el-col>
          <el-col class="last-item" :span="8">
            <div class="un-handle-item">
              <span class="font-medium">广告位即将到期</span> <span style="float: right" class="color-danger">(10)</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

  </app-view>
</template>

<script>
// import { str2Date } from '@/utils/date'
import BarChart from './pages/BarChart'
import PieChart from './pages/PieChart'
import LineChart from './pages/LineChart'

export default {
  name: 'Dashboard',
  components: {
    BarChart,
    PieChart,
    LineChart
  },
  data () {
    return {
      orderCountDate: '',
      loading: false,
      dataEmpty: false
    }
  },
  created () {
    this.initOrderCountDate()
  },
  methods: {
    handleDateChange () {
      this.getData()
    },
    initOrderCountDate () {
      const start = new Date()
      start.setFullYear(2018)
      start.setMonth(10)
      start.setDate(1)
      const end = new Date()
      end.setTime(start.getTime() + 1000 * 60 * 60 * 24 * 7)
      this.orderCountDate = [start, end]
    }
  }
}
</script>

<style lang="scss" scoped>
.account-info {
  padding:0 15px 15px;
  // border-bottom: 1px solid #e5e5e5;
  margin-bottom: 15px;
}
.total-layout{
  margin-top:20px;
}
.total-frame{
  border-right:1px solid #ebeef5;
  height:100px;
  margin-bottom: 10px;
  text-align:center;
  .total-title{
    font-size:16px;
    color:#909399;
    padding-top:20px;
  }
  .total-value{
    position:relative;
    font-size:18px;
    color:#606266;
    padding-top:10px;
  }
}
.last-num{
  .total-frame{
    border-right:0;
  }
}
.total-icon{
  color:#409eff;
  width:60px;
  height:60px;
}
.app-chart-model{
  .layout-title{
    margin-bottom: 20px;
  }
}
.layout-title{
  color:#606266;
  padding:15px 20px;
  border-bottom:1px solid #ebeef5;
  font-weight:bold;
}
.un-handle-content{
  padding:20px 40px;
}
.un-handle-item{
  border-right:1px solid #dcdfe6;
  padding:10px;
}
.last-item{
  .un-handle-item{
    border-right:0;
  }
}
.overview-layout{
  margin-top:20px;
}
.overview-item-value{
  font-size:24px;
  text-align:center;
}
.overview-item-title{
  margin-top:10px;
  text-align:center;
}
.out-border{
  border:1px solid #dcdfe6;
}
.statistics-layout{
  margin-top:20px;
  border:1px solid #dcdfe6;
}
.mine-layout{
  position:absolute;
  right:140px;
  top:107px;
  width:250px;
  height:235px;
}
.address-content{
  padding:20px;
  font-size:18px
}
.chart-wrapper {
  padding: 16px 16px 0;
  margin-bottom: 32px;
  border-right:1px solid #ebeef5;
}
.last-chart{
  .chart-wrapper{
    border-right:0;
  }
}
</style>

