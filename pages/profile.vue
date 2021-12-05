<template>
  <b-container
    class="min-vh-100 d-flex flex-column justify-content-center align-items-center"
  >
    <div class="profile-badge d-flex justify-content-center align-items-center">
      <b-icon icon="person-fill" aria-hidden="true"></b-icon>
    </div>
    <b-card style="width: 500px" class="pt-4 text-center">
      <div>
        <h3>{{ $store.state.userName }}</h3>
      </div>

      <div class="d-flex justify-content-between">
        <NuxtLink to="/dashboard">
          <b-button size="sm">
            <b-icon icon="chevron-left" aria-hidden="true"></b-icon>
            Back
          </b-button>
        </NuxtLink>
        <b-button size="sm" variant="warning" @click="onLogout">
          Logout
          <b-icon icon="door-open" aria-hidden="true"></b-icon>
        </b-button>
      </div>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    onLogout() {
      this.$store.commit('clearState')
      this.$router.push('/login')
    },
  },
  beforeMount() {
    if (!this.$store.state.userToken) {
      this.$router.push('/login')
    }
  },
  // async mounted() {
  //   try {
  //     const res = await this.$axios
  //       .$get('/employees/current')
  //       .setToken(this.$store.state.userToken)
  //     console.log(res)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // },
}
</script>

<style scoped>
.profile-badge {
  background: #bdc3c7;
  width: 84px;
  height: 84px;
  border-radius: 50%;
  box-sizing: border-box;
  font-size: 46px;
  margin-bottom: -24px;
  z-index: 2;
}
</style>
