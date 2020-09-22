<template>
  <div>
    <article>
      <div class="book-info">
        <h2>{{bookData.title}}</h2>
        <p>Author: <i>{{bookData.author}}</i></p>
        <p>Pages: <i>{{bookData.pages}}</i></p>
        <p>Read: <i>{{bookData.isRead}}</i></p>
      </div>
      <div class="book-settings">
        <button id="remove-btn">Remove</button>
        <div>
          <label for="read">Read?</label>
          <input id="read" type="checkbox" name="read">
        </div>
      </div>
    </article>
  </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>