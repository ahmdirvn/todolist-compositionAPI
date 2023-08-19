<script setup>
//komunikasi dari parent ke children (props)

defineProps({

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
  },
  type:{
    type : String,
    default :'text',
    validator : (value) => ['text','password'].includes(value)
  },
  required :{
    type:Boolean,
    default:false
 }

})

//komunikasi dari children ke parents ; emit 
defineEmits(['update:modelValue'])
</script>



<template>
   <label :for="name"> {{ name }}</label>
   <input 
   :type="type"
   :id="name"
   class="input"
   :name="name"
   :placeholder="placeholder"
   :required = required
   :value="modelValue"
   @input="(e) => $emit('update:modelValue', e.target.value)">
</template>


<style scoped>
.input{
  margin-block-end: 1rem;
  width: 100%;
}</style>
