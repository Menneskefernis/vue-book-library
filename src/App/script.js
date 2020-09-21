import SearchBar from '../SearchBar/index.vue'
import BooksTable from '../BooksTable/index.vue'

export default {
  name: 'App',
  components: {
    'search-bar': SearchBar,
    'books-table': BooksTable,
  },
  data() {
    return {}
  },
}