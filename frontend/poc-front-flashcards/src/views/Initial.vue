<template>
  <div class="initial">
    <DefaultButton buttonText="New deck" />
    <p class="user-name">Paulo's Decks</p>
    <div class="deck-grid">
      <OuterDeckDisplay class="deck" />
      <OuterDeckDisplay class="deck" />
      <OuterDeckDisplay class="deck" />
      <OuterDeckDisplay class="deck" />
    </div>
  </div>
</template>

<script>
import DefaultButton from "../components/DefaultButton";
import OuterDeckDisplay from "../components/OuterDeckDisplay";

export default {
  name: "initial",
  components: {
    DefaultButton,
    OuterDeckDisplay,
  },
};
</script>

<style lang="scss" scoped>
.initial {
  display: inline-flex;
  flex-direction: column;
}

.user-name {
  align-self: flex-start;

  margin-bottom: 0px;

  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  text-align: center;
  text-transform: uppercase;

  color: #1f38d1;

  text-shadow: 0px 12px 17px rgba(0, 0, 0, 0.14),
    0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2);
}

.deck-grid {
  display: inline-grid;
  grid-template-columns: 470px 470px;
  grid-row: auto auto;
  grid-column-gap: 40px;
  grid-row-gap: 5px;
}
</style>