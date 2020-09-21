<template>
  <div>
    <article>
      <div class="book-info">
        <h2>Harry Potter</h2>
        <p>Author: <i>J.K. Rowling</i></p>
        <p>Pages: <i>425</i></p>
        <p>Read: <i>False</i></p>
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