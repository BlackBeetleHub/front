<template>
  <table>
    <thead>
    <tr>
      <th v-for="key in columns"
          @click="sortBy(key)"
          :class="{ active: sortKey == key }">
        {{ key | capitalize }}
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="entry in event(filteredData)" v-on:click="handlerM(entry)">
      <td v-for="key in columns">
        {{entry[key]}}
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
  export default {
    props: {
      data: Array,
      columns: Array,
      filterKey: String
    },
    data: function () {
      let sortOrders = {}
      this.columns.forEach(function (key) {
        sortOrders[key] = 1
      })
      return {
        sortKey: '',
        sortOrders: sortOrders
      }
    },
    computed: {
      filteredData: function () {
        let sortKey = this.sortKey
        let filterKey = this.filterKey && this.filterKey.toLowerCase()
        let order = this.sortOrders[sortKey] || 1
        let data = this.data
        if (filterKey) {
          data = data.filter(function (row) {
            return Object.keys(row).some(function (key) {
              return String(row[key]).toLowerCase().indexOf(filterKey) > -1
            })
          })
        }
        if (sortKey) {
          data = data.slice().sort(function (a, b) {
            a = a[sortKey]
            b = b[sortKey]
            return (a === b ? 0 : a > b ? 1 : -1) * order
          })
        }
        return data
      }
    },
    filters: {
      capitalize: function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
      }
    },
    methods: {
      sortBy: function (key) {
        this.sortKey = key
        this.sortOrders[key] = this.sortOrders[key] * -1
      },
      event: function (number) {
        return number
      },
      handlerM: function (entry) {
        let index = this.filteredData.indexOf(entry)
        this.filteredData.splice(index, 1)
      }
    }
  }
</script>
<style>

  .center_el{
    position: relative;
    display: table;
    margin-right: auto;
    margin-left: auto;
    margin-top: 3em;
  }

  .center_el{
    position: relative;
    display: table;
    margin-right: auto;
    margin-left: auto;
    margin-top: 3em;
  }

  .input_text {
    width: 100%;
    height: 50%;
  }


  table {
    border-radius: 3px;
    background-color: #fff;
  }

  th {
    background-color: rgb(57, 128, 181);
    color: rgba(255,255,255,0.88);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }



  td {
    background-color: #f9f9f9;
  }

  th, td {
    min-width: 120px;
    padding: 10px 20px;
  }

  th.active {
    color: #fff;
  }
</style>
