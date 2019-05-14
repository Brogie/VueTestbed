<template>
  <v-toolbar dark height="80" extended tabs class="blue-grey">
    <img src="@/assets/UoH-logo-white.svg" height="95%" href='/'>
    <v-toolbar-title class="white-text">Student Relationship Manager</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-divider inset vertical></v-divider>
    <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
      <v-icon size="24px">{{ icon }}</v-icon>
    </v-btn>
    <template v-slot:extension class="blue">
      <v-tabs
          color="blue-grey"
          align-with-title
        >

        <v-tabs-slider color="white"></v-tabs-slider>
          <v-tab tflat to="/">Home</v-tab>
          <v-tab tflat to="/events">Events</v-tab>
          <v-tab tflat to="/about">About</v-tab>
        </v-tabs>
      <v-toolbar-items class="hidden-sm-and-down">

        <v-spacer></v-spacer>
        <v-divider inset vertical></v-divider>
        <v-btn v-show="!loggedIn" flat to="/login">Login</v-btn>
        <v-btn v-show="loggedIn" flat @click="logout">Logout</v-btn>
      </v-toolbar-items>
    </template>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram'
    ]
  }),
  computed: {
    loggedIn: function () {
      return this.$store.getters.loggedIn
    }
  },
  methods: {
    logout () {
      this.$store.commit('logout')
      this.$router.push('/')
    }
  }
}
</script>
