<template>
  <div class="toolbar-wrapper">
    <el-row type="flex"justify="end">
      <el-col>
        <div>
          <el-row>
            <el-col :span="6">
              <div class="grid-content bg-purple trans-text">
                {{ username }}
              </div>
            </el-col>
            <el-col :span="6" :offset="12">
              <div class="grid-content bg-purple"><img class="exit-icon" @click="logOutHandler" src="../../assets/exit.png"/></div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      logOutHandler: function () {
        localStorage.clear()
        window.location.href = '/#login'
      }
    },
    computed: {
      username: function () {
        return localStorage.getItem('user_email')
      }
    }
  }
</script>

<style>
  .toolbar-wrapper {
    margin-top: 15px;
  }

  .exit-icon {
    width: 30px;
    height: 30px;
  }

  .trans-text {
    color: rgba(255, 255, 255, 0.75);
  }

</style>
