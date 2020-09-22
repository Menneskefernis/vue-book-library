<template>
  <div>
    <button id="new-book" v-on:click="isVisible = !isVisible">NEW BOOK</button>
    <form class="book-form" :class="{visible: isVisible}" v-on:submit.prevent="onSubmit">
      <div>
        <label for="title">Title</label>
        <input id="title" type="text" v-model="bookData.title" name="title" maxlength="50" required>
      </div>
      <div>
        <label for="author">Author</label>
        <input id="author" type="text" v-model="bookData.author" name="author" maxlength="50" required>
      </div>
      <div>
        <label for="pages">Pages</label>
        <input id="pages" type="number" v-model="bookData.pages" name="pages" min="0" max="10000" value="50" required>
      </div>
      <div>
        <label for="read">Have you read this book?</label>
        <input id="read" type="checkbox" v-model="bookData.isRead" name="read">
      </div>
      <button id="submit-btn">Add</button>
    </form>
  </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>