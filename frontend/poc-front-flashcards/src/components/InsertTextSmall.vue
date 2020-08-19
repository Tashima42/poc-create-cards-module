<template>
  <div class="insert-text-field">
    <p class="text-input-label">Text label</p>
    <input type="text" class="text-input" />
  </div>
</template>
<script>
export default {
  name: "InsertTextSmall",
};
</script>

<style lang="scss" scoped>
.insert-text-field {
  display: inline-flex;
  flex-direction: row;
}

.text-input-label {
  align-self: center;
  justify-self: flex-start;

  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 1.4rem;
  text-align: center;
  text-transform: uppercase;

  color: #1f38d1;
}

.text-input {
  align-self: center;
  justify-self: flex-end;

  width: 25vw;
  height: 5vh;

  padding: 0px 1px 0px 10px;

  margin-left: 2vw;

  font-family: "Roboto Condensed", sans-serif;
  font-weight: normal;
  font-size: 0.9rem;

  background: #d1d8ff;
  border: 1px solid #373737;
  box-sizing: border-box;
  border-radius: 20px;
  outline: none;
}


@media (max-width: 1024px) {
  .insert-text-field {
    flex-direction: column;
  }
  .text-input-label {
    margin-right: 0px;
    align-self: center;
  }
  .text-input {
    width: 33vw;
  }
}

@media (max-width: 768px) {
  .text-input {
    width: 80vw;
  }
}
</style>