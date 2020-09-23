export default {
  name: 'BookRow',
  data() {
    return {
      isRead: this.bookData.isRead,
    }
  },
  methods: {
    toggleRead() {
      this.isRead = !this.isRead
      this.$emit('toggleReadStatus', this.isRead)
    },
  },
  props: ['bookData'],
}