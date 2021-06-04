const input = document.getElementById('city')
const form = document.querySelector('form')

function inputEvents (eventName) {

	input.addEventListener(eventName, (event) => {
		console.log(event)
		document.getElementsByClassName(eventName)[0].classList.add('border-red')
	})
}

inputEvents('focus')
inputEvents('blur')
inputEvents('change')
inputEvents('keypress')
inputEvents('keyup')

form.addEventListener('submit', (event) => {
	event.preventDefault()
	document.getElementsByClassName('submit')[0].classList.add('border-red')
})