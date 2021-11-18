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
  data() {
      return {
          cardsdata : [
              {img: "/logo/icon-online.svg", title: "Online Banking", content: " Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."},
              {img: "/logo/icon-budgeting.svg", title: "Simple Budgeting", content: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."},
              {img: "/logo/icon-onboarding.svg", title: "Fast Onboarding", content: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."},
              {img: "/logo/icon-api.svg", title: "Open API", content: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."}
          ]
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
