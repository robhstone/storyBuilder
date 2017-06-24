let nodeList = document.querySelector('.columnLeft')

nodeList.addEventListener('click', (event) => {
	if(event.target.className === 'addNodeAfter'){
		console.log('after');
	} else if (event.target.className === 'addNodeBefore'){
		console.log('before');
	}
})