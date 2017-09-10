<script>
  export default {
    computed: {
      spinnerColor() {
        return this.color || this.$parent.color || '#ccc'
      },
      spinnerSize() {
        return (this.size || this.$parent.size || 1) + 'rem'
      }
    }
  }
</script>
