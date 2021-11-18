<template>
      <div class="card card-blog">
          <img :src="post.img" alt="" class="card-img">
          <div class="desc">
          <span class="author">{{post.author}}</span>
          <h3 class="card-title"> 
              <router-link :to="{name: 'BlogView', params: {blogid: this.post.id}}">{{post.title}}</router-link>
              </h3>
          <p class="text">{{post.summary}}</p>
  </div>
      </div>   
      
  
</template>

<script>

export default {
  name: "Description",
  props: ['post'],
  components: {
  },
  methods: {
       maxLenght(value, length) {
     if (value.length > length) {
        return value.slice(0, length - 4) + '...';
    } else {
        return value;
    }
}
  }
  
}
</script>

<style>

.card-blog {
    background-color: var(--white);
    border-radius: 10px;
     display: flex;
     width: 23%;
}

.card-blog h3 {
    font-size: 1.1rem;
   color: var(--darkblue);
   opacity: 0.9;
   
}
.card-blog h3:hover {
   color: var(--limegreen);
   opacity: 0.9;
   
}


.card-img, .card-title {
    margin-bottom: 15px;
}
.card-img {
    display: block;
    width: 100%;
    min-height: 200px;
    object-fit: cover;
    border-top-left-radius: 10px;
     border-top-right-radius: 10px;
}

.author {
   color: var( --grayishblue);
   font-size: 0.7rem;
   margin-bottom: 10px;
}
.desc {
    padding: 15px;
}
/*TABLETTE */ 
@media screen and (max-width: 760px) {
   
  
   .card-logo {
       display: block;
        margin-left: auto;
       margin-right: auto;
   }
   .card-blog {
       margin-bottom: 20px;
       width: 100%;
   }
   .card-title, .card .text {
       text-align: center;
   }
   .author {
   text-align: center;
}

} 


</style>