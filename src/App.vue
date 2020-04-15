<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <CustomButton msg="Click me" />
  </div>
</template>

<script>
import CustomButton from "./components/CustomButton/CustomButton";

export default {
  name: "App",
  components: {
    CustomButton
  }
};
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
