<template>
  <div class="blog-page">
      <div class="container">
          <h1 class="title">Our Blogposts</h1>
           <Card v-for="(post, i) in posts" :key="i" :post="post" />
             <Card v-for="(post, i) in posts" :key="i" :post="post" />
   </div>
  </div>
</template>

<script>
import Card from '../components/Card'

export default {
  name: "About",
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
.cards-blog{
     flex-wrap: wrap;
     justify-content: space-between;;
     margin-bottom: 20px;
}
.card-blog {

}

</style>