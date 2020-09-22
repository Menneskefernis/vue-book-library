import bus from '../bus'

export default {
  name: 'SearchBar',
  data() {
    return {
      bookData: {
        title: "",
        author: "",
        pages: 50,
        isRead: false,
      },

      isVisible: false,
    }
  },
  methods: {    
    onSubmit(event) {
      bus.$emit('book-data', this.bookData)
    }
  },
}