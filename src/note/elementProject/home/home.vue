<template>
    <div>
        <el-row>
            <h1>首页</h1>
        </el-row>
        <el-row>
            <el-col :span="8">
                <strong>导航</strong>
            </el-col>
            <el-col :span="8">
                <strong>内容</strong>
            </el-col>
            <el-col :span="8">
                <strong>说明</strong>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <div v-for="(item,index) in routerLink">
                    <router-link :to="item.address">查看{{item.address}}</router-link>
                </div>
            </el-col>
            <el-col :span="16">
                <router-view />
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default{
        data () {
            return {
                routerLink:[
                    {
                        address:'/home/componentA'
                    },
                    {
                        address:'/home/slot'
                    },
                    {
                        address:'/home/httpService'
                    },
                    {
                        address:'/home/nodeNote'
                    },
                    {
                        address:'/home/Algorithm'
                    }
                ]
            }
        }
    }
</script>
<style scoped>


</style>
