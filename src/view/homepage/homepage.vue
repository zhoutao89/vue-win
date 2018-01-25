<template>
    <div class="all">
        <header>
            <p>
                <i class="el-icon-printer"></i>
                <span>扫一扫</span>
            </p>
            <el-input class="input" id="input" placeholder="请输入内容" prefix-icon="el-icon-search" clearable>
            </el-input>
            <div id="search">
            </div>
            <p>
                <i class="el-icon-message"></i>
                <span>消息</span>
            </p>
        </header>  
        <main>
            <mt-swipe :auto="4000" class="banner">
                <mt-swipe-item>
                    <img src="../img/banner01.jpg" height="521" width="1080" alt="" />
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../img/banner02.jpg" height="521" width="1080" alt="" />
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../img/banner03.jpg" height="521" width="1080" alt="" />
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../img/banner04.jpg" height="521" width="1080" alt="" />
                </mt-swipe-item>
            </mt-swipe>
            <div class="logo">
                <img src="../img/logo1.jpg" alt="" class="a"/>
                <img src="../img/logo2.jpg" alt="" class="b"/>
                <img src="../img/logo3.jpg" alt="" class="c"/>
                <img src="../img/logo4.jpg" alt="" />
                <img src="../img/logo5.jpg" alt="" />
                <img src="../img/logo6.jpg" alt="" />
                <img src="../img/logo7.jpg" alt="" />
                <img src="../img/logo8.jpg" alt="" />
                <img src="../img/logo9.jpg" alt="" />
                <img src="../img/logo10.jpg" alt="" />
            </div>
            <img src="../img/bimg.jpg" class="bigimg" alt="" />
            <div class="title">
                <img src="../img/title.jpg"alt="" />
                <p>
                    <mt-swipe :show-indicators="false">
                        <mt-swipe-item>年货主会场 9.9元秒6瓶美酒</mt-swipe-item>
                        <mt-swipe-item>APP首单满一百100送100活动规则点击...</mt-swipe-item>
                        <mt-swipe-item>白洒全场五折起买得多送得多...</mt-swipe-item>
                    </mt-swipe>
                </p>
            </div>
            <mt-header title="" class="time">
                <router-link to="/" slot="left">
                    <mt-button>掌上秒拍</mt-button>
                </router-link>
                <mt-button  slot="right">
                    <span>更多决口等你来</span>
                    <span class="el-icon-arrow-right"></span>
                </mt-button>
            </mt-header>
            <ul class="first">
                <li v-for="item in list" :key="item.id">
                    <img :src="item.imgurl" alt="" />
                    <span>{{item.name}} ￥{{item.nprice}} {{item.title}}</span>
                </li>
            </ul>
            <mt-swipe :show-indicators="false" class="bigban">
                <mt-swipe-item>
                    <img src="../img/a1.jpg" alt="" />
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../img/a2.jpg" alt="" />
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../img/a3.jpg" alt="" />
                </mt-swipe-item>
            </mt-swipe>
            <div class="firstTitle">
                <img src="../img/title01.jpg"alt="" />
                <img src="../img/ping01.jpg"alt="" class="ping"/>
                <img src="../img/ping02.jpg"alt="" class="ping"/>
                <img src="../img/ping03.jpg" alt="" class="ping01"/>
                <img src="../img/ping04.jpg" alt="" class="ping01"/>
                <img src="../img/ping05.jpg" alt="" class="ping01"/>
            </div>
            <ul class="logos">
                <li v-for="item in logo">
                    <img :src="item.img" alt="" />
                </li>
            </ul>
            <div class="b01">
                <img src="../img/title02.jpg" alt="" class="title02"/>
                <img src="../img/b01.jpg" alt="" class="b02"/>
                <img src="../img/b02.jpg" alt="" class="b02"/>
                <img src="../img/b03.jpg" alt="" class="b02"/>
            </div>
            <mt-swipe :show-indicators="false" class="bigban">
                <mt-swipe-item>
                    <img src="../img/g01.jpg" alt="" />
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../img/g02.jpg" alt="" />
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../img/g03.jpg" alt="" />
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../img/g04.jpg" alt="" />
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../img/g05.jpg" alt="" />
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../img/g06.jpg" alt="" />
                </mt-swipe-item>
            </mt-swipe>
            <img src="../img/title03.jpg" alt="" class="title03"/>
            <dl class="goods">
                <dt v-for="item in datalist" :key="item.id">
                    <img :src="item.imgurl" alt="" />
                    <span>{{item.name}} ￥{{item.nprice}} {{item.title}}</span>
                </dt>
            </dl>
            <dl class="goods"
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10">
                <dt v-for="item in lists" :key="item.id">
                    <img :src="item.imgurl" alt="" />
                    <span>{{item.name}} {{item.nprice}} {{item.title}}</span>
                </dt>
            </dl>
        </main>
        <footer>
            <ul>
                <li>
                    <img src="../img/01.png" height="58" width="70" alt="" class="img"/>
                </li>
                <li>
                    <img src="../img/02.png" height="58" width="70" alt="" class="img"/>
                </li>
                <li>
                    <img src="../img/c.png" height="58" width="70" alt="" />
                </li>
                <li @click="goCar">
                    <img src="../img/03.png" height="58" width="70" alt="" class="img"/>
                </li>
                <li @click="goMy">
                    <img src="../img/04.png" height="58" width="70" alt="" class="img"/>
                </li>
            </ul>
        </footer>
    </div>
