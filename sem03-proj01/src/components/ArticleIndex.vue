<template>
  <md-card class="index">
    <md-card-content>
      <ol>
        <li v-for="item in headings">
          <a @click="scroll(item.id)" :href="hash">
            {{ item.name }}
          </a>
        </li>
      </ol>
    </md-card-content>
  </md-card>
</template>
<script>
  import dashify from 'dashify';

  export default {
    props: ['refs'],
    data: () => ({
      headings: {},
      hash: location.hash,
    }),
    methods: {
      scroll(to) {
        this.refs.article.querySelector(`#${to}`).scrollIntoView();
      },
    },
    mounted() {
      const elements = Array.from(this.refs.article.querySelectorAll('h2'));
      if (elements.length > 0) {
        this.$el.style.display = 'block';
      }
      elements.forEach(node => node.id = dashify(node.innerText));

      this.headings = elements.map(node => ({
        name: node.innerText,
        id: node.id,
      }));
    },
  };
</script>
<style lang="sass">
  .index {
    display: none;

    ol {
      padding-left: 1.5rem;
    }
  }
</style>
