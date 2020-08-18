<template>
  <div class="create-deck">
    <InsertTextSmall class="insert-text-small" />
    <div class="create-deck-inner">
      <InsertTextLarge class="insert-text-large" />
      <InsertTextLarge class="insert-text-large" />
      <DefaultButton class="add-button" buttonText="+" />
    </div>
    <DefaultButton class="save-button" buttonText="save" />
  </div>
</template>

<script>
import InsertTextSmall from "../components/InsertTextSmall";
import InsertTextLarge from "../components/InsertTextLarge";
import DefaultButton from "../components/DefaultButton";

export default {
  name: "NewDeck",
  components: {
    InsertTextSmall,
    InsertTextLarge,
    DefaultButton,
  },
};
</script>

<style lang="scss" scoped>
.create-deck {
  display: inline-flex;
  flex-direction: column;
}

.insert-text-small {
  align-self: center;
}

.create-deck-inner {
  display: inline-flex;
  flex-direction: column;

  justify-content: center;

  width: 40vw;
  height: 65vh;

  padding: 1vh 10vw 1vh 10vw;

  background: #d1d8ff;
  box-shadow: 0px 12px 17px rgba(0, 0, 0, 0.14),
    0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.add-button {
  align-self: center;

  width: 60px;

  margin: 20px;
}

.save-button {
  align-self: center;

  margin: 40px;

  min-width: 200px;
}
</style>