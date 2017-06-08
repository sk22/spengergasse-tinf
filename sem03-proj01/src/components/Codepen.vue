<template>
  <div class="md-whiteframe md-whiteframe-2dp">
    <slot></slot>
  </div>
</template>
<script>
  import codepenInit from '../codepen-init';

  export default {
    mounted() {
      codepenInit();
    },
  };
</script>
