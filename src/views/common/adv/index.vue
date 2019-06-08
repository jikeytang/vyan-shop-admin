<template>
  <app-view class="app-common-adv">
    <app-filter>
      <template #query>
        <el-form :inline="true" class="product-form" :model="listQuery" label-width="140px" size="small" label-position="right">
          <el-form-item label="网站名称">
            <el-input v-model="listQuery.keyword" placeholder="商品名称" />
          </el-form-item>
          <el-form-item label="网站链接">
            <el-input v-model="listQuery.productSn" placeholder="商品货号" />
          </el-form-item>
        </el-form>
      </template>
      <template #right>
        <el-button class="btn-reset" icon="el-icon-back" size="small">重置</el-button>
        <el-button type="primary" icon="el-icon-search" size="small" @click="handleSearch()">搜索</el-button>
      </template>
    </app-filter>

    <div class="table-container">
      <el-table ref="productTable" v-loading="loading" class="app-table" :data="list" style="width: 100%" border @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="60" align="center" />
        <el-table-column label="ID" width="150" align="center">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="标题" width="120" align="center">
          <template slot-scope="scope">
            <a :href="scope.row.url" target="_blank">{{ scope.row.title }}</a>
          </template>
        </el-table-column>

        <el-table-column label="图片" align="center">
          <template slot-scope="scope">
            <el-popover placement="right" title="" trigger="hover">
              <img :src="scope.row.img" style="max-width:700px">
              <a slot="reference" target="_blank" href="http://www.jing-ui.com" title="Banner图片由『静静』友情提供，点击前往">
                <img class="img" :src="scope.row.img" alt="" style="max-width: 230px">
              </a>
            </el-popover>
            
          </template>
        </el-table-column>
        <el-table-column label="操作" width="160" align="center">
          <template slot-scope="scope">
            <div class="handle-icon">
              <el-tooltip placement="top">
                <div slot="content">预览</div>
                <i class="el-icon-document" @click="handleShowProduct(scope.$index, scope.row)" />
              </el-tooltip>
              <el-tooltip placement="top">
                <div slot="content">编辑</div>
                <i class="el-icon-edit" @click="handleUpdateProduct(scope.$index, scope.row)" />
              </el-tooltip>
              <el-tooltip placement="top">
                <div slot="content">删除</div>
                <i class="el-icon-delete" @click="handleDelete(scope.$index, scope.row)" />
              </el-tooltip>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="pagination-container">
      <el-pagination background layout="total, sizes,prev, pager, next,jumper" :page-size="listQuery.pageSize" :page-sizes="[5,10,15]" :current-page.sync="listQuery.pageNum" :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
  </app-view>
</template>

<script>
import { fetchList } from '@/api/common/adv'

const defaultListQuery = {
  keyword: null,
  pageNum: 1,
  pageSize: 5,
  publishStatus: null,
  verifyStatus: null,
  productSn: null,
  productCategoryId: null,
  brandId: null
}

export default {
  name: 'ProductList',
  data () {
    return {
      listQuery: Object.assign({}, defaultListQuery),
      list: [],
      total: 0,
      loading: true,
      selectProductCateValue: null,
      multipleSelection: [],
      productCateOptions: [],
      brandOptions: []
    }
  },
  created () {
    debugger
    this.getList()
  },
  methods: {
    getList () {
      this.loading = true
      debugger
      fetchList().then(res => {
        this.loading = false
        this.list = res.data.list
        this.total = res.data.total
      }).catch(_ => {
        this.loading = false
      })
    },
    addProduct () {
      this.$router.push({ path: '/product/add' })
    },
    handleSearch () {

    },
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
.app-common-adv{
  .img{
    width:400px;
  }
}
</style>
