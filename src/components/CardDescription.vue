<template>
      <div class="card">
          <img :src="card.img" alt="" class="card-logo" width="70">
          <h3 class="card-title">{{card.title}}</h3>
          <p class="text">{{card.content}}</p>
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


.card-logo, .card-title {
    margin-bottom: 15px;
}
.card-title {
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--darkblue);
    opacity: 0.9;
}
/*TABLETTE */ 
@media screen and (max-width: 760px) {
   
   .cards {
       flex-direction: column;
       align-items: center;
   }
   .card-logo {
       display: block;
        margin-left: auto;
       margin-right: auto;
   }
   .card {
       margin-bottom: 20px;
   }
   .card-title, .card .text {
       text-align: center;
   }

} 


</style>