</template>
<script>
    import { Header } from 'mint-ui';
    import axios from 'axios';
    var times;

    import a from '../img/logos01.jpg';
    import b from '../img/logos02.jpg';
    import c from '../img/logos03.jpg';
    import d from '../img/logos04.jpg';
    import e from '../img/logos05.jpg';
    import f from '../img/logos06.jpg';
    import g from '../img/logos07.jpg';
    import h from '../img/logos08.jpg';
    import i from '../img/logos09.jpg';
    import j from '../img/logos10.jpg';
    import k from '../img/logos12.jpg';
    import l from '../img/logos13.jpg';
    import m from '../img/logos14.jpg';
    
    import { InfiniteScroll } from 'mint-ui';
    export default {
            name: 'homepage',
            data() {
                return {
                    data:[],
                    datalist:[],
                    list:[],
                    lists:[],
                    logo:[
                        {img:a},
                        {img:b},
                        {img:c},
                        {img:d},
                        {img:e},
                        {img:f},
                        {img:g},
                        {img:h},
                        {img:i},
                        {img:j},
                        {img:k},
                        {img:l},
                        {img:m}
                    ]
                    
                }
            },
            mounted:function(){
                axios.get('http://localhost:88/list').then(response => {
                    // console.log(response.data.data.results);
                    this.data=response.data.data.results
                    this.list = this.data.splice(0,5);
                    this.lists = this.data.splice(0,6);
                    this.datalist = this.data.splice(0,16);
                });
                var span = $('.mint-header-title');
                var end=Date.parse("2018/1/28/10:04")
                var timers=setInterval(timer,1000);
                function timer(){
                    var time=new Date;
                    var now=time.getTime();
                    var offset=Math.floor((end-now)/1000)

                    var seconds=Math.floor(offset%60);
                    seconds=(seconds<10? '0' : '')+seconds;

                    var minutes=Math.floor(offset/60)%60;
                    minutes=(minutes<10? '0' : '')+minutes;

                    var hours=Math.floor(offset/60/60)%24;
                    hours=(hours<10? '0' : '')+hours;

                    var day=Math.floor(offset/60/60/24);

                    span[0].innerText='距活动结束还有'+day+'天'+hours+'小时'+minutes+'分'+seconds+'秒';
                    if(offset<=0){
                        clearInterval(timers);
                    }
                }

                var $ip = $('.el-input__inner');
                var $btn = $('.el-icon-search');
                console.log($ip,$btn);
                $ip.on('input',function(){
                    $('#search').show();
                    var text = $ip.val();
                    axios.get('http://10.3.136.69:88/data', 
                        {params:{data: text}}).then(response => {
                        var date = response.data.data.results;
                        console.log(date)
                        var $div = $('<div>');
                        if(date[0]!=undefined){
                            for(var i=0;i<4;i++){
                                var $p = $('<p/>').text(date[i].name);
                                $div.append($p);
                            }
                            $('#search').html($div);
                        }else{
                            console.log(777);
                            var $p = $('<p/>').text('没有找到对应的内容');
                            $div.append($p);
                            $('#search').html($div);
                        }

                    })
                }).on('blur',function(){
                    $('#search').hide();
                })

                var $imgs = $('.logo').children()
                $imgs.on('click',function(){
                    location.href = "#/goodslist";
                })


                var $img = $('img');
                $img.on('click',function(){
                    location.href = "#/goodslist";
                })
                var $goodslist = $('.goods');
                $goodslist.on('click',function(){
                    location.href = "#/goodslist";
                })
                
                var $good = $('.firstTitle').children()
                $good.on('click',function(){
                    location.href = "#/goodslistputao";
                })

                var $good = $('.b').on('click',function(){
                    location.href = "#/goodslistputao";
                })

                var $good = $('.c').on('click',function(){
                    location.href = "#/goodslistred";
                })

            },
            methods:{
                loadMore() {
                    this.loading = true;
                    // console.log(this.lists.length);
                    let num = 10;
                    let number='';
                    let add=setTimeout(() => {
                        let last = this.lists[this.lists.length - 1];
                        for (let i = 1; i <= 10; i++) {
                            num+=1
                            number=num+10
                            axios.get('http://localhost:88/list').then(response => {
                                // console.log(response.data.data.results);
                                this.data=response.data.data.results
                                this.lists = this.data.splice(num,number);
                            });
                            this.lists.push(last + i);
                            if(last>=lists.length){
                                setInterval(add);
                            }
                        }
                        this.loading = false;
                    }, 2500);
                },
                goCar:function(){
                    this.$router.push({name:'shoppingcar'});
                },
                 goMy:function(){
                    this.$router.push({name:'myorder'});
                }
            }
        }
