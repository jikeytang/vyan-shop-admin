<template>
  <app-view class="product-category-add">
    <detail class="product-category-detail" :is-edit="false" />
  </app-view>
</template>
<script>
import Detail from './pages/Detail'
export default {
  name: 'AddProductCate',
  components: { Detail }
}
</script>
<style lang="scss">
.product-category-detail{
  width: 600px;
  margin:0 auto;
}
</style>

