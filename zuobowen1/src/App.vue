<template>
   <div>
     <h1>我的第一个Vue应用</h1>
     <h2>32605150621</h2>
     <h2>左博文</h2>
     <p>You did it!</p >
   </div>
 </template>
 <script setup>
 import {ref} from 'vue'
 const student = ref({
   name:"左博文",
   id:"32605150621"
 })
 </script>