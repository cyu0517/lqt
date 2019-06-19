<template>
  <div>
    <el-input
      placeholder="请输入项目或标定曲线名称"
      prefix-icon="el-icon-search"
      v-model="searchText"
      @change="changeInput">
    </el-input>
    <el-table
      ref="singleTable"
      highlight-current-row
      @current-change="handleCurrentChange"
      :data="tableData"
      border
      style="width: 100%"
      height="289">
      <el-table-column
        v-if="false"
        prop="id">
      </el-table-column>
      <el-table-column
        fixed
        prop="date"
        label="创建日期"
        width="150"
        align="center">
      </el-table-column>
      <el-table-column
        prop="project"
        label="项目名称"
        width="350"
        align="center">
      </el-table-column>
      <el-table-column
        prop="name"
        width="350"
        label="曲线名称"
        align="center">
      </el-table-column>
      <el-table-column
        prop=""
        label="">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "DetectionStep1",
    data() {
      return {
        searchText: '',
        tableData: []
      }
    },
    mounted: function() {
      let _this = this
      let params = {"p1": "test"};
      axios.post('/jsonData/standards', params)
      .then(function (response) {
        // let standards = response.data.standards
        // let tempDatas = []
        // for (let i = 0; i < standards.length; i++) {
        //   let standard = {}
        //   standard.id = standards[i].id
        //   standard.date = standards[i].date
        //   standard.project = standards[i].project
        //   standard.name = standards[i].name
        //   tempDatas[i] = standard
        // }

        _this.tableData = response.data.standards
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });

      // this.tableData = [{
      //   id: 1,
      //   date: '2016-05-02',
      //   project: '京津高速',
      //   name: 'SBS改性沥青v1'
      // }, {
      //   id: 2,
      //   date: '2016-05-04',
      //   project: '京津高速',
      //   name: 'SBS改性沥青v2'
      // }, {
      //   id: 3,
      //   date: '2016-05-01',
      //   project: '京津高速',
      //   name: 'SBS改性沥青v3'
      // }, {
      //   id: 4,
      //   date: '2016-05-01',
      //   project: '京津高速',
      //   name: 'SBS改性沥青v4'
      // }, {
      //   id: 5,
      //   date: '2016-05-01',
      //   project: '京津高速',
      //   name: 'SBS改性沥青v5'
      // }, {
      //   id: 6,
      //   date: '2016-05-01',
      //   project: '京津高速',
      //   name: 'SBS改性沥青v6'
      // }, {
      //   id: 7,
      //   date: '2016-05-01',
      //   project: '京津高速',
      //   name: 'SBS改性沥青v7'
      // }, {
      //   id: 8,
      //   date: '2016-05-03',
      //   project: '京津高速',
      //   name: 'SBS改性沥青v85'
      // }]
    },
    methods: {
      changeInput() {
        let _this = this
        let params = {"p1": "test"};
        axios.post('/jsonData/standards', params)
          .then(function (response) {
            let standards = response.data.standards
            let tempDatas = []

            for (let i = 0; i < standards.length; i++) {
              let standard = {}
              standard.id = standards[i].id
              standard.date = standards[i].date
              standard.project = standards[i].project
              standard.name = standards[i].name
              tempDatas[i] = standard
            }

            _this.tableData = tempDatas

            console.log(response)
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      handleCurrentChange(val) {
        this.$emit('selectedStandard', val)
      }
    }
  }
</script>

<style scoped>

</style>
