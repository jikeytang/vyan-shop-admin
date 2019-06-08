<template>
  <app-view class="app-product">
    <el-form ref="form" class="app-cache app-view-inner" :model="form" label-width="280px">
      <el-form-item label="清空所有系统缓存	">
        <el-button size="small" type="primary">清空</el-button>
      </el-form-item>
      <el-form-item label="清空文件缓存目录	">
        <el-button size="small" type="primary">清空</el-button>
      </el-form-item>
      <el-form-item label="清空数据目录">
        <el-button size="small" type="primary">清空</el-button>
      </el-form-item>
      <el-form-item label="清空模版缓存">
        <el-button size="small" type="primary">清空</el-button>
      </el-form-item>
      <el-form-item label="清空前台缓存">
        <el-button size="small" type="success">清空</el-button>
      </el-form-item>
      <el-form-item label="清空后台缓存">
        <el-button size="small" type="warning">清空</el-button>
      </el-form-item>
    </el-form>
  </app-view>
</template>

<script>

export default {
  name: 'Cache',
  data () {
    return {
      form: {
        name: ''
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
