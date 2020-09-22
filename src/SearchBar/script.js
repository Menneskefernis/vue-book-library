import bus from '../bus'

export default {
  name: 'SearchBar',
  data() {
    return {
      bookData: {
        id: null,
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
      if (this.bookData.title !== "" && this.bookData.author !== "") {
        bus.$emit('new-book', this.bookData)
      }

      this.bookData = {
        title: "",
        author: "",
        pages: 50,
        isRead: false,
      }
    }
  },
}