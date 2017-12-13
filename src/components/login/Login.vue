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
            <el-input placeholder="Email" v-model="input">
            </el-input>
            <el-input placeholder="Password" v-model="input">
            </el-input>
            <el-button type="success">Sign In</el-button>
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
        username: '',
        country: '',
        city: '',
        repassword: '',
        resultRegistrationCode: '',
        isNormal: 0
      }
    },
    methods: {
      async reg () {
        if (this.isNormal === 15) {
          this.resultRegistrationCode = 'Successful\n'
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
          const response = await DictApi.createAccount(data)
          console.log(response.data)
          const responseId = await DictApi.getAccountIdByEmail({params: {email: this.email}})
          localStorage.setItem('account_id', responseId.data)
          window.location = 'http://localhost:8080/#/demo'
        } else {
          this.resultRegistrationCode = 'Something wrong\n'
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
        this.email = value
      },
      username: function (value) {
        if (value === '') {
          this.resultRegistrationCode = 'Username empty\n'
          this.isNormal &= ~2
        } else {
          this.isNormal |= 2
        }
        this.username = value
      },
      password: function (value) {
        if (value === '') {
          this.resultRegistrationCode = 'Password empty\n'
          this.isNormal &= ~4
        } else {
          this.isNormal |= 4
        }
        this.password = value
      },
      repassword: function (value) {
        if (value !== this.password) {
          this.resultRegistrationCode = 'Password not equal empty\n'
          this.isNormal &= ~8
        } else {
          this.isNormal |= 8
          this.resultRegistrationCode = ''
        }
        this.repassword = value
      }
    }
  }
</script>
