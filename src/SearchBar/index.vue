<template>
  <div>
    <button id="new-book">NEW BOOK</button>
    <form class="book-form">
      <div>
        <label for="title">Title</label>
        <input id="title" type="text" name="title" maxlength="50" required>
      </div>
      <div>
        <label for="author">Author</label>
        <input id="author" type="text" name="author" maxlength="50" required>
      </div>
      <div>
        <label for="pages">Pages</label>
        <input id="pages" type="number" name="pages" min="0" max="10000" value="50" required>
      </div>
      <div>
        <label for="read">Have you read this book?</label>
        <input id="read" type="checkbox" name="read">
      </div>
      <button id="submit-btn">Add</button>
    </form>
  </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>