<template>
    <div id="app">

        <!--广告-->
        <div class="ads ads-wrapper">
            <h1 class="ads-title"></h1>
            <div class="ads-content">
                <p>
                    如果你想学好黑客|网络技术 下面的请认真看 做终生徒弟仅需 <span>{{price}}</span>元 ！
                </p>
            </div>
        </div>



        <!--客服-->
        <div class="kf">
            <span>
                  晨昱QQ：{{kf_qq}}
            </span>
        </div>






        <!--广告-->
        <div class="ads ads-wrapper">
            <h1 class="ads-title"></h1>
            <div class="ads-content">
                <p>您是否...... </p>
                <p>想学习黑客安全技术却不知从何学起？</p>
                <p>想学习黑客安全技术，加入其它培训学费太高？</p>
                <p>自己已会一些简单的黑客安全技术，却想提高自己？</p>
                <p>想要学习一些黑客安全技术来保护自己，防止自己被黑？</p>
                <p>想要了解黑客安全技术，并且以后准备加入到IT行业中？</p>
                <p>那我们的信息对您再适合不过了......</p>
            </div>
        </div>



        <!--学员列表-->
        <div class="students students-wrapper">
            <h1 class="students-title">最近加入{{site_title}}列表</h1>
            <div class="students-content">
                <table>
                    <thead>
                    <tr>
                        <td>用户昵称</td>
                        <td>所在城市</td>
                        <td>联系方式</td>
                        <td>当前进度</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{{username}}</td>
                        <td>{{city}}</td>
                        <td>{{qq}}</td>
                        <td>{{status}}</td>
                    </tr>
                    <tr>
                        <td>铭少****</td>
                        <td>青岛</td>
                        <td>[62086****]</td>
                        <td>已加入培训</td>
                    </tr>

                    </tbody>
                </table>
            </div>

        </div>








        <!--课程介绍-->
        培训内容
        <!--初级-->
        基础入门
        掌握基本命令ping、ipconfig、ftp、netstat、tracert，掌握基础系统操作，黑客的定义，懂得操作基本工具Super、流光、X-Scan、Analyzer、Sniffer Pro嗅探器工具、tcpdump、影音神探、基本技术“隐身术”、远控、1433/3306抓鸡、爆破服务器+维护、安装虚拟机、漏洞攻防、制作钓鱼技术+加破解

        <!--高级-->
        高级阶段
        [木马免杀技术][网站挂马与清除技术][WINXP系统优化维护][个人防火墙安装与配置][文件数据加密技术][木马高级捆绑技术][网络代理使用][虚拟机深入了解与vpn配置][网吧抓鸡技术][入侵网管服务器][网吧免费上网][C段渗透技术][asp+php+html脚本语言][DDOS分布式拒绝服务攻击][MD5破解技术][各类编程][网站建设][SEO网站优化技术][淘宝开店技术][快速仿建筑技术][javascript脚本编程][图片木马制作][软件脱壳][软件破解][CC攻击+防御技术][ARP攻击][ARP欺骗防护][深入学习扫描检测，嗅探监听][邮件挂马][电脑主板深入维修][批量入侵国外服务器][RAR压缩包密码破解]

        <!--导师展示-->
        <!--导师祝语-->
        晨昱：我希望每个加入培训的徒弟都能学到真正的技术，希望大家坚持我们共同的爱好，也希望你们学到技术的同时，更多的不是搞破坏，而是在如今的网络上担任正义的角色。我会在空余的时间录各种教程，也谢谢你们对我的支持。


        <!--价格标准-->
        <div class="price price-wrapper">
            <h1 class="price-title">{{price_title}}</h1>
            <div class="price-content">
                <ul>
                    <li>诚信对人，绝对保证你们的权利</li>
                    <li>加入后免费提供教学内部软件，不另收费，免费赠送价值上万的软件工具</li>
                    <li>从基本开始讲，学起来更加轻松，可以随时提问咨询，适当支持通讯提问</li>
                    <li>如果你没有固定的时间或有其他原因，我们可以给你做语音教程发给你，保证你的学习不耽误</li>
                    <li>友情提醒：哪个人会给你一对一讲课，那是骗人的！</li>
                    <li>课程时间由你们来决定，教程课件全部具备，保证教学质量，更好的学习技术。</li>
                    <li>{{author}}为所有徒弟提供免费破解md5服务。</li>
                </ul>

                <span>收费制度标准 ：{{price}}元终生徒弟，决不以任何理由另收费</span>
            </div>
        </div>



        <!--营销话术-->
        <div class="faq faq-wrapper">
            <h1 class="faq-title">FAQ 常见问题</h1>
             <ul class="faq-nav-pills nav nav-pills">

                 <div>
                     <p class="a">问：我什么都不懂一点基础也没有可以学习吗？</p>
                     <p class="q">答：完全不用担心，我们有系列的零基础课程提供学习，如果经济条件允许，建议做我徒弟先，不懂的问题立刻联系我解决!</p>
                 </div>
                 <div>
                     <p class="a">问：我不懂英语可以学吗？</p>
                     <p class="q">答：学习过程中肯定会涉及到英语，但是不多。熟能生巧，只要多练习几遍就完全能看懂了。实在不行还有易语言可以学习</p>
                 </div>
                 <div>
                     <p class="a">问：你可以帮我盗个QQ号或者刷个钻吗？</p>
                     <p class="q">答：抱歉！这里我想说明的一点，我只教你技术，而不是帮你，不会的都可以问</p>
                 </div>
                 <div>
                     <p class="a">问：做了你徒弟问你问题你会马上解答吗？</p>
                     <p class="q">答：会的，只要我在线便马上解答，本人除了睡觉就是玩电脑，当然有时会忙一点，QQ发我的人比较多，要是不在线的话，也可以留言，实在很急可以打我手机号 还可以在学员内部群问师兄们</p>
                 </div>
                 <div>
                     <p class="a">问：可以先教吗？</p>
                     <p class="q">答：当然可以，可以进我网盘20919898.cccpan.com 登陆密码123 ，里面有个综合教程，里面都是我原创的，当然徒弟的教程就不止这些了，另外打开教程网也有教程哦</p>
                 </div>
                 <div>
                     <p class="a">问：你什么黑客组织吗？</p>
                     <p class="q">答：说不上是组织，我创建了玄风安全小组，还行，里面的人小白也不算太多，都是一群热爱网络的青年，当然也不算是什么大黑阔，大家有问题可以进去交流！</p>
                 </div>
                 <div>
                     <p class="a">问：我还是个学生可以学吗？</p>
                     <p class="q">答：可以，但是不收小学生，只要你会电脑的基本操作，看得懂字就行</p>
                 </div>
                 <div>
                     <p class="a">问：分期付款可以吗？</p>
                     <p class="q">答：可以，分2次，每次50，当然第二次你想什么时候给都可以，给了一半的，我一般会写个备注（半）上去，而且不能进徒弟群（当你付完剩下的就可以进），教你的技术自然就不多，不过还是建议一次付完，享受最高的待遇</p>
                 </div>
                 <div>
                     <p class="a">问：怎么付款？</p>
                     <p class="q">答：财付通，支付宝，微信，没有的话买手机充值卡，手机店、报亭一般都有卖</p>
                 </div>

             </ul>
        </div>


        <div class="ads ads-wrapper">
            <h1 class="ads-title"></h1>
            <div class="ads-content">
                <p>下面是一些常问的问题：</p>
                <p>一日为师，那就终身为师了。我收徒弟可不是像爱国者黑客等黑客培训中心。他们是通过黑客培训来赚钱的网站而已。 而我们是让你们能够在现实当中找到理想的IT工作！而且能够在网络上自己赚钱！如果你只想搞网络破坏的 请不要联系我 我也不收你这号人物！</p>
                <p>现在很多朋友对黑客的概念越来越模糊，会盗Q的自称是黑客，会刷钻的自称是黑客，抓点肉鸡攻击他人站点的也说自己是黑客，甚至有些大的站点挂着非常唬人的名称噱头自称自己是最大的黑客站点！经常见一些傻逼，会点刷个钻，做个钓鱼，就出来，收徒还几百不止，这里我不想说这些人、人品第一，技术第二，即便是黑客信奉技术巅峰！</p>
                <p>收徒弟说明：收几个徒弟。 教授网络安全技术。首先对网络要有很浓厚的兴趣。不过有一点就是，不是免费的。关于这个定价，的确让我挺头疼，一些学生的话没什么钱，有人会问为什么要收费，那我就解释下。1.收费就相当与一道门槛。毕竟我上网这么久了，什么人都见过。以前我也收过徒弟，但是有些SB想认我做师傅，就是为了让我帮刷几个钻，很是郁闷，希望大家可以明确拜师的目标</p>
                <p>教学时间：只要你在线，什么时候都能问我问题。不是一对一。不是像一些培训网站，就给你一套教程。我除了睡觉就在电脑旁边。 我提倡的就是 不懂 就要问！ 但前提是你确实解决不了再来问我 先试着自己解决这个问题 不然你对这个问题印象不深刻 下次遇到还是不会！</p>
                <p>教学方式：通过我自己录制的，绝对是视频加语音，本人最讨厌文字教程，又浪费时间又不详细。看完后懂了，最好，不懂的话远程协助，直到弄懂为止。</p>

            </div>
        </div>




        <!--广告-->

        <div class="ads ads-wrapper">
            <h1 class="ads-title"></h1>
            <div class="ads-content">
                <p>100元 ！真的只需100元 决不二次收费！</p>
                <p>想学习黑客安全技术却不知从何学起？</p>
                <p>想学习黑客安全技术，加入其它培训学费太高？</p>
                <p>自己已会一些简单的黑客安全技术，却想提高自己？</p>
                <p>想要学习一些黑客安全技术来保护自己，防止自己被黑？</p>
                <p>想要了解黑客安全技术，并且以后准备加入到IT行业中？</p>
                <p>那我们的信息对您再适合不过了......</p>
            </div>
        </div>



        加入后更能获得{{site_title}}教程网VIP（<a :href="site_storeUrl" >{{site_storeName}}</a>{{site_storeUrl}}）

        当你犹豫的时候，别人已经开始行动！

        现在，这个机会就在你眼前，你可以假装看不见，不去理它，但你心里很清楚，你需要的是行动，是果断的行动！请记住，犹豫的代价可能是惨淡的努力、破碎的梦想，还有挥之不去的艰辛和遗憾！






