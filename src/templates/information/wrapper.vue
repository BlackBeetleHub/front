<template>
  <div class="information-wrapper">
    <el-row>You know words in text %</el-row>
    <el-row>
      <el-progress type="circle" :percentage="percent"></el-progress>
    </el-row>
    <el-row><el-button type="primary">Count word {{ allWords.length }}</el-button></el-row>
    <el-row><el-button type="success">You known {{ allWords.length - unknownWords.length }}</el-button></el-row>
    <el-row><el-button type="warning">You unknown {{ unknownWords.length }}</el-button></el-row>
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
      return {}
    },
    methods: {
      findPopularWord: function (array) {
      }
    },
    computed: {
      percent: function () {
        return 100 - Math.round((100 * this.unknownWords.length) / this.allWords.length)
      }
    }
  }
</script>

<style>
  .information-wrapper {
    margin-top: 15px;
  }
</style>
