<template>
  <div>
    <div class="app-container">
      <el-col :span="12">
        <img :src="img_404" alt="404" class="img-style">
      </el-col>
      <el-col :span="12">
        <div style="margin-left: 100px;margin-top: 60px">
          <h1 class="color-main">OOPS!</h1>
          <h2 style="color: #606266">很抱歉，页面它迷路了！</h2>
          <el-button style="margin-top: 20px" type="primary" round @click="handleGoMain">返回首页</el-button>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
import img_404 from '@/assets/images/404.gif'

export default {
  name: 'Error404',
  data () {
    return {
      img_404
    }
  },
  methods: {
    handleGoMain () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container{
  width:80%;
  margin:120px auto;
}

.img-style{
  width:auto;
  height:auto;
  max-width:100%;
  max-height:100%;
}
</style>
