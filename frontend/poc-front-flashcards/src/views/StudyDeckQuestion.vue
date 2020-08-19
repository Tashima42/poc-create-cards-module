<template>
  <div class="study">
    <p class="deck-name">Test deck</p>
    <div class="study-container">
      <TextBox class="question-box" />
      <DefaultButton class="button-show" blue>
        <p>show answer</p>
      </DefaultButton>
    </div>
  </div>
</template>

<script>
import TextBox from "../components/TextBox";
import DefaultButton from "../components/DefaultButton";

export default {
  name: "StudyDeckQuestion",
  components: {
    TextBox,
    DefaultButton,
  },
};
</script>

<style lang="scss" scoped>
.deck-name {
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 2.3rem;
  text-align: center;
  text-transform: uppercase;

  color: #5030d1;

  text-shadow: 0px 12px 17px rgba(0, 0, 0, 0.14),
    0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2);
}

.study-container {
  display: inline-flex;
  flex-direction: column;

  align-items: center;

  width: 70vw;

  background: #d1d8ff;
  box-shadow: 0px 12px 17px rgba(0, 0, 0, 0.14),
    0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.question-box {
  margin: 5vh 0px 0px 0px;

  align-self: center;
}

.button-show {
  margin: 1vh 0px 4vh 0px;
  align-self: center;
}

.button-show p {
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.7em;
  text-align: center;
  text-transform: uppercase;

  margin: 1vh 0.5vw 1vh 0.5vw;
}

@media (max-width: 1024px) {
  .study-container {
    width: 80vw;
  }
}

@media (max-width: 425px) {
  .study-container {
    width: 90vw;
  }
}
</style>