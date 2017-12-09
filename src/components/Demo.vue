<template>
  <div class="center_el input_text">
    <div>
      <h1>You are welcome!</h1><br/>
      <div class="editor_content center_el">
        <InputTextEditor :content="text" @update="text = $event">
        </InputTextEditor>
        <button class="center_el btn" @click="getAll">Go!</button>
      </div>
      <div class="services">
        <div class="field">
          <div class="content_field">
            <label>Lingua Leo</label><br/>
            <img class="lingualeo_logo" src="../assets/lingua_leo.png"/><br/>
            <input name="username" v-model="leo_username" placeholder="email"/><br/>
            <input name="password" type="password" v-model="leo_password" placeholder="password"/>
          </div>
        </div>
        <div class="field">
          <div class="content_field">
            <label>Puzzle</label><br/>
            <img class="lingualeo_logo" src="../assets/puzzle.png"/><br/>
            <input name="username" v-model="puzzle_username" placeholder="email"/><br/>
            <input name="password" type="password" v-model="puzzle_password" placeholder="password"/>
          </div>
        </div>
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
  </div>
</template>
<style>
  .services {
    position: relative;
    margin: 0 auto;
    margin-top: 10px;
    border: solid 10px rgb(57, 128, 181);
    width: 13em;
    border-radius: 40px 10px;
    padding: 10px;
  }

  .field {
    width: 100px;
  }

  .field, .field {
    display: inline;
  }

  .lingualeo_logo {
    width: 40px;
    height: 40px;
  }

</style>
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
        ],
        leo_username: '',
        leo_password: '',
        puzzle_username: '',
        puzzle_password: ''
      }
    },
    methods: {
      async getAll () {
        this.gridData = []
        const response = await DictApi.getAllWords({
          params: {
            email: this.leo_username,
            pass: this.leo_password
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
