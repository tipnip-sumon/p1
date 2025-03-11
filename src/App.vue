<script setup>
import { ref,reactive,onMounted,onUnmounted, onBeforeMount, onUpdated } from 'vue'
// import  HelloWorld  from './components/HelloWorld.vue'
const fullImage = ref('https://picsum.photos/id/0/5000/3333')
const message = ref('Hello Vue 3')
const space = ref(0)
const images = ref([
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg',
  'https://picsum.photos/id/1/500/333',
  'https://picsum.photos/id/10/500/334',
  'https://picsum.photos/id/100/500/335',
  ])
function increaseSpace() {
  space.value++
  message.value = "Space increased to " + space.value + " times"
}
function pressWhat(event) {
  message.value = "You pressed " + event.key
}
function pressButton() {
  message.value = "You pressed the button"
}
function ctrlRightClick() {
  message.value = "You pressed Ctrl + Right Click"
}
onMounted(() => {
  message.value = setInterval(() => {
    message.value = "New message"
  }, 1000)
  onUnmounted(() => {
    clearInterval(message.value)
  })
})
onUpdated(() => {
  console.log('Component updated')
})
const status = ref([])
const apiResponse = ref(null)

onBeforeMount(async () => {
  status.value.push('beforeMount')
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await response.json()
  apiResponse.value = data.title})

let carosel = null
  onMounted(() => {
    carosel = new Flickity('#carosel');
  })
  let chart = null
  const dataset = [
    300,500,100
  ]
  const newItem = ref(16)
  const data = {
                labels: [
                  'Red',
                  'Blue',
                  'Yellow'
                ],
                datasets: [{
                  label: 'My First Dataset',
                  data: dataset,
                  backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                  ],
                  hoverOffset: 4
                }]
};
const config = {
  type: 'pie',
  data: data,
};
onMounted(() => {
  const ctx = document.getElementById('chart');
  chart = new Chart(ctx, config);
})
function addNewItem() {
  dataset.push(newItem.value)
  chart.data.datasets[0].data = dataset
  chart.update()
} 
</script>

<template>
  <!-- <h1>{{ HelloWorld }}</h1> -->
  <div>
  <canvas id="chart"></canvas>
</div>
<div class="mt-20">
  <input type="text" v-model="newItem" />
  <button @click="addNewItem()">Add Item</button>
</div>
   
</template>

<style scoped>
  .items {
    width: 600px;
    height: 400px;
  }
  .item {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
</style>