<!--广告-->
        晨昱学员宗旨：每天进步一点点，无形跨出一大步

        晨昱这里必须说一下，学员宗旨那句话，是我2013年想出来的，当时我百度了一下，网上根本没有这句话

        现在却有不少人盗用我的话，真可笑

        就连页面也全部模仿我，没技术就出来收徒的太多，只能靠模仿

        大家可以搜索那句话，再查查他们的建站时间和本站的建站时间，就知道谁模仿谁了

        自己亲手写的网页，被模仿，还反过来有人说我模仿别人，太令人愤怒




        我从来不会跟别人说我是黑客，或者不是黑客，只是想告诉网上一些没技术装逼的人一句话

        自称自己是黑客的人，只是为了满足你的黑客梦或者说是虚荣心，只有当别人说你是黑客，才算得上是黑客。



        晨昱对网络菜鸟说的话：

        你想学宽带刷钻，你会看到一些人网名、QQ资料 写教刷钻什么的，你们不要为了刷钻而给他们钱，因为他们不会百分百教会你，而且这个宽带刷钻的方法、除了成本钻，其他的方法都不稳定，所以你们不用浪费太多时间去研究刷钻，要钻就去卡盟买，一个几毛而已，或者用钱。那些全部钻300/年的都是骗子，出售1个月钻仅需几元的，大多是在卡盟买的！大家小心了



        一心想要刷钻刷枪的，注定被人盗号，被人骗钱，

        然后中了开机有登录密码的毒，这类小学生别找我

        晨昱在这里声明，本人不收小学生，悟性太低



        目前晨昱黑客技术学员超过1000人，有人问我 徒弟怎么这么多

        并不是我宣传得好， 最大的原因：价格合理、实力可见、诚信第一



        <!--导师展示-->
        本人职业Hacker，十年电脑操作经验，八年网络Hacker经验，20%的电脑天赋+80%的努力，

        有的是实力，有的是技术，专业技术培训，欢迎来做我徒弟学习



        <!--版权声明-->

        <div class="footer ">
            <p>&copy; {{copyright}} 【 {{site_title}} 】 版权所有</p>
        </div>



    </div>


</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                site_title:"",
                copyright:"",
                kf_qq:"",
                author:"",
                site_desc:"",
                as:"",
                site_storeName:"",
                site_storeUrl:"",
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
