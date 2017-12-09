<template>
  <div class="center_el">
    <div class="center_el main_title">
      <h2>Registration</h2>
    </div>

    <div class="main_block_reg center_el">

      <div class="field error">
        {{ resultRegistrationCode }}
      </div>

      <div class="field">
        <label>Username</label>
        <input name="username" v-model="username"/>
      </div>
      <div class="field">
        <label>Email</label>
        <input name="email" v-model="email"/><br/>
      </div>
      <div class="field">
        <label>Password</label>
        <input name="username" type="password" v-model="password"/><br/>
      </div>
      <div class="field">
        <label>Re-password</label>
        <input name="username" type="password" v-model="repassword"/><br/>
      </div>
    </div>
    <button class="registration_button" @click="reg"><h3>Let's go!</h3></button>
    <br/>
  </div>
</template>

<style>
  .field {
    position: relative;
    clear: both;
    text-align: right;
    line-height: 25px;
  }

  input {
    border: solid 1px rgb(57, 128, 181);
  }

  label {
    position: relative;
    float: left;
    padding-right: 10px;
  }

  .main_block_reg {
    width: 200px;
    margin: 20px auto;
    border: solid 10px rgb(57, 128, 181);
    padding: 20px;
    border-radius: 40px 10px;
  }

  .registration_button {
    background: rgb(255, 255, 255);
    border: solid 5px rgb(57, 128, 181);
    border-radius: 20px 5px;
  }

  .error {
    color: crimson;
  }

  .back_ground_text {
    z-index: 1;
    position: absolute;
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
