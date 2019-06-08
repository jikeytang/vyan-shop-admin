<template>
  <div class="form-container" shadow="never">
    <el-form ref="productCateFrom" :model="productCate" :rules="rules" label-width="150px">
      <el-form-item label="分类名称" prop="name">
        <el-input v-model="productCate.name" />
      </el-form-item>
      <el-form-item label="上级分类">
        <el-select v-model="productCate.parentId" placeholder="请选择分类">
          <el-option v-for="item in selectProductCateList" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="数量单位">
        <el-input v-model="productCate.productUnit" />
      </el-form-item>
      <el-form-item label="排序">
        <el-input v-model="productCate.sort" />
      </el-form-item>
      <el-form-item label="是否显示">
        <el-radio-group v-model="productCate.showStatus">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否显示在导航栏">
        <el-radio-group v-model="productCate.navStatus">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="分类图标">
        <single-upload v-model="productCate.icon" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleAddFilterAttr()">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { fetchList, createProductCate, updateProductCate, getProductCate } from '@/api/product/category'
import { getProductAttrInfo } from '@/api/product/attr'

const defaultProductCate = {
  description: '',
  icon: '',
  keywords: '',
  name: '',
  navStatus: 0,
  parentId: 0,
  productUnit: '',
  showStatus: 0,
  sort: 0,
  productAttributeIdList: []
}
export default {
  name: 'ProductCateDetail',
  filters: {
    filterLabelFilter (index) {
      if (index === 0) {
        return '筛选属性'
      } else {
        return ''
      }
    }
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      productCate: Object.assign({}, defaultProductCate),
      selectProductCateList: [],
      rules: {
        name: [
          { required: true, message: '请输入品牌名称', trigger: 'blur' },
          {
            min: 2,
            max: 140,
            message: '长度在 2 到 140 个字符',
            trigger: 'blur'
          }
        ]
      },
      filterAttrs: [],
      filterProductAttrList: [
        {
          value: []
        }
      ]
    }
  },
  created () {
    if (this.isEdit) {
      getProductCate(this.$route.query.id).then(response => {
        this.productCate = response.data
      })
      getProductAttrInfo(this.$route.query.id).then(response => {
        if (response.data != null && response.data.length > 0) {
          this.filterProductAttrList = []
          for (let i = 0; i < response.data.length; i++) {
            this.filterProductAttrList.push({
              key: Date.now() + i,
              value: [
                response.data[i].attributeCategoryId,
                response.data[i].attributeId
              ]
            })
          }
        }
      })
    } else {
      this.productCate = Object.assign({}, defaultProductCate)
    }
    this.getSelectProductCateList()
  },
  methods: {
    getSelectProductCateList () {
      fetchList(0, { pageSize: 100, pageNum: 1 }).then(response => {
        this.selectProductCateList = response.data.list
        this.selectProductCateList.unshift({ value: 0, label: '无上级分类' })
      })
    },
    onSubmit (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$confirm('是否提交数据', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            if (this.isEdit) {
              this.productCate.productAttributeIdList = this.getProductAttributeIdList()
              updateProductCate(this.$route.query.id, this.productCate).then(
                response => {
                  this.$message({
                    message: '修改成功',
                    type: 'success',
                    duration: 1000
                  })
                  this.$router.back()
                }
              )
            } else {
              this.productCate.productAttributeIdList = this.getProductAttributeIdList()
              createProductCate(this.productCate).then(response => {
                this.$refs[formName].resetFields()
                this.resetForm(formName)
                this.$message({
                  message: '提交成功',
                  type: 'success',
                  duration: 1000
                })
              })
            }
          })
        } else {
          this.$message({
            message: '验证失败',
            type: 'error',
            duration: 1000
          })
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
      this.productCate = Object.assign({}, defaultProductCate)
      this.getSelectProductCateList()
      this.filterProductAttrList = [
        {
          value: []
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
