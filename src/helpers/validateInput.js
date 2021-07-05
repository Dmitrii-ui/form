export default function(input) {
	if(input.hasOwnProperty('validators')) {
		if(input.validators.required) {
			if(input.value.length > 0) { 
				let idx = input.errors.findIndex((err) => err === 'Поле не может быть пустым!')
				idx !== -1 ?
				input.errors.splice(idx, 1)
					: false
				} else {
					input.errors.includes('Поле не может быть пустым!') ?
				  false
					: input.errors.push('Поле не может быть пустым!') 
				}
			}
		if(input.validators.maxLength) {
				if(input.value.length > input.validators.maxLength) { 
				input.errors.includes('Символов должно быть меньше ' + input.validators.maxLength) ?
					false 
					: input.errors.push('Символов должно быть меньше ' + input.validators.maxLength) 
				} 
			else {
				let idx = input.errors.findIndex((err) => err === 'Символов должно быть меньше ' + input.validators.maxLength)
				idx !== -1 ?
					input.errors.splice(idx, 1)
				: false
			} 
		}
		if(input.validators.pattern) {
			if(input.validators.pattern[0].test(input.value)) {
				let idx = input.errors.findIndex((err) => err === 'Формат должен быть в виде: ' + input.validators.pattern[1])
				idx !== -1 ?
				input.errors.splice(idx, 1)
				: false
			} else {
				input.errors.includes('Формат должен быть в виде: ' + input.validators.pattern[1]) ?
					false
					: input.errors.push('Формат должен быть в виде: ' + input.validators.pattern[1]) 
			} 
		}
		if(input.validators.requiredMultiple) {
			if(input.value.length > 0) {
				let idx = input.errors.findIndex((err) => err === 'Выберите хотя бы одну опцию')
				idx !== -1 ?
				input.errors.splice(idx, 1)
				: false
			} else {
				input.errors.includes('Выберите хотя бы одну опцию') ?
				false
				: input.errors.push('Выберите хотя бы одну опцию') 
			}
		}
		if(input.errors.length > 0) {
			input.valid = false
		} else {
			input.valid = true
		}
	}
}