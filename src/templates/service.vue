<template>
  <div>
    <img v-bind:src="link"/>
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
