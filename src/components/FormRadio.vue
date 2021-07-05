<template>
	<div class="form__group">
		<p class="form__info">{{input.label}}</p>

	<template v-for="radio, idx in input.radios" :key="radio">
		<label class="form__label" :for="input.ids[idx]">{{radio}}</label>
		<input 
			class="form__input radio" 
			:id="input.ids[idx]" 
			:name="input.name" 
			type="radio" 
			:value="radio"
			@input="onInput"/>
	</template>
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
			this.$emit('input-change', {value: evt.target.value, idx: this.index})
		}
	}
}
</script>