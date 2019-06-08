<template>
  <div class="app-system-setting app-system-content">
    <el-form ref="form" :model="form" label-width="150px">
      <el-form-item label="SMTP服务器地址">
        <el-input v-model="form.name" placeholder="请输入网站简称" />
      </el-form-item>
      <el-form-item label="SMTP服务帐户名">
        <el-input v-model="form.title" placeholder="请输入浏览器的标题栏" />
      </el-form-item>
      <el-form-item label="SMTP服务密码">
        <el-input v-model="form.description" />
      </el-form-item>
      <el-form-item label="发信人邮件地址">
        <el-input v-model="form.description" />
      </el-form-item>
      <el-form-item label="SMTP 端口">
        <el-input v-model="form.description" />
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
