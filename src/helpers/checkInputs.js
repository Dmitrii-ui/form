export default function(inputs) {
	let isValid = true
	inputs.forEach((input) => {
		if(input.data.hasOwnProperty('valid')) {
			isValid = isValid && input.data.valid
		}
	})

	return isValid
}