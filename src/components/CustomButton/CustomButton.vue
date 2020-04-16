<template>
  <button
    class="bg-blue-300 hover:bg-blue-500 text-white font-bold p-6 min-w-button rounded text-base"
  >
    {{ msg }}
  </button>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: 'Click me',
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
