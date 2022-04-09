const UswntVsUzb1Modal = document.querySelector("#uswnt-vs-uzb1-modal")
const openUswntVsUzb1Modal = document.querySelector("#open-uswnt-vs-uzb1-modal")
const UswntVsUzb2Modal = document.querySelector("#uswnt-vs-uzb2-modal")
const openUswntVsUzb2Modal = document.querySelector("#open-uswnt-vs-uzb2-modal")
const openNoMatchModal = document.querySelector("#no-match")
const noMatchModal = document.querySelector("#no-match-modal")
const calenderGrid = document.querySelector(".calender-grid-dates")
const overlay = document.querySelector("#overlay")

calenderGrid.addEventListener("click", (e) => {
  if (e.target.matches("#no-match")) {
    noMatchModal.classList.add("open")
    overlay.classList.add("open")
  }
})

openUswntVsUzb1Modal.addEventListener("click", () => {
  UswntVsUzb1Modal.classList.add("open")
  overlay.classList.add("open")
})

openUswntVsUzb2Modal.addEventListener("click", () => {
  UswntVsUzb2Modal.classList.add("open")
  overlay.classList.add("open")
})

overlay.addEventListener("click", closeModal)

function closeModal() {
  UswntVsUzb1Modal.classList.remove("open")
  UswntVsUzb2Modal.classList.remove("open")
  noMatchModal.classList.remove("open")
  overlay.classList.remove("open")
}
