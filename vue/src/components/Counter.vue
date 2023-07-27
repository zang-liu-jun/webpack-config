<script setup lang='ts'>
import { ref } from 'vue';

const counterRef = ref<number>(0)

const throwError=()=>{
  // throw new Error('我曹')
  console.log("hello")
}
</script>

<template>
  <div class="counter">
    <div>{{ counterRef }}</div>
    <div>
      <button @click="counterRef--">-</button>
      <button @click="counterRef++">+</button>
      <button @click="throwError">error</button>
    </div>
  </div>
</template>

<style scoped>
.counter {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  background-color: pink;
}
</style>
