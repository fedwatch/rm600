<template>
    <div id="app">
        <div>
            <!--faq-->
            问：我什么都不懂一点基础也没有可以学习吗？
            答：完全不用担心，我们有系列的零基础课程提供学习，如果经济条件允许，建议做我徒弟先，不懂的问题立刻联系我解决!

            问：我不懂英语可以学吗？
            答：学习过程中肯定会涉及到英语，但是不多。熟能生巧，只要多练习几遍就完全能看懂了。实在不行还有易语言可以学习

            问：你可以帮我盗个QQ号或者刷个钻吗？
            答：抱歉！这里我想说明的一点，我只教你技术，而不是帮你，不会的都可以问

            问：做了你徒弟问你问题你会马上解答吗？
            答：会的，只要我在线便马上解答，本人除了睡觉就是玩电脑，当然有时会忙一点，QQ发我的人比较多，要是不在线的话，也可以留言，实在很急可以打我手机号 还可以在学员内部群问师兄们

            问：可以先教吗？
            答：当然可以，可以进我网盘20919898.cccpan.com 登陆密码123 ，里面有个综合教程，里面都是我原创的，当然徒弟的教程就不止这些了，另外打开教程网也有教程哦

            问：你什么黑客组织吗？
            答：说不上是组织，我创建了玄风安全小组，还行，里面的人小白也不算太多，都是一群热爱网络的青年，当然也不算是什么大黑阔，大家有问题可以进去交流！

            问：我还是个学生可以学吗？
            答：可以，但是不收小学生，只要你会电脑的基本操作，看得懂字就行

            问：分期付款可以吗？
            答：可以，分2次，每次50，当然第二次你想什么时候给都可以，给了一半的，我一般会写个备注（半）上去，而且不能进徒弟群（当你付完剩下的就可以进），教你的技术自然就不多，不过还是建议一次付完，享受最高的待遇

            问：怎么付款？
            答：财付通，支付宝，微信，没有的话买手机充值卡，手机店、报亭一般都有卖
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
