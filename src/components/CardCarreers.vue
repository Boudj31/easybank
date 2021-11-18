<template>
<div>
      <div class="card card-cr">
          <h3 class="card-title">{{job.title}}</h3>
          <div class="loc">
              <img src="./../assets/img/loc.png" alt="" width="10">
             <p class="text">{{job.city}}</p>
          </div>
      </div>
    
 </div>
</template>

<script>

export default {
  name: "CardCarreers",
  props: ['job'],
  components: {
  },
  
}
</script>

<style>

.cards-cr {
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
}
.card-cr {
 display: flex;
 flex-wrap: wrap;
 background-color: white;
 border-left: 3px solid var(--limegreen);
 border-radius: 10px;
 padding: 10px;
 text-align: center;
 min-width: 320px;
 max-width: 320px;
}
.card-cr:focus {
 background-color: var(--limegreen);
}
.loc {
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: baseline;
}
</style>