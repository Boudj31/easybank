<template>
<main>
     <Introduction />
    <Description />
    <div class="blog">
        <div class="container">
      <h3 class="subtitle"> Latest Articles</h3>
      <div class="cards">
          <Card />
      </div>
      </div>
    </div>
</main>
</template>

<script>

import Introduction from '../components/Introduction'
import Description from '../components/Description'
import Card from '../components/Card'


export default {
  name: "home",
  components: {
      Introduction,
      Description,
      Card
  }
}
</script>

<style>
.blog {
    background-color: var(--vlgray);
}
.cards {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
}

@media screen and (max-width: 760px) {
   
   .cards {
       flex-direction: column;
   }
} 



</style>
