<template>
  <div class="app-view">
    <slot v-if="$slots.header" slot="header" name="header" />
    <div class="app-view-content">
      <div class="app-page-header-index">
        <slot />
      </div>
    </div>
    <copyright />
    <slot v-if="$slots.footer" slot="footer" name="footer" />
  </div>
</template>

<script>
export default {
  name: 'AppView',
  created () {
    // console.log(this.$slots)
  }
}
</script>

<style lang="scss">
.app-view{
  background: #fff;
  min-height:calc(100vh - 112px);
  margin:25px 25px 0;
  .app-view-content{
    padding: 20px;
  }
}
</style>
