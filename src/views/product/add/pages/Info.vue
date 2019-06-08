<template>
  <div class="app-product-info">
    <el-form ref="productInfoForm" :model="value" :rules="rules" label-width="120px" size="small">
      <el-form-item label="商品分类" prop="productCategoryId">
        <el-cascader v-model="selectProductCateValue" :options="productCateOptions" />
      </el-form-item>
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="value.name" />
      </el-form-item>
      <el-form-item label="商品介绍">
        <el-input v-model="value.description" :auto-size="true" type="textarea" placeholder="请输入内容" />
      </el-form-item>
      <el-form-item label="商品货号">
        <el-input v-model="value.productSn" />
      </el-form-item>
      <el-form-item label="商品售价">
        <el-input v-model="value.price" />
      </el-form-item>
      <el-form-item label="市场价">
        <el-input v-model="value.originalPrice" />
      </el-form-item>
      <el-form-item label="商品库存">
        <el-input v-model="value.stock" />
      </el-form-item>
      <el-form-item label="计量单位">
        <el-input v-model="value.unit" />
      </el-form-item>
      <el-form-item label="商品重量">
        <el-input v-model="value.weight" style="width: 80px;" />
        <span style="margin-left: 20px">克</span>
      </el-form-item>
      <el-form-item label="排序">
        <el-input v-model="value.sort" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="medium" @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { fetchList, createProductCate } from '@/api/product/category'

export default {
  name: 'ProductInfo',
  props: {
    value: {
      type: Object,
      default: () => {}
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selectProductCateValue: [],
      productCateOptions: [],
      rules: {
        name: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
          {
            min: 2,
            max: 140,
            message: '长度在 2 到 140 个字符',
            trigger: 'blur'
          }
        ],
        subTitle: [
          { required: true, message: '请输入商品副标题', trigger: 'blur' }
        ],
        productCategoryId: [
          { required: true, message: '请选择商品分类', trigger: 'blur' }
        ],
        brandId: [
          { required: true, message: '请选择商品品牌', trigger: 'blur' }
        ],
        description: [
          { required: true, message: '请输入商品介绍', trigger: 'blur' }
        ],
        requiredProp: [
          { required: true, message: '该项为必填项', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.getCategory()
  },
  methods: {
    getCategory () {
      fetchList().then(res => {
        this.productCateOptions = res.data.list
      })
    },
    save () {
      createProductCate().then(res => {
        if (res.data.message === 'success') {
          this.$message({
            message: '新增成功',
            type: 'success',
            duration: 1000
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-product-info {
  padding-top: 20px;
}
</style>
