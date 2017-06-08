<template>
  <md-sidenav class="md-left md-fixed" ref="sidenav">
    <md-list>
      <md-list-item @click="control('close')" v-for="item in nav">
        <router-link exact :to="item.path">
          <md-icon>{{ item.icon }}</md-icon><span>{{ item.name }}</span>
        </router-link>
      </md-list-item>
    </md-list>
  </md-sidenav>
</template>
<script>
  export default {
    props: ['nav'],
    methods: {
      control(action) {
        this.$refs.sidenav[action]();
      },
    }
  };
</script>
