<template>
	<div class="form__group mt-6">
		<label class="label" :for="input.id">
			<div class="label__text">{{input.label}}</div>
		</label>
		<input 
			class="checkbox" 
			:id="input.id"
			type="checkbox" 
			:value="input.value"
			@input="onInput" >
	</div>
</template>

<script>

export default {
	emits: ['input-change'],
	props: {
		index: {
			type: Number,
			required: true
		},
		input: {
			type: Object,
			required: true
		},
	},
	methods: {
		onInput(evt) {
			this.$emit('input-change', {value: !this.input.value, idx: this.index})
		}
	}
}
</script>