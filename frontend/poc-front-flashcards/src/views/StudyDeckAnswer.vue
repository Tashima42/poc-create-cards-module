<template>
  <div class="study">
    <router-link :to="{ name: 'initial' }" tag="p" class="deck-name">Test deck</router-link>
    <div class="study-container">
      <TextBox class="question-box" />
      <TextBox class="answer-box" />
      <div class="buttons">
        <div class="study-wrong" @click="studyQuestion">
          <DefaultButton class="button-wrong" red>
            <img src="../assets/icons/wrong.svg" />
          </DefaultButton>
        </div>
        <div class="study-correct" @click="studyQuestion">
          <DefaultButton class="button-correct" green @click="studyQuestion">
            <img src="../assets/icons/correct.svg" alt="CORRECT" />
          </DefaultButton>
        </div>
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
  methods: {
    studyQuestion() {
      this.$router.push({ name: "StudyQuestion" });
    },
  },
};
</script>

<style lang="scss" scoped>
.study {
  margin-top: 2vh;
}

.deck-name {
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 2.3rem;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;

  color: #5030d1;

  text-shadow: 0px 12px 17px rgba(0, 0, 0, 0.14),
    0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2);
}

.study-container {
  display: inline-flex;
  flex-direction: column;

  width: 70vw;

  background: #d1d8ff;
  box-shadow: 0px 12px 17px rgba(0, 0, 0, 0.14),
    0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.question-box {
  margin: 4vh 0px 0px 0px;

  align-self: center;
}

.answer-box {
  margin: 1vh 0px 0px 0px;

  align-self: center;
}

.buttons {
  display: flex;
  justify-content: center;

  margin: 1vh 0px 4vh 0px;
  align-self: center;
}

.button-correct {
  margin: 0px 0px 0px 2vw;
}

.button-wrong {
  margin: 0px 2vw 0px 0px;
}

.button-correct img {
  margin: 0.7vh 0.1vw 0.3vh 0vw;
}

.button-wrong img {
  margin: 0.8vh 0.2vw 0.3vh 0.4vw;
}

@media (max-width: 768px) {
  .study-container {
    width: 85vw;
  }
}

@media (max-width: 425px) {
  .study-container {
    width: 90vw;
  }
}
</style>