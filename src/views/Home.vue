<template>
<main>
     <Introduction />
    <Description />
    <div class="blog">
        <div class="container">
      <h3 class="subtitle"> Latest Articles</h3>
      <div class="cards cards-blog">
          <Card v-for="(post, i) in posts" :key="i" :post="post" />
      </div>
      </div>
    </div>
</main>
</template>

<script>

import Introduction from '../components/Introduction'
import Description from '../components/Description'
import Card from '../components/Card'


export default {
  name: "home",
  components: {
      Introduction,
      Description,
      Card
  },
 computed: {
     posts() {
         return this.$store.getters.blogPostsCards;
     }
 }
}
</script>

<style>
.blog {
    background-color: var(--vlgray);
}

.cards-blog {
    flex-wrap: wrap;
    justify-content: space-between;
}


</style>
