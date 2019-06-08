<template>
  <div class="app-navbar clearfix">
    <el-header class="header">
      <router-link to="/" class="logo" :title="App.description">
        <img class="wyan-logo" :src="require('@/assets/images/wyan-logo.png')" :alt="App.title">
        {{ App.title }}
      </router-link>
      <el-menu :default-active="activeIndex" class="app-menu" mode="horizontal" router @select="handleSelect">
        <template v-for="(nav, navIndex) in header">
          <!--<pre style="line-height:20px;">{{header}}</pre>-->
          <el-menu-item v-if="!nav.children" :key="nav.key" :path="nav.path" :index="navIndex">{{ nav.title }}</el-menu-item>
          <nav-sub v-else :key="nav.key" :nav="nav" />
        </template>
      </el-menu>

      <div class="helper-menu">
        <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
          <div class="avatar-wrapper">
            <img :src="avatar | defaultImg(this)" class="user-avatar">
          </div>
          <el-dropdown-menu slot="dropdown">
            <router-link :to="{ name: 'user' }">
              <el-dropdown-item>账户管理</el-dropdown-item>
            </router-link>
            <a target="_blank" href="https://github.com/jikeytang/vyan-shop-admin/">
              <el-dropdown-item>Github</el-dropdown-item>
            </a>
            <el-dropdown-item divided>
              <div @click="logout">退出</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import App from '@/config/app'
import NavSub from './components/NavSub'

export default {
  name: 'Navbar',
  components: {
    NavSub
  },
  filters: {
    defaultImg (value) {
      if (!value) {
        return require('assets/images/avatar.png')
      }
    }
  },
  data () {
    return {
      App,
      currentMenu: ['0'],
      activeIndex: '0',
      collapsed: false
    }
  },
  computed: {
    ...mapState('nav', [
      'header'
    ]),
    ...mapGetters([
      'avatar'
    ])
  },
  methods: {
    handleNavSelect (data, nav) {
      let path = data.key
      if (!path.includes('/')) {
        path = data.item.$attrs.path
      }
      if (/^app-menu-empty-\d+$/.test(path) || !path) {
        this.$message.warning('临时菜单')
      } else if (/^https:\/\/|http:\/\//.test(path)) {
        open(path)
      } else {
        this.$router.push({ path: path })
      }
    },
    toggleCollapsed () {
      this.collapsed = !this.collapsed
    },
    logout () {
      this.$store.dispatch('user/logOut').then(() => {
        location.reload()
      })
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss">
.app-navbar{
  position:relative;
  .header{
    line-height:60px;
    box-shadow: 0 2px 8px #f0f1f2;
    z-index: 10;
    max-width: 100%;
  }
  .logo{
    float:left;
    font-size:17px;
    margin-right:40px;
    width:170px;
    box-shadow: 2px 0 8px 0 rgba(29,35,41,.05);
    .wyan-logo{
      width: 50px;
    }
  }
  .el-menu{
    border-bottom:none;
  }
  .app-menu{
    float:left;
  }
  .helper-menu{
    float:right;
    .avatar-wrapper{
      position:relative;
      .anticon{
        color:#fff;
        margin-left:5px;
      }
      .user-avatar{
        cursor:pointer;
        width:40px;
        height:40px;
        border-radius:50%;
        border:1px solid #ccc;
      }
    }
  }
}
.user-dropdown-menu{
  top:20px;
  right:20px;
}
</style>
