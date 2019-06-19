<template>
  <div>
    <el-container>
      <el-header>
<!--        <h1>{{this.standard.id}}</h1>-->
        <el-steps ref="steps" :active="step" align-center>
          <el-step title="步骤1" description="选择标定曲线"></el-step>
          <el-step title="步骤2" description="扫描样品光谱"></el-step>
          <el-step title="步骤3" description="计算样品含量"></el-step>
          <el-step title="步骤4" description="创建检测报告"></el-step>
        </el-steps>
      </el-header>
      <el-main>
        <router-view @selectedStandard="selectedStandard"></router-view>
      </el-main>
      <el-footer>
        <el-button v-on:click="prevStep">上一步</el-button>
        <el-button v-on:click="nextStep">{{nextStepButtonText}}</el-button>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "Detection",
    data() {
      return {
        standard: {id: 0, project: '', name: ''},
        step: 1,
        nextStepButtonText: '下一步'
      }
    },
    created: function() {
      this.$router.push('/detection/step' + this.step)
    },
    methods: {
      selectedStandard: function(standard) {
        this.standard = standard
      },
      prevStep: function() {
        if (this.step == 2) {
          this.standard = {id: 0, project: '', name: ''}
        }

        this.step = this.step - 1 <=0 ? 1 : this.step - 1
        if (this.step < 4) {
          this.nextStepButtonText = '下一步'
        }

        this.$router.push({
          name: 'detection_step' + this.step,
          params: {
            standard: this.standard
          }
        })
      },
      nextStep: function() {
        if (this.step == 1) {
          if (this.standard.id == 0) {
            this.$message({
              message: '请选择标定曲线',
              type: 'warning',
              duration: 1500,
              offset: 325
            });
            return
          }
        }

        if (this.step == 4) {
          this.nextStepButtonText = '下一步'
          this.step = 1
          this.$router.push('/detection/step1')
          return
        }

        this.step = this.step + 1 >=4 ? 4 : this.step + 1
        if (this.step == 4) {
          this.nextStepButtonText = '已完成'
        }

        this.$router.push({
          name: 'detection_step' + this.step,
          params: {
            standard: this.standard
          }
          // params: {
          //   standardId: this.standardId
          // }
          // path: '/detection/step' + this.step,
          // query: {
          //   standardId: 1000
          // }
        })
      }
    }
  }
</script>

<style scoped>
  .el-header, .el-footer {
    text-align: center;
  }

  .el-main {
    text-align: center;
    margin-top: 10px;
    height: 370px;
  }
</style>
