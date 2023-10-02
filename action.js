
function start() {

	// Set the amount of checkboxes to go through
	const optionAmount = 6

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
	var magic = document.getElementById("option6");
	var magicArray = options.option6

	// Array to be populated by random choices
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
	var randomMixerElement = ""
	var randomSplashElement = ""
	var randomAdditionElement = ""
	var randomPrepElement = randomFromArray(prepared)

	if (magic.checked && randomChance(.25)) {

		debug("Mixo activated! - Mixers")
		randomMixerElement = randomFromArray(magicArray)
	} else {
		randomMixerElement = randomFromArray(mixers)
	}

	if (magic.checked && randomChance(.25)) {

		debug("Mixo activated! - Splash")
		randomSplashElement = randomFromArray(magicArray)
	} else {
		randomSplashElement = randomFromArray(splash)
	}

	if (magic.checked && randomChance(.25)) {

		debug("Mixo activated! - Also")
		randomAdditionElement = randomFromArray(magicArray)
	} else {
		randomAdditionElement = randomFromArray(also)
	}

	createText(advantage() + "oz " + randomElement)
	createText(randomFloat(.1, 3, 1) + "oz " + randomMixerElement)
	var output3Ready = randomFloat(.1, 3, 1) + "oz " + randomAdditionElement
	var output4Ready = "A splash of " + randomSplashElement
	var output5Ready = randomPrepElement

	if (randomChance(.25)) {
		createText(output3Ready)
	}
	if (randomChance(.25)) {
		createText(output4Ready)
	}
	if (randomChance(.25)) {
		createText(output5Ready)
	}

	let firstName = randomFromArray(firstname)
	let lastName = randomFromArray(lastname)
	name.innerText = "The " + firstName + " " + lastName

}

// Generate two numbers between .1 and 3 and take the higher number
function advantage() {
	let roll1 = randomFloat(.1, 3, 1)
	let roll2 = randomFloat(.1, 3, 1)
	if (roll1 > roll2) {
		return roll1
	} else {
		return roll2
	}
}

// Create a text node to be added to the text container
function createText(text) {
	var para = document.createElement("p");
	var textNode = document.createTextNode(text);
	para.className = "output"
	para.appendChild(textNode);
	document.getElementById("textContainer").appendChild(para)
}
