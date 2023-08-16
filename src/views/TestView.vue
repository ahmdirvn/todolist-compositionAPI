<script setup>
import {reactive,ref } from 'vue'

const list = reactive([
  {
    name: 'First List',
  },
  {
    name: 'Second List',
  }
])

//ref input 
const nameInput = ref('')


//arrow function 
const addList = (params) => {
    if(params){
        list.push({name: params})
        nameInput.value = ''
 }
}


</script>



<template>
  <h1>Test</h1>

  <!-- add event handler listener when keyup enter -->
  <!-- method handler with addList function -->
  <!-- event modifier .enter -->


  <input type="text" v-model="nameInput" name="name" @keyup.enter = "addList(nameInput)">
  <ol>
    <template v-for="item in list" v-bind:key="item">
      <li>{{ item.name }}</li>
    </template>
  </ol>
</template>