<script setup>
import {ref } from 'vue'
import { useListStore } from '@/stores/lists';
import BaseInput from '@comp/BaseInput.vue'
//store container 
const store = useListStore();

//initial input or default input 
const defaultInput ={
  name:'',
  hobby:'',
  description:'',
}


//ref input using default input
const input = ref({ ...defaultInput})

//function untuk mengirimkan form
function onSubmit(){
  //event prevent default
  console.log({...input.value})


  //add list fia store
  store.addList({ ...input.value})

  //reset form
  Object.assign(input,ref({...defaultInput}))
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
  <BaseInput  class="input" v-model="input.name" name="name" placeholder="Masukan Namamu" required/>
  <BaseInput  class="input" v-model="input.hobby" name="hobby" placeholder="Masukan Hobbymu" required/>
  <BaseInput  class="input" v-model="input.description" name="description" placeholder="Masukan Deskripsi " required/>
  <button type="submit"> submit </button>
</form>

<h4>Tasks</h4>
<ol class="list">
  <!-- show the result  -->
  <template v-for="(item,index) in store.getList" :key="index">
    <!-- null chainning and ternary oprator -->
    <li class="underline">
      <button class="red" @click="()=> store.removeList(index)">&times;</button>
      {{ item.name }}({{ item.hobby }}) - {{ !!item?.description ? item.description : 'description?' }}</li>
  </template>
</ol>
</div>
</template>

<style scoped lang="scss">

.form{
  
.list {
padding-block: 1rem;
& > .underline {
text-decoration: underline;
}
}

button.red{
  color:red;
}
}

</style>
