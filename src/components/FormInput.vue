<template>
	<div class="form__group">
		<label class="label">
			<input 
				class="form__input" 
				type="text" 
				:value="input.value"  
				required
				@input="onInput"
				@invalid.prevent=""/>
			<div class="label__text">{{input.label}}</div>
			<template v-if="isErrors">
				<p 
					class="validation-error"
					v-for="error in input.errors"
					:key="error"
					>{{error}}</p>
			</template>
		</label>
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
			this.$emit('input-change', {value: evt.target.value, idx: this.index})
		}
	}
}
</script>