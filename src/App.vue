<template>
  <WordScr4mbler text="Test Word" />  
</template>

<script>
import WordScr4mbler from './components/WordScr4mbler.vue'

export default {
  name: 'App',
  components: {
    WordScr4mbler
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

::v-deep .WordScr4mblerText {
  color: blue;
  font-size: 10em;
}
</style>
