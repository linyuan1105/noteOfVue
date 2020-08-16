<template>
    <div>
        <div class="container">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>es6的知识点</span>
                  <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                </div>
                <div v-for="Knowledge in es6KnowledgeList" :key="Knowledge.name" class="text item">
                   <router-link :to="'/es6component/'+Knowledge.path">{{Knowledge.path}}</router-link>介绍
                   
                </div>
                
              </el-card>
              <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import routerList from './childcomponent/childrouter.js'
    export default{
        data() {
            return {
                es6KnowledgeList:routerList
            }
        },
    }
</script>

<style>
    
    .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
