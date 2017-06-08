<template>
  <article-template>
    <h1>Features</h1>
    <section>
      <p>When JavaScript was new, people were excited about using it to add fancy features to pimp their web pages. Nowadays, there's much more JavaScript is used for, even far away from the browser. Nevertheless, here are some features JavaScript has in the browser.</p>
      <h2>HTTP requests</h2>
      <p>Request or send data from or to a server without leaving the site. Traditonally done with jQuery's ajax method or directly using the built-in XMLHttpRequest class. Nowadays people often use the new <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a>-based <a href="https://developer.mozilla.org/en/docs/Web/API/Fetch_API">Fetch API</a>, which still needs to be polyfilled in some browsers.</p>
    </section>
    <section>
      <h2>DOM</h2>
      <p>When it comes to accessing the web page, the key to accomplishing this is using the so-called DOM (Document Object Model). It makes the HTML and CSS accessible and modifiable through JavaScript.</p>
      <p>Here's a very basic example on how the document object can be used to change elements' CSS properties and process data entered in input fields. That way, JavaScript can validate user input before being uploaded to the server.</p>

      <codepen>
        <p data-height="270" data-theme-id="0" data-slug-hash="wggexN" data-default-tab="js,result" data-user="sk22" data-embed-version="2" data-pen-title="JavaScript DOM Example" class="codepen">See the Pen <a href="http://codepen.io/sk22/pen/wggexN/">JavaScript DOM Example</a> by Samuel Kaiser (<a href="http://codepen.io/sk22">@sk22</a>) on <a href="http://codepen.io">CodePen</a>.</p>
      </codepen>
    </section>
    <section>
      <h3>Polyfilling</h3>
      <p>Polyfills are needed if certain features are not supported by specific browsers, for example the Fetch API. A polyfill is a piece of code that implements the same API as the missing feature would.</p>
    </section>
    <section>
      <h2>Dynamic typing and data types</h2>
      <p>JavaScript is a loosely typed or a dynamic language. That means you don't have to declare the type of a variable ahead of time. The type will get determined automatically while the program is being processed. That also means that you can have the same variable as different types:</p>
      <codepen>
        <p data-height="300" data-theme-id="0" data-slug-hash="jymKPr" data-default-tab="js,result" data-user="sk22" data-embed-version="2" data-pen-title="Dynamic typing" class="codepen">See the Pen <a href="http://codepen.io/sk22/pen/jymKPr/">Dynamic typing</a> by Samuel Kaiser (<a href="http://codepen.io/sk22">@sk22</a>) on <a href="http://codepen.io">CodePen</a>.</p>
      </codepen>
    </section>
    <section>
      <h2>JSON</h2>
      <p>The JavaScript Object Notation (JSON) is a data-interchange format.  Although not a strict subset, JSON closely resembles a subset of JavaScript syntax. Though many programming languages support JSON, JSON is especially useful for JavaScript-based apps.</p>

      <p>JSON can represent numbers, booleans, strings, null, arrays (ordered sequences of values), and objects (string-value mappings) made up of these values (or of other arrays and objects).  JSON does not natively represent more complex data types like functions, regular expressions, dates, and so on.  (Date objects by default serialize to a string containing the date in ISO format, so the information isn't completely lost.) If you need JSON to represent additional data types, transform values as they are serialized or before they are deserialized. Much like XML, JSON has the ability to store heirarchical data unlike the more traditional CSV format.</p>
      <p>Since many programming languages natively support JSON and it's easy to use the data, most REST APIs nowadays use the JSON data format instead of XML, which is rarely used today (that's why XMLHttpRequest is called that way).</p>
      
      <h3>Example data represented in JSON</h3>
      <pre>{
  "firstName": "John",
  "lastName": "Smith",
  "isAlive": true,
  "age": 25,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021-3100"
  },
  "phoneNumbers": [
    {
      "type": "home",
      "number": "212 555-1234"
    },
    {
      "type": "office",
      "number": "646 555-4567"
    },
    {
      "type": "mobile",
      "number": "123 456-7890"
    }
  ],
  "children": [],
  "partner": null
}</pre>
      <p>Here's how an object can be stringified and a string can be parsed to an JavaScript object:</p>
      <codepen>
        <p data-height="265" data-theme-id="0" data-slug-hash="LxyBVP" data-default-tab="js,result" data-user="sk22" data-embed-version="2" data-pen-title="LxyBVP" class="codepen">See the Pen <a href="http://codepen.io/sk22/pen/LxyBVP/">LxyBVP</a> by Samuel Kaiser (<a href="http://codepen.io/sk22">@sk22</a>) on <a href="http://codepen.io">CodePen</a>.</p>
      </codepen>
    </section>
    <section>
      <h2>All about JavaScript</h2>
      <p>There's a great series of books by Kyle Simpson published by the famous publishing house <em>O'Reilly Media</em>. Its drafts are available free to read on GitHub: <a href="https://github.com/getify/You-Dont-Know-JS">github.com/getify/You-Dont-Know-JS</a>.</p>
      <cite>
        <p>This is a series of books diving deep into the core mechanisms of the JavaScript language. The first edition of the series is now complete.</p>
        <p>These books are being released here as drafts, free to read, but are also being edited, produced, and published through O'Reilly.</p>
      </cite>
    </section>
  </article-template>
</template>
<script>
  import ArticleTemplate from '../components/ArticleTemplate.vue';
  import Codepen from '../components/Codepen.vue';

  export default {
    components: { ArticleTemplate, Codepen },
    mounted() {
      this.$material.setCurrentTheme('features');
    },
  };
</script>
