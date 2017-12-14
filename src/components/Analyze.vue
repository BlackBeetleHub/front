<template>
  <div>
    <el-header height="70px" class="header-marker">
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content bg-purple trans-text"><h3>Services</h3></div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple">
            <ToolBar></ToolBar>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple trans-text"><h3>Information</h3></div>
        </el-col>
      </el-row>
    </el-header>
    <el-container class="container-marker">
      <el-aside class="aside-marker" width="20em">
        <LinguaLeoAuth :email="leo_username" :password="leo_password"></LinguaLeoAuth>
      </el-aside>
      <el-main class="main-marker">
        <el-row>
          <el-input
            type="textarea"
            :rows="25"
            placeholder="Please input"
            v-model="textarea3">
          </el-input>
        </el-row>
        <el-row>
          <el-button type="primary" :loading="isLoading" @click="getAll">OK</el-button>
        </el-row>
        <el-row>
          <OutPutDataGridVue
            :data="gridData"
            :columns="gridColumns">
          </OutPutDataGridVue>
        </el-row>
      </el-main>
      <el-aside class="aside-marker" width="20em">
        <Information
          :allWords="allWords"
          :knownWords="knownWords"
          :unknownWords="unknownWords">
        </Information>
      </el-aside>
    </el-container>
  </div>
</template>
<style>

  .trans-text {
    color: rgba(255,255,255,0.75);
  }

  .header-marker {
    background-color: #24292e;
    height: 500px;
  }

  .container-marker {

  }

  .aside-marker {

  }

  .main-marker {

  }
</style>

<script>
  import ElDialog from '../../node_modules/element-ui/packages/dialog/src/component.vue'
  import ToolBar from '@/templates/tool_bar/ToolBar.vue'
  import OutPutDataGridVue from '@/templates/grid.vue'
  import LinguaLeoAuth from '@/templates/tools/services/LinguaLeo.vue'
  import Information from '@/templates/information/wrapper.vue'
  import Analyze from 'easy_text'
  import DictApi from '@/services/DictApi'

  export default {
    components: {ElDialog, ToolBar, OutPutDataGridVue, LinguaLeoAuth, Information},
    data () {
      return {
        textarea3: '',
        gridColumns: ['Number', 'Word', 'Translate', 'Count'],
        gridData: [
          {Number: '', Word: '', Translate: '', Count: ''}
        ],
        leo_username: '',
        leo_password: '',
        isLoading: false,
        allWords: [],
        knownWords: [],
        unknownWords: []
      }
    },
    methods: {
      async getAll () {
        this.isLoading = true
        this.gridData = []
        console.log(localStorage.getItem('email_leo'))
        console.log(localStorage.getItem('pass_leo'))
        const response = await DictApi.getAllWords({
          params: {
            email: localStorage.getItem('email_leo'),
            pass: localStorage.getItem('pass_leo')
          }
        })
        console.log(response.data)
        let allWords = Analyze.ProcessTextAllModules(this.textarea3)
        this.allWords = allWords
        let unknownWords = Analyze.GetUnknownWords(allWords, response.data)
        this.unknownWords = unknownWords
        for (let i = 0; i < unknownWords.length; i++) {
          let countWord = Analyze.BasicInformation.GetCountUsageWord(unknownWords[i], this.textarea3)
          this.gridData.push({Number: i, Word: unknownWords[i], Translate: '', Count: countWord})
        }
        this.isLoading = false
      }
    },
    watch: {}
  }
</script>
