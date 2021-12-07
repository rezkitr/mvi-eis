<script>
export default {
  beforeMount() {
    if (!this.$store.state.userToken) {
      this.$router.push('/login')
    } else {
      this.$router.push('/dashboard')
    }
  },
}
</script>
