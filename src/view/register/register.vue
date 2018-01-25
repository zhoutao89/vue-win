<template>
    <div id="register">
        <mt-header title="注册" class="head">
            <router-link to="/" slot="left">
                <mt-button class="el-icon-arrow-left">返回</mt-button>
                <mt-button @click="handleClose"></mt-button>
            </router-link>
            <mt-button slot="right" @click="login">登录</mt-button>
        </mt-header>
        <main class="main">
            <mt-field label="用户名"  v-model="number" :state="status" placeholder="请输入手机号" type="number" class="el-icon-mobile-phone name">
            </mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" :state="password" class="el-icon-sold-out password">
                <mt-switch v-model="value" class="show"></mt-switch>
            </mt-field>
            <mt-cell title="" class="forget"></mt-cell>
            <div class="btns">
                <mt-button type="default" class="btn" @click="register">注册</mt-button>
            </div>
            <mt-cell value="手机快捷登录" class="cellphone"></mt-cell>
        </main>
        <footer class="foot">
            <img src="../img/bottom.jpg" height="238" width="719" alt="" class="bos"/>
        </footer>
    </div>
</template>

<script>
    import axios from 'axios';
    import { Header } from 'mint-ui';
    import { MessageBox } from  'mint-ui';
    import qs from 'qs';
    import { Indicator } from 'mint-ui';

    var self;
    var reg = /^(13[0-9]|14[579]|15[0-3,5-9]|17[0135678]|18[0-9])\d{8}$/;
    var pass = /^[a-zA-Z]\w{5,17}$/;
    export default {
        data() {
            self = this;
            return {
                status:"",
                password:"",
                value:false
            }
        },
        methods:{
            register:function(){
                var user = $('.mint-field-core').first().val();
                var password = $('.mint-field-core').last().val();
                // console.log(qs.stringify(user));
                // console.log(user,password);
                if(reg.test(user) && pass.test(password)){
                    if(self.boon=='no'){
                    }
                    axios.post('http://10.3.136.74:88/register',qs.stringify({user:user,password:password}), 
                        {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                    ).then(response => {
                        this.$router.push({name:'login'});
                    })
                }else{
                    MessageBox({
                        message: `<div class="homeTelPhone">格式不正确</div>`
                    })
                }
            },
            login:function(){
                this.$router.push({name:'login'})
            }
            // number:function(){
            //     // var user = $('.mint-field-core').first().val();
            //     var arr = [0,1,'a','b',4,5,6,'c','d','e',7,8,9,'f','g','h','i','j','k','l','m','n','o','p',2,3,'q','r','s','t','u','v','w','x','y','z'];
            //     var res = [];
            //     console.log(arr);
            //     // for(var i=0;i<4;i++){
            //     //     var randomNumber = parseInt(Math.random()*36);
            //     //     console.log(arr[randomNumber]);
            //     //     // res.push()
            //     // }
            //     // if(reg.test(user)){
            //         this.$alert('<p class="nump">验证码为9087</p>', {
            //             dangerouslyUseHTMLString: true
            //         })
            //     // }else{
            //         // this.$alert('<p class="nump">手机格式不正确</p>', {
            //         //     dangerouslyUseHTMLString: true
            //         // })
            //     // }
                
            // }
        },
        mounted:function(){
            var $name = $('.mint-field-core').first();
            $name.on('blur',function(){
                var user = $name[0].value;
                if(reg.test(user)){
                    self.status='success';
                    axios.get('http://10.3.136.74:88/register', 
                        {params:{date: $name.val()}}).then(response => {
                        if(response.data=='no'){
                            self.boon=response.data;
                            MessageBox({
                                message: `<div class="homeTelPhone">用户已存在</div>`
                            })
                        }
                    })
                }else{
                    self.status='error';
                }   
            });

            var $pas = $('.mint-field-core').last();
            $pas.on('blur',function(){
                var pas = $pas[0].value;
                if(pass.test(pas)){
                    self.password='success';
                }else{
                    self.password='error';
                }   
            })

            var $show = $('.show')
            $show.on('click',function(){
                if(self.value==false){
                    $pas.attr({type:'text'});
                }else{
                    $pas.attr({type:'password'});
                }
            })
        }
    };
</script>
<style lang="scss">
    #register{
     height: 100%;
     background: #F4F5F7;
}
 .head{
     line-height: 1.2rem;
     height: 1.2rem;
     font-size: 0.4rem;
}
 .main{
     .name,.password{
         height:1.7333333333333334rem;
         line-height: 1.7333333333333334rem;
         font-size: 0.4rem;
    }
     .name .mint-cell-wrapper,.password .mint-cell-wrapper,.password .mint-cell-value,.name .mint-cell-value{
         background: #fff;
    }
     .mint-field-core,.mint-cell-text{
         height: 1.0666666666666667rem;
         font-size: 0.4rem;
    }
     .password .mintui{
         margin-right: 0.18666666666666668rem;
    }
     .btns{
         text-align: center;
    }
     .btn{
         width: 90%;
         height: 1.0666666666666667rem;
         background: #ccc;
         font-size:0.4rem;
    }
     .mint-cell-value,.mint-cell-wrapper{
         font-size: 0.48rem;
         line-height: 2rem;
         background: #F4F5F7;
    }
     .forget .mint-cell-wrapper{
         height: 1.3333333333333333rem;
    }
}
 .mintui{
     font-size:0.3466666666666667rem;
     margin-right:0.26666666666666666rem;
}
 .mint-field-state .mintui {
     font-size: 0.4533333333333333rem;
}
 .nump{
     font-size:0.3466666666666667rem;
     text-align:center;
}
 .homeTelPhone{
     font-size:0.3466666666666667rem;
}
 footer img{
     width: 100%;
     position: absolute;
     bottom: 1.0666666666666667rem;
}
 
</style>