<template>
  <article-template>
    <h1>Modules</h1>
    <section>
      <h2>npm</h2>
      <p>Over the past few years, the JavaScript has grown the biggest module repository existing named <a href="https://npmjs.com">npm</a> (node package manager).</p>
      <p>(<a href="https://nodejs.org">Node.js</a> is an increasingly popular server-side programming language which uses Google's V8 engine and therefore runs JavaScript code)</p>
      <img src="../assets/modules.png" alt="Modulecounts">
      <cite>
        <ul>
          <li>npm is the package manager for Node.js. It was created in 2009 as an open source project to help JavaScript developers easily share packaged modules of code.</li>
          <li>The npm Registry is a public collection of packages of open-source code for Node.js, front-end web apps, mobile apps, robots, routers, and countless other needs of the JavaScript community.</li>
          <li>npm is the command line client that allows developers to install and publish those packages.</li>
          <li>npm, Inc. is the company that hosts and maintains all of the above.</li>
        </ul>
      </cite>
    </section>
    <section>
      <h2>2016 JavaScript Rising Stars</h2>
      <img class="most-popular" src="../assets/most-popular.svg" alt="Most Popular Projects in 2016">
      <p>The people from <a href="https://bestof.js.org">bestof.js.org</a> compiled a list of the most starred JavaScript projects on GitHub. </p>
      <cite>
        <p>By checking the 10 hottest projects of the year, you can get a good overview of what was the web development landscape in 2016, since you will find:</p>
        <ol>
          <li>3 UI frameworks: Vue.JS, React and Angular 2</li>
          <li>A new node.js package manager: Yarn</li>
          <li>The leading solution to build desktop applications: Electron</li>
          <li>A solution to quicky start a new React project Create React App</li>
          <li>A mobile framework: React Native</li>
          <li>The most famous CSS toolkit: Bootstrap</li>
          <li>A state management library based on functional concepts: Redux</li>
          <li>A powerful and flexible chart library: D3</li>
          <li>It tells a lot about JavaScript ubiquity and versatility in 2016.</li>
        </ol>
        <h3>And the 2016 winner is... 🏆</h3>
        <p>
          <a href="https://vuejs.org/">Vue.JS</a> project got more than 25,000 stars on Github last year, it means 72 stars by day, it's more than any other framework, including React and Angular.
          The version 2, that takes advantage of the Virtual DOM for performance, was released in October.
          Vue.JS is used in production by big companies (including Alibaba, the biggest e-commerce company in China), so you can consider it as a safe choice.
          There is already a quite mature eco-system around it, including a router (vue-router) and a state management library (Vuex).
          It seems that Vue.JS took the best of React (the component approach) and AngularJS (templates are html code enhanced by the framework features).
        </p>
      </cite>
      <p>You can see the full list and the specific categories on <a href="https://risingstars2016.js.org/">risingstars2016.js.org</a>.</p>
    </section>
    <footer>
      <h2>Sources</h2>
      <ul>
        <li><a href="https://www.npmjs.com/">npm</a></li>
        <li><a href="http://www.modulecounts.com/">Modulecounts</a></li>
        <li><a href="https://risingstars2016.js.org/">risingstars2016.js.org</a></li>
      </ul>
    </footer>
  </article-template>
</template>
<script>
  import ArticleTemplate from '../components/ArticleTemplate.vue';

  export default {
    components: { ArticleTemplate },
    mounted() {
      this.$material.setCurrentTheme('frameworks');
    },
  };
</script>
<style scoped lang="sass">
  @import '../media';

  @include desktop {
    .most-popular {
      float: right;
      margin-left: 1rem;
      max-width: 25rem;
    }
  }
</style>
