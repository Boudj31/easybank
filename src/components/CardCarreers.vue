<template>
<div class="cards">
      <div class="card card-cr">
          <h3 class="card-title">Fullstack Developer</h3>
          <div class="loc">
              <img src="./../assets/img/loc.png" alt="" width="10">
             <p class="text">Boston</p>
          </div>
      </div>
      <div class="card card-cr">
          <h3 class="card-title">Fullstack Developer</h3>
          <div class="loc">
              <img src="./../assets/img/loc.png" alt="" width="10" height="10">
             <p class="text">Boston</p>
          </div>
      </div>
      <div class="card card-cr">
          <h3 class="card-title">Fullstack Developer</h3>
          <div class="loc">
              <img src="./../assets/img/loc.png" alt="" width="10" height="10">
             <p class="text">Boston</p>
          </div>
      </div>
      <div class="card card-cr">
          <h3 class="card-title">Fullstack Developer</h3>
          <div class="loc">
              <img src="./../assets/img/loc.png" alt="" width="10" height="10">
             <p class="text">Boston</p>
          </div>
      </div>
       <div class="card card-cr">
          <h3 class="card-title">Fullstack Developer</h3>
          <div class="loc"> 
              <img src="./../assets/img/loc.png" alt="" width="10" height="10">
             <p class="text">Boston</p>
          </div>
      </div>
       <div class="card card-cr">
          <h3 class="card-title">Fullstack Developer</h3>
          <div class="loc">
              <img src="./../assets/img/loc.png" alt="" width="10" height="10">
             <p class="text">Boston</p>
          </div>
      </div>
  
 </div>
</template>

<script>

export default {
  name: "CardCarreers",
  props: ['jobs'],
  components: {
  },
  
}
</script>

<style>

.cards {
    flex-wrap: wrap;
    justify-content: center;
}
.card-cr {
 display: flex;
 flex-wrap: wrap;
 background-color: white;
 border-left: 3px solid var(--limegreen);
 border-radius: 10px;
 padding: 10px;
 text-align: center;
 min-width: 31%;
}
.loc {
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: baseline;
}
</style>