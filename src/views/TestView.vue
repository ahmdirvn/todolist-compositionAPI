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
  completed:false
}


//ref input using default input
const input = ref({ ...defaultInput})

//ref untuk mengambil data edit berdasarkan kondisi tombol edit
const editing = ref(false)


//mereset data (reset form)
const resetForm = () =>{
  Object.assign(input.value, defaultInput)
  editing.value = false
}
//function untuk mengirimkan form
function onSubmit(){
  //event prevent default
  const data = ({...input.value})


  //add list fia store
  if(editing.value === false){
    store.addList(data)

  }else {
    store.editList(editing.value, data)
  }

  //reset form
  resetForm()
}

function detailList(index){
  const detail = store.getDetail(index);
  input.value = {...detail.value}

  editing.value = index
}

function toggleComplete(index){
  const detail = store.getDetail(index)
  store.editList(index,{
    ...detail.value,
    completed: !detail.value.completed
  })
}
</script>



<template>
 <div class="container">

<h1>Test {{ $route.params?.id }}</h1>
<!-- <input
  class="input"
  v-model="nameInput"
  type="text"
  name="name"
  @keyup.enter="store.addList(nameInput); nameInput = ''"
/> -->

<!-- event modifier, enter , prevent  -->
<form class="form" @submit.prevent = "onSubmit" @reset = "resetForm">
  <BaseInput  class="input" v-model="input.name" id="name" name="name" placeholder="Masukan Namamu" required/>
  <BaseInput  class="input" v-model="input.hobby" id="hobby" name="hobby" placeholder="Masukan Hobbymu" required/>
  <BaseInput  class="input" v-model="input.description" id="description" name="description" placeholder="Masukan Deskripsi " required/>
  <div class="checkbox">
    <input type="checkbox" v-model= "input.completed" name="completed" id="completed"> completed
  </div>
  <button type="reset" style="margin-right: 15px;">Cancel</button>
  <button type="submit"> submit </button>
</form>

<h4>Tasks</h4>
<ol class="list">
  <!-- show the result  -->
  <template v-for="(item,index) in store.getList" :key="index">
    <!-- null chainning and ternary oprator -->
    <li class="{strike: item?.completed}" @dblclick="toggleComplete(index)">
      <span>
        <button class="red" @click="()=> store.removeList(index)" :disabled="editing !== false">&times;</button> 
      <button class="orange" @click="() => detailList(index)" :disabled="editing !== false">&#9998;</button>
      </span>
     
          {{ item.name }} ({{ item.hobby }}) -
          {{ !!item?.description ? item.description : 'description?' }}</li>
  </template>
</ol>
</div>
</template>

<style scoped lang="scss">
.form {
  margin-block-end: 2rem;
}
.list {
  /* rem, em, vh, vw */
  padding-block: 1rem;
  & > .strike {
    text-decoration: line-through;
  }
}

button {
  &.red {
    color: red;
    margin:10px ;
    
  }
  &.orange {
    color: orange;
  }
.checkbox{
  width: 100%;
}

}

</style>
