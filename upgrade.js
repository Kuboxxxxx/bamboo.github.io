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
        "Open to public",
        "Wild life",
        "Monkey business",
        "Tourism",
        "Space pact",
        "System of the dawn",
    ],
    description: [
        "You just got into new hobby. We all know beginners luck. Your clicking power gets doubled",
        "You're getting better with practice. Doubles clicking power",
        "Your skill is way better. Doubles clicking power",
        "No one is better in collecting bamboo than you. Quadruples your clicking power.",
        "You found some nice bamboo shoots online. Double income from plants",
        "Your friend recommended you a beter fertilizer. Doubles income from plants",
        "You're able to better manage your garden space. Doubles income from gardens",
        "You've opened your parks to public. Social bamboo is better bamboo. Doubles income from parks.",
        "More animals started living in your forest which helps your bamboo. Doubles income from forests.",
        "Monkeys started investing in your jungles. Doubles income from jungles.",
        "Toursist start visit your islands and all income goes into bamboo farms. Doubles income from islands.",
        "Made a pact with other planets to not raid you. Ever. Doubles income from plantes.",
        "Eating sees as a pastime activity. Doubles toxicity of our city. I mean income form systems."
    ],
    image: [
        "cursor.png",
        "cursor.png",
        "cursor.png",
        "goldcursor.png",
        "bambooshoot.png",
        "bambooshoot.png",
        "plot.png",
        "garden.png",
        "park.png",
        "forest.png",
        "jungle.png",
        "island.png",
        "planet.png",
        "system.png"
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
    ],
    cost: [
        100,
        500,
        10000,
        100000,
        100,
        500,
        1000,
        11000,
        120000,
        1300000,
        14000000,
        200000000,
        3300000000,
        51000000000
    ],
    buildingIndex: [
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
    ],
    requirement: [
        1,
        100,
        1000,
        5000,
        1,
        10,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
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