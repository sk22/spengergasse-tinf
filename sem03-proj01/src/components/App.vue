<template>
  <div class="container">
      <side-nav :nav="nav" ref="sidenav"></side-nav>

      <md-whiteframe md-elevation="4">
        <header>
          <md-toolbar>
            <md-button
              class="md-icon-button open-sidebar"
              @click="sidenav('open')">
              <md-icon>menu</md-icon>
            </md-button>
            <h1 class="md-title">JavaScript Information</h1>
          </md-toolbar>
          <tabs-nav :nav="nav"></tabs-nav>
        </header>
      </md-whiteframe>
      <main>
        <router-view></router-view>
      </main>
    <page-footer></page-footer>
  </div>
</template>

<script>
import nav from '../nav';
import PageFooter from './PageFooter.vue';
import TabsNav from './TabsNav.vue';
import SideNav from './SideNav.vue';

export default {
  components: { TabsNav, SideNav, PageFooter },
  data: () => ({ nav }),
  methods: {
    sidenav(action) {
      this.$refs.sidenav.control(action);
    },
  },
};
</script>

<style lang="sass" scoped>
  @import "../media";

  header {
    overflow: hidden;
  }

  @include tablet {
    .open-sidebar {
      display: none;
    }

    .md-title {
      margin-left: 1rem;
    }
  }
</style>
