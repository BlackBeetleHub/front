<template>
  <div class="services-wrapper">
    <el-row>
      <el-col>
        <div class="grid-content bg-purple">
          <img class="logo-lego-service" src="../../../assets/lingua_leo.png"/>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="grid-content bg-purple">
          <el-input placeholder="Email" v-model="email_lingua_leo"></el-input>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="grid-content bg-purple">
          <el-input placeholder="Password" type="password" v-model="password_lingua_leo"></el-input>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div class="grid-content bg-purple">
          <el-button type="primary" @click="setToken" round>OK</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style>
  .el-row {
    margin-bottom: 10px;
  }

  .services-wrapper {
    margin-top: 15px;
    padding: 10px;
  }

  .logo-lego-service {
    width: 60px;
    height: 60px;
  }
</style>

<script>
  import ElRow from 'element-ui/packages/row/src/row'

  export default {
    components: {ElRow},
    props: {
      email: String,
      password: String
    },
    data () {
      return {
        email_lingua_leo: '',
        password_lingua_leo: ''
      }
    },
    created: function () {
      this.email_lingua_leo = localStorage.getItem('email_leo')
      this.password_lingua_leo = localStorage.getItem('pass_leo')
    },
    methods: {
      update: function (event) {
        this.$emit('update', event.target.innerText)
      },
      setToken: function () {
        localStorage.setItem('email_leo', this.email_lingua_leo)
        localStorage.setItem('pass_leo', this.password_lingua_leo)
      }
    }
  }
</script>
