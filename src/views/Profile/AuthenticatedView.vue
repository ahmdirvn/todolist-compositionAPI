<script setup>
import {useRoute} from  'vue-router'

const route = useRoute()
</script>

<template>
   <div>
    <h1>{{ route.params.id || 'User' }} Detail</h1>
   </div>
</template>