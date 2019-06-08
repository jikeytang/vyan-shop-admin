<template>
  <app-view class="app-user">
    <el-form ref="form" class="app-user-form" :model="form" label-width="120px">
      <el-form-item label="当前密码">
        <el-input v-model="form.password" show-password />
      </el-form-item>
      <el-form-item label="新密码">
        <el-input v-model="form.password1" show-password />
      </el-form-item>
      <el-form-item label="确认新密码">
        <el-input v-model="form.password2" show-password />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </app-view>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      form: {
        password: 'admin',
        password1: '杰克',
        password2: '男'
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
.app-user-form{
  width: 800px;
  margin:0 auto;
  padding-top: 20px;
}
</style>
