export default (await import('vue')).defineComponent({
  name: 'JobSearchForm',
  components: { ActionButton, TextInput },
  data() {
    return {
      role: '',
      location: ''
    }
  },
  methods: {
    searchForJobs() {
      this.$router.push({ name: 'JobResults', query: { role: this.role, location: this.location } })
    }
  }
})
