<template>
	<div class="form__group">
		<div class="select-wrapper mt-6">
			<template v-if="isErrors">
				<p 
					class="validation-error"
					v-for="error in input.errors"
					:key="error"
					>{{error}}</p>
			</template>
			<label class="label" :for="input.id">
				<div class="label__text">Группа клиентов</div>
			<div class="selected-items" @click.prevent="show">
				<template v-if="input.value.length > 0">
					<div 
						class="selected-item"
						v-for="item in input.value"
						:key="item"
						>{{item}}</div>
				</template>
				<p class="selected-info" v-else>Ничего не выбрано</p>
				<p class="close" @click.prevent.stop="close">✖</p>
			</div>
			</label>
			<select 
				:id="input.id" 
				class="select" 
				v-show="isShow"
				:size="input.options.length" 
				multiple
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
	data() {
		return {
			isShow: false
		}
	},
	emits: ['input-multiple-change'],
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
				this.show()
				this.$emit('input-multiple-change', {value: evt.target.value, idx: this.index, key: evt.ctrlKey})
			}
		},
		show() {
			this.isShow = true
		},
		close() {
			this.isShow = false
		}
	}
}
</script>