<template>
  <div>
    <h1>Not hello bitch</h1><br/>
    <div class="center_el out_put_data">
      <div>
        <OutPutDataGridVue
          :data="gridData"
          :columns="gridColumns"
          :filter-key="searchQuery">
        </OutPutDataGridVue>
      </div>
    </div>

    <button @click="getAll">
      GET
    </button>
  </div>
</template>

<script>
  import DictApi from '@/services/DictApi'
  import Analyze from '@/analyze/analyze'
  import OutPutDataGridVue from '@/templates/grid.vue'
  export default {
    data () {
      return {
        rawText: 'Hello easy ',
        gridColumns: ['Number', 'Word', 'Translate', 'Count'],
        gridData: [
          {Number: '', Word: '', Translate: '', Count: ''}
        ]
      }
    },
    methods: {
      async getAll () {
        const response = await DictApi.getAllWords({
          params: {
            email: 'deniskozlov2012@mail.ru',
            pass: '7572836d'
          }
        })
        console.log(Analyze.getUnknownWords(response))
      }
    },
    components: {
      OutPutDataGridVue
    }
  }
</script>
