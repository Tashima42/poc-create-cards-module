<template>
  <div class="study">
    <p class="deck-name">Test deck</p>
    <div class="study-container">
      <TextBox class="question-box" />
      <TextBox class="answer-box" />
      <div class="buttons">
        <DefaultButton buttonText="C" class="button-correct" />
        <DefaultButton buttonText="W" class="button-wrong" />
      </div>
    </div>
  </div>
</template>

<script>
import TextBox from "../components/TextBox";
import DefaultButton from "../components/DefaultButton";

export default {
  name: "StudyDeckAnswer",
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

  width: 50vw;
  height: 55vh;

  background: #d1d8ff;
  box-shadow: 0px 12px 17px rgba(0, 0, 0, 0.14),
    0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.question-box {
  margin: 5vh 0px 0px 0px;

  align-self: center;
}

.answer-box {
  margin: 1vh 0px 0px 0px;

  align-self: center;
}

.buttons {
  display: flex;
  justify-content: center;

  margin: 1vh 0px 0px 0px;
  align-self: center;
}

.button-correct {
  margin: 0px 2vw 0px 0px;
}

.button-wrong {
  margin: 0px 0px 0px 2vw;
}
</style>