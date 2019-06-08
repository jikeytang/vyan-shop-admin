<template>
  <div class="filter-container">
    <div v-if="$slots.query" class="filter-condition">
      <slot name="query" />
    </div>
    <div class="filter-bar clearfix">
      <div v-if="$slots.left" class="btn-bar-plus">
        <slot name="left" />
      </div>
      <div v-if="$slots.right" class="btn-bar-item">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFilter'
}
</script>

<style lang="scss" scoped>

</style>
