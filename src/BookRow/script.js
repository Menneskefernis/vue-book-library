export default {
  name: 'BookRow',
  data() {
    return {
      isRead: this.bookData.isRead,
    }
  },
  props: ['bookData'],
}