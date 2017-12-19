<template>
  <div class="information-wrapper">
    <el-row>
      <label>Unknown words</label>
      <el-progress type="circle" :percentage="100 - percent">Unknown</el-progress>
    </el-row>
    <el-row></el-row>
    <el-row></el-row>
  </div>
</template>

<script>
  import ElRow from 'element-ui/packages/row/src/row'

  export default {
    components: {ElRow},
    props: {
      allWords: Array,
      knownWords: Array,
      unknownWords: Array
    },
    data: function () {
      return {
        allWords: [],
        knownWords: [],
        unknownWords: []
      }
    },
    methods: {

    },
    computed: {
      percent: function () {
        console.log('lol')
        console.log(Math.round((100 * this.unknownWords.length) / this.allWords.length))
        return Math.round((100 * this.unknownWords.length) / this.allWords.length)
      }
    },
    watch: {

    }
  }
</script>

<style>
  .information-wrapper {
    margin-top: 100px;
  }
</style>
