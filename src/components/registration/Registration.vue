<template>
  <div>
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
            <el-input placeholder="Password" v-model="password">
            </el-input>
            <el-button type="success" @click="reg">Sign Up</el-button>
          </div>
        </el-col>
      </div>
      <el-col :span="6" :offset="9">
        Already have account? <a href="#/login">Sign In.</a>
      </el-col>
    </el-row>
  </div>
</template>

<style>
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
          this.$notify({
            title: 'Success',
            message: 'Registration success',
            type: 'success'
          })
        } else {
        }
      }
    },
    watch: {
      email: function (value) {
        if (value === '') {
          this.resultRegistrationCode = 'Email empty\n'
          this.isNormal &= ~1
        } else {
          this.isNormal |= 1
        }
        console.log('email')
        this.email = value
      },
      username: function (value) {
        if (value === '') {
          this.resultRegistrationCode = 'Username empty\n'
          this.isNormal &= ~2
        } else {
          this.isNormal |= 2
        }
        console.log('username')
        this.username = value
      },
      password: function (value) {
        if (value === '') {
          this.resultRegistrationCode = 'Password empty\n'
          this.isNormal &= ~4
        } else {
          this.isNormal |= 4
        }
        console.log('password')
        this.password = value
      }
    }
  }
</script>
