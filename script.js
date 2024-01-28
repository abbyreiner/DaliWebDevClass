document.getElementById('button1').onclick = () => {
	console.log('You clicked me!')
	document.getElementById('button1').innerHTML += <button>hi</button>;
	// document.setElementById('button1').innerHTML += 'hi';
}