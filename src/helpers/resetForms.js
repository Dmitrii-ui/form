export default function(forms) {
	forms.forEach((form) => {
		form.touched = false 

		form.inputs.forEach(input => {
			if(input.componentName === 'form-checkbox') {
				input.data.value = false
			} else if(input.componentName === 'form-select-multiple') {
				input.data.value = []
			} else {
				input.data.value = ''
			}

			if(input.data.hasOwnProperty('valid')) {
				input.data.valid = false 
				input.data.errors = []
			}
		})
	})
}