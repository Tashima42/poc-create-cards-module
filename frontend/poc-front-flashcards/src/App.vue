<template>
  <div id="app">
    <CriarBaralho />
    <BaralhoInicial corBg="#8130D1" />
  </div>
</template>

<script>
import CriarBaralho from "./components/CriarBaralho";
import BaralhoInicial from "./components/BaralhoInicial";
export default {
  name: "App",
  components: {
    CriarBaralho,
    BaralhoInicial,
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
