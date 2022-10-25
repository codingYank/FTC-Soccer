import {
  addMonths,
  format,
  startOfMonth,
  subMonths,
  startOfWeek,
  endOfWeek,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
} from "date-fns"

const calenderSection = document.querySelector(".calender-section")
const calenderHeaderText = document.querySelector(".current-month")
const prevMonthBtn = document.querySelector(".prev-month-button")
const nextMonthBtn = document.querySelector(".next-month-button")
const dateGrid = document.querySelector(".calender-grid-dates")
const modal = document.createElement("div")
modal.classList.add("modal")
const overlay = document.querySelector("#overlay")
let currentDate = new Date()

//USMNT
let usmntMorocco22_6_1 = new Date("2022-6-1")
usmntMorocco22_6_1.setHours(19, 0, 0)
let usmntMorocco22_6_1Info = {}
let usmntUruguay22_6_5 = new Date("2022-6-5")
usmntUruguay22_6_5.setHours(17, 0, 0)
let usmntUruguay22_6_5Info = {}
let usmntGrenada22_6_10 = new Date("2022-6-10")
usmntGrenada22_6_10.setHours(21, 0, 0)
let usmntGrenada22_6_10Info = {}
let usmntElSalvador22_6_14 = new Date("2022-6-14")
usmntElSalvador22_6_14.setHours(21, 0, 0)
let usmntElSalvador22_6_14Info = {}
let usmntJapan22_9_22Info = {}
let usmntJapan22_9_22 = new Date("2022-9-22")
usmntJapan22_9_22.setHours(19, 25, 0)
let usmntKSA22_9_27Info = {}
let usmntKSA22_9_27 = new Date("2022-9-27")
usmntKSA22_9_27.setHours(13, 0, 0)

let usmnt22WC1 = new Date("2022-11-22")
usmnt22WC1.setHours(23, 0, 0)
let usmnt22WC1Info = {}
let usmnt22WC2 = new Date("2022-11-26")
usmnt22WC2.setHours(23, 0, 0)
let usmnt22WC2Info = {}
let usmnt22WC3 = new Date("2022-11-30")
usmnt22WC3.setHours(3, 0, 0)
let usmnt22WC3Info = {}

let usmntGrenada23_3_24 = new Date("2023-3-24")
usmntGrenada23_3_24.setHours(21, 0, 0)
let usmntGrenada23_3_24Info = {}
let usmntElSalvador23_3_27 = new Date("2023-3-27")
usmntElSalvador23_3_27.setHours(21, 0, 0)
let usmntElSalvador23_3_27Info = {}

//USWNT
let uswntColombia22_6_25 = new Date("2022-6-25")
uswntColombia22_6_25.setHours(19, 30, 0)
let uswntColombia22_6_25Info = {}
let uswntColombia22_6_28 = new Date("2022-6-28")
uswntColombia22_6_28.setHours(22, 0, 0)
let uswntColombia22_6_28Info = {}
let uswntHaiti22_7_4 = new Date("2022-7-4")
uswntHaiti22_7_4.setHours(19, 0, 0)
let uswntHaiti22_7_4Info = {}
let uswntJamaica22_7_7 = new Date("2022-7-7")
uswntJamaica22_7_7.setHours(19, 0, 0)
let uswntJamaica22_7_7Info = {}
let uswntMexico22_7_11 = new Date("2022-7-11")
uswntMexico22_7_11.setHours(22, 0, 0)
let uswntMexico22_7_11Info = {}
let uswntNGA22_9_3Info = {}
let uswntNGA22_9_3 = new Date("2022-9-3")
uswntNGA22_9_3.setHours(12, 0, 0)
let uswntNGA22_9_6Info = {}
let uswntNGA22_9_6 = new Date("2022-9-6")
uswntNGA22_9_6.setHours(5, 0, 0)
let uswntEng22_10_7Info = {}
let uswntEng22_10_7 = new Date("2022-10-7")
uswntEng22_10_7.setHours(14, 0, 0)

