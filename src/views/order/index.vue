<template>
  <app-view class="app-order">
    <app-filter>
      <template #query>
        <el-form :inline="true" class="product-form" :model="listQuery" size="small" label-width="140px" label-position="right">
          <el-form-item label="输入搜索">
            <el-input v-model="listQuery.orderSn" class="input-width" placeholder="订单编号" />
          </el-form-item>
          <el-form-item label="收货人">
            <el-input v-model="listQuery.receiverKeyword" class="input-width" placeholder="收货人姓名/手机号码" />
          </el-form-item>
          <el-form-item label="提交时间">
            <el-date-picker v-model="listQuery.createTime" class="input-width" value-format="yyyy-MM-dd" type="date" placeholder="请选择时间" />
          </el-form-item>
          <el-form-item label="订单状态">
            <el-select v-model="listQuery.status" class="input-width" placeholder="全部" clearable>
              <el-option v-for="item in statusOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
          <el-form-item label="订单分类">
            <el-select v-model="listQuery.orderType" class="input-width" placeholder="全部" clearable>
              <el-option v-for="item in orderTypeOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
          <el-form-item label="订单来源">
            <el-select v-model="listQuery.sourceType" class="input-width" placeholder="全部" clearable>
              <el-option v-for="item in sourceTypeOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </el-form>
      </template>
      <template #right>
        <el-button class="btn-reset" icon="el-icon-back" size="small">重置</el-button>
        <el-button type="primary" icon="el-icon-search" size="small" @click="handleResetSearch()">查询</el-button>
      </template>
    </app-filter>

    <div class="table-container">
      <el-table ref="orderTable" v-loading="listLoading" class="app-table" :data="list" style="width: 100%;" border @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="60" align="center" />
        <el-table-column label="编号" width="80" align="center">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="订单编号" width="180" align="center">
          <template slot-scope="scope">{{ scope.row.orderId }}</template>
        </el-table-column>
        <el-table-column label="提交时间" width="180" align="center">
          <template slot-scope="scope">{{ scope.row.createTime }}</template>
        </el-table-column>
        <el-table-column label="用户账号" align="center">
          <template slot-scope="scope">{{ scope.row.memberUsername }}</template>
        </el-table-column>
        <el-table-column label="订单金额" width="120" align="center">
          <template slot-scope="scope">￥{{ scope.row.totalAmount }}</template>
        </el-table-column>
        <el-table-column label="支付方式" width="120" align="center">
          <template slot-scope="scope">{{ scope.row.payType }}</template>
        </el-table-column>
        <el-table-column label="订单来源" width="120" align="center">
          <template slot-scope="scope">{{ scope.row.sourceType }}</template>
        </el-table-column>
        <el-table-column label="订单状态" width="120" align="center">
          <template slot-scope="scope">{{ scope.row.status }}</template>
        </el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template slot-scope="scope">
            <div class="handle-icon">
              <el-tooltip placement="top">
                <div slot="content">查看</div>
                <i class="el-icon-document" @click="showProduct(scope.$index, scope.row)" />
              </el-tooltip>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>

  </app-view>
</template>
<script>
import { fetchList } from '@/api/order'

const defaultListQuery = {
  pageNum: 1,
  pageSize: 10,
  orderSn: null,
  receiverKeyword: null,
  status: null,
  orderType: null,
  sourceType: null,
  createTime: null
}

export default {
  name: 'OrderList',
  data () {
    return {
      listQuery: Object.assign({}, defaultListQuery),
      listLoading: false,
      list: null,
      total: null,
      operateType: null,
      multipleSelection: [],
      closeOrder: {
        dialogVisible: false,
        content: null,
        orderIds: []
      },
      statusOptions: [
        {
          label: '待付款',
          value: 0
        },
        {
          label: '待发货',
          value: 1
        },
        {
          label: '已发货',
          value: 2
        },
        {
          label: '已完成',
          value: 3
        },
        {
          label: '已关闭',
          value: 4
        }
      ],
      orderTypeOptions: [
        {
          label: '正常订单',
          value: 0
        },
        {
          label: '秒杀订单',
          value: 1
        }
      ],
      sourceTypeOptions: [
        {
          label: 'PC订单',
          value: 0
        },
        {
          label: 'APP订单',
          value: 1
        }
      ],
      operateOptions: [
        {
          label: '批量发货',
          value: 1
        },
        {
          label: '关闭订单',
          value: 2
        },
        {
          label: '删除订单',
          value: 3
        }
      ],
      logisticsDialogVisible: false
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.loading = true
      fetchList(this.listQuery).then(res => {
        this.loading = false
        this.list = res.data.list
        this.total = res.data.total
      }).catch(_ => {
        this.loading = false
      })
    },
    handleSelectionChange () {

    }
  }
}
</script>
<style lang="scss" scoped></style>
