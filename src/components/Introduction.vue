<template>
<section id="section1">
    <div class="img-bg">
       <img src="./../assets/img/bg-intro-desktop.svg" alt="">
    </div>
    <div class="img-bg-mobile">
       <img src="./../assets/img/bg-intro-desktop.svg" alt="">
           </div>
  <div class="content container" >
     <div class="left">
         <h1 class="title">Next generation digital banking</h1>
         <p class="text">Take your financial life online. Your Easybank account will be a one-stop-shop 
           for spending, saving, budgeting, investing, and much more.</p>
           <button class="button">
               Request Invite
           </button>
     </div>
     <div class="right">
         <div class="phone">
              <img src="./../assets/img/image-mockups.png" alt="">
           </div>
     </div>
     
  </div>
  </section>
</template>

<script>

export default {
  name: "Introduction",
  components: {
  }
}
</script>

<style>
#section1 {
  background-color: var(--vlgray);
  min-height: 700px;
  overflow: hidden;
}
 .content {
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    z-index: 100;
    
 }

 .left {
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     flex-wrap: wrap;
     padding: 10px 0px 5px 0;
     width: 40%;
 }

 .left .button {
    color: var(--white);
    margin-top: 50px;
    font-weight: 600;
    background: linear-gradient(90deg, var(--limegreen) 0%, var(--brightcyan) 100%);
    padding: 15px 30px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
}

/* active and hover */
.button :hover {
   opacity: 0.7;
}

.img-bg , .phone{
    position: relative;
}

.img-bg img {
    position: absolute;
    z-index: 0;
    top: -250px;
    right: -450px;
}
.img-bg-mobile {
    display: none;
}
.phone img{
  position: absolute;
    top: -170px;
    right: -220px;
    z-index: -2;
}

/*TABLETTE */ 
@media screen and (max-width: 375px) {


} 

/*TABLETTE */ 
@media screen and (max-width: 760px) {
    .left {
        margin-top: 250px;
        flex-direction: column;
        width: 100%;
        
    }
    .left h1 {
        font-size: 2rem;
        text-align: center;
    }
    .left p {
        text-align: center;
    }
    .img-bg, .phone {
        display: none;
    }
    .img-bg-mobile {
        display: block;
        position: relative;
        z-index: 1;
        max-height: 200px;

    }
    .img-bg-mobile img {
        position: absolute;
        top: -320px;
        right: -180px;
        width: 900px;
        height: auto;

 }
   

     .left .button{
       display: block;
        margin-left: auto;
       margin-right: auto;
       width: 100%;
}

} 
</style>