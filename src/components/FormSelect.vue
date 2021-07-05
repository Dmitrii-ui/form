<template>
	<div class="form__group">
		<div class="select-wrapper mt-6">
			<label class="label" :for="input.id">
				<div class="label__text">{{input.label}}</div>
			</label>
			<template v-if="isErrors">
				<p 
					class="validation-error"
					v-for="error in input.errors"
					:key="error"
					>{{error}}</p>
			</template>
			<select 
				:id="input.id" 
				class="select" 
				:value="input.value"
				@click.prevent="onInput">
					<option 
						class="select__option" 
						v-for="option in input.options"
						:key="option"
						:value="option"
						>{{option}}</option>
			</select>
		</div>
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
		formTouched: {
			type: Boolean,
			required: true
		},
	},
	computed: {
		isErrors() {
			return this.input.errors && this.input.errors.length > 0 && this.formTouched
		}
	},
	methods: {
		onInput(evt) {
			if(evt.target.value) {
				this.$emit('input-change', {value: evt.target.value, idx: this.index})
			}
		}
	}
}
</script>