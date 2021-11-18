<template>
  <section id="section2">
    <div class="container">
      <div class="why">
          <h2 class="subtitle">Why choose Easybank?</h2>
          <p class="text">We leverage Open Banking to turn your bank account into your financial hub. Control 
  your finances like never before.</p>
      </div> 
      <div class="cards">
        <CardDescription v-for="(card, i) in cardsdata" :key="i" :card="card"/>
       </div> 
    </div>
  
  </section>
</template>

<script>
import CardDescription from './CardDescription'
export default {
  name: "Description",
  computed: {
    cardsdata() {
      return this.$store.state.cardsdata
    }
  },
  components: {
    CardDescription
  },
  
}
</script>

<style>

#section2 {
  background-color: var(--lightgb);
  min-width: 300px;
}
.cards {
    display: flex;
    flex-direction: row;
    margin-top: 70px;
    margin-bottom: 70px;
    gap: 10px;
}

.why {
  max-width: 50%;
}
@media screen and (max-width: 760px) {
   
   .why {
  max-width: 100%;
}
.cards {
       flex-direction: column;
       align-items: center;
   }
   .subtitle, .text {
     text-align: center;
   }

} 

</style>
