<template>
  <section id="section2">
    <div class="container">
      <div class="about">
          <h2 class="subtitle">About us</h2>
          <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus possimus fugit quis voluptates fuga repellendus aperiam commodi ab at, ratione minus eos quae nisi quia enim totam beatae amet illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis minima temporibus molestiae tempora est adipisci ipsum dolore necessitatibus maxime, deserunt natus iure sunt sint neque numquam? Enim tempora quo ipsa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptas dolor, quae vitae voluptatibus, recusandae pariatur qui, placeat sit officia aliquid saepe minus natus eaque modi sunt repellendus libero. Libero.</p>
      </div> 
      <div class="cards">
        <CardDescription v-for="(card, i) in cardsabout" :key="i" :card="card"/>
       </div> 
    </div>
  
  </section>
</template>

<script>
import CardDescription from '../components/CardDescription'

export default {
  name: "About",
  components: {
      CardDescription
  },
   computed: {
     cardsabout() {
         return this.$store.state.cardsabout;
     }
 }

}
</script>
<style>
.about .subtitle{
   margin-top: 40px;
}

.card-ab img {
    border-radius: 50%;
}

</style>