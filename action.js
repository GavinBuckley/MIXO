// Set the amount of checkboxes to go through
const optionAmount = 6

window.onload = function () {

	// Check to see if key exists
	if (!(sessionStorage.hasOwnProperty("checkboxes"))) {
		let storageArray = { option1: true, option2: true, option3: true, option4: true, option5: true, option6: false }
		sessionStorage.setItem("checkboxes", JSON.stringify(storageArray))

		// Set default options
		for (let i = 1; i <= optionAmount; i++) {

			let temp = "option" + i
			let currentOption = document.getElementById(temp);

			if (temp != "option6") {

				currentOption.checked = true
			} else {

				currentOption.checked = false
			}
		}

	} else {
		// Parse key and set options accordingly
		var stringData = sessionStorage.getItem("checkboxes")
		var obj = JSON.parse(stringData);

		for (let i = 1; i <= optionAmount; i++) {
			let temp = "option" + i
			let currentOption = document.getElementById(temp);
			if (obj[temp] == true) {
				currentOption.checked = true
			}
		}
	}
};

function start() {
	var errorWrapper = document.getElementById('errorWrapper');
	errorWrapper.style.display = "none"


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
	var mixoWrapper = document.getElementById("mixoWrapper")
	var magicArray = options.option6
	let optionsCheck = 0


	// Array to be populated by random choices
	const randomArray = []

	// Check to see if each checkbox is checked and add a random element from that array to the array
	for (let i = 1; i <= optionAmount; i++) {
		let temp = "option" + i
		let currentOption = document.getElementById(temp);
		if (currentOption.checked) {

			optionsCheck++
			let currentArray = options[temp];
			let currentIndex = Math.floor(Math.random() * currentArray.length);
			let currentElement = currentArray[currentIndex];
			randomArray.push(currentElement)

		}
	}

	if (optionsCheck == 0) {
		debug("nothing is selected")
		errorWrapper.style.display = "flex"
		mixoWrapper.style.display = "none"
		name.innerText = ""
		return
	}

	let randomElement = randomFromArray(randomArray)
	var randomMixerElement = ""
	var randomSplashElement = ""
	var randomAdditionElement = ""
	var randomPrepElement = randomFromArray(prepared)

	if (magic.checked && randomChance(.25)) {

		randomMixerElement = randomFromArray(magicArray)
	} else {
		randomMixerElement = randomFromArray(mixers)
	}

	if (magic.checked && randomChance(.25)) {

		randomSplashElement = randomFromArray(magicArray)
	} else {
		randomSplashElement = randomFromArray(splash)
	}

	if (magic.checked && randomChance(.25)) {

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

	mixoWrapper.style.display = "flex"

	var quip = document.getElementById("quip")
	quip.innerText = randomFromArray(quips)

}

// Generate two numbers between .1 and 3 and take the higher number
function advantage() {
	let roll1 = randomFloat(1.5, 3, 1)
	let roll2 = randomFloat(1.5, 3, 1)
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

function check(option) {
	debug(option)
	var stringData = sessionStorage.getItem("checkboxes")
	var obj = JSON.parse(stringData);

	let currentOption = document.getElementById(option);
	if (currentOption.checked) {

		obj[option]= true
	} else {
		obj[option] = false
	}

	sessionStorage.setItem("checkboxes", JSON.stringify(obj))

}