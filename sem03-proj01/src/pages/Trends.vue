<template>
  <article-template>
    <h1>Trends</h1>
    <section>
      <h2>The State Of JavaScript</h2>
      <p>You can read about 2016's trends on <a href="https://stateofjs.com/2016">The State of JavaScript 2016</a>. Here's the introduction to the survey's results.</p>
      <cite>
        <p>Depending on who you ask, right now JavaScript is either turning into a modern, reliable language, or a bloated, overly complex dependency hell. Or maybe both?</p>
        <p>What's more, there's just so many options: Do you use React or Angular 2? Do you really need Webpack? And what's this month's recommended way of dealing with CSS?</p>
        <p>Like you, I spent far too many hours reading about all this, and at the end I still wasn't sure. So I decided to create a survey to see what everybody else thought. It seems like I must've hit a nerve, because I got over 9000 answers in just over two weeks!</p>
      </cite>
    </section>
    <section>
      <h2>Learning JavaScript in 2016</h2>
      <p>Watch <a href="https://www.youtube.com/user/jsonmez">Simple Programmer</a> talk about the awesome article <a href="https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f">How it feels to learn JavaScript in 2016</a> posted by on Hacker Noon. It's about learning modern frontend web development with the help of toolchains and frameworks.</p>
      <youtube id="ss10re-tjwo"></youtube>
      <h3>Versions</h3>
      <p>One problem stated in the article is that browsers do not always fully implement the newest JavaScript features. That's just one reason to precompile your modern code down to ECMAScript 5, which is a safe version most browsers support. Most people use <a href="https://babeljs.io">Babel</a> to accomplish this.</p>
      <p>Another reason to precompile your code is that you can split your code into multiple modules. The downside is, again, that browsers don't it yet natively. For that reason, you need to configure a module bundler like <a href="https://webpack.js.org/">Webpack</a> that analyzes your code for things like <code>import</code> statements and bundles the modules together. Configuring Webpack is indeed quite confusing, especially for newcomers.</p>
    </section>
    <section>
      <h2>Model–view–controller</h2>
      <p>Model–view–controller (MVC) is a software design pattern for implementing user interfaces on computers. It divides a given software application into three interconnected parts, so as to separate internal representations of information from the ways that information is presented to or accepted from the user.</p>
      <p>While jQuery is becoming obsolete (though still used by many people), more and more MVC libraries become popular in the JavaScript community. A long time, AngularJS has been the leader, which has changed with the increasing popularity of Facebook's React. The rather new framework Vue.js <a href="https://medium.com/the-vue-point/vue-in-2016-8df71d98bfb3">rapidly gained popularity</a> in 2016 and has become one of the <a href="https://risingstars2016.js.org/#all">most popular ones</a>. The following chart by <a href="http://stateofjs.com/2016/frontend/">The State of JavaScript 2016</a> shows how popular each framework was. You can sign up to their mailing list to be informed when 2017's survey starts.</p>

      <img src="../assets/frontend.png">

      <h3>React</h3>
      <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It is maintained by Facebook, Instagram and a community of individual developers and corporations. According to JavaScript analytics service Libscore, React is currently being used on the websites of Netflix, Imgur, Bleacher Report, Feedly, Airbnb, SeatGeek, HelloSign, Walmart, and others.</p>

      <codepen><p data-height="350" data-theme-id="0" data-slug-hash="VPpjYK" data-default-tab="result,js" data-user="sk22" data-embed-version="2" data-pen-title="React Hello World" class="codepen">See the Pen <a href="http://codepen.io/sk22/pen/VPpjYK/">React Hello World</a> by Samuel Kaiser (<a href="http://codepen.io/sk22">@sk22</a>) on <a href="http://codepen.io">CodePen</a>.</p></codepen>

      <h3>Vue.js</h3>
      <p>Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is very easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.</p>
      <codepen><p data-height="250" data-theme-id="0" data-slug-hash="qRrNpq" data-default-tab="js,result" data-user="sk22" data-embed-version="2" data-pen-title="Vue.js Hello World" class="codepen">See the Pen <a href="http://codepen.io/sk22/pen/qRrNpq/">Vue.js Hello World</a> by Samuel Kaiser (<a href="http://codepen.io/sk22">@sk22</a>) on <a href="http://codepen.io">CodePen</a>.</p></codepen>
    </section>
    
    <footer>
      <h2>Sources</h2>
        <ul>
          <li><a href="https://stateofjs.com/2016/introduction">The State of JavaScript 2016</a></li>
          <li><a href="https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f">How it feels to learn JavaScript in 2016</a></li>
          <li><a href="https://www.youtube.com/watch?v=ss10re-tjwo">
        How It Feels To Learn JavaScript In 2016 by Simple Programmer</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller">Wikipedia: Model–view–controller</a></li>
          <li><a href="https://facebook.github.io/react/tutorial/tutorial.html">React</a></li>
          <li><a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)">Wikipedia: React</a></li>
          <li><a href="https://vuejs.org/v2/guide/">Vue.js</a></li>
        </ul>
    </footer>
  </article-template>
</template>
<script>
  import ArticleTemplate from '../components/ArticleTemplate.vue';
  import Youtube from '../components/Youtube.vue';
  import Codepen from '../components/Codepen.vue';

  export default {
    components: { ArticleTemplate, Youtube, Codepen },
    mounted() {
      this.$material.setCurrentTheme('trends');
    },
  }
</script>
