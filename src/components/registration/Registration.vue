<template>
  <div class="main-container-body">
    <el-row :gutter="40">
      <el-col :span="6" :offset="9">
        <img class="logo-reg" src="../../assets/logo.png">
      </el-col>
      <div class="grid-content bg-purple">
        <el-col :span="6" :offset="9">
          <h1>Sign up to EasyReading</h1>
          <div class="auth-form-body">
            <el-input placeholder="Email" v-model="email">
            </el-input>
            <el-input placeholder="Username" v-model="username">
            </el-input>
            <el-input placeholder="Password" type="password" v-model="password">
            </el-input>
            <el-button type="success" @click="reg">Sign Up</el-button>
          </div>
        </el-col>
      </div>
      <el-col :span="6" :offset="9">
        <div class="auth-form-body">
          Already have account? <a href="#/login">Sign In.</a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style>
  .main-container-body {
    background-color: #f9f9f9;
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

  .logo-reg {
    width: 5em;
    height: 5em;
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
    data () {
      return {
        email: '',
        password: '',
        username: '',
        country: '',
        city: '',
        isNormal: 0,
        dynamicColor: 'red'
      }
    },
    methods: {
      async reg () {
        console.log('sdfsdfdsf')
        if (this.isNormal === 7) {
          let details = {
            email: this.email,
            user_name: this.user_name,
            full_name: '',
            address: '',
            created_at: new Date(),
            last_seen_at: new Date()
          }
          let data = new FormData()
          data.append('pass', this.password)
          data.append('details', JSON.stringify(details))
          console.log('valid')
          const response = await DictApi.createAccount(data)
          console.log(response.data)
          const responseId = await DictApi.getAccountIdByEmail({params: {email: this.email}})
          localStorage.setItem('account_id', responseId.data)
          localStorage.setItem('user_email', this.email)
          this.$notify({
            title: 'Success',
            message: 'Registration success',
            type: 'success'
          })
          window.location.replace('/#/analyze')
        } else {
          console.log(this.isNormal)

          if ((this.isNormal & 1) !== 1) {
            this.$notify({
              title: 'Error',
              message: 'Email is not correct',
              type: 'error'
            })
          } else if ((this.isNormal & 2) !== 2) {
            this.$notify({
              title: 'Error',
              message: 'Username must be at least 3 characters long',
              type: 'error'
            })
          } else if ((this.isNormal & 4) !== 4) {
            this.$notify({
              title: 'Error',
              message: 'Password must be at least 6 characters long',
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
      username: function (value) {
        if (value.length > 3) {
          this.isNormal |= 2
        } else {
          this.isNormal &= ~2
        }
        this.username = value
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
