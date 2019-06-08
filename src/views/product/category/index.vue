<template>
  <app-view class="app-product-category">
    <app-filter>
      <template #left>
        <el-button class="btn-add" size="mini" type="text" icon="el-icon-plus" @click="addProductCate()">添加</el-button>
      </template>
    </app-filter>
    <div class="table-container">
      <el-table ref="productCateTable" v-loading="listLoading" class="app-table" style="width: 100%" :data="list" border>
        <el-table-column label="编号" width="100" align="center">
          <template slot-scope="scope">{{ scope.row.id || 1 }}</template>
        </el-table-column>
        <el-table-column label="编号" width="100" align="center">
          <template slot-scope="scope">{{ scope.row.id || 1 }}</template>
        </el-table-column>
        <el-table-column label="分类名称" align="center">
          <template slot-scope="scope">{{ scope.row.label }}</template>
        </el-table-column>
        <el-table-column label="级别" width="100" align="center">
          <template slot-scope="scope">{{ scope.row.level | levelFilter }}</template>
        </el-table-column>
        <el-table-column label="商品数量" width="100" align="center">
          <template slot-scope="scope">{{ scope.row.productCount }}</template>
        </el-table-column>
        <el-table-column label="数量单位" width="100" align="center">
          <template slot-scope="scope">{{ scope.row.productUnit }}</template>
        </el-table-column>
        <el-table-column label="导航栏" width="100" align="center">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.navStatus" :active-value="1" :inactive-value="0" @change="handleNavStatusChange(scope.$index, scope.row)" />
          </template>
        </el-table-column>
        <el-table-column label="是否显示" width="100" align="center">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.showStatus" :active-value="1" :inactive-value="0" @change="handleShowStatusChange(scope.$index, scope.row)" />
          </template>
        </el-table-column>
        <el-table-column label="排序" width="100" align="center">
          <template slot-scope="scope">{{ scope.row.sort || 1 }}</template>
        </el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template slot-scope="scope">
            <div class="handle-icon">
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
  </app-view>
</template>

<script>
import { fetchList } from '@/api/product/category'

export default {
  name: 'ProductCategory',
  filters: {
    levelFilter (value) {
      if (value === 0) {
        return '一级'
      } else if (value === 1) {
        return '二级'
      }
    },
    disableNextLevel (value) {
      if (value === 0) {
        return false
      } else {
        return true
      }
    }
  },
  data () {
    return {
      list: null,
      total: null,
      listLoading: true,
      listQuery: {
        pageNum: 1,
        pageSize: 5
      },
      parentId: 0
    }
  },
  created () {
    this.resetParentId()
    this.getList()
  },
  methods: {
    resetParentId () {
      if (this.$route.query.parentId != null) {
        this.parentId = this.$route.query.parentId
      } else {
        this.parentId = 0
      }
    },
    addProductCate () {
      this.$router.push('/product/category/add')
    },
    getList () {
      this.listLoading = true
      fetchList(this.parentId, this.listQuery).then(response => {
        this.listLoading = false
        this.list = response.data.list
        this.total = response.data.total
      }).catch(_ => {
        this.listLoading = false
      })
    },
    handleUpdate () {

    },
    handleDelete () {

    }
  }
}
</script>

<style lang="scss" scoped>
.operate-container{
  padding-bottom: 10px;
}
</style>
