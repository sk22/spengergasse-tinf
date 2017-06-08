<template>
  <article-template>
    <h1>JavaScript Information Page</h1>
    <md-card class="logo">
      <md-card-media>
        <img src="../assets/javascript.svg">
      </md-card-media>
      <md-card-content>
        Inofficial JavaScript Logo by Christopher Williams and Manuel Strehl
      </md-card-content>
    </md-card>
    <h2>What is JavaScript?</h2>
    <section>
      <p>JavaScript ("JS" for short) is a full-fledged dynamic programming language that, when applied to an HTML document, can provide dynamic interactivity on websites. It was invented by Brendan Eich, co-founder of the Mozilla project, the Mozilla Foundation, and the Mozilla Corporation.</p>

      <p>JavaScript is incredibly versatile. You can start small, with carousels, image galleries, fluctuating layouts, and responses to button clicks. With more experience you'll be able to create games, animated 2D and 3D graphics, comprehensive database-driven apps, and much more!</p>

      <p>JavaScript itself is fairly compact yet very flexible. Developers have written a large variety of tools complementing the core JavaScript language, unlocking a vast amount of extra functionality with minimum effort. These include:</p>

      <ul>
        <li>Application Programming Interfaces (APIs) built into web browsers, providing functionality like dynamically creating HTML and setting CSS styles, collecting and manipulating a video stream from the user's webcam, or generating 3D graphics and audio samples.</li>
        <li>Third-party APIs to allow developers to incorporate functionality in their sites from other content providers, such as Twitter or Facebook.</li>
        <li>Third-party frameworks and libraries you can apply to your HTML to allow you to rapidly build up sites and applications.</li>
      </ul>
    </section>
    <section>
      <h2>Code Examples</h2>
      <p>Here's a simple clock made with JavaScript in combination with the HTML DOM.</p>
      <codepen>
        <p data-height="232" data-theme-id="0" data-slug-hash="bgBeqJ" data-default-tab="js,result" data-user="sk22" data-embed-version="2" data-pen-title="Simple clock" class="codepen">See the Pen <a href="http://codepen.io/sk22/pen/bgBeqJ/">Simple clock</a> by Samuel Kaiser (<a href="http://codepen.io/sk22">@sk22</a>) on <a href="http://codepen.io">CodePen</a>.</p>
      </codepen>
      <p>A more advanced example of how JavaScript can be used is 2048, a famous game by Gabriele Cirulli, published on the <a href="https://github.com/gabrielecirulli/2048">2048 GitHub repository</a> and playable <a href="https://gabrielecirulli.github.io/2048">here</a>.</p>      
    </section>

    <footer>
      <h2>Sources</h2>
      <ul>
        <li><a  href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics">Mozilla Developer Network</a></li>
      </ul>
    </footer>
  </article-template>
</template>
<script>
  import ArticleTemplate from '../components/ArticleTemplate.vue';
  import Codepen from '../components/Codepen.vue';

  export default {
    components: { ArticleTemplate, Codepen },
    mounted() {
      this.$material.setCurrentTheme('default');
    },
  };
</script>
<style scoped lang="sass">
  @import '../media';

  @include desktop {
    .logo {
      float: right;
      margin-left: 1rem;
      max-width: 20rem;
    }
  }
</style>
