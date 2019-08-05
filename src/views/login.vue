<template lang="pug">
    div
      .title.red--text.text-center Пожалуйста заполните все поля
      v-container
        v-form
          v-container
            v-text-field(label="email", v-model="email" :rules="rules.emailRules")
            v-text-field(label="password", v-model="pass", type="password")
            v-btn(@click="logn(email, pass)") Войти
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        data:()=>({
          email: null,
          pass: null,
          rules: {
            emailRules: [
              v => !!v || 'Требуется электронная почта',
              v => /.+@.+\..+/.test(v) || 'E-mail должен быть действительным',
            ],
          }
        }),
        methods:{
          ...mapMutations(['login']),
          logn(email, pass){
            if(email !== '' && pass !== null){
              this.login({email: email, passsword: pass})
              if (this.$store.getters.User) this.$router.push('/user')
            } else {
              console.log("err")
            }
          }
        }
    }
</script>

<style scoped>

</style>
