<template>
  <button @click="this.$router.push('/professor')"> Professor </button> 
  <button @click="this.$router.push('/course')">Course</button> 
  <button @click="this.$router.push('/student')">Student</button> 

  <router-view />
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
