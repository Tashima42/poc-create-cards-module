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

  margin-right: 15px;

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

  width: 22vw;
  min-width: 350px;
  min-height: 37px;

  margin-left: 15px;

  background: #d1d8ff;
  border: 1px solid #373737;
  box-sizing: border-box;
  border-radius: 20px;
  transform: matrix(1, 0, 0, -1, 0, 0);
}
</style>