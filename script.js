const cards = document.querySelectorAll('.card');

const formButton = document.querySelector('.form-button');
const input = document.querySelector('.input');
const greeting = document.querySelector('.greeting');

const question = document.querySelector('.question');
const thanks = document.querySelector('.thanks');
const buttons = document.querySelector('.button-section');
const yesButton = document.querySelector('.button_type_yes')
const noButton = document.querySelector('.button_type_no')

formButton.addEventListener('click', (evt) => {
  evt.preventDefault()

  if (input.value === '') {
    alert('введи имя пж')
    return;
  }

  thanks.textContent = `принято, ${input.value}`
  
  cards[0].classList.add('hidden')
  cards[1].classList.remove('hidden')
})

yesButton.addEventListener('click', () => {
  question.textContent = 'сосал_а?'
  setTimeout(() => {
    thanks.textContent = 'спасибо!'
    question.textContent = 'мы внесем результаты опроса в статистику';
    buttons.classList.add('hidden')
  }, 700)
})

noButton.addEventListener('click', () => {
  alert('не обманывай 🥺')
})


