<template>
  <app-view class="app-system">
    <el-tabs v-model="activeName" class="system-tabs" type="card" @tab-click="handleClick">
      <!--<el-tab-pane v-for="(item, index) in tabPanes" :key="index" :label="item.tabTitle" :name="item.tabName">-->
      <!--<tab-pane-items :forms="item.tabForms" />-->
      <!--</el-tab-pane>-->
      <el-tab-pane label="内容管理" name="content">
        <content-manage />
      </el-tab-pane>
      <el-tab-pane label="显示管理" name="display">
        <display-manage />
      </el-tab-pane>
      <el-tab-pane label="附件管理" name="attach">
        <attach-manage />
      </el-tab-pane>
      <el-tab-pane label="系统管理" name="system">
        <system-manage />
      </el-tab-pane>
      <el-tab-pane label="邮件管理" name="email">
        <email-manage />
      </el-tab-pane>
    </el-tabs>

  </app-view>
</template>

<script>
import ContentManage from './pages/ContentManage'
import DisplayManage from './pages/DisplayManage'
import AttachManage from './pages/AttachManage'
import SystemManage from './pages/SystemManage'
import EmailManage from './pages/EmailManage'

export default {
  name: 'System',
  components: {
    ContentManage,
    DisplayManage,
    AttachManage,
    SystemManage,
    EmailManage
  },
  data () {
    return {
      activeName: 'content'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss">
.system-tabs{
  .el-tabs__content{
    border:1px solid #E4E7ED;
    border-top:0;
    padding:20px;
    min-height:calc(100vh - 250px);
  }
  .el-tabs__header{
    margin-bottom:0;
  }
  .form-handle{
    .el-button{
      margin-right:10px;
    }
  }
}
</style>
<style lang="scss" scoped>
.system-tabs{
  width:800px;
  margin: 0 auto;
}
</style>
