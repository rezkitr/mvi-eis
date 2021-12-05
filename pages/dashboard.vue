<template>
  <b-container
    class="min-vh-100 d-flex flex-column py-3"
    v-if="this.$store.state.userToken"
  >
    <b-card>
      <div class="nav-bar d-flex justify-content-between align-items-center">
        <div class="datetime">{{ date }} - {{ time }}</div>
        <div class="d-flex align-items-center">
          <div class="greetings">
            Welcome, <span class="username">{{ $store.state.userName }}</span>
          </div>
          <NuxtLink to="/profile">
            <div
              class="profile-badge d-flex justify-content-center align-items-center ml-3"
            >
              <b-icon icon="person-fill" aria-hidden="true"></b-icon>
            </div>
          </NuxtLink>
        </div>
      </div>
    </b-card>

    <EmployeesTable />
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
    }
  },
  methods: {
    setTime() {
      setInterval(() => {
        this.time = new Date().toLocaleTimeString()
        this.date = new Date().toLocaleDateString()
      }, 1000)
    },
  },
  beforeMount() {
    this.setTime()
    if (!this.$store.state.userToken) {
      this.$router.push('/login')
    }
  },
}
</script>

<style>
.nav-bar {
  padding: 0;
  box-sizing: border-box;
}
.greetings {
  font-size: 24px;
  font-weight: 200;
}
.username {
  text-decoration: underline;
  font-weight: 500;
}
a {
  color: #000;
  text-decoration: none;
}

.profile-badge {
  background: #bdc3c7;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
