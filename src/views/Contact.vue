<template>
<main class="form">
  <div class="container">
   <h1 class="title">Contact Us</h1>
   <div v-if="errors.length" class="error-card">
           <ul v-for="(error, i) in errors" :key="i">
             <li>{{ error }}</li>
           </ul>
        </div>
   <form class="form-group" @submit.prevent="handleSubmit">
       <div class="form-action">
     
          <label for="name">Name:</label>
          <input type="text" name="name" placeholder="John Doe" v-model="name">
       </div>
       <div class="form-action">
          <label for="email">Email:</label>
          <input type="email" name="email" placeholder="john@doe.fr" v-model="email">
       </div>
       <div class="form-action">
          <label for="phone">Phone:</label>
          <input type="text" name="name" placeholder="070707070" v-model="phone">
       </div>
       <div class="form-action">
          <label for="subject">Subject:</label>
          <input type="text" name="subject" placeholder="Request invite" v-model="subject"> 
       </div>

       <div class="form-action">
           <p>{{error}}</p>
          <label for="message">Message:</label>
          <textarea name="message" id="message" cols="30" rows="10" v-model="message" placeholder="       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur quidem reprehenderit nisi quam! Totam tenetur obcaecati ipsum expedita voluptates. Minima quia incidunt deleniti non quidem nam dolor corporis reiciendis animi?
       Commodi magni sunt reiciendis perferendis quibusdam ipsam doloremque earum quidem! Magni eius earum modi, totam et sed laudantium ducimus, cum quod nulla, qui labore. Libero itaque optio laboriosam mollitia voluptates!"></textarea>
       </div>
       <div class="submit">
           <button class="button">Send !</button>
       </div>
   </form>
  </div>
  </main>
</template>

<script>

export default {
  name: "Contact",
  data() {
      return {
          email: '',
          name:'',
          subject: '',
          phone: '',
          message: '',
          errors: []
      }
  },
  methods: {
      checkForm(e){
      this.errors = [];
        if (!this.name) {
          this.errors.push('The name field cannot be empty');
        }
        if (!this.email) {
          this.errors.push('The email field cannot be empty');
        }
        if (!this.phone) {
          this.errors.push('The phone field cannot be empty');
        }
        if (!this.message) {
          this.errors.push('The message field cannot be empty');
        }
      if (!this.errors.length) {
        return true
            ;
      }
      e.preventDefault();
    },

      handleSubmit() {
        this.checkForm();
       this.$toast.success('Thank you for the message!');
       this.name = '';
       this.email = '';
       this.phone = '';
       this.subject = '';
       this.message = '';
      }
  },
  components: {
  }
}
</script>
<style>

.form {
    background-color: var( --lightgb);
}
.form h1 {
    text-align: center;
    margin-top: 30px;
}
.form-group {
    display: flex;
    flex-direction: column;
}
.form-action {
    display: flex;
    flex-direction: column;
    padding: 10px 0;

}

.form-action label {
    color: var(--darkblue);
    opacity: 0.8;

}

.form-action input, .form-action textarea {
    border-radius: 10px;
    padding: 10px;
    border: 1px solid var(--grayishblue);
    color: var(--grayishblue);
    
}
.form-action textarea::placeholder {
    text-align: left;
}
.form-action input:focus, .form-action textarea:focus {

    border: 3px solid var(--limegreen);
    outline: none;
}

.submit .button {
    margin-top: 20px;
}
.error-card {
    background-color: var(--white);
    padding: 15px;
    border-radius: 20px;
    box-shadow: var(--box-shadow);
    color: red;
}

</style>