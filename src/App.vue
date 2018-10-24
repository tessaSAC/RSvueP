<template>
  <div id="app">
    <InputBasic></InputBasic>
    <CheckboxGroup></CheckboxGroup>
  </div>
</template>

<script>
import InputBasic from "./components/InputBasic.vue";
import CheckboxGroup from "./components/CheckboxGroup.vue";

export default {
  name: "app",
  components: {
    InputBasic,
    CheckboxGroup,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
