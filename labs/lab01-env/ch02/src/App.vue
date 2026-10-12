<template>
  <div class="note-card">
    <h3>{{ title }}</h3>

    <!-- ==========3.1 v-text / v-html========== -->
    <h4>3.1 v-text / v‑html</h4>
    <p v-text="rawText"></p >
    <p v-html="htmlText"></p >

    <!-- ==========3.2 v‑bind 简写 : ========== -->
    <h4>3.2 v‑bind 属性绑定</h4>
    < img :src="imgSrc" :title="tipTitle" width="96" />
    <p :class="{ active: count > 0 }">count大于0我会变绿色加粗</p >

    <!-- ==========3.3 v‑on 简写 @ 事件绑定========== -->
    <h4>3.3 v‑on 事件绑定</h4>
    <button @click="count++">count +1（内联）</button>
    <button @click="say('你好',$event)">say传参($event)</button>

    <!-- ==========3.4 v‑model双向绑定 表单三件套========== -->
    <h4>3.4 v‑model双向绑定</h4>
    <p>实时展示 → 姓名：{{ form.name }}｜性别：{{ form.gender }}｜爱好：{{ form.hobbies.join('、') }}</p >
    <input v-model="form.name" placeholder="输入姓名"/>
    <br>
    <label><input type="radio" value="男" v-model="form.gender"/>男</label>
    <label><input type="radio" value="女" v-model="form.gender"/>女</label>
    <br>
    <label><input type="checkbox" value="篮球" v-model="form.hobbies"/>篮球</label>
    <label><input type="checkbox" value="编程" v-model="form.hobbies"/>编程</label>

    <!-- ==========3.5 v‑if / v‑show========== -->
    <h4>3.5 v‑if vs v‑show</h4>
    <button @click="show = !show">切换显隐</button>
    <p v-if="show">v‑if：我被创建销毁</p >
    <p v-else>v‑else条件不满足显示我</p >
    <p v-show="show">v‑show：只是display:none隐藏</p >

    <!-- ==========3.6 v‑for列表渲染 :key========== -->
    <h4>3.6 v‑for列表渲染</h4>
    <ul>
      <li v-for="(subject,index) in subjects" :key="index">
        {{ index }} - {{ subject }}
      </li>
    </ul>
    <button @click="subjects[1]='英语（索引赋值）'">数组索引赋值测试Vue3响应式</button>
    <button @click="form.school='成都理工大学工程技术学院'">对象新增属性测试</button>
    <p v-if="form.school">{{form.school}}</p >
  </div>
</template>

<script>
export default {
  name: 'NoteCard',
  data() {
    return {
      title: '我的第一条笔记',
      message: 'hello vue',
      count: 0,
      rawText:'<b>v‑text原样输出标签字符串</b>',
      htmlText:'<b>v‑html解析html加粗</b>',
      imgSrc:'https://vuejs.org/images/logo.svg',
      tipTitle:'鼠标悬停看到我',
      show:true,
      subjects:['语文','数学','Vue'],
      form:{
        name:'',
        gender:'',
        hobbies:[]
      }
    }
  },
  methods:{
    say(word,event){
      alert(word + "｜事件类型："+ event.type)
    }
  },
  mounted() {
    setTimeout(()=>{
      this.count = 100
    },3000)
  }
}
</script>

<style scoped>
.note-card {
  border: 1px solid #42b883;
  padding:10px 16px;
  border-radius:6px;
}
.active {
  color:#42b883;
  font-weight:bold;
}
h4{
  margin:12px 0 4px;
}
</style>