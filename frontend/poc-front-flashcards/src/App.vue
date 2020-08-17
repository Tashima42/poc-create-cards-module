<template>
  <div id="app">
    <DefaultButton buttonName="create new deck" backgroundColor="#384ED3" />
    <InnerDeckDisplay backgroundColor="#8130D1" deckName="test deck" />
  </div>
</template>

<script>
import DefaultButton from "./components/DefaultButton";
import InnerDeckDisplay from "./components/InnerDeckDisplay";
export default {
  name: "App",
  components: {
    DefaultButton,
    InnerDeckDisplay,
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
