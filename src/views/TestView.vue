<script setup>
import {ref } from 'vue'
import { useListStore } from '@/stores/lists';

const store = useListStore();

//ref input 
const nameInput = ref('')


//arrow function 


</script>



<template>
 <div class="container">

<h1>Test</h1>


<input
  class="input"
  v-model="nameInput"
  type="text"
  name="name"
  @keyup.enter="store.addList(nameInput); nameInput = ''"
/>

<h4>Tasks</h4>
<ol class="list">
  <template v-for="item in store.getList" v-bind:key="item">
    <li class="underline">{{ item.name }}</li>
  </template>
</ol>
</div>
</template>

<style scoped lang="scss">
.input {
margin-block-end: 2rem;
}
.list {
padding-block: 1rem;
& > .underline {
text-decoration: underline;
}
}
</style>
