<template>
 <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <!-- 渲染pc和app产品 循环模板-->
          <template v-for="product in productList">
            <h3>{{product.title}}</h3>
            <ul>
              <li v-for="item in product.list">
                <a :href="item.url">{{ item.name }}</a>
                <span v-if="item.hot" class="hot-tag">HOT</span>
              </li>
            </ul>
            <!-- 最后一组数据不显示hr类 -->
            <div v-if="!product.last" class="hr"></div>
          </template>
      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="item in newsList">
             <a :href="item.url" class="new-item">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <slide-show :slides="slides" :inv="slideSpeed" @onchange="doSomething"></slide-show>
    <div class="index-right">
      <div class="index-board-list">
        <div class="index-board-item" v-for="(item,index) in boardList" :class="[{'line-last':index%2!==0},'index-board-'+index]">
          <div class="index-board-item-inner">
            <h2>{{item.title}}</h2>
            <p>{{item.description}}</p>
            <div class="index-board-button">
              <a href="" class="button">立即购买</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slideShow from './../components/slideShow'
export default {
  components: {
    slideShow
  },
  // 创建完成的时候
  created(){
    this.$http.get('/api/getNewsList').then(res=>{
      this.newsList = res.data
    },err=>{
      console.log(err)
    })
  },
  methods:{
    doSomething(data){
      console.log(`do ${data+1}`)
    }
  },
  data () {
    return {
      slideSpeed:2000,
      slides:[{
        src:require('./../assets/slideShow/pic1.jpg'),
        title:'xxx1',
        href:'detail/analysis'
      },{
        src:require('./../assets/slideShow/pic2.jpg'),
        title:'xxx2',
        href:'detail/count'
      },{
        src:require('./../assets/slideShow/pic3.jpg'),
        title:'xxx3',
        href:'detail/publish'
      },{
        src:require('./../assets/slideShow/pic4.jpg'),
        title:'xxx4',
        href:'detail/forecast'
      }],
      boardList:[{
        title:'开放产品',
        description:'开放产品是一款开放产品',
        saleout:false
      },
      {
        title:'品牌营销',
        description:'品牌营销帮助你的产品更好地找到定位',
        saleout:false
      },
      {
        title:'使命必达',
        description:'使命必达快速迭代永远保持最前端的速度',
        saleout:false
      },
      {
        title:'勇攀高峰',
        description:'帮你勇创高峰，达到事业的顶峰',
        saleout:false
      }],
      newsList:[],
      productList:{
        pc:{
          title:'PC产品',
          last:false,
          list:[{
            name:'数据统计',
            url:'http://starcraft.com'
          },
          {
            name:'数据预测',
            url:'http://warcraft.com'
          },
          {
            name:'流量分析',
            url:'http://overwatch.com',
            hot:true
          },
          {
            name:'广告发布',
            url:'http://hearstone.com'
          }]
        },
        app:{
          title:'手机应用类',
          last:true,
          list:[{
            name:'91助手',
            url:'http://weixin.com'
          },
          {
            name:'产品助手',
            url:'http://twitter.com'
          },
          {
            name:'智能地图',
            url:'http://maps.com'
          },
          {
            name:'团队语音',
            url:'http://phone.com'
          }]
        }
      }
    }
  }
}
</script>

<style scoped>
/* scoped表示只在当前页面有效，避免样式污染 */
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-0 .index-board-item-inner{
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-1 .index-board-item-inner{
  background: url(../assets/images/2.png) no-repeat;
}
.index-board-2 .index-board-item-inner{
  background: url(../assets/images/3.png) no-repeat;
}
.index-board-3 .index-board-item-inner{
  background: url(../assets/images/4.png) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 512px;
}
.hot-tag {
  background: red;
  color: #fff;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

