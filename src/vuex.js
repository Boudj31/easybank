import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        posts: [
            {id: 1, img:'/blogimg/blog1.png', title: '5 Programming Languages that will Die', author:'Ansaka',date:"11/11/2021", content: "Everyone who codes has a favorite language. This happens a lot because we studied in a certain programming"},
            {id: 2, img:'/blogimg/blog2.jpeg', title: 'Becoming A Crazy Plant Lady', author:'Ansaka',date:"11/11/2021", content: "Everyone who codes has a favorite language. This happens a lot because we studied in a certain programming :"},
            {id: 3, img:'/blogimg/blog1.png', title: '5 Programming Languages that will Die', author:'Ansaka',date:"11/11/2021", content: "Everyone who codes has a favorite language. This happens a lot because we studied in a certain programming "},
            {id: 4, img:'/blogimg/blog1.png', title: '5 Programming Languages that will Die', author:'Ansaka',date:"11/11/2021", content: "Everyone who codes has a favorite language. This happens a lot because we studied in a certain programming "}
        ],
        jobs: [
            {title: 'Fullstack Developer', city: 'Boston'},
            {title: 'Front end Developer', city: 'Los Angeles'},
            {title: 'UX Designer', city: 'New York'},
            {title: 'Fullstack Developer', city: 'Paris'},
            {title: 'Developer NodeJS', city: 'London'},
            {title: 'Developer PHP', city: 'Mexico'},
            {title: 'Fullstack Developer', city: 'Roma'},
            {title: 'Developer React JS', city: 'Boston'},
            {title: 'Fullstack Developer', city: 'Boston'},
            {title: 'Developer Backend', city: 'Helsinky'},
            {title: 'Community manager', city: 'Dubai'},
             {title: 'Front end Developer', city: 'Los Angeles'}
            ],
            cardsdata : [
                {img: "/logo/icon-online.svg", title: "Online Banking", content: " Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."},
                {img: "/logo/icon-budgeting.svg", title: "Simple Budgeting", content: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."},
                {img: "/logo/icon-onboarding.svg", title: "Fast Onboarding", content: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."},
                {img: "/logo/icon-api.svg", title: "Open API", content: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."}
            ],
            cardsabout: [
                {img: "/logo/icon-online.svg", title: "Online Banking", content: " Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."},
                {img: "/logo/icon-budgeting.svg", title: "Simple Budgeting", content: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."},
                {img: "/logo/icon-onboarding.svg", title: "Fast Onboarding", content: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."},
                {img: "/logo/icon-api.svg", title: "Open API", content: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."}
            ]


    },
    getters: {
       
    },
    mutations: {
  
    },
    actions: {
   
    },
    modules: {
    }
})