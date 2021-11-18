<template>
<main class="blogview">
  <div class="container-sm">
      <div class="blog-content" v-if="currentPost">
       <h1 class="title">{{ this.currentPost[0].title}}</h1>
       <span>Posted {{ this.currentPost[0].date}}</span>
       <img class="img-blog" :src="this.currentPost[0].img" alt="">
       <p>{{ this.currentPost[0].content}}</p>
<p class="author">By {{ this.currentPost[0].author}}</p>
</div>

  </div>
  </main>
</template>

<script>
export default {
  name: "BlogView",
  components: {
  },
  data() {
      return {
          currentPost: null,
      }
  },
  async mounted() {
    this.currentPost = await this.$store.state.posts.filter((post) => {
      return post.id === this.$route.params.blogid;
    });
  },
}
</script>
<style>
.container-sm {
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
}
.img-blog {
    object-fit: cover;
    width: 100%;
}
.blogview {
    background-color: var(--lightgb);
}
.blogview h1 {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
}

.blogview p, .blogview img, .blogview span {
    margin-bottom: 20px;
}


</style>