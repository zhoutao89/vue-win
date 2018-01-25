<template>
    <div id="login">
        <mt-header title="登录" class="head">
            <router-link to="/" slot="left">
                <mt-button class="el-icon-arrow-left">返回</mt-button>
                <mt-button @click="handleClose"></mt-button>
            </router-link>
            <mt-button slot="right" @click="register">注册</mt-button>
        </mt-header>
        <main class="main">
            <mt-field label="用户名"  v-model="number" :state="status" placeholder="请输入手机号" type="number" class="el-icon-mobile-phone name">
            </mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" :state="password" class="el-icon-sold-out password">
                <mt-switch v-model="value" class="show"></mt-switch>
            </mt-field>
            <mt-cell title="忘记密码吗？" class="forget"></mt-cell>
            <div class="btns">
                <mt-button type="default" class="btn" @click="open">登录</mt-button>
            </div>
            <mt-cell value="手机快捷登录" class="cellphone"></mt-cell>
        </main>
        <footer class="foot">
            <img src="../img/bottom.jpg" height="238" width="719" alt="" class="bos"/>
        </footer>
    </div>
</template>

<script>
    import axios from 'axios'
    import { Header } from 'mint-ui';
    import { MessageBox } from  'mint-ui';
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
            open() {
                var user = $('.mint-field-core').first().val();
                var password = $('.mint-field-core').last().val();

                if(reg.test(user)&&pass.test(password)){
                    axios.get('http://10.3.136.74:88/login', {params:{username:user}}).then(response => {
                        var datas = response.data.data.results[0]
                        console.log(datas);
                        if(datas.username==user&&datas.password==password){
                            this.$router.push({name:'homepage'});
                        }
                    })
                }else{
                    this.$alert('<strong>密码或用户名错误</strong>', '提示', {
                        dangerouslyUseHTMLString: true
                    });
                }
            },
            register:function(){
                this.$router.push({name:'register'});
            }
        },
        mounted:function(){
            var $name = $('.mint-field-core').first();
            $name.on('blur',function(){
                var user = $name[0].value;
                if(reg.test(user)){
                    self.status='success';
                }else{
                    self.status='error';
                    return;
                }   
            })

            var $pas = $('.mint-field-core').last();
            $pas.on('blur',function(){
                var pas = $pas[0].value;
                if(pass.test(pas)){
                    self.password='success';
                }else{
                    self.password='error';
                    return;
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
    #login{
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
         font-size:0.4266666666666667rem;
    }
     .mint-cell-value,.mint-cell-wrapper{
         font-size: 0.48rem;
         line-height: 2rem;
         background: #F4F5F7;
    }
     .forget .mint-cell-wrapper{
         line-height: 1.2rem;
    }
}
 .mintui{
     font-size:0.3466666666666667rem;
}
 .mint-field-state .mintui {
     font-size: 0.4533333333333333rem;
}
 footer.foot img{
     width: 100%;
     position: absolute;
     bottom: 1.0666666666666667rem;
}
 
</style>