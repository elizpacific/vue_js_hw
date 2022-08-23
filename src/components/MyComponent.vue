<template>
  <h1>This is my component {{state.count}}</h1>

  <h1>{{ form.itemTitle }}</h1>
  
  <br>
  
  <button @click="increment">Count ({{state.count}})</button>
  <div v-if="state.count">hidden block</div>

  <form @submit.prevent="addItem">
    <input type="text" v-model="form.itemTitle" placeholder="Item title">
    <button type="submit">Add</button>
  </form>

  <div v-for="(item, index) in list">{{ index }}.{{item}} </div>
</template>

<script>
import {reactive} from "vue";

export default {
  name: "MyComponent",
  setup() {
    const state = reactive({count: 0})
    const list = reactive([1, 2, 3, 4, 5])
    const form = reactive({
      itemTitle: ''
    })

    function increment() {
      state.count++
    }

    function addItem() {
      list.push(form.itemTitle)
    }

    return {
      state,
      list,
      form,
      increment,
      addItem
    }
  }
}
</script>