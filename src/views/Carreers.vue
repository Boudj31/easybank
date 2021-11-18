<template>
<main class="carrers">
  <div class="container">
   <h1 class="title">Open in <span class="title" style="color: var(--limegreen)">All Locations</span></h1>
   <div class="cards cards-cr">
     <CardCarreers v-for="(job, i) in jobs" :key="i" :job="job"  />
   </div>
  </div>
  </main>
</template>

<script>
import CardCarreers from '../components/CardCarreers'
export default {
  name: "Carreers",
  computed: {
    jobs() {
      return this.$store.state.jobs
    }
  },

  components: {
    CardCarreers
  }
}
</script>
<style>
.cards-cr {
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
}
 .carrers h1 {
    text-align: center;
    margin-top: 30px;
}
.carrers {
  background-color: var(--lightgb);
}

</style>