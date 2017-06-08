<template>
  <div class="content">
    <div class="side left">
      <article-index :refs="this.$refs"></article-index>
    </div>
    <div class="article" ref="article"><slot></slot></div>
    <div class="side right"><slot name="aside"></slot></div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import dashify from 'dashify';
  import ArticleIndex from './ArticleIndex.vue';

  export default {
    components: { ArticleIndex },
    methods: {
      addClasses() {
        const classes = {
          h1: 'md-headline',
          h2: 'md-title',
        };
        const addClasses = (query, className) => {
          this.$el
            .querySelectorAll(query)
            .forEach(n => n.classList.add(className));
        }
        Object.keys(classes).forEach(q => addClasses(q, classes[q]));
      },
    },

    mounted() {
      this.addClasses();
    },
  }
</script>
<style lang="sass">
  @import '../media';

  .left {
    margin-bottom: 1rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    margin: 1rem auto;
    margin-bottom: 2rem;
  }

  .side {
    flex-basis: 0;
    flex-grow: 1;
  }

  @include tablet {
    .article {
      flex-grow: 0;
    }

    .content {
      width: 30rem;
      margin-top: 1.5rem;
    }
  }

  @include laptop {
    .left {
      margin: 0;
    }

    .content {
      flex-direction: row;
      width: auto;
      margin-top: 2rem;
    }

    .article {
      width: 30rem;
      margin-left: 3rem;
      margin-right: 3rem;
    }
  }

  @include desktop {
    .article {
      width: 45rem;
    }
  }
</style>
