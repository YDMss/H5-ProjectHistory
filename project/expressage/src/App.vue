<template>
  <div id="app">
    <h3>快递查询</h3>
     <ExpressageInput v-on:translateNumber="getData($event)"></ExpressageInput>
  <hr>
  <ExpressResult :result="result"></ExpressResult>
  </div>
</template>

<script>
import ExpressageInput from './components/ExpressageInput.vue'
import ExpressResult from './components/ExpressResult.vue'


export default {
  name: 'app',
  data:function(){
    return {
    //   number:123456,
      result:null
    }
  },
  components: {
    ExpressageInput,
    ExpressResult
  },
  // 获取数据 布局  3384524215448   3819618245951
  methods:{
    getData:function(n){

      this.axios
      .get("https://api.apiopen.top/EmailSearch",{
        params:{
          number:n
        }
      })
      .then(response=> {
        this.result=response.data.result;
        // console.log(response.data.result);
      })
        // .catch(function(error) {
        //   // console.log(error);
        // });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
