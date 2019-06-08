<template>
  <div class="app-main">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>

<style lang="scss">
.app-main{
  flex:1;
  min-height:100%;
  transition:all .28s ease-out;
  background:#f5f5f5;
  min-height:calc(100vh - 61px);
  overflow:hidden;
}
</style>
