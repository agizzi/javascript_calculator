const addButton = document.querySelector('#add-button');
console.log({ addButton });

addButton.addEventListener('click', function(event) {
	// console.log('clicked')
	const field = document.querySelector('#add-item');
	const itemText = field.nodeValue;
	// console.log(itemText)

	if (itemText !== '') {
		const newListItem = document.createElement('li');
		newListItem.innerText = itemText;
		console.log('newListItem');

		document.querySelector('#grocery-list').appendChild(newListItem);
		field.value = '';
	}
});
