<template>
  <div class="insert-text-field">
    <p class="text-input-label">Text label</p>
    <textarea type="text" class="text-input" />
  </div>
</template>
<script>
export default {
  name: "InsertTextLarge",
};
</script>

<style lang="scss" scoped>
.insert-text-field {
  display: inline-flex;
  flex-direction: column;
}

.text-input-label {
  align-self: flex-start;

  margin-left: 50px;

  font-family: "Roboto Condensed", Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.3rem;
  text-align: center;
  text-transform: uppercase;

  color: #373737;
}

.text-input {
  align-self: center;

  width: 50vw;
  height: 20vh;
  min-width: 480px;
  min-height: 130px;

  padding: 20px;
  resize: none;

  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  text-align: start;
  align-items: flex-start;

  background: #e8e8e8;
  color: #585858;

  box-shadow: 0px 12px 17px rgba(0, 0, 0, 0.14),
    0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  border: none;
  outline: none;
}
</style>