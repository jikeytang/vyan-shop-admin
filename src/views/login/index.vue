<template>
  <div class="login-container">
    <el-form v-if="showDialog" ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">
          <span>商城管理系统</span>
          <span class="close" @click="close"><i class="el-icon-close" /></span>
        </h3>
      </div>

      <el-form-item prop="用户名">
        <span class="svg-container">
          <i class="el-icon-user-solid" />
        </span>
        <el-input ref="username" v-model="loginForm.username" placeholder="Username" type="text" auto-complete="on" />
      </el-form-item>

      <el-form-item prop="密码">
        <span class="svg-container">
          <i class="el-icon-lollipop" />
        </span>
        <el-input ref="password" v-model="loginForm.password" type="password" placeholder="Password" auto-complete="on" @keyup.enter.native="handleLogin" />
      </el-form-item>
      <el-button :loading="loading" type="primary" class="login-btn" @click.native.prevent="handleLogin">登录</el-button>

      <div class="tips">
        <span>登录区域外：点击<i>左键</i>切换视频，<b>右键</b>切换音乐开关，默认关闭</span>
      </div>

    </el-form>
    <login-mini :show-mini="showMini" @show-max-login="showLogin" />
    <full-video />

  </div>
</template>
<script>
import FullVideo from './pages/FullVideo'
import LoginMini from './pages/LoginMini'

export default {
  name: 'Login',
  components: {
    FullVideo,
    LoginMini
  },
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur' }],
        password: [{ required: true, trigger: 'blur' }]
      },
      passwordType: 'password',
      loading: false,
      showDialog: true,
      redirect: undefined,
      otherQuery: {},
      showMini: false
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  mounted () {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  methods: {
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getOtherQuery (query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    },
    close () {
      this.showDialog = false
      setTimeout(() => {
        this.showMini = true
      }, 80)
    },
    showLogin () {
      this.showDialog = true
      this.showMini = false
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;
@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}
/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
  .login-btn {
    width: 100%;
    margin-bottom: 30px;
    font-size: 18px;
    font-weight: normal;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  .login-form {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    width: 520px;
    max-width: 100%;
    padding: 0 35px 0;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 8px;
    z-index: 2;
    &:hover {
      box-shadow: 1px 2px 5px #999;
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 20px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
    i,b{
      margin:0 3px;
    }
    i{
      font-style:normal;
      color: #6c6;
    }
    b{
      color: #fc0;
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: #fff;
    vertical-align: middle;
    width: 15px;
    display: inline-block;
    font-size: 16px;
  }
  .title-container {
    position: relative;
    z-index: 3;
    .title {
      font-size: 32px;
      color: $light_gray;
      margin: 20px auto 30px auto;
      text-align: center;
      font-weight: normal;
      .close {
        position: absolute;
        top: -10px;
        right: -10px;
        cursor: pointer;
        transition: all 0.8s;
        transform: rotate(0deg);
        &:hover {
          transform: rotate(-1turn);
        }
      }
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }
  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
