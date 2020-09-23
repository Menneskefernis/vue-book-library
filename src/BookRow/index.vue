<template>
  <div>
    <article>
      <div class="book-info">
        <h2>{{bookData.title}}</h2>
        <p>Author: <i>{{bookData.author}}</i></p>
        <p>Pages: <i>{{bookData.pages}}</i></p>
        <p v-if="isRead">Read: <i>Yes</i></p>
        <p v-else>Read: <i>No</i></p>
      </div>
      <div class="book-settings">
        <button id="remove-btn" v-on:click="$emit('remove')">Remove</button>
        <button id="read" v-if="isRead" v-on:click="toggleRead()" name="read">Have not read</button>
        <button id="read" v-else v-on:click="toggleRead()" name="read">Book read!</button>
      </div>
    </article>
  </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>