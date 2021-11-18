
   
<template>
  <footer class="footer">
      <div class="columns container">
          <div class="column footer-right">
              <div class="logo">
                <router-link class="header" :to="{ name: 'Home' }"><img src="./../assets/img/logowh.svg" alt="logo easybank"></router-link>
               </div>
               <div class="socials">
                    <ul>
                        <li class="social">
                            <a href="www.facebook.com"><img src="./../assets/img/icon-facebook.svg" alt="" width="20"></a>
                        </li>
                        <li class="social">
                            <a href="www.youtube.com"><img src="./../assets/img/icon-youtube.svg" alt="" width="20"></a>
                        </li>
                        <li class="social">
                            <a href="www.twitter.com"><img src="./../assets/img/icon-twitter.svg" alt="" width="20"></a>
                        </li>
                        <li class="social">
                            <a href="www.pinterest.com"><img src="./../assets/img/icon-pinterest.svg" alt="" width="20"></a>
                        </li>
                        <li class="social">
                            <a href="www.instagram.com"><img src="./../assets/img/icon-instagram.svg" alt="" width="20"></a>
                        </li>
                    </ul>
               </div>
          </div>
          <div class="column footer-center">
                  <ul class="footer-links-l">
                      <li><a href="">About Us</a></li>
                      <li><a href="">Contact</a></li>
                      <li><a href="">Blog</a></li>
                  </ul>
                   <ul class="footer-links-r">
                      <li><a href="">Careers</a></li>
                      <li><a href="">Support</a></li>
                      <li><a href="">Privacy Policy</a></li>
                  </ul>
          </div>
          <div class="column footer-left">
              <button class="button login">Request Invite</button>
              <p class="cpy"> © Easybank. All Rights Reserved</p>
          </div>
      </div>
  </footer>
</template>

<script>

export default {
  name: 'Footer',
  components: {
  },
}
</script>
<style scoped>

.footer {
    background: var(--darkblue);
    color: var(--white);
    padding: 15px 0;


}
.columns {
    display: flex;
    justify-content: space-between;
}

.footer-right {
    display: flex;
    flex-direction: column;

}

.socials ul {
    display: flex;
    justify-content: center;
    flex-direction: row;
     list-style: none;
}

.socials ul li:not(:last-child) {
   margin-right: 10px;
}
.logo {
    margin-bottom: 50px;
}

.footer-left .cpy{
    color: var(--grayishblue);
}
.footer-left .button {
    display: block;
    color: var(--white);
   margin-bottom: 30px;
    font-weight: 600;
    background: linear-gradient(90deg, var(--limegreen) 0%, var(--brightcyan) 100%);
    padding: 15px 30px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    text-align: right;
     margin-left: auto;
    margin-right: 0;
}

.footer-center {
    display: flex;
    margin-right: 200px;
}

.footer-center ul {
    margin-left: 100px;
    padding: 10px 0;
}
.footer-center ul li a {
    margin-bottom: 15px;
    font-size: 0.8rem;
}



/* tablette device */

@media screen and (max-width: 760px) {
 
 .columns {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

}

.column {
    text-align: center;
    margin-bottom: 20px;
}

.footer-center {
    margin-right: 0;
}

.footer-left .button {
       display: block;
        margin-left: auto;
       margin-right: auto;
}



}



</style>