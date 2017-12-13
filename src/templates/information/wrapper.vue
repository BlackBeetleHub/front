<template>
  <div>
    <el-row>
      <schart :canvasId="canvasId"
              :type="type"
              :width="width"
              :height="height"
              :data="data"
              :options="options"
      ></schart>
    </el-row>
    <el-row></el-row>
    <el-row></el-row>
  </div>
</template>

<script>
  import ElRow from 'element-ui/packages/row/src/row'
  import Schart from 'vue-schart'

  export default {
    components: {ElRow, Schart},
    props: {},
    data: function () {
      return {
        canvasId: 'myCanvas',
        type: 'ring',
        width: 320,
        height: 320,

        data: [
          {name: 'Known', value: 1342},
          {name: 'Unknown', value: 2123}
        ],
        options: {
          title: 'How much word you know',
          radius: 80
        }
      }
    },
    methods: {}
  }
</script>

<style>

</style>
