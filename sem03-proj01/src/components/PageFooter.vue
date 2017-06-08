<template>
  <footer class="md-whiteframe md-whiteframe-4dp">
    <div class="copyright">&copy; Samuel Kaiser</div>
  </footer>
</template>
<style scoped lang="sass">
  @import "../media";

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #424242;
    color: #fafafa;
    height: 5rem;

    .copyright {
      margin: 0 auto;
      padding: 0 1rem;

      @include tablet {
        width: 30rem;
      }

      @include laptop {
        padding: 0;
      }

      @include desktop {
        width: 45rem;
      }
    }
  }
</style>
