<template>
  <div class="center_el">
  <div class="back_ground_text">
    It is a dangerous thing to order the lives of others and I have often wondered at the self-confidence of the politicians, reformers and suchlike who are prepared to force upon their fellows measures that must alter their manners, habits, and points of view. I have always hesitated to give advice, for how can one advise another how to act unless one knows that other as well as one knows himself? Heaven knows. I know little enough of myself: I know nothing of others. We can only guess at the thoughts and emotions of our neighbours. Each one of us is a prisoner in a solitary tower and he communicates with the other prisoners, who form mankind, by conventional signs that have not quite the same meaning for them as for himself.
    And life, unfortunately, is something that you can lead but once; mistakes are often irreparable and who am I that I should tell this one and that how he should lead it? Life is a difficult business and I have found it hard enough to make my own a complete and rounded thing; I have not been tempted to teach my neighbour what he should do with his. But there are men who flounder at the journey's start, the way before them is confused and hazardous and on occasion, however unwillingly, I have been forced to point the finger of fate. Sometimes men have said to me, what shall I do with my life? and I have seen myself for a moment wrapped in the dark cloak of Destiny.
  </div>
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
        <input name="username" v-model="password"/><br/>
      </div>
      <div class="field">
        <label>Re-password</label>
        <input name="username" v-model="repassword"/><br/>
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
    z-index: 2;
  }

  input {
    border: solid 1px rgb(57, 128, 181);
    z-index: 2;
  }

  label {
    position: relative;
    float: left;
    padding-right: 10px;
    z-index: 2;
  }

  .main_block_reg {
    width: 200px;
    margin: 20px auto;
    border: solid 10px rgb(57, 128, 181);
    padding: 20px;
    border-radius: 40px 10px;
    z-index: 2;
  }

  .registration_button{
    background: rgb(255,255,255);
    border: solid 5px rgb(57, 128, 181);
    border-radius: 20px 5px;
    z-index: 2;
  }

  .error {
    color: crimson;
    z-index: 2;
  }

  .back_ground_text {
    z-index: 1;
    position: absolute;
  }

</style>

<script>
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
      reg: function (event) {
        if (this.isNormal === 15) {
          this.resultRegistrationCode = 'Successful\n'
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
