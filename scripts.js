//import dates from './dates.js'
//console.log(dates)

//node.js import
//const fileRead = require('./dates.js')
//const dates = fileRead.dates

/*const dates = [
  {title:"template", social:"leastSocial", energy:"mediumSocial"},
  {title:"beachWalk", text:"go for a walk along the beach", social:"leastSocial", energy:"leastEnergy"},
  {title: "bar", text: "go to the pub (or bar or whatevs)", social:"mostSocial", energy:"mostEnergy"}
]*/

const dates = [
  {title:"template", text:"this is a test object, you shouldn't see this lmao", social:"leastSocial", energy:"mediumSocial"},
  {title:"beachWalk", text:"go for a walk along the beach", social:"leastSocial", energy:"leastEnergy", tags:['healthy']},
  {title:"bar", text: "go to the pub (or bar or whatevs)", social:"mostSocial", energy:"mostEnergy", tags:[]},
  {title:"paintAndSip", text:"do a Paint and Sip! Or some such thing.", social:"mostSocial", energy:"mediumEnergy", tags:['art']},
  {title:"restaurant", text:"go to a restaurant! New or liked.", social:"mediumSocial", energy:"leastEnergy", tags:[]},
  {title:"bushWalk", text:"go for a nature walk/bush walk", social:"leastSocial", energy:"mediumEnergy", tags:['healthy']},
  {title:"hike", text:"go for a hike! :S", social:"leastSocial", energy:"mostEnergy", tags:['healthy']},
  {title:"boardGames", text:"have a board game night? Maybe competitive scrabble", social:"leastSocial", energy:"leastEnergy", tags:['home']},
  {title:"gallery", text:"find an art gallery to visit", social:"leastSocial", energy:"mediumEnergy", tags:['art']},
  {title:"movies", text:"go to the movies! If there's something good, see that. Otherwise why not roll those dice!", social:"leastSocial", energy:"leastEnergy", tags:[]},
  {title:"cookingClass", text:"find a cooking class to do", social:"mostSocial", energy:"mostEnergy", tags:['booked', 'healthy']},
  {title:"liveBand", text:"if there are no bands you know, your dad is probably playing somewhere this weekend lmao", social:"mostSocial", energy:"mediumEnergy", tags:[]},
  {title:"dragShow", text:"find a drag show! (might have to look out of town)", social:"mediumSocial", energy:"mediumEnergy", tags:[]},
  {title:"picnic", text:"just have a picnic :)", social:"leastSocial", energy:"leastEnergy", tags:[]},
  {title:"beach", text:"go to the beach to swim(if summer) or just look(if winter)", social:"leastSocial", energy:"leastEnergy", tags:['healthy']},
  {title:"dayTrip", text:"take a day trip to a different town", social:"leastSocial", energy:"mostEnergy", tags:[]},
  {title:"antiquing", text:"visit some antique shops", social:"leastSocial", energy:"leastEnergy", tags:[]},
  {title:"thrift", text:"visit some op shops, find that heat", social:"leastSocial", energy:"leastEnergy", tags:[]},
  {title:"aquarium", text:"go to an aquarium (if those are still a thing)", social:"leastSocial", energy:"mediumEnergy", tags:[]},
  {title:"pub", text:"just go out! Bernie's is prolly open", social:"mostSocial", energy:"mostEnergy", tags:[]},
  {title:"coffee", text:"find a nice (iced) coffee place", social:"leastSocial", energy:"leastEnergy", tags:['day']},
  {title:"horseTime", text:"go ride a horse lmaooooo", social:"mediumSocial", energy:"mostEnergy", tags:['booked']},
  {title:"escapeRoom", text:"go do an escape room :)", social:"mediumSocial", energy:"mediumEnergy", tags:['booked']},
  {title:"openHouse", text:"go to an open house just to judge it", social:"mediumSocial", energy:"mediumEnergy", tags:[]},
  {title:"miniGolf", text:"go play mini golf (or regular golf if you're like that :/ )", social:"mediumSocial", energy:"leastEnergy", tags:['booked']},
  {title:"shoppingClothes", text:"go clothes shopping, even just window shopping", social:"leastSocial", energy:"mediumEnergy", tags:[]},
  {title:"zoo", text:"go to a zoo or a less problematic version", social:"leastSocial", energy:"mediumEnergy", tags:[]},
  {title:"museum", text:"go to a museum like we're brittish", social:"leastSocial", energy:"mediumEnergy", tags:[]},
  {title:"camping", text:"go camping if ur one of those people :)", social:"leastSocial", energy:"mostSocial", tags:[]},
  {title:"cookOff", text:"have a cook off! Pick a meal and see who can make it better", social:"leastSocial", energy:"leastEnergy", tags:['healthy', 'home']},
  {title:"workOut", text:"have a work out date, go gym or run or climb etc", social:"leastSocial", energy:"mediumEnergy", tags:['healthy']},
  {title:"videoGame", text:"just play some video games together, if ur into it", social:"leastSocial", energy:"leastEnergy", tags:['home']},
  {title:"albumParty", text:"have an album listen party where you both bring an album to critique", social:"leastSocial", energy:"leastEnergy", tags:['home']},
  {title:"localTourist", text:"go find something local that a tourist would like to see", social:"leastSocial", energy:"mediumEnergy", tags:[]},
  {title:"volunteer", text:"volunteer! go plant some trees or something", social:"mostSocial", energy:"mostEnergy", tags:['healthy']},
  {title:"firstDate", text:"recreate our first date (we can spice it up if it's boring", social:"leastSocial", energy:"mediumEnergy", tags:[]},
  {title: "pizzaTime", text:"make a fucked pizza together (or a good one i guess", social: "leastSocial", energy: "leastEnergy", tags:['healthy', 'home']},
  {title: "glowieSpotting", text:"go glowie spotting! sit in a public place and see how many feds walk by", social: "mediumSocial", energy: "leastEnergy", tags:["don't let the government know"]},
  {title: "iceSkatinge", text:"go ice skating! it would be so embarrassing if you'd never been :s", social: "mediumSocial", energy: "mediumEnergy", tags:["healthy"]},
  {title: "frisbee", text: "go throw a frisbee at the park (or a disc golf course)", social: "leastSocial", energy: "mediumEnergy", tags:["healthy"]},
  {title: "bucketList", text:"if one of you has a bucketlist, pick something off that", social: "mediumSocial", energy: "mostEnergy", tags:[]},
  {title: "cycling", text:"go for a bike ride (without being a cunt ofc)", social: "leastSocial", energy:"mostEnergy", tags:['healthy']},
  {title: "skinnyDip", text:"find somewhere to go skinny dipping hehe", social: "leastSocial", energy: "mediumEnergy", tags:['healthy']},
  {title: "blanketFort", text:"build a blanket fort!!", social:"leastSocial", energy:"leastEnergy", tags:['home']},
  {title:"pubTrivia", text:"find some pub trivia", social:"mostSocial", energy:"mostEnergy", tags:['booked']},
  {title:"homeTrivia", text:"find some home trivia to quiz each other. or make some!", social:"leastSocial", energy:"leastEnergy", tags:['home']},
  {title:"bobRoss", text:"have a Bob Ross paint along <3", social:"leastSocial", energy:"mediumEnergy", tags:['art', 'home']},
  {title:"houseDrink", text:"honestly just get drunk together. try some new alcohol",  social:"leastSocial", energy:"mostEnergy", tags:['home']},
  {title:"datePlanner", text:"plan a future date (great if you're broke or busy rn)", social:"leastSocial", energy:"leastEnergy", tags:['home', 'healthy']},
  {title:"loveLetters", text:"write each other a love letter", social:"leastSocial", energy:"leastEnergy", tags:['healthy', 'home']},
  {title:"presentations", text:"prepare and present presentations about something interesting for each other", social:"leastSocial", energy:"mediumEnergy", tags:['home']},
  {title:"craftDate", text:"have a craft date", social:"leastSocial", energy:"mediumEnergy", tags:['home']},
  {title:"tieDye", text:"tie-dye some clothes or maybe a bag?", social:"leastSocial", energy:"mediumEnergy", tags:['art', 'home']},
  {title:"peotry", text:"write each other a poem or 2 (this will be SO cringe, so buckle up)", social:"leastSocial", energy:"leastEnergy", tags:['home']},
  {title:"lawnBowls", text:"go lawn bowls!", social:"mediumSocial", energy:"leastEnergy", tags:[]},
  {title:"bowling", text:"go bowling! :D", social:"mediumSocial", energy:"mediumEnergy", tags:[]},
  {title:"", text:"", social:"", energy:"", tags:[]}
]



