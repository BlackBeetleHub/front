<template>
  <div>
  <el-dialog title="Shipping address" :visible.sync="dialogVisible">
    <span>It should be noted that the content will not be aligned in center by default</span>
  </el-dialog>
  <el-table border
            :data="data"
            style="width: 100%">
    <el-table-column
      label="Number"
      width="180"
      prop="Number">
    </el-table-column>
    <el-table-column
      label="Word"
      width="180"
      prop="Word">
    </el-table-column>
    <el-table-column
      label="Count"
      width="180"
      prop="Count">
    </el-table-column>
    <el-table-column
      label="Operations">
      <template slot-scope="scope">
        <el-button-group>
          <el-button
            type="primary" icon="el-icon-edit"
            @click="handleEdit(scope.$index, scope.row)">
          </el-button>
          <el-button
            type="primary" icon="el-icon-share"
            @click="handleEdit(scope.$index, scope.row)">
          </el-button>
          <el-button
            type="primary" icon="el-icon-delete"
            @click="handleDelete(scope.$index, scope.row)">
          </el-button>
          <el-button
            type="primary" icon="el-icon-info"
            @click="handleInfo(scope.$index, scope.row)">
          </el-button>
        </el-button-group>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>
<script>
  export default {
    props: {
      data: Array,
      columns: Array,
      filterKey: String
    },
    data () {
      return {
        tableData: [],
        Info: 'ssdsdsdsd',
        dialogVisible: false
      }
    },
    methods: {
      handleEdit (index, row) {
        console.log(index, row)
      },
      handleDelete (index, row) {
        console.log(index, row)
      },
      handleInfo (index, row) {
        this.dialogVisible = true
      }
    }
  }
</script>
<style>

</style>
