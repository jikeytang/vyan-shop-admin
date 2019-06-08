<template>
  <app-view class="app-test">
    <img class="test-img" :src="require('@/assets/images/wait.jpg')" alt="">
  </app-view>
</template>

<script>
export default {
  name: 'Test'
}
</script>

<style lang="scss" scoped>
.test-img{
  position: absolute;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%);
}
</style>
