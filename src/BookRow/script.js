import bus from '../bus'
import Vue from 'vue'

export default {
  name: 'BookRow',
  data() {
    return {
      bookData: {},
    }
  },
  methods: {
    onBookSubmission(bookData) { 
      this.bookData = bookData
    }
  },
  created() {
    bus.$on('book-data', this.onBookSubmission)
  },
  destroyed() {
    bus.$off('book-data', this.onBookSubmission)
  }
}