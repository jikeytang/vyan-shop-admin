<template>
  <app-view class="app-product">
    <app-filter>
      <template #query>
        <el-form :inline="true" class="product-form" :model="listQuery" label-width="140px" size="small" label-position="right">
          <el-form-item label="输入搜索">
            <el-input v-model="listQuery.keyword" placeholder="商品名称" />
          </el-form-item>
          <el-form-item label="商品货号">
            <el-input v-model="listQuery.productSn" placeholder="商品货号" />
          </el-form-item>
          <el-form-item label="商品分类">
            <el-cascader v-model="selectProductCateValue" clearable :options="productCateOptions" />
          </el-form-item>
          <el-form-item label="商品品牌">
            <el-select v-model="listQuery.brandId" placeholder="请选择品牌" clearable>
              <el-option v-for="item in brandOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
          <el-form-item label="上架状态">
            <el-select v-model="listQuery.publishStatus" placeholder="全部" clearable>
              <el-option v-for="item in publishStatusOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
          <el-form-item label="审核状态">
            <el-select v-model="listQuery.verifyStatus" placeholder="全部" clearable>
              <el-option v-for="item in verifyStatusOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </el-form>
      </template>
      <template #left>
        <el-button class="btn-reset" icon="el-icon-plus" type="text" size="small" @click="addProduct()">添加商品</el-button>
      </template>
      <template #right>
        <el-button class="btn-reset" icon="el-icon-back" size="small">重置</el-button>
        <el-button type="primary" icon="el-icon-search" size="small" @click="handleSearch()">搜索</el-button>
      </template>
    </app-filter>

    <div class="table-container">
      <el-table ref="productTable" v-loading="loading" class="app-table" :data="list" style="width: 100%" border @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="60" align="center" />
        <el-table-column label="编号" width="100" align="center">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="商品图片" width="120" align="center">
          <template slot-scope="scope">
            <el-popover placement="right" title="" trigger="hover">
              <img :src="scope.row.pic"> <img slot="reference" :src="scope.row.pic" :alt="scope.row.pic" style="max-height: 50px;max-width: 130px">
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="商品名称" align="center">
          <template slot-scope="scope">
            <p>{{ scope.row.name }}</p>
            <p>品牌：{{ scope.row.brandName }}</p>
          </template>
        </el-table-column>
        <el-table-column label="价格/货号" width="120" align="center">
          <template slot-scope="scope">
            <p>价格：￥{{ scope.row.price }}</p>
            <p>货号：{{ scope.row.productSn }}</p>
          </template>
        </el-table-column>
        <el-table-column label="排序" width="100" align="center">
          <template slot-scope="scope">{{ scope.row.sort }}</template>
        </el-table-column>
        <el-table-column label="销量" width="100" align="center">
          <template slot-scope="scope">{{ scope.row.sale }}</template>
        </el-table-column>
        <el-table-column label="操作" width="160" align="center">
          <template slot-scope="scope">
            <div class="handle-icon">
              <el-tooltip placement="top">
                <div slot="content">预览</div>
                <i class="el-icon-document" @click="showProduct(scope.$index, scope.row)" />
              </el-tooltip>
              <el-tooltip placement="top">
                <div slot="content">编辑</div>
                <i class="el-icon-edit" @click="updateProduct(scope.$index, scope.row)" />
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
import { fetchList } from '@/api/product'

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
      fetchList(this.listQuery).then(res => {
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
    showProduct () {

    },
    updateProduct () {

    },
    handleDelete () {

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
</style>
