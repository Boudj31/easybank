<template>
    <div id="app">
        <Header></Header>
        <div>
            <Router-view></Router-view>
        </div>
       <Footer />
    </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style >

/* VARIABLE */
:root {
  --darkblue:hsl(233, 26%, 24%);
  --limegreen: hsl(136, 65%, 51%);
  --brightcyan: hsl(192, 70%, 51%);
  --grayishblue: hsl(233, 8%, 62%);
  --lightgb: hsl(220, 16%, 96%);
  --vlgray: hsl(0, 0%, 98%);
  --white: hsl(0, 0%, 100%);
  --sizebody: 18px;
  --text-white: #fff;
  --box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
}
* {
  margin: 0;
   text-decoration:none;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-size: var(--sizebody);
  max-width: 1440px;
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}

.body {
 overflow: auto;
}

.container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    
  }

  .title {
     font-size: 2.8rem;
     font-weight: 400;
     color: var(--darkblue);
     margin-top: 100px;
  }

  .subtitle {
      font-size: 2rem;
     font-weight: 400;
     color: var(--darkblue);
     margin-top: 100px;
  }

  .text {
     font-size: 0.8rem;
     padding: 8px 0px;
     text-align: left;    
     color: var(--grayishblue);
  }
  .button {
    color: var(--white);
    font-weight: 600;
    background: linear-gradient(90deg, var(--limegreen) 0%, var(--brightcyan) 100%);
    padding: 15px 30px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    cursor: pointer;
  }
   .button:hover {
      opacity: 0.8;
  }


</style>>



<!--
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> displays site properly based on user's device 

  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
  
  <title>Frontend Mentor | Easybank landing page</title>

  Feel free to remove these styles or customise in your own stylesheet 👍 
  <style>
    .attribution { font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); }
  </style>
</head>
<body>

  Home
  About
  Contact
  Blog
  Careers

  Request Invite



  Next generation digital banking

  Take your financial life online. Your Easybank account will be a one-stop-shop 
  for spending, saving, budgeting, investing, and much more.

  Request Invite



  Why choose Easybank?

  We leverage Open Banking to turn your bank account into your financial hub. Control 
  your finances like never before.

  Online Banking
  Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world.

  Simple Budgeting
  See exactly where your money goes each month. Receive notifications when you’re 
  close to hitting your limits.

  Fast Onboarding
  We don’t do branches. Open your account in minutes online and start taking control 
  of your finances right away.

  Open API
  Manage your savings, investments, pension, and much more from one account. Tracking 
  your money has never been easier.

  

  Latest Articles

  By Claire Robinson
  Receive money in any currency with no fees
  The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …

  By Wilson Hutton
  Treat yourself without worrying about money
  Our simple budgeting feature allows you to separate out your spending and set 
  realistic limits each month. That means you …

  By Wilson Hutton
  Take your Easybank card wherever you go
  We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  while you’re abroad. We’ll even show you …

  By Claire Robinson
  Our invite-only Beta accounts are now live!
  After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
  It’s easy to request an invite through the site ...

  

  About Us
  Contact
  Blog
  Careers
  Support
  Privacy Policy

  Request Invite

  © Easybank. All Rights Reserved
  
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>
</body>
</html>
-->