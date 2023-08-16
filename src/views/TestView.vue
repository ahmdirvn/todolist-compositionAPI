<script setup>
import {ref } from 'vue'
import { useListStore } from '@/stores/lists';
//store container 
const store = useListStore();

//initial input or default input 
const defaultInput ={
  name:'',
  hobby:''
}


//ref input using default input
const input = ref({ ...defaultInput})

//function untuk mengirimkan form
function onSubmit(){
  //event prevent default
  console.log({...input.value})


  //add list fia store
  store.addList({ ...input.value})
}
</script>



<template>
 <div class="container">

<h1>Test</h1>
<!-- <input
  class="input"
  v-model="nameInput"
  type="text"
  name="name"
  @keyup.enter="store.addList(nameInput); nameInput = ''"
/> -->

<!-- event modifier, enter , prevent  -->
<form class="form" @submit.prevent = "onSubmit">
  <input type="text" class="input" v-model="input.name" name="name" placeholder="Masukan Namamu">
  <input type="text" class="input" v-model="input.hobby" name="hobby" placeholder="Masukan Hobbymu">
  <button type="submit"> submit </button>
</form>

<h4>Tasks</h4>
<ol class="list">
  <!-- show the result  -->
  <template v-for="(item,index) in store.getList" :key="index">
    <li class="underline">{{ item.name }}({{ item.hobby }}) - {{ index }}</li>
  </template>
</ol>
</div>
</template>

<style scoped lang="scss">

.form{
  .input {
margin-block-end: 2rem;
}
.list {
padding-block: 1rem;
& > .underline {
text-decoration: underline;
}
}
}

</style>
