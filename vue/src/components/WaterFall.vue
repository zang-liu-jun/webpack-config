<script setup lang='ts'>
import { onMounted, reactive } from 'vue';
type Item = {
  backgroundColor: string;
  height: number;
  content: number;
  top?: number;
  left?: number;
}
const list: Item[] = reactive([])
function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
for (let i = 0; i < 100; i++) {
  list.push({
    backgroundColor: `rgb(${getRandomArbitrary(0, 256)},${getRandomArbitrary(0, 256)},${getRandomArbitrary(0, 256)})`,
    height: getRandomArbitrary(200, 400),
    content: i
  })
}
const WIDTH = 200
const init = () => {
  const clientWidth = document.body.clientWidth
  const column = Math.floor(clientWidth / WIDTH)
  const heightList: number[] = []
  for (let i = 0; i < list.length; i++) {
    if (i < column) {
      list[i].left = WIDTH * i
      list[i].top = 0
      heightList.push(list[i].height)
    } else {
      let currentHeight = heightList[0]
      let currentColumnIndex = 0
      // 找出最矮的那一列
      heightList.forEach((height, i) => {
        if (currentHeight > height) {
          currentHeight = height
          currentColumnIndex = i
        }
      })
      list[i].left = currentColumnIndex * WIDTH
      list[i].top = currentHeight
      heightList[currentColumnIndex] = currentHeight + list[i].height
    }
  }
}
onMounted(() => {
  window.onresize = () => init()
  init()
})
</script>

<template>
  <div class="container">
    <!-- <div class="waterfall-item" v-for="item in list" :style="`width:${WIDTH}px;background-color:${item.backgroundColor}`">{{item.content}}</div> -->
    <div class="waterfall-item" v-for="item in list" :style="{
      width: `${WIDTH}px`,
      backgroundColor: `${item.backgroundColor}`,
      height: `${item.height}px`,
      top: `${item.top}px`,
      left: `${item.left}px`
    }">{{ item.content }}</div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  position: relative;

  .waterfall-item {
    transition: all 0.5s;
    position: absolute;
  }
}
</style>