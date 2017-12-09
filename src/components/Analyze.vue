<template>
  <div>
    <el-header class="header-marker">
      <el-row :gutter="20">
        <el-col :span="4"><div class="grid-content bg-purple"><h3>Services</h3></div></el-col>
        <el-col :span="16"><div class="grid-content bg-purple lol"><ToolBar></ToolBar></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"><h3>Information</h3></div></el-col>
      </el-row>
    </el-header>
    <el-container class="container-marker">
      <el-aside class="aside-marker" width="20em">Aside</el-aside>
      <el-main class="main-marker">
        <el-row>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 20}"
          placeholder="Please input"
          v-model="textarea3">
        </el-input>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12" :offset="6">
            <div class="editor-wrapper">
            <OutPutDataGridVue
              :data="gridData"
              :columns="gridColumns">
            </OutPutDataGridVue>
          </div>
        </el-col>
        </el-row>
      </el-main>
      <el-aside class="aside-marker" width="20em">Aside</el-aside>
    </el-container>
  </div>
</template>

<style>

  .editor-wrapper {
    margin-top: 9px;
  }

  .lol {
    margin-top: 9px;
  }

  .header-marker {
    background-color: #137794;
  }

  .container-marker {
    background-color: blanchedalmond;
  }

  .aside-marker {
    background-color: azure;
  }

  .main-marker {
    background-color: cornsilk;
  }
</style>

<script>
  import ElDialog from '../../node_modules/element-ui/packages/dialog/src/component.vue'
  import ToolBar from '@/templates/tool_bar/ToolBar.vue'
  import OutPutDataGridVue from '@/templates/grid.vue'

  export default {
    components: {ElDialog, ToolBar, OutPutDataGridVue},
    data () {
      return {
        textarea3: '',
        gridColumns: ['Number', 'Word', 'Translate', 'Count'],
        gridData: [
          {Number: '', Word: '', Translate: '', Count: ''}
        ]
      }
    },
    methods: {},
    watch: {}
  }
</script>
