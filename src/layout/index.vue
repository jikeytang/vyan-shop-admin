<template>
  <div class="app-layout">
    <navbar />
    <div class="app-container">
      <sidebar />
      <app-main />
    </div>
    <app-settings />
  </div>
</template>
<script>
import { AppMain, Navbar, AppSettings, Sidebar } from './pages'
// import ResizeMixin from './mixin/ResizeHandler'
import { mapState } from 'vuex'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    AppSettings,
    Sidebar
  },
  // mixins: [ResizeMixin],
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      showSettings: state => state.settings.showSettings,
      needTagsView: state => state.settings.tagsView,
      fixedHeader: state => state.settings.fixedHeader
    })
  },
  methods: {
    handleClickOutside () {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>
<style lang="scss" scoped>
.app-container{
  display:flex;
  flex-flow:row;
  flex:1;
  min-height:calc(100vh - 61px);
}
</style>
