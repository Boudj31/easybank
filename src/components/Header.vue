
   
<template>

  <header class="header">
    <nav class="navigation container">
      <div class="logo">
        <router-link class="header" :to="{ name: 'home' }"><img src="./../assets/img/logo.svg" alt="logo easybank"></router-link>
      </div>
      <div class="burger" v-show="mobile" @click="openMenu()">
          <img v-show ="!mobileNav" src="./../assets/img/icon-hamburger.svg" alt="burger menu" width="30" height="30" >
          <img v-show="mobileNav" src="./../assets/img/icon-close.svg" alt="burger menu" width="30" height="30" >
      </div>
      <div class="nav-links">
        <ul>
          <router-link class="link" :to="{ name: 'home' }">Home</router-link>
          <router-link class="link" :to="{ name: 'Blog' }">About</router-link>
          <router-link class="link" :to="{ name: 'Contact' }">Contact</router-link>
          <router-link class="link" :to="{ name: 'Blog' }">Blog</router-link>
          <router-link class="link" :to="{ name: 'Carreers' }">Carreers</router-link>
        </ul>
      </div>
      <div class="mobile-menu" v-show="mobileNav">
        <ul class="mobile">
          <router-link class="link" :to="{ name: 'home' }">Home</router-link>
          <router-link class="link" :to="{ name: 'Blog' }">About</router-link>
          <router-link class="link" :to="{ name: 'Contact' }">Contact</router-link>
          <router-link class="link" :to="{ name: 'Blog' }">Blog</router-link>
          <router-link class="link" :to="{ name: 'Nouveau' }">Carreers</router-link>
        </ul>
      </div>
      <div class="headerbtn login">
           <router-link class="link" :to="{ name: 'Login' }">Request Invite</router-link>
      </div>
        </nav>
  </header>
</template>

<script>

export default {
  name: 'Header',
  components: {
  },
  data() {
      return {
          mobile: null,
          windownWidth: null,
          mobileNav: null,

      }
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods:{
      checkScreen() {
      this.windownWidth = window.innerWidth;
      if (this.windownWidth <= 760) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    openMenu() {
        this.mobileNav = !this.mobileNav;
    }
  }
}
</script>
<style scoped>

.header {
    position: relative;
     z-index: 100;
     background-color: var(--white);
     padding: 10px 8px;
     padding-bottom: 20px;
}

.navigation {
    display: flex;
    justify-content: space-between;
    padding: 10px 8px;
    
}

.nav-links {
    display: flex;
    justify-content: center;

}

.nav-links .link {
    margin-left: 20px;
   list-style: none;
   font-size: 16px;
    text-decoration: none;
    color: var(--grayishblue);
}
.headerbtn .link {
    color: var(--white);
    font-weight: 600;
    padding: 15px 25px;
    background: linear-gradient(90deg, var(--limegreen) 0%, var(--brightcyan) 100%);
    border-radius: 30px;
    border: none;
    font-size: 16px;
}

/* active and hover */
.button .link:hover {
   opacity: 0.7;
}

.nav-links .link:hover, .nav-links .link:active{
    color: var(--darkblue);
    border-bottom: 3px solid var(--limegreen);
    padding-bottom: 20px
}

.mobile-menu {
    display: block;
    flex-flow: column;
    background-color: var(--white);
    border-radius: 10px;
}

.mobile-menu .link {
   color: var(--darkblue);

}
.mobile .link:hover {
  border-bottom: 3px solid var(--limegreen);

}

/* tablette device */
/*
@media screen and (max-width: 760px) {
    .navigation {
    display: flex;
    flex-direction: column;
}

.logo{
   margin-bottom: 10px;
   text-align: center;
 
}
.nav-links {
    margin-bottom: 20px;

}
.login {
    text-align: center;
}

}
*/

/* mobile device */

@media screen and (max-width: 760px) {
    .header {
        width: 100vw;
    }
    .navigation {
     position: relative;
     display: flex;
     justify-content: space-between;
     flex-direction: column;
}

.logo{
   text-align: left;
}
.mobile-menu {
    position: absolute;
    min-width: 100%;
    padding: 20px 0;
    top: 80px;
    right: 0;
    
}
.mobile-menu .link {
    display: block;
    text-align: center;
    padding: 12px;

}
.nav-links {
    margin-bottom: 20px;
    display: none;

}
.login {
    display: none;
}
.burger {
    position: absolute;
    right: 10px;
    top: 10px;
}


}



</style>