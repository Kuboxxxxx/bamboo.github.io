import { game } from "./game.js"
import { building } from "./building.js"
import { display } from "./display.js"

export const upgrade = {
    name: [
        "Hobbist luck",
        "Getting a hang of it",
        "Bamboo collecting expert",
        "Collecting master",
        "Genetically modified bamboo",
        "Better fertilizer",
        "Better use of space",
        "Magical dirt",
        "Saftey upgrade",
        "Grandma's magic", 
        "Open to public",
        "Political change",
        "Sunday walks",
        "Wild life",
        "Ecosystem change",
        "Bamboo politics",
        "Bamboo fairies",
        "Monkey business",
        "Welcome to the jungle",
        "Tourism",
        "Lowering of sea lever",
        "New opportunities",
        "Mr Beast gets and island",
        "Space pact",
        "Artificial planet",
        "Planet.io",
        "System of the dawn",
        "Intergalatic travel",
        "System reset",
    ],
    description: [
        "You just got into new hobby. We all know beginners luck. Your clicking power gets doubled",
        "You're getting better with practice. Doubles clicking power",
        "Your skill is way better. Doubles clicking power",
        "No one is better in collecting bamboo than you. Quadruples your clicking power.",
        "You found some nice bamboo shoots online. Double income from plants",
        "Your friend recommended you a beter fertilizer. Doubles income from plots",
        "You're able to better manage your garden space. Doubles income from gardens",
        "Who would've thought that magic is real? You got some magical dirt that boosts your bamboo. Doubles income from gardens",
        "You never know you might want to steal your bamboo so you got a new fence. Better safe than sorry. Doubles income from gardens",
        "Grandma decides to come over and we all know that there is no one better to look after your garden. Doubles income from gardens",
        "You've opened your parks to public. Social bamboo is better bamboo. Doubles income from parks.",
        "Local politics changed and now it is required for evey city to have at least one park. You decide to use that! Doubles incomes from parks",
        "Shops were closed on sundays so everyone goes on sunday walks, and what a better place than Bamboo Park. Doubles income from parks",
        "More animals started living in your forest which helps your bamboo. Doubles income from forests.",
        "As people started cutting out normal forests, you replace them with your bamboo forests. Doubles income from forests.",
        "Bamboo-wing politics grow stronger and pass legistlation about forests. Doubles income from forests",
        "As forests grow bigger you find some bamboo fairies. They help you out. Doubles income from forests",
        "Monkeys started investing in your jungles. Doubles income from jungles.",
        "You're more than welcome. Doubles income from jungles",
        "Toursist start visit your islands and all income goes into bamboo farms. Doubles income from islands.",
        "Sea level started lowering. Was it you? Who cares, what's important is that we can plant more bamboo! Doubles income from islands.",
        "New jobs like island farmer become reality. Doubles income from islands.",
        "Mr Beast decieds to make a video where you can win a bamboo island. Doubles income from islands.",
        "Made a pact with other planets to not raid you. Ever. Doubles income from plantes.",
        "You have discovered a new technology that allows you to create artificial planet from bamboo. Doubles income from plantes",
        "New website lanuched that allows people to buy their own planets and name them. Doubles income from plantes",
        "Eating sees as a pastime activity. Doubles toxicity of our city. I mean income form systems.",
        "We are finally able to travel further. Doubles income from systems",
        "Refreshes systems and makes them more efficient. Doubles income from systems"
    ],
    image: [
        "cursor.png",
        "cursor.png",
        "cursor.png",
        "goldcursor.png",
        "bambooshoot.png",
        "plot.png",
        "garden.png",
        "garden.png",
        "garden.png",
        "garden.png",
        "park.png",
        "park.png",
        "park.png",
        "forest.png",
        "forest.png",
        "forest.png",
        "forest.png",
        "jungle.png",
        "jungle.png",
        "island.png",
        "island.png",
        "island.png",
        "island.png",
        "planet.png",
        "planet.png",
        "planet.png",
        "system.png",
        "system.png",
        "system.png",
    ],
    type: [
        "click",
        "click",
        "click",
        "click",
        "building",
        "building",
        "building",
        "building",
        "building",
        "building",
        "building",
        "building",
        "building",
        "building",
        "building",
        "building",
        "building",
        "building",
        "building",
        "building",
        "building",
        "building",
        "building",
        "building",
        "building",
        "building",
        "building",
        "building",
        "building",
    ],
    cost: [
        100,
        500,
        10000,
        100000,
        100,
        1000,
        11000,
        55000,
        550000,
        55000000,
        120000,
        600000,
        6000000,
        1300000,
        6500000,
        65000000,
        6500000000,
        14000000,
        70000000,
        200000000,
        1000000000,
        10000000000,
        1000000000000,
        3300000000,
        16500000000,
        165000000000,
        51000000000,
        255000000000,
        2550000000000,
    ],
    buildingIndex: [
        -1,
        -1,
        -1,
        -1,
        0,
        1,
        2,
        2,
        2,
        2,
        3,
        3,
        3,
        4,
        4,
        4,
        4,
        5,
        5,
        6,
        6,
        6,
        6,
        7,
        7,
        7,
        8,
        8,
        8,
    ],
    requirement: [
        1,
        100,
        1000,
        5000,
        1,
        1,
        1,
        5,
        25,
        50,
        1,
        5,
        25,
        1,
        5,
        25,
        50,
        1,
        5,
        1,
        5,
        25,
        50,
        1,
        5,
        25,
        1,
        5,
        25,
    ],
    bonus: [
        2,
        2,
        2,
        4,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
    ],
    purchased: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ],

    purchase: function(index) {
        if (!this.purchased[index] && game.bamboo >= this.cost[index]) {
            if (this.type[index] == "building" && building.amount[this.buildingIndex[index]] >= this.requirement[index]){
                game.bamboo -= this.cost[index]
                building.income[this.buildingIndex[index]] *= this.bonus[index]
                this.purchased[index] = true

                display.updateScore()
                display.updateUpgrades()
            }
            else if (this.type[index] == "click" && game.totalClicks >= this.requirement[index]){
                game.bamboo -= this.cost[index]
                game.clickingPower *= this.bonus[index]
                this.purchased[index] = true

                display.updateScore()
                display.updateUpgrades()
            }
        }
    }
}