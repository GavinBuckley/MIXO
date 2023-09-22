
function start() {
	console.log("started!")
	var output = document.getElementById("output");
	const optionAmount = 5
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

	// Pick random base
	let randomIndex = Math.floor(Math.random() * randomArray.length);
	let randomElement = randomArray[randomIndex]

	// Pick random mixer
	let randomMixerIndex = Math.floor(Math.random() * mixers.length);
	let randomMixerElement = mixers[randomMixerIndex]

	let randomSplash = Math.floor(Math.random() * splash.length);
	let randomSplashElement = splash[randomSplash]
	extraOne = " with a splash of " + randomSplashElement

	let randomAddition = Math.floor(Math.random() * also.length);
	let randomAdditionElement = also[randomAddition]
	extraTwo = " and " + randomAdditionElement


	let randomPrep = Math.floor(Math.random() * prepared.length);
	let randomPrepElement = prepared[randomPrep]
	extraThree = " " + randomPrepElement

	let extraDecider = Math.floor(Math.random() * 7)

	var combo = ""

	if (extraDecider == 0 || extraDecider == 1) {
		combo = randomElement + " and " + randomMixerElement
	}
	if (extraDecider == 2) {
		combo = randomElement + " and " + randomMixerElement + extraOne
	}
	if (extraDecider == 3) {
		combo = randomElement + " and " + randomMixerElement + extraTwo
	}
	if (extraDecider == 4) {
		combo = randomElement + " and " + randomMixerElement + extraThree
	}
	if (extraDecider == 5) {
		combo = randomElement + " and " + randomMixerElement + extraOne + extraTwo
	}
	if (extraDecider == 6) {
		combo = randomElement + " and " + randomMixerElement + extraOne + extraThree
	}
	if (extraDecider == 7) {
		combo = randomElement + " and " + randomMixerElement + extraTwo + extraThree
	}
	if (extraDecider == 8) {
		combo = randomElement + " and " + randomMixerElement + extraOne + + extraTwo + extraThree
	}

	output.innerText = combo

}