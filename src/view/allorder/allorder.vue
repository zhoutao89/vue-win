<template>
	<div class="all">
		<header>
			<h2>所有订单</h2>
		</header>
		<main>
			<div class="allOrder" v-for="item in dataset">
				<h3>{{'订单编号：'+item.id}}</h3>
				<ul>
					<li v-for="(itm,index) in dataset1">
						<img :src="itm.imgurl" alt="">
						<h4>{{itm.name}}</h4>
						<div class="price">{{itm.price}}<span>{{' ——数量：('+itm.num+')'}}</span></div>
					</li>
				</ul>
				<p>{{'总价：'+item.total}}<span class="delete" @click="deleteOrder(item.id,$event)">删除</span></p>
			</div>
		</main>
		<footer>
			<!-- <h2>继续购物</h2> -->
			<router-link :to="{name:'homepage'}" class="h2">继续购物</router-link>
			<!-- <router-link :to="{name:'shoppingpay',params:{total:total}}" class="button" @click='btnPay'>去结算</router-link> -->
		</footer>
	</div>
</template>

<script>
	// import $ from 'jquery'
	import axios from 'axios'
	export default{
		data(){
			return{
				dataset:[],
				dataset1:[]
			}
		},
		methods:{
			deleteOrder:function(id,e){
				// console.log(id);
				axios.get('http://10.3.136.74:88/orderdel',{
					params:{id:id}
				}).then(res=>{
					// console.log(res);
					if(res == 'yes'){
						e.target.closest('.allOrder').remove();
					}
				})
			}
		},
		beforeMount:function(){
           axios.get(
                'http://10.3.136.74:88/order',
            ).then(res=>{
                console.log(res.data.data.results)
                var _res = res.data.data.results;
                this.dataset = _res;
                this.len = _res.length;
                var arr = [];
                _res.forEach((item)=>{
                	console.log(item);
                	// console.log(item.goods);
                	console.log(JSON.parse(item.goods));
                	this.dataset1 = JSON.parse(item.goods);
                	// console.log(this.dataset);
                	// JSON.parse(item.goods).forEach((item)=>{
                	// 	console.log(item);
                	// })
                })
            })
       	}
	}

	// console.log($('.clickMe').text());

</script>

<style lang="scss" scoped>
	.all{
		display:flex;flex-direction:column;height:100%;
		header{
			line-height:1.146667rem;font-size:0.506667rem;background:#FAFAFA;text-align:center;
			h2{text-align:center;}
		}
		main{
			flex:1;overflow-x:hidden;background:#ddd;
			.allOrder{
				background:#fff;margin-bottom:0.2rem;margin-bottom:0.5rem;padding:0 0.5rem;
				h3{font-size:0.4rem;border-bottom:1px solid #ddd;line-height:0.6rem;}
				p{
					font-size:0.4rem;color:#f00;line-height:0.6rem;
					.delete{margin-left:65%;color:#000;}
				}
				ul{

					li{
						height:3rem;padding-top:0.2rem;border-bottom:1px solid #ddd;
						h4{font-size:0.35rem;}
						img{height:1.5rem;border:1px solid #ddd;}
						h4{font-size:0.3rem;}
						.price{font-size:0.3rem;line-height:0.6rem;color:#f00;}
						.price::before{content:"￥"}
					}
				}
			}
		}
		footer{
			line-height:1.146667rem;font-size:0.506667rem;background:#eee;text-align:center;
			.h2{font-size:0.506667rem;text-align:center;color:#000;font-weight:bold;}
		}
	}
</style>
