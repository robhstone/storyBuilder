let nodeList = document.querySelector('.columnLeft');

function newNode() {
	var newNode = document.createElement('div');
	var nodeList = document.querySelector('.columnLeft')
	newNode.className = 'node';
	nodeList.appendChild(newNode);
	var newestNode = document.querySelector('.node:last-child');
	newestNode.innerHTML = '<div class = "move"><button class = "moveNodeBefore">^</button><button class = "delete">X</button><button class = "moveNodeAfter">v</button></div><div class = "inputs"><h4>Content</h4><input type="text"></div><div class = "add"><button class = "addNodeBefore">+</button><button class= "addNodeAfter">+</button></div>';
};

function deleteNode(node) {
	var move = node.parentNode;
	var thisNode = move.parentNode;
	var nodeList = thisNode.parentNode;
	nodeList.removeChild(thisNode);
}


nodeList.addEventListener('click', (event) => {
	if(event.target.className === 'addNodeAfter'){
		newNode();
		console.log('after');
	} else if (event.target.className === 'addNodeBefore'){
		console.log('before');
	} else if (event.target.className === 'delete'){
		deleteNode(event.target);
		console.log('delete');
	}
});