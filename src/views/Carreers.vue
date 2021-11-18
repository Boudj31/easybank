<template>
<main class="carrers">
  <div class="container">
   <h1 class="title">Open in <span class="title" style="color: var(--limegreen)">All Locations</span></h1>
   <div class="cards">
     <CardCarreers />
   </div>
  </div>
  </main>
</template>

<script>
import CardCarreers from '../components/CardCarreers'
export default {
  name: "Carreers",
  data() {
      return {
          jobs: [],
      }
  },
  components: {
    CardCarreers
  }
}
</script>
<style>
 .carrers h1 {
    text-align: center;
    margin-top: 30px;
}
.carrers {
  background-color: var(--lightgb);
}

</style>