function getDate() {
  const checkBoxArray = document.getElementsByClassName("checkbox")
  let paramArray = getCheckedParams(checkBoxArray)
  let datePool = getSuitableDates(dates, paramArray)
  let randomIndex = Math.floor(Math.random()*datePool.length)
  let datePick = datePool[randomIndex]
  let dateText = datePick.text
  document.getElementById('result').innerHTML = dateText
  if (datePick.tags) {
    if (datePick.tags.includes('healthy')) {
      document.getElementById('bonusText').innerHTML = "!bonus for being healthy!"
      document.getElementById('bonusText').style.display = "inline-block"
      document.getElementById('bonusDiv').style.display = "inline-block"
    } else if (datePick.tags.includes('home')) {
      document.getElementById('bonusText').innerHTML = "!stay in!"
      document.getElementById('bonusText').style.display = "inline-block"
      document.getElementById('bonusDiv').style.display = "inline-block"
    } else {
      document.getElementById('bonusText').innerHTML = ""
      document.getElementById('bonusText').style.display = "none"
      document.getElementById('bonusDiv').style.display = "none"
    }
  }
}

function getCheckedParams(inputArray) {
  let output = []
  for ( i = 0; i < inputArray.length; i++) {
    if (inputArray[i].getAttribute("checked") === "true") {
      output.push(inputArray[i].getAttribute("value"))
    }
  }
  return output
}

function getSuitableDates(datesArray, parameters) {
  let suitableDatesArray = []
  if (parameters.length > 0) {
    for (i=0; i<parameters.length; i++) {
      for (j=0; j<datesArray.length; j++) {
        if (parameters[i] === datesArray[j].social || parameters[i] === datesArray[j].energy) {
          suitableDatesArray.push(datesArray[j])
        }
      }
    }
  } else {
    suitableDatesArray.push({title:"ERROR", text:"ERROR, YOU DIDN'T CLICK ANYTHING U GOOBER", social:"leastSocial", energy:"mediumSocial"})
  }
  if (suitableDatesArray.length > 0) {
    return suitableDatesArray
  } else {
    suitableDatesArray.push({title:"ERROR", text:"sorry, that mix doesn't look possible :/", social:"leastSocial", energy:"mediumSocial"})
    return suitableDatesArray
  }

}

function initDateButton() {
  document.getElementById('resultButton').addEventListener("pointerdown", getDate)
}

function selectionToggle() {
  if (this.getAttribute("checked") === "true") {
    this.setAttribute("checked", "false")
  } else {
    this.setAttribute("checked", "true")
  }
}

function initSelections() {
  const selectionArray = document.getElementsByClassName("checkbox")
  for (let i=0; i<selectionArray.length; i++) {
    selectionArray[i].addEventListener("pointerdown", selectionToggle)
  }
}

initDateButton()
initSelections()