<template>
  <app-view class="app-common">
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
        <el-table-column label="网站名称" width="150" align="center">
          <template slot-scope="scope">{{ scope.row.siteName }}</template>
        </el-table-column>
        <el-table-column label="网站链接" align="center">
          <template slot-scope="scope">
            <a :href="scope.row.url" target="_blank">{{ scope.row.url }}</a>
          </template>
        </el-table-column>

        <el-table-column label="审核状态" width="120" align="center">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="联系人" width="220" align="center">
          <template slot-scope="scope">{{ scope.row.email }}</template>
        </el-table-column>
        <el-table-column label="更新时间" width="160" align="center">
          <template slot-scope="scope">{{ scope.row.createTime }}</template>
        </el-table-column>
        <el-table-column label="排列序号" width="120" align="center">
          <template slot-scope="scope">{{ scope.row.id }}</template>
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
    <!--
    <el-dialog title="编辑货品信息" :visible.sync="editSkuInfo.dialogVisible" width="40%">
      <span>商品货号：</span> <span>{{ editSkuInfo.productSn }}</span>
      <el-input v-model="editSkuInfo.keyword" placeholder="按sku编号搜索" size="small" style="width: 50%;margin-left: 20px">
        <el-button slot="append" icon="el-icon-search" @click="handleSearchEditSku" />
      </el-input>
      <el-table style="width: 100%;margin-top: 20px" :data="editSkuInfo.stockList" border>
        <el-table-column label="SKU编号" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.skuCode" />
          </template>
        </el-table-column>
        <el-table-column v-for="(item,index) in editSkuInfo.productAttr" :key="item.id" :label="item.name" align="center">
          <template slot-scope="scope">
            {{ getProductSkuSp(scope.row,index) }}
          </template>
        </el-table-column>
        <el-table-column label="销售价格" width="80" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.price" />
          </template>
        </el-table-column>
        <el-table-column label="商品库存" width="80" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.stock" />
          </template>
        </el-table-column>
        <el-table-column label="库存预警值" width="100" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.lowStock" />
          </template>
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editSkuInfo.dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleEditSkuConfirm">确 定</el-button>
      </span>
    </el-dialog>
    -->
  </app-view>
</template>

<script>
// import { fetchList, updateDeleteStatus, updateNewStatus, updateRecommendStatus, updatePublishStatus } from '@/api/product'
import { fetchList } from '@/api/common'

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
      brandOptions: [],
      publishStatusOptions: [{
        value: 1,
        label: '上架'
      }, {
        value: 0,
        label: '下架'
      }],
      verifyStatusOptions: [{
        value: 1,
        label: '审核通过'
      }, {
        value: 0,
        label: '未审核'
      }]
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.loading = true
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
</style>
