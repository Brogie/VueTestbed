<template>
  <div class="Login">
    <h1>Please login with Google</h1>

    <v-btn @click="login" color="blue-grey" class="white--text">
      <v-icon left dark>{{icon}}</v-icon>
      <v-divider vertical></v-divider>
      Login with Google
    </v-btn>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Login',
  components: {},
  data: () => ({
    icon: 'fab fa-google-plus'
  }),
  computed: mapState({
    loggedIn: state => state.loggedIn
  }),
  methods: {
    login () {
      this.$store.dispatch('login')
        .then(() => this.$router.push(this.$route.query.redirect || '/'))
    }
  }
}
</script>
