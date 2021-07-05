<template>
  <div class="container">
    <the-form />
  </div>
</template>

<script>
import TheForm from '@/components/TheForm'

export default {
  components: {
    TheForm
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: sans-serif;
}

.container {
  min-height: 100vh;
  padding: 50px 20px 0px 20px;
}

</style>