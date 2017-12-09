<template>
  <div>
    <el-input placeholder="Email" v-model="input"></el-input>
    <el-input placeholder="Password" v-model="input"></el-input>
  </div>
</template>
<script>
  export default {
    props: ['link'],
    data: function () {
      console.log(this.link)
      return {
        src_link: this.link
      }
    },
    computed: {
      link: function () {
        console.log(this.link)
        return this.link
      }
    }
  }
</script>
