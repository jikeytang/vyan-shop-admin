<template>
  <div v-if="showMini" class="login-mini" @click="showLogin">
    <el-tooltip content="显示登录框" placement="top">
      <span class="txt">登</span>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: 'LoginMini',
  props: {
    showMini: {
      type: Boolean
    }
  },
  methods: {
    showLogin () {
      this.$emit('show-max-login')
    }
  }
}
</script>

<style lang="scss" scoped>
.login-mini {
  position: absolute;
  bottom: 50px;
  right: 50px;
  z-index: 5;
  .txt {
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: rgba(255, 255, 255, 0.3);
    color: #fff;
    font-size: 25px;
    border-radius: 50%;
    opacity: 0.6;
    display: block;
    cursor: pointer;
    animation: load 1s 1 linear;
    &:hover {
      opacity: 1;
    }
  }
}
@keyframes load {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.6);
  }
  100% {
    transform: scale(1);
  }
}
</style>

