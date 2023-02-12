import { game } from "./game.js"
import { building } from "./building.js"
import { bambooPerSecondDisplay } from "./selectors.js"

export const achievement = {
    name: [
        "Clicking rookie",
        "Clicking expert",
        "Clicking master",
        "Clicking pro",
        "Clicking god",
        "First plant",
        "Casual planter",
        "Plant expert",
        "Planting addict",
        "Planting master",
        "Planting god",
        "Bamboo hobbist",
        "Casual bamboo farmer",
        "Nice Bamboo ;)",
        "Bamboo maker",
        "Bamboo investor",
        "Bamboo master",
        "Bamboo king",
        "Bamboo emperor",
        "Bamboo god"
    ],
    image: [
        "cursor.png",
        "cursor.png",
        "cursor.png",
        "cursor.png",
        "goldcursor.png",
        "bambooshoot.png",
        "bambooshoot.png",
        "bambooshoot.png",
        "bambooshoot.png",
        "bambooshoot.png",
        "bambooshoot.png",
        "bamboosmol.png",
        "bamboosmol.png",
        "bamboosmol.png",
        "bamboosmol.png",
        "bamboosmol.png",
        "bamboosmol.png",
        "bamboosmol.png",
        "bamboosmol.png",
        "bamboosmol.png",
    ],
    requirement: [
        100,
        1000,
        10000,
        100000,
        1000000,
        1,
        10,
        100,
        1000,
        10000,
        100000,
        1,
        10,
        69,
        100,
        1000,
        10000,
        50000,
        100000,
        1000000
    ],
    description: [
        "You clicked 100 times!",
        "You clicked 1000 times!",
        "You clicked 10000 times!",
        "You clicked 100000 times!",
        "You clicked 1000000 times!",
        "Planted your first bamboo!",
        "You got 10 bamboo plants",
        "You got 100 bamboo plants",
        "You got 1000 bamboo plants",
        "You got 10000 bamboo plants",
        "You got 100000 bamboo plants",
        "Your farm grows 1 bamboo per second!",
        "You earn 10 bamboo per second",
        "NICE (You earn 69 bamboo per second",
        "You earn 100 bamboo per second",
        "You earn 1000 bamboo per second",
        "You earn 10000 bamboo per second",
        "You earn 50000 bamboo per second",
        "You earn 100000 bamboo per second",
        "You earn 1000000 bamboo per second",
    ],
    type: [
        "click",
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
        "income",
        "income",
        "income",
        "income",
        "income",
        "income",
        "income",
        "income",
        "income",
    ],
    buildingIndex: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
    ],
    achieved: [
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
    getAchievement: function() {
        for (let i=0; i < this.name.length; i++){
            if (!this.achieved[i]){
                if (this.type[i] == "click" && game.totalClicks >= this.requirement[i]){
                    // achievementPopUp.innerHTML += `<div id="popUp" class="popUpStyle"><img src="./img/${achievement.image[i]}" alt=""><div><h2>Achievement get!</h2><p>${achievement.name[i]}</p><p>${achievement.description[i]}</p></div></div>`
                    this.achieved[i] = true
                }
                else if (this.type[i] == "building" && building.amount[this.buildingIndex[i]] >= this.requirement[i]){
                    // achievementPopUp.innerHTML += `<div id="popUp" class="popUpStyle"><img src="./img/${achievement.image[i]}" alt=""><div><h2>Achievement get!</h2><p>${achievement.name[i]}</p><p>${achievement.description[i]}</p></div></div>`
                    this.achieved[i] = true
                }
                else if (this.type[i] == "income" && bambooPerSecondDisplay.innerHTML >= this.requirement[i]){
                    // achievementPopUp.innerHTML += `<div id="popUp" class="popUpStyle"><img src="./img/${achievement.image[i]}" alt=""><div><h2>Achievement get!</h2><p>${achievement.name[i]}</p><p>${achievement.description[i]}</p></div></div>`
                    this.achieved[i] = true
                }
            }
        }
    }
}