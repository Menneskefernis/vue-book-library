import BookRow from '../BookRow/index.vue'
import bus from '../bus'

export default {
  name: 'BooksTable',
  components: {
    'book-row': BookRow,
  },
  data() {
    return {
      books: [],
      nextBookId: 0,
    }
  },
  methods: {
    onBookSubmission(bookData) {
      bookData.id = this.nextBookId++
      this.books.unshift(bookData)
    }
  },
  created() {
    bus.$on('new-book', this.onBookSubmission)
  },
  destroyed() {
    bus.$off('new-book', this.onBookSubmission)
  }
}