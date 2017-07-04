let nodeList = document.querySelector('.columnLeft');
let previewButton = document.querySelector('.previewTTS');


//Creates a new node and fills it with the correct html

function insertNode(location, reference) {
	var newNode = document.createElement('div');
	newNode.className = 'node';

	if (location === 'before') {
		nodeList.insertBefore(newNode, reference);
	} else {
		nodeList.insertBefore(newNode, reference.nextSibling);
	}
	
	newNode.innerHTML = nodeFiller;
};

//deletes the 'node' of the button pressed

function deleteNode(location) {
	nodeList.removeChild(location);
}

function moveNode(direction, reference) {

	var thisNodeInput = reference.querySelector('textarea');
	var thatNodeInput = '';

	if (direction === 'before') {
		thatNodeInput = reference.previousSibling.querySelector('textarea');
	} else {
		thatNodeInput = reference.nextSibling.querySelector('textarea');
	}

	var save = thisNodeInput.value;
	thisNodeInput.value = thatNodeInput.value;
	thatNodeInput.value = save;
}

function playTTS() {
	var nodeArray = nodeList.querySelectorAll('.node');
	var textToPlay = '';

	for (var i = 0; i < nodeArray.length; i++){
		var thisNodeInput = nodeArray[i].querySelector('textarea');
		textToPlay += thisNodeInput.value + ' ';
		console.log(textToPlay);
	}

	responsiveVoice.speak(textToPlay);
}

insertNode('before', document.querySelector('.addNodeEnd'));


//Event Listeners

nodeList.addEventListener('click', (event) => {
	var buttonGroup = event.target.parentNode;
	var thisNode = buttonGroup.parentNode;

	if(event.target.className === 'addNodeAfter'){
		insertNode('after', thisNode);
		console.log('after');
	} else if (event.target.className === 'addNodeBefore'){
		insertNode('before', thisNode);
		console.log('before');
	} else if (event.target.className === 'addNodeEnd'){
		insertNode('before', event.target);
		console.log('before');
	} else if (event.target.className === 'delete'){
		deleteNode(thisNode);
		console.log('delete');
	} else if (event.target.className === 'moveNodeBefore'){
		moveNode('before', thisNode);
		console.log('moved');
	} else if (event.target.className === 'moveNodeAfter'){
		moveNode('after', thisNode);
		console.log('moved');
	}		
});

previewButton.addEventListener('click', () => {
		console.log('playing that TTS');
		playTTS();
});
