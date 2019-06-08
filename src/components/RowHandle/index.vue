<template>
  <div class="handle-icon">
    <el-tooltip placement="top">
      <div slot="content">预览</div>
      <i class="el-icon-document" @click="showProduct(scope.$index, scope.row)" />
    </el-tooltip>
    <el-tooltip placement="top">
      <div slot="content">编辑</div>
      <i class="el-icon-edit" @click="updateProduct(scope.$index, scope.row)" />
    </el-tooltip>
    <el-tooltip placement="top">
      <div slot="content">删除</div>
      <i class="el-icon-delete" @click="handleDelete(scope.$index, scope.row)" />
    </el-tooltip>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
