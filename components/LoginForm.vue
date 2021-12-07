<template>
  <div class="main d-flex justify-content-center">
    <b-card style="width: 500px" class="flex-grow-1">
      <b-card-title class="pl-3"
        >Login<b-icon icon="key-fill" class="ml-2" aria-hidden="true"></b-icon
      ></b-card-title>
      <b-card-body>
        <b-form @submit.prevent="onSubmit">
          <b-form-group label="Username">
            <b-form-input
              type="text"
              required
              v-model="username"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Password">
            <b-form-input
              type="password"
              required
              v-model="password"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" block variant="primary">Login</b-button>
        </b-form>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async onSubmit() {
      try {
        const res = await this.$axios.$post('/auths/login', {
          username: this.username,
          password: this.password,
        })
        if (res.success) {
          this.$store.commit('setUserToken', res.data.token)
          this.$store.commit('setUserName', this.username)
          this.$axios.setToken(res.data.token)
          this.$router.push('/dashboard')
        }
      } catch (error) {
        this.$emit('loginFailed')
      }
    },
  },

  mounted() {
    if (this.$store.state.userToken) {
      this.$router.push('/dashboard')
    }
  },
}
</script>

<style>
.main h4 {
  border-left: 3px solid salmon;
}
</style>
