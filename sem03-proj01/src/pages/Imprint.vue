<template>
  <article-template>
    <h2>Imprint</h2>
    <p>Samuel Kaiser</p>

    <h3>attending school</h3>
    <p>HTBLuVA Spengergasse<br>
    Spengergasse 20<br>
    A-1050 Wien<br>
    01 546150</p>
    <a href="mailto:kai17521@spengergasse.at">kai17521@spengergasse.at</a> (no spam pls &lt;3)
  </article-template>
</template>
<script>
  import ArticleTemplate from '../components/ArticleTemplate.vue';

  export default {
    components: { ArticleTemplate },
    mounted() {
      this.$material.setCurrentTheme('imprint');
    },
  };
</script>
