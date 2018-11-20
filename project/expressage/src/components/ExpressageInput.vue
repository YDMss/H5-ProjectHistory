<template>
    <el-input placeholder="请输入快递单号" v-model="number" class="input-with-select" clearable>
        <el-button slot="append" icon="el-icon-search" @click="$emit('translateNumber', number)"></el-button>
    </el-input>
</template>
<script>
export default {
    data:function(){
        return {
            number:3383585320902
        }
    }
}
</script>
