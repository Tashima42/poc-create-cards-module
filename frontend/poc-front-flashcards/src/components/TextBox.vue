<template>
  <div class="insert-text-field">
    <p class="text-input-label">Text label</p>
    <div class="text-box">
      <p
        class="text-paragraph"
      >Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "TextBox",
};
</script>

<style lang="scss" scoped>
.insert-text-field {
  display: inline-flex;
  flex-direction: column;
}

.text-input-label {
  align-self: flex-start;

  margin-left: 30px;
  margin-bottom: 8px;

  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.1em;
  text-align: center;
  text-transform: uppercase;

  color: #373737;
}

.text-box {
  align-self: center;

  width: 23vw;
  height: 13vh;
  min-width: 400px;
  min-height: 94px;

  padding: 20px;
  resize: none;

  margin-bottom: 20px;

  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  text-align: start;
  align-items: flex-start;

  background: #5030d1;

  box-shadow: 0px 12px 17px rgba(0, 0, 0, 0.14),
    0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  border: none;
  outline: none;
}

.text-paragraph {
  font-family: "Roboto Condensed", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  text-align: center;

  word-wrap: break-word;

  color: #e8e8e8;
}
</style>