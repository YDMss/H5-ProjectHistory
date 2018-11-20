<template>
    <el-table :data="result.data" stripe style="width: 100%" v-if="result">
      <el-table-column prop="time" label="时间" width="180"> </el-table-column>
      <el-table-column prop="context" label="状态"> </el-table-column>
  </el-table>
</template>
<script>
export default {
  props:["result"]
}
</script>
