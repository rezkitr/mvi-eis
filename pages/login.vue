<template>
  <b-container
    class="min-vh-100 d-flex flex-column justify-content-center align-items-center"
  >
    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="danger"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
      style="width: 500px"
    >
      Failed to login. Check your username/password
    </b-alert>
    <LoginForm @loginFailed="showAlert" />
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      dismissSecs: 3,
      dismissCountDown: 0,
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
  },
}
</script>

<style></style>
