
function start() {
	console.log("started!")

	const optionAmount = 6
	const chance3 = 0.25
	const chance4 = 0.25
	const chance5 = 0.25
 
	// Check to see if the textContainer already exists
	var element = document.getElementById('textContainer');
	if (element !== null) {
		element.remove()
	}

	// Create textContainer
	var textContainer = document.createElement("div");
	textContainer.id = "textContainer"
	document.getElementById("leftContainer").appendChild(textContainer)

	var name = document.getElementById("name");

	const randomArray = []

	// Check to see if each checkbox is checked and add a random element from that array to the array
	for (let i = 1; i <= optionAmount; i++) {
		let temp = "option" + i
		let currentOption = document.getElementById(temp);
		if (currentOption.checked) {

			let currentArray = options[temp];
			let currentIndex = Math.floor(Math.random() * currentArray.length);
			let currentElement = currentArray[currentIndex];
			randomArray.push(currentElement)

		}
	}

	let randomElement = randomFromArray(randomArray)
	let randomMixerElement = randomFromArray(mixers)
	let randomSplashElement = randomFromArray(splash)
	let randomAdditionElement = randomFromArray(also)
	let randomPrepElement = randomFromArray(prepared)

	createText(generateRandomNumber() + "oz " + randomElement)
	createText(generateRandomNumber() + "oz " + randomMixerElement)
	var output3Ready = generateRandomNumber() + "oz " + randomAdditionElement
	var output4Ready = "A splash of " + randomSplashElement
	var output5Ready = randomPrepElement

	let decider3 = Math.random()
	let decider4 = Math.random()
	let decider5 = Math.random()

	if (decider3 <= chance3) {
		createText(output3Ready)
	}
	if (decider4 <= chance4) {
		createText(output4Ready)
	}
	if (decider5 <= chance5) {
		createText(output5Ready)
	}

	let firstName = randomFromArray(firstname)
	let lastName = randomFromArray(lastname)
	name.innerText = "The " + firstName + " " + lastName

}

function generateRandomNumber() {
	// Generate a random number between 0 (inclusive) and 1 (exclusive)
	const randomNumber = Math.random();

	// Scale the random number to be between 0.1 and 3
	const scaledRandom = randomNumber * 2.9 + 0.1;

	// Round the scaled random number to the tenths place
	const roundedRandom = Math.round(scaledRandom * 10) / 10;

	return roundedRandom;
}

function createText(text) {
	var para = document.createElement("p");
	var textNode = document.createTextNode(text);
	para.className = "output"
	para.appendChild(textNode);
	document.getElementById("textContainer").appendChild(para)
}