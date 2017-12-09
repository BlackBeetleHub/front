<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="4"><div class="grid-content bg-purple"><img class="exit-icon" src="../../assets/client.png"/></div></el-col>
      <el-col :span="16"><div class="grid-content bg-purple"><img class="exit-icon" src="../../assets/settings.png"/></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"><img class="exit-icon" src="../../assets/exit.png"/></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
  }
}
</script>

<style>
  .exit-icon {
    width: 30px;
    height: 30px;
  }
</style>
