<template>
  <div class="app-sidebar">

    <el-menu v-model="currentMenu" :default-active="this.$route.path" class="app-menu" router mode="inline" @click="handleNavSelect">
      <template v-for="(nav) in sideBar">
        <el-menu-item v-if="!nav.children" :key="nav.path" :index="nav.path">
          <span>{{ nav.title }}</span>
        </el-menu-item>
        <sub-menu v-else :key="nav.path" :nav="nav" />
      </template>
    </el-menu>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import SubMenu from './components/SubMenu'

export default {
  name: 'Sidebar',
  components: {
    SubMenu
  },
  data () {
    return {
      collapsed: false,
      currentMenu: ['1']
    }
  },
  computed: {
    ...mapState('nav', [
      'sideBar'
    ])
  },
  created () {
    // console.log('sideBar-1', this.sideBar)
  },
  methods: {
    handleNavSelect (data) {
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
    }
  }
}
</script>
<style lang="scss">
.app-submenu{
  border-bottom:1px solid #e8e8e8;
}
.app-sidebar{
  width:190px;
  transition:all .28s ease-out;
  background:#fff;
  border-right: 1px solid #e8e8e8;
  box-shadow: 1px 1px 0 0 #e8e8e8;
  overflow-y:auto;
  .app-menu{
    border-right: 0;
    .el-menu-item{
      &.is-active {
        color: #1890ff;
        background:#ecf5ff;
        &:before {
          position: absolute;
          background-color: transparent;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          content: ""
        }
        &:after{
          content: "";
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          border-right: 3px solid #1890ff;
          transform: scaleY(1);
          opacity: 1;
          transition: transform .15s cubic-bezier(.215,.61,.355,1),opacity .15s cubic-bezier(.215,.61,.355,1);
        }
      }
    }
  }
  .sidebar-head{
    position:relative;
    border-bottom:1px solid rgba(0, 0, 0, 0.06);
    box-shadow:0 1px #fff;
    padding:10px 0;
    white-space:nowrap;
    .head-dropdown{
      display:flex;
      align-content:center;
      justify-content:center;
      width:120px;
      margin:0 auto;
      .anticon{
        margin-top:4px;
      }
      .anticon-down{
        color:#999;
      }
      .title{
        margin:0 10px;
      }
    }
  }
  .sidebar-menu{
    border-right:0;
    .ant-menu-sub{
      overflow-y:auto;
      &.ant-menu-inline{
        padding-left:30px;
      }
    }
  }
}
</style>
