<template>
  <el-tooltip content="点击切换" placement="top">
    <span class="app-login-pagination">
      <span v-for="(item, index) in videoLength" :key="index" class="item" :class="{ 'active': index === videoIndex }" @click.stop="changeVideo(index)" />
    </span>
  </el-tooltip>
</template>

<script>
export default {
  name: 'Point',
  props: {
    videoLength: {
      type: Number,
      default: 0
    },
    videoIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    changeVideo (index) {
      this.$emit('change', index)
    }
  }
}
</script>
<style lang="scss" scoped>
.app-login-pagination {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  text-align: center;
  .item {
    width: 12px;
    height: 12px;
    margin: 0 10px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: 0.2;
    cursor: pointer;
    &:hover{
      opacity: 0.6;
    }
  }
  .active {
    opacity: 1;
    background: #007aff;
  }
}
</style>
