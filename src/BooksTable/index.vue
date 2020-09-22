<template>
  <div>
    <section id="library">
      <h1>Library</h1>
      <section id="book-list">
        <book-row
          v-for="(book, index) in books"
          :bookData="book"
          :key="book.id"
          v-on:remove="books.splice(index, 1)">
        </book-row>
      </section>
    </section>
  </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>