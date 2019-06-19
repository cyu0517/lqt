<template>
  <div id="app">
    <img width="1000px" height="80px" v-bind:src="require('./assets/banner.jpg')"/>
    <el-tabs v-model="activeTabName">
      <el-tab-pane name="page0">
        <span slot="label"><i class="el-icon-menu"></i> 首页</span>
        <el-row :gutter="12">
          <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }">
              <img v-bind:src="require('./assets/index01.png')" class="image">
              <div style="padding: 10px;">
                <div class="bottom clearfix">
                  <el-button type="text" class="button" v-on:click="showTabPage('page1')">标定曲线</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }">
              <img v-bind:src="require('./assets/index01.png')" class="image">
              <div style="padding: 10px;">
                <div class="bottom clearfix">
                  <el-button type="text" class="button" v-on:click="showTabPage('page2')">指纹库</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }">
              <img v-bind:src="require('./assets/index01.png')" class="image">
              <div style="padding: 10px;">
                <div class="bottom clearfix">
                  <el-button type="text" class="button" v-on:click="showTabPage('page3')">含量检测
                  </el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }">
              <img v-bind:src="require('./assets/index01.png')" class="image">
              <div style="padding: 10px;">
                <div class="bottom clearfix">
                  <el-button type="text" class="button" v-on:click="showTabPage('page4')">指纹比对
                  </el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <h4 style="color: #409EFF">沥青检测系统 v1.0</h4>
      </el-tab-pane>
      <el-tab-pane name="page1" label="标定曲线">

      </el-tab-pane>
      <el-tab-pane name="page2" label="指纹库">

      </el-tab-pane>
      <el-tab-pane name="page3" label="含量检测">
        <detection></detection>
      </el-tab-pane>
      <el-tab-pane name="page4" label="指纹比对">

      </el-tab-pane>
      <el-tab-pane label="报告查看">

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import Detection from '@/components/Detection'

  export default {
    name: 'App',
    data() {
      return {
        activeTabName: 'page0'
      }
    },
    methods: {
      showTabPage: function (page) {
        this.activeTabName = page;
      }
    },
    components: {
      Detection
    }
  }
</script>

<style>
  #app {
    font-family: Helvetica, sans-serif;
    text-align: center;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both;
  }
</style>
