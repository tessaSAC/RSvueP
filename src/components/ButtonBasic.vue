<template>
<div class="ButtonBasic">
  <button>{{ label }}</button>
</div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  }
}
</script>

<style lang="scss">
.ButtonBasic {
  @extend %Input-Container;

  button {
    display: inline-block;
    min-width: 20rem;
    border: none;
    border-radius: 0.3rem;
    background: $Color-Theme-30d;
    filter: drop-shadow(0.2rem 0.2rem 0.1rem $Color-Text-30);

    padding: 1rem 2rem;
    cursor: pointer;

    color: $Color-Theme-Contrast-70;
    text-decoration: none;
    text-align: center;
    font-size: 1rem;

    transition: background 250ms ease-in-out,
                transform filter 50ms ease;

    &:hover, &:focus {
      background: $Color-Focus-100;
    }

    &:focus {
      background: $Color-Focus-30d;
      outline: 0;
    }

    &:active {
      transform: translate(0.1rem, 0.1rem);
      filter: drop-shadow(0 0 0 $Color-Text-30);
    }
  }
}
</style>
