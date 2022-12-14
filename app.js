const app = Vue.createApp({
  data() {
    return {
      url: "https://vuejs.org/",
      showBooks: true,
      favBooks: false,
      books: [
        {
          title: "name of the wind",
          author: "patrick rothfuss",
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "the way of kings",
          author: "brandon sanderson",
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "the final empire",
          author: "brandon sanderson",
          img: "assets/3.jpg",
          isFav: true,
        },
      ],
      selectedCursor: "pointer",
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFav(book) {
      console.log(book);
      book.isFav = !book.isFav;
    },
    toggleFavBooks() {
      this.favBooks = !this.favBooks;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
