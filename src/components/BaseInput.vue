<script setup>
//komunikasi dari parent ke children (props)

defineProps({
  id:{
    type : String,
    default :'id'
  },
  name:{
    type: String,
    default : 'name'
  },
  placeholder:{
    type:String,
    default: 'Placeholder'
  },
  modelValue:{
    type:String,
    default:''
  }
})

//komunikasi dari children ke parents ; emit 
defineEmits(['update:modelValue'])
</script>



<template>
   <label for="id"> {{ name }}</label>
   <input 
   type="text"
   id="id"
   class="input"
   :name="name"
   :placeholder="placeholder"
   :value="modelValue"
   @input="(e) => $emit('update:modelValue', e.target.value)">
</template>


<style scoped>
.input{
  margin-block-end: 1rem;
  width: 100%;
}</style>
