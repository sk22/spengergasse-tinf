<template>
  <div class="embed-container md-whiteframe md-whiteframe-2dp">
    <iframe :src="`https://www.youtube.com/embed/${id}`" frameborder="0" allowfullscreen></iframe>
  </div>
</template>
<script>
  export default {
    props: ['id'],
  };
</script>
