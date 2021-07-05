<template>
	<h2 class="form__title">{{form.title}}</h2>
	<p class="form-step mb-3">Заполняется {{step + 1}} из {{steps}}</p>
	<component  
		v-for="input, idx in form.inputs"
		:key="input.data.label"
		:is="input.componentName"
		:formTouched="form.touched"
		v-bind:input="input.data"
		:index="idx"
		@input-change="onInputChange"
		@input-multiple-change="onMultipleChange"
		></component>
</template>

<script>
import FormInput from '@/components/FormInput'
import FormCheckbox from '@/components/FormCheckbox'
import FormRadio from '@/components/FormRadio'
import FormSelectMultiple from '@/components/FormSelectMultiple'
import FormSelect from '@/components/FormSelect'

export default {
	emits: ['input-change', 'input-multiple-change'],
	props: {
		form: {
			type: Object,
			required: true
		},
		step: {
			type: Number,
			required: true
		},
		steps: {
			type: Number,
			required: true
		},
	},
	methods: {
		onInputChange({value, idx}) {
			this.$emit('input-change', {value, idx, step: this.step})
		},
		onMultipleChange({value, idx, key}) {
			this.$emit('input-multiple-change', {value, idx, step: this.step, key})
		},
	},
	components: {
		FormInput,
		FormCheckbox,
		FormRadio,
		FormSelect,
		FormSelectMultiple
	}
}
</script>	