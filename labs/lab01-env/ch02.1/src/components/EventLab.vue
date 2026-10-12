<template>
  <div class="event-lab">
    <h3>🎯事件实验室（事件对象、事件修饰符）</h3>

    <!-- 获取事件对象两种方式 -->
    <button @click="showEvent">打印事件对象（不传参）</button>
    <button @click="showEventArg($event,66)">showEventArg($event,66)传参版</button>

    <!-- 原生阻止默认行为 -->
    <a href=" " @click="goVue">Vue官网链接（手动preventDefault）</a >

    <!-- 日志输出区 -->
    <ol class="logs">
      <li v-for="(item,index) in logs" :key="index">{{item}}</li>
    </ol>

    <h4>.stop 冒泡实验</h4>
    <div class="bubble" @click="log('outer触发外层')">
      <button @click.stop="log('inner触发 .stop阻止冒泡')">内层 .stop</button>
      <button @click="log('inner触发，无.stop冒泡到外层')">内层无.stop</button>
    </div>

    <h4>.prevent / .once / .self</h4>
    <a href="https://vuejs.org" @click.prevent="log('.prevent阻止跳转')">官网 .prevent版</a >
    <br>
    <button @click.once="log('.once只触发一次')">抽奖按钮once</button>
    <div class="self-box" @click.self="log('.self：点击盒子本身才触发')">
      点盒子本身（.self生效）
      <button>我是子按钮，点我不会触发外层self</button>
    </div>

    <h4>键盘修饰符 enter esc</h4>
    <input @keyup.enter="log('回车enter触发')" @keyup.esc="log('Esc按键触发')" placeholder="输入按回车或者Esc"/>
  </div>
</template>

<script>
export default {
  name:'EventLab',
  data(){
    return {
      logs:[]
    }
  },
  methods:{
    log(msg){
      this.logs.unshift(msg)
      console.log(msg)
    },
    showEvent(e){
      this.log(`type=${e.type}｜target=<${e.target.tagName.toLowerCase()}>`)
      console.log('完整事件对象',e)
    },
    showEventArg(e,num){
      this.log(`传参版 target=<${e.target.tagName.toLowerCase()}>, num=${num}`)
    },
    goVue(e){
      e.preventDefault()
      this.log('手动e.preventDefault阻止跳转')
    }
  }
}
</script>

<style scoped>
.event-lab {
  border:1px dashed #b8860b;
  padding:12px 16px;
  border-radius:8px;
  line-height:2;
  margin-top:10px;
}
.bubble {
  border:2px solid #42b883;
  padding:6px 10px;
  margin:6px 0;
}
.self-box {
  border:2px dotted #646cff;
  padding:6px 10px;
  margin:6px 0;
}
.logs {
  background:#fafafa;
  border-left:3px solid #b8860b;
  margin:8px 0;
  padding:4px 8px 4px 28px;
  min-height:2em;
}
</style>