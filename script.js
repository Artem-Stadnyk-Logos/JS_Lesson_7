function Queryselector() {
	let elements = document.querySelectorAll('li');
	for (let i = 0; i < elements.length; i++) {
		let currentElement = elements[i];
		currentElement.innerHTML = '-1-0-1-0-1-';

		let li = document.getElementsByTagName('li');
		console.log('number of elements li = ' + li.length);

	}


}
