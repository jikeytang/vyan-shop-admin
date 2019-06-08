<template>
  <app-view class="app-exchange">
    <app-filter>
      <template #query>
        <el-form :inline="true" :model="listQuery" size="small" label-width="140px">
          <el-form-item label="输入搜索">
            <el-input v-model="listQuery.id" class="input-width" placeholder="服务单号" />
          </el-form-item>
          <el-form-item label="处理状态">
            <el-select v-model="listQuery.status" placeholder="全部" clearable class="input-width">
              <el-option v-for="item in statusOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
          <el-form-item label="申请时间">
            <el-date-picker v-model="listQuery.createTime" class="input-width" value-format="yyyy-MM-dd" type="date" placeholder="请选择时间" />
          </el-form-item>
          <el-form-item label="操作人员">
            <el-input v-model="listQuery.handleMan" class="input-width" placeholder="全部" />
          </el-form-item>
          <el-form-item label="处理时间">
            <el-date-picker v-model="listQuery.handleTime" class="input-width" value-format="yyyy-MM-dd" type="date" placeholder="请选择时间" />
          </el-form-item>
        </el-form>
      </template>
      <template #right>
        <el-button class="btn-reset" icon="el-icon-back" size="small">重置</el-button>
        <el-button type="primary" icon="el-icon-search" size="small" @click="handleSearchList()">查询</el-button>
      </template>
    </app-filter>

    <div class="table-container">
      <el-table ref="returnApplyTable" v-loading="listLoading" class="app-table" :data="list" style="width: 100%;" border @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="60" align="center" />
        <el-table-column label="服务单号" width="180" align="center">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="申请时间" width="180" align="center">
          <template slot-scope="scope">{{ scope.row.createTime }}</template>
        </el-table-column>
        <el-table-column label="用户账号" align="center">
          <template slot-scope="scope">{{ scope.row.memberUsername }}</template>
        </el-table-column>
        <el-table-column label="退款金额" width="180" align="center">
          <template slot-scope="scope">￥{{ scope.row.price }}</template>
        </el-table-column>
        <el-table-column label="申请状态" width="180" align="center">
          <template slot-scope="scope">{{ scope.row.status }}</template>
        </el-table-column>
        <el-table-column label="处理时间" width="180" align="center">
          <template slot-scope="scope">{{ scope.row.handleTime }}</template>
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <div class="handle-icon">
              <el-tooltip placement="top">
                <div slot="content">查看</div>
                <i class="el-icon-document" @click="handleViewDetail(scope.$index, scope.row)" />
              </el-tooltip>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination-container">
      <el-pagination background layout="total, sizes,prev, pager, next,jumper" :current-page.sync="listQuery.pageNum" :page-size="listQuery.pageSize" :page-sizes="[5,10,15]" :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
  </app-view>
</template>
<script>
import { fetchList } from '@/api/order/exchange'

const defaultListQuery = {
  pageNum: 1,
  pageSize: 10,
  id: null,
  receiverKeyword: null,
  status: null,
  createTime: null,
  handleMan: null,
  handleTime: null
}

export default {
  name: 'ReturnApplyList',
  data () {
    return {
      listQuery: Object.assign({}, defaultListQuery),
      statusOptions: {},
      list: null,
      total: null,
      listLoading: false,
      multipleSelection: [],
      operateType: 1,
      operateOptions: [
        {
          label: '批量删除',
          value: 1
        }
      ]
    }
  },
  created () {
    this.getList()
  },
  methods: {
    handleSelectionChange (val) {
    },
    handleResetSearch () {
    },
    handleSearchList () {
    },
    handleViewDetail (index, row) {
    },
    handleBatchOperate () {
    },
    handleSizeChange (val) {
    },
    handleCurrentChange (val) {
    },
    getList () {
      this.listLoading = false
      fetchList(this.listQuery).then(response => {
        this.list = response.data.list
        this.total = response.data.total
      }).finally(_ => {
        this.isLoading = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.input-width{
  width:203px;
}
</style>

