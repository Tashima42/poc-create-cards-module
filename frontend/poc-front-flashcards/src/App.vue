<template>
  <div id="app">
    <!--     <DefaultButton buttonText="create new deck" />
    <InnerDeckDisplay deckName="test deck" />
    <OuterDeckDisplay />
    <InsertTextLarge />
    <InsertTextSmall />
    <TextBox />
    <Initial />-->
    <NewDeck />
  </div>
</template>

<script>
/* import DefaultButton from "./components/DefaultButton";
import InnerDeckDisplay from "./components/InnerDeckDisplay";
import OuterDeckDisplay from "./components/OuterDeckDisplay";
import InsertTextLarge from "./components/InsertTextLarge"; 
import InsertTextSmall from "./components/InsertTextSmall";

import TextBox from "./components/TextBox";
import Initial from "./views/Initial";
*/
import NewDeck from "./views/NewDeck";

export default {
  name: "App",
  components: {
    /*     DefaultButton,
    InnerDeckDisplay,
    OuterDeckDisplay,
    InsertTextLarge, 
    InsertTextSmall,
    
    TextBox,
    Initial,
    */
    NewDeck,
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
