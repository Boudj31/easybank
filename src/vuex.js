import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        posts: [
            {id: 1, img:'/blogimg/blog1.png', title: '5 Programming Languages that will Die', author:'Ansaka',date:"11/11/2021", summary: "Everyone who codes has a favorite language. This happens a lot because we studied in a certain programming", content:"I live in a rental, so can’t keep companion animals. Once my neighbour’s pet Rainbow Lorikeet broke out of its aviary and tried to move in under the house, so I fed it bananas until the owner came home. Then some weeks later a chicken turned up, but it was merely passing through, getting its fill of the free range life until a python got its fill of fowl. But neither incident was quite the same as having an animal in the house. As for wildlife, I mostly see Australian Figbirds, feathered patriotically in green and gold, which drop in to strip the mulberry of fruit, splatter shiraz-red poop everywhere, and then take their leave like the itinerant (and unlucky) chook. So in the absence of animals, I’ve accumulated potted plants. Quite a lot, it turns out. I hadn’t realised just how many until I had to move them. But at least I don’t have to feed them or pick their breadcrumbed turds out of litter trays or rummage through their fur for ticks."},
            {id: 2, img:'/blogimg/blog2.jpeg', title: 'Becoming A Crazy Plant Lady', author:'Ansaka',date:"11/11/2021", summary: "Everyone who codes has a favorite language. This happens a lot because we studied in a certain programming", content:"I live in a rental, so can’t keep companion animals. Once my neighbour’s pet Rainbow Lorikeet broke out of its aviary and tried to move in under the house, so I fed it bananas until the owner came home. Then some weeks later a chicken turned up, but it was merely passing through, getting its fill of the free range life until a python got its fill of fowl. But neither incident was quite the same as having an animal in the house. As for wildlife, I mostly see Australian Figbirds, feathered patriotically in green and gold, which drop in to strip the mulberry of fruit, splatter shiraz-red poop everywhere, and then take their leave like the itinerant (and unlucky) chook. So in the absence of animals, I’ve accumulated potted plants. Quite a lot, it turns out. I hadn’t realised just how many until I had to move them. But at least I don’t have to feed them or pick their breadcrumbed turds out of litter trays or rummage through their fur for ticks."},
            {id: 3, img:'/blogimg/blog3.png', title: 'This Simple Breakfast Has Kept Me Fit for 5 Years', author:'Ansaka',date:"11/11/2021", summary: "Everyone who codes has a favorite language. This happens a lot because we studied in a certain programming", content:"I live in a rental, so can’t keep companion animals. Once my neighbour’s pet Rainbow Lorikeet broke out of its aviary and tried to move in under the house, so I fed it bananas until the owner came home. Then some weeks later a chicken turned up, but it was merely passing through, getting its fill of the free range life until a python got its fill of fowl. But neither incident was quite the same as having an animal in the house. As for wildlife, I mostly see Australian Figbirds, feathered patriotically in green and gold, which drop in to strip the mulberry of fruit, splatter shiraz-red poop everywhere, and then take their leave like the itinerant (and unlucky) chook. So in the absence of animals, I’ve accumulated potted plants. Quite a lot, it turns out. I hadn’t realised just how many until I had to move them. But at least I don’t have to feed them or pick their breadcrumbed turds out of litter trays or rummage through their fur for ticks."},
            {id: 4, img:'/blogimg/blog4.jpg', title: 'Is Golang a Suitable Option for Data Science in the Future?', author:'Ansaka',date:"11/11/2021", summary: "Everyone who codes has a favorite language. This happens a lot because we studied in a certain programming", content:"I live in a rental, so can’t keep companion animals. Once my neighbour’s pet Rainbow Lorikeet broke out of its aviary and tried to move in under the house, so I fed it bananas until the owner came home. Then some weeks later a chicken turned up, but it was merely passing through, getting its fill of the free range life until a python got its fill of fowl. But neither incident was quite the same as having an animal in the house. As for wildlife, I mostly see Australian Figbirds, feathered patriotically in green and gold, which drop in to strip the mulberry of fruit, splatter shiraz-red poop everywhere, and then take their leave like the itinerant (and unlucky) chook. So in the absence of animals, I’ve accumulated potted plants. Quite a lot, it turns out. I hadn’t realised just how many until I had to move them. But at least I don’t have to feed them or pick their breadcrumbed turds out of litter trays or rummage through their fur for ticks."},
            {id: 5, img:'/blogimg/blog5.png', title: 'Modeling Android Screens as State', author:'Ansaka',date:"11/11/2021", summary: "Everyone who codes has a favorite language. This happens a lot because we studied in a certain programming", content:"I live in a rental, so can’t keep companion animals. Once my neighbour’s pet Rainbow Lorikeet broke out of its aviary and tried to move in under the house, so I fed it bananas until the owner came home. Then some weeks later a chicken turned up, but it was merely passing through, getting its fill of the free range life until a python got its fill of fowl. But neither incident was quite the same as having an animal in the house. As for wildlife, I mostly see Australian Figbirds, feathered patriotically in green and gold, which drop in to strip the mulberry of fruit, splatter shiraz-red poop everywhere, and then take their leave like the itinerant (and unlucky) chook. So in the absence of animals, I’ve accumulated potted plants. Quite a lot, it turns out. I hadn’t realised just how many until I had to move them. But at least I don’t have to feed them or pick their breadcrumbed turds out of litter trays or rummage through their fur for ticks."},
            {id: 6, img:'/blogimg/blog6.png', title: 'Replicating Minecraft World Generation in Python', author:'Ansaka',date:"11/11/2021", summary: "Everyone who codes has a favorite language. This happens a lot because we studied in a certain programming", content:"I live in a rental, so can’t keep companion animals. Once my neighbour’s pet Rainbow Lorikeet broke out of its aviary and tried to move in under the house, so I fed it bananas until the owner came home. Then some weeks later a chicken turned up, but it was merely passing through, getting its fill of the free range life until a python got its fill of fowl. But neither incident was quite the same as having an animal in the house. As for wildlife, I mostly see Australian Figbirds, feathered patriotically in green and gold, which drop in to strip the mulberry of fruit, splatter shiraz-red poop everywhere, and then take their leave like the itinerant (and unlucky) chook. So in the absence of animals, I’ve accumulated potted plants. Quite a lot, it turns out. I hadn’t realised just how many until I had to move them. But at least I don’t have to feed them or pick their breadcrumbed turds out of litter trays or rummage through their fur for ticks."},
            {id: 7, img:'/blogimg/blog7.jpeg', title: 'The ultimate guide on how to add autosave with RxJS', author:'Ansaka',date:"11/11/2021", summary: "Everyone who codes has a favorite language. This happens a lot because we studied in a certain programming", content:"I live in a rental, so can’t keep companion animals. Once my neighbour’s pet Rainbow Lorikeet broke out of its aviary and tried to move in under the house, so I fed it bananas until the owner came home. Then some weeks later a chicken turned up, but it was merely passing through, getting its fill of the free range life until a python got its fill of fowl. But neither incident was quite the same as having an animal in the house. As for wildlife, I mostly see Australian Figbirds, feathered patriotically in green and gold, which drop in to strip the mulberry of fruit, splatter shiraz-red poop everywhere, and then take their leave like the itinerant (and unlucky) chook. So in the absence of animals, I’ve accumulated potted plants. Quite a lot, it turns out. I hadn’t realised just how many until I had to move them. But at least I don’t have to feed them or pick their breadcrumbed turds out of litter trays or rummage through their fur for ticks."},
            {id: 8, img:'/blogimg/blog1.png', title: '5 Programming Languages that will Die', author:'Ansaka',date:"11/11/2021", summary: "Everyone who codes has a favorite language. This happens a lot because we studied in a certain programming", content:"I live in a rental, so can’t keep companion animals. Once my neighbour’s pet Rainbow Lorikeet broke out of its aviary and tried to move in under the house, so I fed it bananas until the owner came home. Then some weeks later a chicken turned up, but it was merely passing through, getting its fill of the free range life until a python got its fill of fowl. But neither incident was quite the same as having an animal in the house. As for wildlife, I mostly see Australian Figbirds, feathered patriotically in green and gold, which drop in to strip the mulberry of fruit, splatter shiraz-red poop everywhere, and then take their leave like the itinerant (and unlucky) chook. So in the absence of animals, I’ve accumulated potted plants. Quite a lot, it turns out. I hadn’t realised just how many until I had to move them. But at least I don’t have to feed them or pick their breadcrumbed turds out of litter trays or rummage through their fur for ticks."},

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
                {img: "/logo/homme1.jpg", title: "Uzumaki Naruto", content: " Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."},
                {img: "/logo/homme2.jpg", title: "Uchiwa Sasuke", content: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."},
                {img: "/logo/femme1.jpg", title: "Sakura", content: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."},
                {img: "/logo/homme1.jpg", title: "Hatake Kakashi", content: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."}
            ]


    },
    getters: {
        blogPostsCards(state) {
            return state.posts.slice(0, 4);
        },
       
    },
    mutations: {
  
    },
    actions: {
   
    },
    modules: {
    }
})