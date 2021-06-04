const divTest = document.getElementById('test')

function mouseEvents(eventName) {
	divTest.addEventListener(eventName, () => {
		document.getElementsByClassName(eventName)[0].classList.add('border-red')
	})
}

mouseEvents('mouseenter')
mouseEvents('mouseover')
mouseEvents('mousemove')
mouseEvents('mouseout')
mouseEvents('mouseleave')
mouseEvents('mousedown')
mouseEvents('mouseup')
mouseEvents('click')
mouseEvents('dblclick')