let games = [
  (usmntMorocco22_6_1Info = {
    id: usmntMorocco22_6_1,
    game: "USMNT vs Morocco",
    time: "7:30PM ET",
    type: "Friendly",
    location: "TQL Stadium, Cincinatti, Ohio",
    watch: "ESPN2, Unimas, TUDN",
  }),
  (usmntUruguay22_6_5Info = {
    id: usmntUruguay22_6_5,
    game: "USMNT vs Uraguay",
    time: "5:00PM ET",
    type: "Friendly",
    location: "Children's Mercy Park, Kansas City, Kansas",
    watch: "Fox, Univsion, TUDN",
  }),
  (usmntGrenada22_6_10Info = {
    id: usmntGrenada22_6_10,
    game: "USMNT vs Grenada",
    time: "10:00PM ET",
    type: "CONCACAF Nations League",
    location: "Q2 Stadium, Austin, Texas",
    watch: "ESPN+, Unimas, TUDN",
  }),
  (usmntElSalvador22_6_14Info = {
    id: usmntElSalvador22_6_14,
    game: "USMNT at El Salvador",
    time: "10:00PM ET",
    type: "CONCACAF Nations League",
    location: "Estadio Cuscatlan, San Salvador, El Salvador",
    watch: "FS1, Univsion, TUDN",
  }),
  (uswntColombia22_6_25Info = {
    id: uswntColombia22_6_25,
    game: "USWNT vs Colombia",
    time: "7:30PM ET",
    type: "Friendly",
    location: "Dick's Sporting Goods Park, Commece City, Colorado",
    watch: "FS1",
  }),
  (uswntColombia22_6_28Info = {
    id: uswntColombia22_6_28,
    game: "USWNT vs Colombia",
    time: "10:00PM ET",
    type: "Friendly",
    location: "Rio Tinto Stadium, Sandy, Utah",
    watch: "ESPN",
  }),
  (uswntHaiti22_7_4Info = {
    id: uswntHaiti22_7_4,
    game: "USWNT vs Haiti",
    time: "7:00PM ET",
    type: "CONCACAF W Championship",
    location: "Estadio Universitario, San Nicolas de los Garza, Mexico",
    watch: "CBSSN, Paramount+",
  }),
  (uswntJamaica22_7_7Info = {
    id: uswntJamaica22_7_7,
    game: "USWNT vs Jamaica",
    time: "7:00PM ET",
    type: "CONCACAF W Championship",
    location: "Estadio BBVA, Guadalupe, Nuevo Leon, Mexico",
    watch: "Paramount+",
  }),
  (uswntMexico22_7_11Info = {
    id: uswntMexico22_7_11,
    game: "USWNT vs Mexico",
    time: "10:00PM ET",
    type: "CONCACAF W Championship",
    location: "Estadio Universitario, San Nicolas de los Garza, Mexico",
    watch: "Paramount+",
  }),
  (uswntNGA22_9_3Info = {
    id: uswntNGA22_9_3,
    game: "USWNT vs Nigeria",
    time: "1:00PM ET",
    type: "Friendly",
    location: "Children's Mercy Park, Kansas City, Kansas",
    watch: "Fox",
  }),
  (uswntNGA22_9_6Info = {
    id: uswntNGA22_9_6,
    game: "USWNT vs Nigeria",
    time: "6:00PM ET",
    type: "Friendly",
    location: "Audi Field, Washington DC",
    watch: "ESPN2",
  }),
  (uswntEng22_10_7Info = {
    id: uswntEng22_10_7,
    game: "USWNT at England",
    time: "3:00PM ET",
    type: "Friendly",
    location: "Wembley Stadium, London, England",
    watch: "Fox",
  }),
  (usmntJapan22_9_22Info = {
    id: usmntJapan22_9_22,
    game: "USMNT vs Japan",
    time: "8:25PM ET",
    type: "Friendly",
    location: "Dusseldorf, Germany",
    watch: "ESPN2, ESPN+, UniMAS, TUDN",
  }),
  (usmntKSA22_9_27Info = {
    id: usmntKSA22_9_27,
    game: "USMNT vs Saudi Arabia",
    time: "2:00PM ET",
    type: "Friendly",
    location: "Murcia, Spain",
    watch: "FS1, UniMAS, TUDN",
  }),
  (usmnt22WC1Info = {
    id: usmnt22WC1,
    game: "USMNT vs Wales",
    time: "2:00PM ET",
    type: "FIFA World Cup Group Stage",
    location: "Ahmad bin Ali Stadium, Al Rayyan, Qatar",
    watch: "Fox, Telemundo",
  }),
  (usmnt22WC2Info = {
    id: usmnt22WC2,
    game: "USMNT vs England",
    time: "2:00PM ET",
    type: "FIFA World Cup Group Stage",
    location: "Al-Bayt Stadium, Al Khor, Qatar",
    watch: "Fox, Telemundo",
  }),
  (usmnt22WC3Info = {
    id: usmnt22WC3,
    game: "USMNT vs Iran",
    time: "2:00PM ET",
    type: "FIFA World Cup Group Stage",
    location: "Al Thumama Stadium, Doha, Qatar",
    watch: "Fox, Telemundo",
  }),
  (usmntGrenada23_3_24Info = {
    id: usmntGrenada23_3_24,
    game: "USMNT at Grenada",
    time: "TBD",
    type: "CONCACAF Nations League",
    location: "TBD",
    watch: "TBD",
  }),
  (usmntElSalvador23_3_27Info = {
    id: usmntElSalvador23_3_27,
    game: "USMNT vs El Salvador",
    time: "TBD",
    type: "CONCACAF Nations League",
    location: "TBD",
    watch: "TBD",
  }),
]
setupCalender(currentDate)

function setupCalender(currentDate) {
  calenderHeaderText.innerText = format(currentDate, "MMMM - yyyy")
  setupDates(currentDate)
}

function addUsmntImg(date) {
  const imgContainer = document.createElement("div")
  imgContainer.classList.add("matchday-img-container")
  date.appendChild(imgContainer)
  let img = document.createElement("div")
  img.classList.add("usmnt-matchday")
  imgContainer.appendChild(img)
}

