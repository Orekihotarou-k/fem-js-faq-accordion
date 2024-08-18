const faqButtons = document.querySelectorAll(".faq-button")
const faqAnswers = document.querySelectorAll(".faq-answer")

faqButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const faqAnswer = faqAnswers[index]
    const iconMinus = button.querySelector(".icon-minus")
    const iconPlus = button.querySelector(".icon-plus")
    const isOpen = faqAnswer.classList.contains("faq-active")

    if (!isOpen) {
      faqAnswer.classList.add("faq-active")
      iconMinus.style.display = "block"
      iconPlus.style.display = "none"
    } else {
      faqAnswer.classList.remove("faq-active")
      iconMinus.style.display = "none"
      iconPlus.style.display = "block"
    }
  })
})