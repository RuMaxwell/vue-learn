var app = new Vue({
  el: "#app",
  data: {
    boardContent: '',
    postContent: ''
  },
  methods: {
    post: function () {
      if (this.postContent.length > 0) {
        this.boardContent += strip(this.postContent) + '\n'
        this.postContent = ''
      }
    },
    clear: function () {
      this.boardContent = ''
    }
  }
})
