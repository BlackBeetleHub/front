<template>
  <div class="toolbar-wrapper">
    <el-row type="flex" :gutter="20" justify="end">

      <el-col :span="8">
        <div>
          <el-row>
            <el-col :span="6"><div class="grid-content bg-purple"><img class="exit-icon" src="../../assets/client.png"/></div> </el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><img class="exit-icon" src="../../assets/settings.png"/></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><img class="exit-icon" src="../../assets/exit.png"/></div></el-col>
          </el-row>
        </div>
      </el-col>

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
  .toolbar-wrapper{
    margin-top: 15px;
  }

  .exit-icon {
    width: 30px;
    height: 30px;
  }
</style>
