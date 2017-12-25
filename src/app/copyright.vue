<template>
    <div id="app">
        <div>
            <!--版权声明-->
            <!--信誉背书-->
            Copyright(C)2013-2015 【晨昱黑客技术培训基地】 版权仅晨昱个人所有
        </div>



    </div>


</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                book: {
                    id: 0,
                    author: '',
                    name: '',
                    price: ''
                },
                books: [{
                    id: 1,
                    author: '曹雪芹',
                    name: '红楼梦',
                    price: 32.00
                }, {
                    id: 2,
                    author: '施耐庵',
                    name: '水浒传',
                    price: 30.0
                }, {
                    id: '3',
                    author: '罗贯中',
                    name: '三国演义',
                    price: 24.0
                }, {
                    id: 4,
                    author: '吴承恩',
                    name: '西游记',
                    price: 20.0
                }],
                msg: 'Welcome to Your Vue.js App'
            }
        },
        methods:{
            getDocs(e){
                e.preventDefault()
                return console.log("ok")
            },
            formatter(row, column) {
                return "￥ "+row.price+" 元";
            }
        }
    }
</script>

<style lang="scss">

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }

    .el-col {
        border-radius: 4px;
    }

    /*.bg-purple-dark {*/
        /*background: #99a9bf;*/
    /*}*/

    /*.bg-purple {*/
        /*background: #d3dce6;*/
    /*}*/

    /*.bg-purple-light {*/
        /*background: #e5e9f2;*/
    /*}*/

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f00;
    }


</style>
