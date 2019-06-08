<template>
  <app-view class="app-user">
    <el-form ref="form" class="app-user-form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="form.nickName" />
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.sex">
          <el-radio label="男" />
          <el-radio label="女" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="头像">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email" />
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
        name: 'admin',
        nickName: '杰克',
        sex: '男',
        delivery: false,
        type: [],
        email: 'jikeytang@gmail.com',
        desc: ''
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
