<template>
  <div>
    <el-row :gutter="40">
      <div class="grid-content bg-purple">
        <el-col :span="6" :offset="9">
          <img class="logo-auth" src="../../assets/logo.png">
        </el-col>
        <el-col :span="6" :offset="9">
          <h1>Sign in to EasyReading</h1>
          <div class="auth-form-body">
            <el-input placeholder="Email" v-model="email">
            </el-input>
            <el-input placeholder="Password" type="password" v-model="password">
            </el-input>
            <el-button type="success" @click="auth">Sign In</el-button>
          </div>
        </el-col>
      </div>
      <el-col :span="6" :offset="9">
        New to EasyReading? <a href="#/registration">Create an account.</a>
      </el-col>
    </el-row>
  </div>

</template>

<style>
  .logo-auth {
    width: 5em;
    height: 5em;
  }

  .el-row {
    margin-top: 70px;
  }

  .el-input {
    margin-bottom: 20px;
  }

  .el-col {
    margin-top: 30px;
  }

  .auth-form-header h1 {
    font-size: 24px;
    font-weight: 300;
    letter-spacing: -0.5px;
  }

  .auth-form-body {
    width: auto;
    padding: 20px;
    font-size: 14px;
    background-color: #fff;
    border: 1px solid #d8dee2;

    border-radius: 3px 3px 3px 3px;
  }
</style>

<script>
  import DictApi from '@/services/DictApi'

  export default {
    name: 'HelloWorld',
    data () {
      return {
        email: '',
        password: '',
        isNormal: 0
      }
    },
    methods: {
      async auth () {
        if (this.isNormal === 5) {
          let data = new FormData()
          data.append('email', this.email)
          data.append('password', this.password)
          const accountID = await DictApi.loginAccount(data)
          this.$notify({
            title: 'Success',
            message: 'Registration success',
            type: 'success'
          })
          localStorage.setItem('user_email', this.email)
          localStorage.setItem('account_id', accountID.data)
          this.$router.push({name: 'analyze'})
        } else {
          if (this.isNormal === 1) {
            this.$notify({
              title: 'Error',
              message: 'Password must be at least 6 characters long',
              type: 'error'
            })
          } else if (this.isNormal === 4) {
            this.$notify({
              title: 'Error',
              message: 'Email is not correct',
              type: 'error'
            })
          } else {
            this.$notify({
              title: 'Error',
              message: 'Email and password is not correct',
              type: 'error'
            })
          }
        }
      }
    },
    watch: {
      email: function (value) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(this.email)) {
          this.isNormal &= ~1
        } else {
          this.isNormal |= 1
        }
        this.email = value
      },
      password: function (value) {
        if (value.length > 6 && /\d/.test(value)) {
          this.isNormal |= 4
        } else {
          this.isNormal &= ~4
        }
        this.password = value
      }
    }
  }
</script>
