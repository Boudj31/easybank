<template>
  <div class="blog-page">
      <div class="container">
          <h1 class="title">Our Blogposts</h1>
          <div class="cards cards-blog">
               <Card v-for="(post, i) in posts" :key="i" :post="post" />
          </div>
   </div>
  </div>
</template>

<script>
import Card from '../components/Card'

export default {
  name: "Blog",
  components: {
      Card
  },
   computed: {
     posts() {
         return this.$store.state.posts;
     }
 }

}
</script>
<style>
.blog-page {
    background-color: var( --lightgb);
}
.blog-page h1 {
    text-align: center;
    margin-top: 30px;
}
.cards-blog {
    flex-wrap: wrap;
    justify-content: space-between;
}

</style>