</script>
<style lang="scss" scoped>
    *{
     padding:0;
     margin:0;
     font-size:0.32rem;
}
 .all{
     height:100%;
     display:flex;
     flex-direction:column;
     background:#F4F5F7;
}
 header{
     height:1.3333333333333333rem;
     width: 100%;
     display:flex;
     justify-content:space-around;
     padding-top: 0.29333333333333333rem;
     position: relative;
     top:0;
     left: 0;
     background: #584234;
     color: #fff;
     position:relative;
}
 header p{
     display:flex;
     flex-direction:column;
     text-align: center;
}
 header p i{
     font-size: 0.5333333333333333rem;
}
 header .input{
     width:6.666666666666667rem;
     height: 0.5333333333333333rem;
     margin-top: 0.08rem;
}
 header #search{
     position: absolute;
     border:1px solid #ccc;
     width:70%;
     left:50%;
     transform:translateX(-50%);
     top:0.9066666666666666rem;
     z-index:1000;
     background: #fff;
     color: #000;
     display:none;
}
 header #search p{
     text-align:left;
     line-height:0.5333333333333333rem;
}
 main{
     flex:1;
     overflow-x: hidden;
}
 main ul{
     width: 100%;
}
 main .logo{
     display:flex;
     flex-wrap:wrap;
}
 main .logo img{
     width: 20%;
     height:2.4rem;
}
 main .banner{
     height: 4rem;
}
 main .banner img{
     height: 4rem;
     width: 100%;
}
 main .bigimg{
     height: 2.6666666666666665rem;
     width: 100%;
}
 main .title img{
     height: 0.8rem;
     width: 30%;
     float: left;
}
 main .title p{
     height: 0.8rem;
     float: left;
     width: 66%;
     line-height: 0.8rem;
     padding-left: 0.5333333333333333rem;
     box-sizing:border-box;
}
 main .time{
     background: #fff;
     color: #000;
     height: 0.8rem;
     margin: 0.13333333333333333rem 0;
     line-height: 0.8rem;
}
 main .time .mint-header-title{
     font-size: 0.26666666666666666rem;
}
 main .first{
     width: 100%;
     overflow-y:hidden;
     height: 5.333333333333333rem;
}
 main .first li{
     height: 5.333333333333333rem;
     width: 3.3333333333333335rem;
     background: #fff;
     position: relative;
}
 main .first li img{
     height: 2.933333333333333rem;
     width: 3.3333333333333335rem;
}
 main .first li::before{
     content:'';
     height: 0.4rem;
     width: 100%;
     background: #fff;
     position: absolute;
     bottom: 0;
}
 main .bigban{
     height: 2.48rem;
}
 main .bigban img{
     width: 100%;
}
 main .firstTitle img{
     width: 100%;
}
 main .firstTitle .ping{
     height: 2.6666666666666665rem;
     width: 49%;
     display: inline-block;
}
 main .firstTitle .ping01{
     height: 2.6666666666666665rem;
     width: 32.7%;
     display: inline-block;
}
 main .logos{
     overflow-y: hidden;
     height: 2.4rem;
     background: #fff;
}
 main .logos li img{
     float: left;
     height: 1.8666666666666667rem;
     width: 1.8666666666666667rem;
     margin: 0 0.02666666666666667rem;
}
 main .title02{
     width: 100%;
}
 main .b01{
     position: relative;
     padding-top: 0.8rem;
     height: 6.666666666666667rem;
     width: 100%;
}
 main .title02{
     position: absolute;
     top: -0.29333333333333333rem;
}
 main .b01 .b02{
     width: 50%;
     float: left;
}
 main .b01 .b02:nth-child(2),main .b01 .b02:nth-child(3){
     margin: 0.18666666666666668rem 0;
}
 main .title03{
     width: 100%;
     margin-top: 0.21333333333333335rem;
}
 main .goods{
     height: 12rem;
}
 main .goods dt{
     width: 49%;
     height: 5.333333333333333rem;
     float: left;
     background: #fff;
     padding: 0 0.05333333333333334rem;
     box-sizing:border-box;
     text-align: center;
}
 main .goods dt img{
     height: 4rem;
     width:100%;
}
 footer{
     height:1.4666666666666666rem;
}
 ul{
     display:flex;
     justify-content:space-around;
     text-align: center;
     height: 100%;
     padding-top:0.13333333333333333rem;
}
 li{
     display:flex;
     flex-direction:column;
     text-align: center;
     img{
         height:1.0666666666666667rem;
         width:1.2rem;
    }
}
</style>