function addUswntImg(date) {
  const imgContainer = document.createElement("div")
  imgContainer.classList.add("matchday-img-container")
  date.appendChild(imgContainer)
  let img = document.createElement("div")
  img.classList.add("uswnt-matchday")
  imgContainer.appendChild(img)
}

function setupDates(currentDate) {
  const firstWeekStart = startOfWeek(startOfMonth(currentDate))
  const lastWeekEnd = endOfWeek(endOfMonth(currentDate))
  const dates = eachDayOfInterval({ start: firstWeekStart, end: lastWeekEnd })

  dateGrid.innerHTML = ""

  dates.forEach((date) => {
    const dateElement = document.createElement("button")
    dateElement.classList.add("date")
    dateElement.innerText = date.getDate()
    if (!isSameMonth(date, currentDate)) {
      dateElement.classList.add("other-month-date")
    }

    addUsmntMatchday(date, usmntMorocco22_6_1, dateElement)
    addUsmntMatchday(date, usmntUruguay22_6_5, dateElement)
    addUsmntMatchday(date, usmntGrenada22_6_10, dateElement)
    addUsmntMatchday(date, usmntElSalvador22_6_14, dateElement)
    addUswntMatchday(date, uswntColombia22_6_25, dateElement)
    addUswntMatchday(date, uswntColombia22_6_28, dateElement)
    addUswntMatchday(date, uswntHaiti22_7_4, dateElement)
    addUswntMatchday(date, uswntJamaica22_7_7, dateElement)
    addUswntMatchday(date, uswntMexico22_7_11, dateElement)
    addUswntMatchday(date, uswntNGA22_9_3, dateElement)
    addUswntMatchday(date, uswntNGA22_9_6, dateElement)
    addUswntMatchday(date, uswntEng22_10_7, dateElement)
    addUsmntMatchday(date, usmntJapan22_9_22, dateElement)
    addUsmntMatchday(date, usmntKSA22_9_27, dateElement)
    addUsmntMatchday(date, usmnt22WC1, dateElement)
    addUsmntMatchday(date, usmnt22WC2, dateElement)
    addUsmntMatchday(date, usmnt22WC3, dateElement)
    addUsmntMatchday(date, usmntGrenada23_3_24, dateElement)
    addUsmntMatchday(date, usmntElSalvador23_3_27, dateElement)

    dateGrid.appendChild(dateElement)
  })
}

function addUsmntMatchday(date, match, dateElement) {
  if (isSameDay(date, match)) {
    addUsmntImg(dateElement)
    console.log(date)
  }

  if (isSameDay(date, match) & isSameMonth(date, currentDate)) {
    dateElement.addEventListener("click", () => {
      games.forEach(function (game) {
        if (match === game.id) {
          console.log(game.game)
          modal.innerHTML = ""
          const gameModal = `
          <div class="modal-header">${game.game}</div>
          <div class="modal-info">Time: ${game.time}</div>
          <div class="modal-info">Type: ${game.type}</div>
          <div class="modal-info">Location: ${game.location}</div>
          <div class="modal-info">Watch: ${game.watch}</div>
          `
          modal.innerHTML = gameModal
          calenderSection.append(modal)
          modal.classList.add("show")
          overlay.classList.add("open")
          overlay.addEventListener("click", () => {
            modal.classList.remove("show")
            overlay.classList.remove("open")
          })
        }
      })
    })
  }
}

function addUswntMatchday(date, match, dateElement) {
  if (isSameDay(date, match)) {
    addUswntImg(dateElement)
  }

  if (isSameDay(date, match) & isSameMonth(date, currentDate)) {
    dateElement.addEventListener("click", () => {
      games.forEach(function (game) {
        if (match === game.id) {
          console.log(game.game)
          modal.innerHTML = ""
          const gameModal = `
          <div class="modal-header">${game.game}</div>
          <div class="modal-info">Time: ${game.time}</div>
          <div class="modal-info">Type: ${game.type}</div>
          <div class="modal-info">Location: ${game.location}</div>
          <div class="modal-info">Watch: ${game.watch}</div>
          `
          modal.innerHTML = gameModal
          calenderSection.append(modal)
          modal.classList.add("show")
          overlay.classList.add("open")
          overlay.addEventListener("click", () => {
            modal.classList.remove("show")
            overlay.classList.remove("open")
          })
        }
      })
    })
  }
}

nextMonthBtn.addEventListener("click", () => {
  currentDate = addMonths(currentDate, 1)
  setupCalender(currentDate)
})

prevMonthBtn.addEventListener("click", () => {
  currentDate = subMonths(currentDate, 1)
  setupCalender(currentDate)
})

// fetch("usmntgames.json", {
//   method: "GET",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "text/plain",
//   },
// })
//   .then((res) => res.json())
//   .then((data) => {
//     games = data.map((game) => {
//       console.log(game)
//       const modal = document.createElement("div")
//       const gameModal = `
//     <div class="usmntMorocco6_1 modal">
//       <div class="modal-match-header">${game.match}</div>
//     </div>`
//       modal.innerHTML = gameModal
//       calenderSection.append(modal)
//       return {
//         match: game.match,
//       }
//     })
//   })
