<template>
  <div class="information-wrapper">
    <el-row>
      <el-progress type="circle" :percentage="percent">Unknown</el-progress>
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
        return Math.round((100 * this.unknownWords.length) / this.allWords.length)
      }
    }
  }
</script>

<style>
  .information-wrapper{
    margin-top: 100px;
  }
</style>
