<template>
  <div class="app-system-setting app-system-content">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="网站名称">
        <el-input v-model="form.name" placeholder="请输入网站简称" />
      </el-form-item>
      <el-form-item label="网站标题">
        <el-input v-model="form.title" placeholder="请输入浏览器的标题栏" />
      </el-form-item>
      <el-form-item label="网站描述">
        <el-input v-model="form.description" />
      </el-form-item>
      <el-form-item label="网站关键字">
        <el-input v-model="form.keywords" />
      </el-form-item>
      <el-form-item label="网站Logo">
        <el-input v-model="form.logo" />
      </el-form-item>
      <el-form-item label="版权信息">
        <el-input v-model="form.copyright" />
      </el-form-item>
      <el-form-item label="客服电话">
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="客服QQ">
        <el-input v-model="form.qq" />
      </el-form-item>
      <el-form-item label="客服邮件">
        <el-input v-model="form.email" />
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
