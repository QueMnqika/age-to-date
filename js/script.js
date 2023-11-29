let output = document.querySelector('#output-container')
let userInput = document.querySelector('#userInput')
let btn = document.querySelector('#btn')

let converter = (value) => {
    let result = userInput.value *365
    let answer = eval(result)
    output.innerHTML = `<h4>You are:</h4><br><h3>${answer} Days Old 😊</h3>`
    output.style.backgroundColor = 'red'
    setTimeout(() => {
        output.innerHTML = ''
        output.style.backgroundColor = ''
    }, 8500);
    if (userInput.value !== '') {
        userInput.value = ''
    }
}

btn.addEventListener('click', converter)