<template>
  <div class="md-tabs" :class="themeClass">
    <nav class="md-whiteframe md-tabs-navigation md-has-icon md-has-label md-centered">
      <router-link
        v-for="item in nav"
        exact :to="item.path"
        tag="button"
        class="md-tab-header"
        type="button">
        <md-ink-ripple></md-ink-ripple>
        <div class="md-tab-header-container">
          <md-icon>{{ item.icon }}</md-icon><span>{{ item.name }}</span>
        </div>
      </router-link>
    </nav>
  </div>
</template>
<script>
  import theme from 'vue-material/src/core/components/mdTheme/mixin';

  export default {
    mixins: [theme],
    props: ['nav'],
  };
</script>
<style lang="sass" scoped>
  @import '../media';

  .md-tabs {
    display: none;

    @include tablet {
      display: initial;
    }
  }
</style>
