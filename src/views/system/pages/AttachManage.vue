<template>
  <div class="app-system-setting app-system-content">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="文件后缀">
        <el-input v-model="form.name" placeholder="请输入网站简称" />
      </el-form-item>
      <el-form-item label="图片后缀">
        <el-input v-model="form.title" placeholder="请输入浏览器的标题栏" />
      </el-form-item>
      <el-form-item label="上传大小">
        <el-input v-model="form.description" />
      </el-form-item>
      <el-form-item label="附件目录">
        <el-input v-model="form.keywords" />
      </el-form-item>
      <el-form-item label="图片水印">
        <el-input v-model="form.logo" />
      </el-form-item>
      <el-form-item label="水印位置">
        <el-input v-model="form.copyright" />
      </el-form-item>
      <el-form-item label="商品默认图">
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="头像默认图">
        <el-input v-model="form.qq" />
      </el-form-item>
      <el-form-item class="form-handle">
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import App from '@/config/app'

export default {
  name: 'TabPaneItems',
  data () {
    return {
      form: {
        ...App,
        phone: '13312343434',
        qq: '123456',
        email: 'jikeytang@gmail.com'
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
