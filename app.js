
var rover1 = {name: 'rover1', direction: 'N', x: 0, y: 0, travelLog: []};
var rover2 = {name: 'rover2', direction: 'S', x: 9, y: 9, travelLog: []};

var rovers = [rover1, rover2];

var obstacles = [
	[null, 'X', null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, 'x', null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, 'X', null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, 'X', 'X', null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
];

function turnLeft(rover){
	console.log(`${rover.name} Turning left`)
	if (rover.direction === "N") {
		rover.direction = "W";
    }
  else if (rover.direction === "W") {
  	rover.direction = "S";
    }
  else if (rover.direction === "S") {
  	rover.direction = "E"
    }
  else if (rover.direction === "E") {
    rover.direction = "N";
    }
    console.log(`${rover.name} is now facing: ${rover.direction}`)
}

function turnRight(rover){
	console.log(`${rover.name} Turning right`)
  if (rover.direction === "N") {
  	rover.direction = "E"
    }
  else if (rover.direction === "W") {
  	rover.direction = "N"
    }
  else if (rover.direction === "S") {
  	rover.direction = "W"
    }
  else if (rover.direction === "E") {
  	rover.direction = "S"
    }
    console.log(`${rover.name} is now facing "${rover.direction}"`)
}

function moveForward(rover){
	console.log(`${rover.name} Move forward`);

	var x = rover.x;
	var y = rover.y;
	
	if (rover.direction === "N" && rover.y > 0){
		y -= 1;
  }
  else if (rover.direction === "S" && rover.y < 9){
		y += 1;
  }
  else if (rover.direction === "W" && rover.x > 0){
		x -= 1;
  }
  else if (rover.direction === "E" && rover.x < 9){
		x += 1;
  }

  var problem = obstacles[y][x];

	if (problem === 'X')
		console.log(`impossible movement. There is an obstacle!`);
	else {
		rover.x = x;
		rover.y = y;
			console.log(`${rover.name} The new position is: ${rover.x} , ${rover.y}`);
	}
}

function moveBackward(rover) {
	console.log(`${rover.name} Move backward`);
	var problem = obstacles[rover.y][rover.x];

	var x = rover.x;
	var y = rover.y;

	if (rover.direction === "N" && rover.y < 9){
		y -= 1;
	}
	else if (rover.direction === "S" && rover.y > 0){
		y += 1;
	}
	else if (rover.direction === "E" && rover.x > 0){
		x -= 1;
	}
	else if (rover.direction === "W" && rover.x < 9){
		x += 1;
	}
	var problem = obstacles[y][x];
	if(problem === 'X')
		console.log(`impossible movement. There is an obstacle!`);
	else {
		rover.x = x;
		rover.y = y;
			console.log(`${rover.name} The new position is: ${rover.x} , ${rover.y}`);
		}
}

function parseInstructions(instructions) {
	var lista = instructions.split("");
	var nuevaLista = [];
	for (var i = 0; i <lista.length; i++ ) {
		if (lista[i]!== ' ')
		nuevaLista.push(lista[i]);
	}
	return nuevaLista;
}

function move(rover,instructions) {
	for (var i = 0; i < instructions.length; i++) {
	if (instructions[i] === "r") {
		turnRight(rover);
	}
	else if (instructions[i] === "l"){
		turnLeft(rover);
	}
	else if (instructions[i] === "f") {
		moveForward(rover);
	}
	else if (instructions[i] === "b") {
		moveBackward(rover);
	}
		rover.travelLog.push([rover.x, rover.y]);
  }
}

console.log(`Initial position ${rovers[0].direction}`);
console.log(`Initial position ${rovers[1].direction}`);
var instructionsRover1 = parseInstructions(prompt(`list of commands: r,l,f,b`));
console.log(instructionsRover1);
move(rover1, instructionsRover1);
var instructionsRover2 = parseInstructions(prompt(`list of commands: r,l,f,b`));
console.log(instructionsRover2);
move(rover2, instructionsRover2);
console.log(rover1, rover2);


