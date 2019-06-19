<template>
    <div>
<!--      <h1>{{this.$route.query.standardId}}</h1>-->
<!--      <h1>{{this.$route.params.standard.id}}</h1>-->
      <el-container>
        <el-aside width="300px">
          <img width="280px" height="300px" style="margin-top: 25px" v-bind:src="require('../assets/tip.jpg')"/>
        </el-aside>
        <el-main>
          <el-form ref="form" :model="form" label-width="80px" align="left">
            <el-form-item label="项目名称">
              <el-input v-model="form.standard.project" readonly="true"></el-input>
            </el-form-item>
            <el-form-item label="曲线名称">
              <el-input v-model="form.standard.name" readonly="true"></el-input>
            </el-form-item>
            <el-form-item label="预期含量">
              <el-input-number v-model="form.content"
                               :precision="2" :step="0.1" :max="10" :min="0.1"></el-input-number>
              <el-checkbox v-model="form.contentChecked" style="margin-left: 10px"></el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-popover
                placement="bottom-start"
                width="380"
                trigger="hover"
                content="请将样品放置好后，点击扫描按钮，若多次扫描则采用平均数计算含量值，完成扫描后点击下一步继续">
                <el-button type="primary" slot="reference" @click="scan">开始扫描</el-button>
              </el-popover>
            </el-form-item>
          </el-form>

          <el-dialog
            title=""
            width="880px"
            :close-on-press-escape="false"
            :close-on-click-modal="false"
            :show-close="false"
            :visible.sync="dialogVisible"
            :before-close="handleClose">
            <div :class="className" :id="id" ref="myEchart"
                 v-loading="loading"
                 :style="{height:height,width:width}" ></div>
            <div slot="footer" class="dialog-footer">
              <el-button @click="scanComplete">放 弃</el-button>
              <el-button type="primary" @click="scanComplete">确 认</el-button>
            </div>
          </el-dialog>
        </el-main>
      </el-container>
    </div>
</template>

<script>
  import echarts from 'echarts'

  export default {
    name: "DetectionStep2",
    data() {
      return {
        form: {
          standard: this.$route.params.standard,
          // project: '京津高速',
          // name: 'SBS改性沥青v6',
          content: 5,
          contentChecked: false,
        },
        dialogVisible: false,
        loading: true
      }
    },
    props: {
      className: {
        type: String,
        default: 'yourClassName'
      },
      id: {
        type: String,
        default: 'yourID'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '315px'
      }
    },
    mounted() {
      this.initChart();
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      this.chart.dispose();
      this.chart = null;
    },
    methods: {
      scan() {
        this.loading = true
        this.dialogVisible = true

        setTimeout(() =>{
          this.loading = false
          this.initChart()
        }, 3000);
      },
      scanComplete() {
        this.dialogVisible = false

        if (this.chart) {
          this.chart.dispose();
          this.chart = null;
        }
      },
      initChart() {
        this.chart = echarts.init(this.$refs.myEchart)

        let data = [[0,116],[1,129],[2,135],[3,86],[4,73],[5,85],[6,73],[7,68],[8,92],[9,130],[10,245],[11,139],
          [12,115],[13,111],[14,309],[15,206],[16,137],[17,128],[18,85],[19,94],[20,71],[21,106],
          [22,84],[23,93],[24,85],[25,73],[26,83],[27,125],[28,107],[29,82],[30,44],[31,72],[32,106],[33,107],
          [34,66],[35,91],[36,92],[37,113],[38,107],[39,131],[40,111],[41,64],[42,69],[43,88],[44,77],[45,83],
          [46,111],[47,57],[48,55],[49,60],[50,33]];

        let dateList = data.map(function (item) {
          return item[0];
        });
        let valueList = data.map(function (item) {
          return item[1];
        });

        let option = {
          visualMap: [{
            show: false,
            type: 'continuous',
            seriesIndex: 0
          }],

          title: [{
            left: 'center',
            text: ''
          }],

          tooltip: {
            trigger: 'axis'
          },

          xAxis: [{
            axisLabel: {
              interval: 9
            },
            boundaryGap: false,
            data: dateList
          }],

          yAxis: [{
            splitLine: {show: false}
          }],

          series: [{
            type: 'line',
            showSymbol: false,
            data: valueList
          }]
        };

        this.chart.setOption(option)
      }
    }
  }
</script>

<style scoped>
  .el-aside {
    text-align: center;
    height: 330px;
  }

  .el-main {
    text-align: center;
    height: 330px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
