<script>
export default {
  beforeMount() {
    if (!this.$store.state.userToken) {
      this.$router.push('/login')
    }
  },
}
</script>
