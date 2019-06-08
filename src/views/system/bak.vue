<template>
  <app-view class="app-bak">
    <div class="filter-container">
      <div class="filter-bar clearfix">
        <div class="btn-bar-plus">
          <el-button class="btn-reset" icon="el-icon-coin" size="small" @click="bak()">备份</el-button>
        </div>
      </div>
    </div>

    <div class="table-container">
      <el-table ref="productTable" v-loading="loading" class="app-table" :data="list" style="width: 100%" border @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="60" align="center" />
        <el-table-column label="ID" width="100" align="center">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="数据表" align="center">
          <template slot-scope="scope">{{ scope.row.table }}</template>
        </el-table-column>

        <el-table-column label="大小" align="center">
          <template slot-scope="scope">{{ scope.row.size }}</template>
        </el-table-column>
        <el-table-column label="编码类型" align="center">
          <template slot-scope="scope">{{ scope.row.charset }}</template>
        </el-table-column>
        <el-table-column label="引擎类型" align="center">
          <template slot-scope="scope">{{ scope.row.engine }}</template>
        </el-table-column>
        <el-table-column label="创建时间" align="center">
          <template slot-scope="scope">{{ scope.row.createdTime }}</template>
        </el-table-column>
      </el-table>
    </div>

    <div class="pagination-container">
      <el-pagination background layout="total, sizes,prev, pager, next,jumper" :page-size="listQuery.pageSize" :page-sizes="[5,10,15]" :current-page.sync="listQuery.pageNum" :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
  </app-view>
</template>

<script>

const defaultListQuery = {
  keyword: null,
  pageNum: 1,
  pageSize: 5
}

export default {
  name: 'ProductList',
  data () {
    return {
      listQuery: Object.assign({}, defaultListQuery),
      list: [
        {
          id: 0,
          table: 'tk_about',
          size: '0 Bytes',
          charset: 'utf8_general_ci',
          engine: 'MyISAM',
          createdTime: '2019-03-06 00:29:09'
        },
        {
          id: 0,
          table: 'tk_access',
          size: '0 Bytes',
          charset: 'utf8_general_ci',
          engine: 'MyISAM',
          createdTime: '2019-03-06 00:29:09'
        },
        {
          id: 0,
          table: 'tk_about',
          size: '0 Bytes',
          charset: 'utf8_general_ci',
          engine: 'MyISAM',
          createdTime: '2019-03-06 00:29:09'
        },
        {
          id: 0,
          table: 'tk_access',
          size: '0 Bytes',
          charset: 'utf8_general_ci',
          engine: 'MyISAM',
          createdTime: '2019-03-06 00:29:09'
        },
        {
          id: 0,
          table: 'tk_about',
          size: '0 Bytes',
          charset: 'utf8_general_ci',
          engine: 'MyISAM',
          createdTime: '2019-03-06 00:29:09'
        },
        {
          id: 0,
          table: 'tk_access',
          size: '0 Bytes',
          charset: 'utf8_general_ci',
          engine: 'MyISAM',
          createdTime: '2019-03-06 00:29:09'
        },
        {
          id: 0,
          table: 'tk_about',
          size: '0 Bytes',
          charset: 'utf8_general_ci',
          engine: 'MyISAM',
          createdTime: '2019-03-06 00:29:09'
        },
        {
          id: 0,
          table: 'tk_access',
          size: '0 Bytes',
          charset: 'utf8_general_ci',
          engine: 'MyISAM',
          createdTime: '2019-03-06 00:29:09'
        }
      ],
      total: 0,
      loading: true
    }
  },
  created () {
    setTimeout(() => {
      this.loading = false
    }, 200)
  },
  methods: {
    handleSelectionChange () {

    },
    handleSizeChange () {

    },
    handleCurrentChange () {

    }
  }
}
</script>

<style lang="scss">
.pagination-container{
  padding:20px 15px 30px;
  text-align:right;
}
.el-table--enable-row-transition .el-table__body td{
  line-height:4;
}
</style>
<style lang="scss" scoped>
.handle-icon{
  i{
    margin:0 5px;
    display:inline-block;
    cursor:pointer;
    color:#66b1ff;
    font-size:21px;
    &.el-icon-edit{
      color:green;
    }
    &.el-icon-delete{
      color:red;
    }
  }
}
</style>
