<template>
<div class="cards">
      <div class="card card-blog">
          <img src="./../assets/img/image-plane.jpg" alt="" class="card-img">
          <div class="desc">
          <span class="author">By Claire Robinson</span>
          <h3 class="card-title"> Receive money in any currency with no fees</h3>
          <p class="text">The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …</p>
  </div>
      </div>
    <div class="card card-blog">
          <img src="./../assets/img/image-plane.jpg" alt="" class="card-img">
          <div class="desc">
          <span class="author">By Claire Robinson</span>
          <h3 class="card-title"> Receive money in any currency with no fees</h3>
          <p class="text">The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …</p>
  </div>
      </div>
      <div class="card card-blog">
          <img src="./../assets/img/image-plane.jpg" alt="" class="card-img">
          <div class="desc">
          <span class="author">By Claire Robinson</span>
          <h3 class="card-title"> Receive money in any currency with no fees</h3>
          <p class="text">The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …</p>
  </div>
      </div>
      <div class="card card-blog">
          <img src="./../assets/img/image-plane.jpg" alt="" class="card-img">
          <div class="desc">
          <span class="author">By Claire Robinson</span>
          <h3 class="card-title"> Receive money in any currency with no fees</h3>
          <p class="text">The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …</p>
  </div>
      </div>
   </div>   
      
  
</template>

<script>

export default {
  name: "Description",
  props: ['card'],
  components: {
  },
  
}
</script>

<style>

.card {
    display: flex;
    flex-direction: column;
}

.card-blog {
    width: 25%;
    background-color: var(--white);
    border-radius: 10px;
}

.card-blog h3 {
    font-size: 1.1rem;
   color: var(--darkblue);
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