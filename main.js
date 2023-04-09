let advices = []
const btnAdd = document.querySelector('.add')
const btnReset = document.querySelector('.clean')
const btnAdvice = document.querySelector('.showAdvice')
const btnOptions = document.querySelector('.showOptions')
const h1 = document.querySelector('h1')
const input = document.querySelector('input')


const addNew = (e) => {
    e.preventDefault()
    const names = input.value
    if (names) {
        advices.push(names)
        input.value = ''
        console.log(advices);
        h1.textContent = ''
    }
}

const showAdvice = () => {
    if (advices.length) {
        const randomAdvice = Math.floor(Math.random() * advices.length)
        h1.textContent = advices[randomAdvice]
        console.log('lol');
    } else {
        h1.textContent = 'najpierw dodaj jakieś złote rady od Siebie :)'
    }
}

const showOptions = () => {
    if (advices.length) {
        alert(`masz takie możliwości: ${advices}`)
    } else {
        alert('najpierw musisz dodać jakies możliwości, misiaczkuuuu')
    }
}

const reset = (e) => {
    e.preventDefault()
    if (advices.length) {
        advices = []
        console.log(advices, 'pusta');
    }
}


btnReset.addEventListener('click', reset)
btnAdvice.addEventListener('click', showAdvice)
btnOptions.addEventListener('click', showOptions)
btnAdd.addEventListener('click', addNew)

