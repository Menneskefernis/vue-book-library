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
      this.books.push(bookData)
      this.sort()
      this.saveToLocalStorage()
    },
    removeBook(index) {
      this.books.splice(index, 1)
      this.saveToLocalStorage()
    },
    sort() {
      this.books.sort((a, b) => {
        if (a.title > b.title) {
          return 1
        } else {
          return -1
        }
      })
    },
    findMaxID() {
      const maxID = this.books.reduce((max, book) => {
        return book.id > max ? book.id : max
      }, 0)
      return maxID
    },
    saveToLocalStorage() {
      localStorage.setItem('Books', JSON.stringify(this.books))
    }
  },
  created() {
    bus.$on('new-book', this.onBookSubmission)
    this.books = JSON.parse(localStorage.getItem('Books'))
    if (this.books) this.nextBookId = this.findMaxID() + 1
  },
  destroyed() {
    bus.$off('new-book', this.onBookSubmission)
  }
}