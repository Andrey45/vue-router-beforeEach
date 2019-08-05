<template lang="pug">
  div
    v-app-bar(dark)
      v-toolbar-title
        v-btn(router, to="/", color="orange", text) {{title}}
      v-spacer
      v-tooltip(bottom, v-if="User")
        template(v-slot:activator="{on}")
          v-btn(@click="logou()" color="orange", icon, v-on="on")
            v-icon(size="30")
              | fas fa-user
        span Выйти
      v-tooltip(bottom, v-if="User == false")
        template(v-slot:activator="{on}")
          v-btn(router, :to="links.url", color="orange", icon, v-on="on" )
            v-icon(size="30")
              | fas fa-user
        span {{links.title}}
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
export default {
    computed: mapGetters(['User']),
    data:()=>({
      title: 'Vue-router',
      links: {url: '/user', title: 'Войти'},
    }),
    methods:{
      ...mapMutations(["logout"]),
      logou(){
        this.logout()
        this.$router.push('home')
      }
    }
}
</script>

<style scoped>

</style>
