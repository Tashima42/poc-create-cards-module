<template>
  <div class="initial">
    <div class="new-deck" @click="newDeck">
      <DefaultButton blue class="new-deck-btn">
        <p>New deck</p>
      </DefaultButton>
    </div>
    <div class="bottom-decks">
      <p>Your Decks</p>
      <div class="deck-grid">
        <OuterDeckDisplay class="deck" />
        <OuterDeckDisplay class="deck" />
        <OuterDeckDisplay class="deck" />
        <OuterDeckDisplay class="deck" />
      </div>
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
  methods: {
    newDeck() {
      this.$router.push({ name: "NewDeck" });
    },
  },
};
</script>

<style lang="scss" scoped>
.initial {
  margin-top: 2vh;

  display: flex;
  flex-direction: column;
  margin-top: 3vh;
  align-items: center;
}

.bottom-decks {
  display: flex;
  flex-direction: column;

  p {
    align-self: flex-start;
    margin: 3vh 0px 1vh 1vw;

    font-family: "Roboto Condensed", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;

    color: #1f38d1;

    text-shadow: 0px 12px 17px rgba(0, 0, 0, 0.14),
      0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2);
  }
}

.deck-grid {
  display: inline-grid;
  grid-template-columns: 40vw 40vw;
  grid-row: auto auto;
  grid-column-gap: 1vw;
  grid-row-gap: 0vh;
}

.new-deck-btn {
  p {
    font-family: "Roboto Condensed", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1.7em;
    text-align: center;
    text-transform: uppercase;

    margin: 1vh 0.5vw 1vh 0.5vw;
  }
}

@media (max-width: 425px) {
  .deck-grid {
    display: flex;
    flex-direction: column;
  }
  .decks-title {
    align-self: center;
  }
}

@media (min-width: 1440px) {
  .deck-grid {
    display: inline-grid;
    grid-template-columns: 25vw 25vw;
    grid-row: auto auto;
    grid-column-gap: 1vw;
    grid-row-gap: 0vh;
  }
}
</style>