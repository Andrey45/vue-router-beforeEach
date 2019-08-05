<template lang="pug">
  v-app
    navbar
    v-content
      router-view
</template>

<script>

import Navbar from "./components/navbar";
export default {
  name: 'App',
  components: {
    Navbar,
  },
  data: () => ({
    //
  }),
  mounted() {
  }
};
</script>
