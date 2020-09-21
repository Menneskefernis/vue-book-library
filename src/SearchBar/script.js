export default {
  name: 'SearchBar',
  data() {
    return {
      title: "",
      author: "",
      pages: 50,
      isRead: false,
      isVisible: false,
    }
  },
  methods: {    
    onSubmit(event) {
      console.log(title)
    }
  },
}