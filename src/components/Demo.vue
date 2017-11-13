<template>
  <div  class="center_el input_text">
    <h1>You are welcome!</h1><br/>
    <div class="editor_content center_el">
            <InputTextEditor :content="text" @update="text = $event">
            </InputTextEditor>
      <button class="center_el btn" @click="getAll">Go!</button>
    </div>
    <div class="center_el out_put_data">
      <div class="center_el">
        <OutPutDataGridVue
          :data="gridData"
          :columns="gridColumns">
        </OutPutDataGridVue>
      </div>
    </div>
  </div>
</template>

<script>
  import DictApi from '@/services/DictApi'
  import OutPutDataGridVue from '@/templates/grid.vue'
  import InputTextEditor from '@/templates/editor.vue'
  import Service from '@/templates/service.vue'
  import Analyze from 'easy_text'

  export default {
    data () {
      return {
        text: 'Hello easy reading!',
        gridColumns: ['Number', 'Word', 'Translate', 'Count'],
        gridData: [
          {Number: '', Word: '', Translate: '', Count: ''}
        ]
      }
    },
    methods: {
      async getAll () {
        this.gridData = []
        const response = await DictApi.getAllWords({
          params: {
            email: 'deniskozlov2012@mail.ru',
            pass: '7572836d'
          }
        })
        console.log(response.data)
        let allWords = Analyze.ProcessTextAllModules(this.text)
        console.log(allWords)
        let unknownWords = Analyze.GetUnknownWords(allWords, response.data)
        for (let i = 0; i < unknownWords.length; i++) {
          let countWord = Analyze.BasicInformation.GetCountUsageWord(unknownWords[i], this.text)
          this.gridData.push({Number: i, Word: unknownWords[i], Translate: '', Count: countWord})
        }
      }
    },
    components: {
      InputTextEditor,
      OutPutDataGridVue,
      Service
    }
  }
</script>
