<template>
	<form action="#" class="form">
		<!-- <h1 class="form__title">Создание клиента</h1>
		<div class="form__header">
			Заполняется 1 из 3
		</div>


		<div class="form__group">
			<label class="label">
				<input class="form__input" type="text" required/>
				<div class="label__text">Имя</div>
			</label>
		</div>
		<div class="form__group">
			<label class="label">
				<input class="form__input" type="text" required/>
				<div class="label__text">Фамилия</div>
			</label>
		</div>
		<div class="form__group">
			<label class="label" for="patronymic">
				<input class="form__input" id="patronymic" type="text" required/>
				<div class="label__text">Отчество</div>
			</label>
		</div>
		<div class="form__group">
			<label class="label" for="date">
				<input id="date" class="form__input" type="text" required/>
				<div class="label__text">Дата рождения</div>
			</label>
		</div>
		<div class="form__group">
			<label class="label" for="tel">
				<input id="tel" class="form__input" pattern="[7]{0-9}-[0-9]{3}-[0-9]{4}" type="tel" required/>
				<div class="label__text">Телефон</div>
			</label>
		</div>



		<h1 class="form__title">Адрес</h1>

		<div class="form__group">
			<label class="label">
				<input class="form__input" type="text" required/>
				<div class="label__text">Индекс</div>
			</label>
		</div>
		<div class="form__group">
			<label class="label">
				<input class="form__input" type="text" required/>
				<div class="label__text">Страна</div>
			</label>
		</div>
		<div class="form__group">
			<label class="label">
				<input class="form__input" type="text" required/>
				<div class="label__text">Область</div>
			</label>
		</div>
		<div class="form__group">
			<label class="label">
				<input class="form__input" type="text" required/>
				<div class="label__text">Город</div>
			</label>
		</div>
		<div class="form__group">
			<label class="label">
				<input class="form__input" type="text" required/>
				<div class="label__text">Улица</div>
			</label>
		</div>
		<div class="form__group">
			<label class="label">
				<input class="form__input" type="text" required/>
				<div class="label__text">Дом</div>
			</label>
		</div>


		<h1 class="form__title">Паспорт</h1>

		<div class="form__group">
			<div class="select-wrapper">
				<label class="label" for="document">
					<div class="label__text">Тип документа</div>
				</label>
				<select class="select" id="document">
					<option class="select-2" value="Иванов">Паспорт</option>
					<option class="select-2" value="Захаров">Свидетельство о рождении</option>
					<option class="select-2" value="Чернышева">Вод. удостоверение</option>
				</select>
			</div>
		</div>
		<div class="form__group">
			<label class="label">
				<input class="form__input" type="text" required/>
				<div class="label__text">Серия</div>
			</label>
		</div>
		<div class="form__group">
			<label class="label">
				<input class="form__input" type="text" required/>
				<div class="label__text">Номер</div>
			</label>
		</div>
		<div class="form__group">
			<label class="label">
				<input class="form__input" type="text" required/>
				<div class="label__text">Кем выдан</div>
			</label>
		</div>
		<div class="form__group">
			<label class="label">
				<input class="form__input" type="text" required/>
				<div class="label__text">Дата выдачи</div>
			</label>
		</div> -->

		<div v-if="isCompleted" class="modal">
			<div class="modal-container">
				<p class="modal-info">Клиент успешно создан!</p>
				<button @click="reset" class="btn btn-success">Закрыть</button>
			</div>
		</div>

		<form-step 
			:step="step" 
			:form="forms[step]"
			:steps="forms.length"
			@input-change="setInputValue"
			@input-multiple-change="setMultipleValue"
		></form-step>

			<div class="btn-wrapper">
				<button class="btn btn-primary" @click="prev">Назад</button>
				<button class="btn btn-success" @click="complete" v-if="isFormEnd">Создать</button>
				<button class="btn btn-success" @click="next" v-else>Вперед</button>
			</div>
	</form>
</template>

<script>
import FormStep from '@/components/FormStep'
import patterns from '@/helpers/patterns'
import checkInputs from '@/helpers/checkInputs'
import validateInput from '@/helpers/validateInput'
import resetForms from '@/helpers/resetForms'

export default {
	data() {
		return {
			step: 0,
			isCompleted: false,
			forms: [
				{
					touched: false,
					title: 'Данные клиента',
					inputs: [
						{
							componentName: 'form-input',
							data: {
								type: 'text',
								label: 'Фамилия',
								value: '',
								valid: false,
								errors: [],
								validators: {
									required: true,
									maxLength: 24,
									pattern: patterns.stringPattern,
								}
							}
						},
						{
							componentName: 'form-input',
							data: {
								type: 'text',
								label: 'Имя',
								value: '',
								valid: false,
								errors: [],
								validators: {
									required: true,
									maxLength: 24,
									pattern: patterns.stringPattern,
								}
							}
						},
						{
							componentName: 'form-input',
							data: {
								type: 'text',
								label: 'Отчество',
								value: ''
							}
						},
						{
							componentName: 'form-input',
							data: {
								type: 'text',
								label: 'Дата рождения',
								value: '',
								valid: false,
								errors: [],
								validators: {
									required: true,
									pattern: patterns.datePattern,
								}
							}
						},
						{
							componentName: 'form-input',
							data: {
								type: 'tel',
								label: 'Номер телефона',
								value: '',
								valid: false,
								errors: [],
								validators: {
									required: true,
									pattern: patterns.telPattern,
								}
							}
						},
						{
							componentName: 'form-radio',
							data: {
								label: 'Ваш пол',
								name: 'gender',
								radios: ['Мужской', 'Женский'],
								ids: ['man', 'woman'],
								value: 'Мужской'
							}
						},
						{
							componentName: 'form-select-multiple',
							data: {
								label: 'Группа клиентов',
								id: 'client-group',
								multiple: true,
								options: ['VIP', 'Проблемные', 'ОМС'],
								value: [],
								valid: false,
								errors: [],
								validators: {
									requiredMultiple: true,
								}
							}
						},
						{
							componentName: 'form-select',
							data: {
								label: 'Лечащий врач',
								id: 'doctor',
								multiple: false,
								options: ['Иванов', 'Захаров', 'Чернышева'],
								value: 'Иванов'
							}
						},
						{
							componentName: 'form-checkbox',
							data: {
								label: 'Не отправлять СМС',
								id: 'SMS',
								value: false
							}
						},
					]
				},
				{
					touched: false,
					title: 'Адрес',
					inputs: [
						{
							componentName: 'form-input',
							data: {
								type: 'text',
								label: 'Индекс',
								value: '',
							}
						},
						{
							componentName: 'form-input',
							data: {
								type: 'text',
								label: 'Страна',
								value: '',
							}
						},
						{
							componentName: 'form-input',
							data: {
								type: 'text',
								label: 'Область',
								value: ''
							}
						},
						{
							componentName: 'form-input',
							data: {
								type: 'text',
								label: 'Город',
								value: '',
								valid: false,
								errors: [],
								validators: {
									required: true,
								}
							}
						},
						{
							componentName: 'form-input',
							data: {
								type: 'text',
								label: 'Улица',
								value: '',
							}
						},
						{
							componentName: 'form-input',
							data: {
								type: 'text',
								label: 'Дом',
								value: '',
							}
						},
					]
				},
				{
					touched: false,
					title: 'Адрес',
					inputs: [
						{
							componentName: 'form-select',
							data: {
								label: 'Тип документа',
								id: 'document',
								multiple: false,
								options: ['Паспорт', 'Свидетельство о рождении', 'Вод. удостоверение'],
								value: 'Паспорт',
								valid: false,
								errors: [],
								validators: {
									required: true,
								}
							}
						},
						{
							componentName: 'form-input',
							data: {
								type: 'text',
								label: 'Серия',
								value: '',
							}
						},
						{
							componentName: 'form-input',
							data: {
								type: 'text',
								label: 'Номер',
								value: '',
							}
						},
						{
							componentName: 'form-input',
							data: {
								type: 'text',
								label: 'Кем выдан',
								value: '',
							}
						},
						{
							componentName: 'form-input',
							data: {
								type: 'text',
								label: 'Дата выдачи',
								value: '',
								valid: false,
								errors: [],
								validators: {
									required: true,
									pattern: patterns.datePattern,
								}
							}
						},
					]
				},
			],
		}
	},
	methods: {
		setInputValue({value, idx, step}) {
			this.forms[step].inputs[idx].data.value = value
			validateInput(this.forms[step].inputs[idx].data)
		},
		setMultipleValue({value, idx, step, key}) {
				if(key) {
					let index = this.forms[step].inputs[idx].data.value.findIndex(val => val === value)
					if(index === -1) {
						this.forms[step].inputs[idx].data.value.push(value)
						validateInput(this.forms[step].inputs[idx].data)
					} else {
						this.forms[step].inputs[idx].data.value.splice(index, 1)
						validateInput(this.forms[step].inputs[idx].data)
					}
				} else {
					this.forms[step].inputs[idx].data.value = [value]
					validateInput(this.forms[step].inputs[idx].data)
				}
		},
		next() {
			this.forms[this.step].inputs.forEach(input => {
				validateInput(input.data)
			})
			let isValid = checkInputs(this.forms[this.step].inputs)
			this.forms[this.step].touched = true
			if(isValid && this.step < this.forms.length - 1) {
				this.step++
			}
		},
		prev() {
			if(this.step !== 0) {
				this.step--
			}
		},
		complete() {
			this.forms[this.step].inputs.forEach(input => {
					validateInput(input.data)
			})
			this.forms[this.step].touched = true
			if(checkInputs(this.forms[this.step].inputs)) {
				this.isCompleted = true
				document.body.classList.add('modal-active')
			}
		},
		reset() {
			this.isCompleted = false
			this.step = 0
			resetForms(this.forms)
			document.body.classList.remove('modal-active')
		}
	},
	computed: {
		isFormEnd() {
			return this.step === this.forms.length - 1
		}
	},
	components: {
		FormStep
	}
}
</script>

<style lang="scss">
.modal-active {
	overflow-y: hidden;
}

.modal {
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	position: absolute;
	z-index: 999;
	background-color: rgba(0, 0, 0, .5);
}

.modal-container {
	position: absolute;
	top: 30%;
	z-index: 9999;
	left: 50%;
	transform: translate(-50%);
	width: 30%;
	padding: 20px 10px;
	border-radius: 10px;
	background-color: #fff;
}

@media (max-width: 700px) {
	.modal-container {
		width: 50%;
	}
}

.validation-error {
	margin: 0;
	color: #f16;
	font-size: 12px;
	padding: 0px;
}

.btn-wrapper {
	display: flex;
	justify-content: space-between;
}
.btn {
	display: inline-block;
	margin: 0px 7px;
	border-radius: 5px;
	padding: 10px 24px;
	font-weight: bold;
	outline: none;
	border: none;
	cursor: pointer;
}

.btn-success {
	background-color: springgreen;
}
.btn-primary {
	background-color: #a6caf0;
}

.form {
	margin: 0 auto;
	max-width: 550px;
	box-shadow: 0px 0px 15px -8px #000;
	padding: 15px;
	border-radius: 5px;
	padding-bottom: 50px;
}

.form__title {
	text-align: center;
	margin-bottom: 40px;
	font-size: calc( (100vw - 320px)/(1200 - 320) * (32 - 25) + 25px);
	font-weight: normal;
}

.form__group {
	margin-bottom: 25px;
	position: relative;
}

.form__info {
	font-size: 15px;
	transition: all 0.3s;
	color: #9e9e9e;
}
  
.radio {
	margin-right: calc(10px + (20 - 10) * ((100vw - 320px) / (1200 - 320)));
}

.label {
  display: block;
	margin-bottom: 0px;
	padding-bottom: 0px;

  .label__text {
    font-size: 15px;
    transform: translateY(-23px);
    transition: all 0.3s;
		color: #9e9e9e;
		margin-bottom: 0px;
		padding-bottom: 0px;
		line-height: 2px;
	}


  .form__input {
    width: 100%;
		padding: 0 0 10px 5px;
		border: none;
		border-bottom: 1px solid #e0e0e0;
		background-color: transparent;
		outline: none;
		transition: 0.3s;
		font-size: 17px;
		color: #252525;
		margin-bottom: 0px;

    
    &:focus {
		
    
      & + .label__text {
        font-size: 13px;
        transform: translateY(-48px) translateX(10px);
			}
		}
      
    &:valid + .label__text {

      font-size: 13px;
      transform:translateY(-48px) translateX(10px);
		}
	}
}

.select-wrapper {
	position: relative;
	min-height: 35px;
}

.select[multiple] {
	width: 100%;
	position: absolute;
	outline: none;
	z-index: 9999;
	transition: .3s;
}

.select__option {
	display: block;
	padding: 8px 16px;
	width: 100%;

	&:hover {
		background-color: #ccc;
	}
}

.select:not([multiple]) {
	display: block;
	padding: 8px 16px;
	width: 100%;
	outline: none;
}

.checkbox {
	width: 20px;
	height: 20px;
}

.label-wrapper {
	display: inline-block;
}

.selected-items {
	display: flex;
	margin-bottom: 0px;
	border: 1px solid black;
	padding: 8px 16px;
	cursor: pointer;
	position: relative;
}

.selected-item {
	background-color: #a6caf0;
	border-radius: 10px;
	margin-right: 5px;
	box-sizing: border-box;
	padding: 4px 6px;
}

.close {
	position: absolute;
	right: 10px;
	top: -5px;
}

.selected-info {
	margin: 0;
	padding: 4px 6px;
}

.ml-2 {
	margin-left: calc(10px + (20 - 10) * ((100vw - 320px) / (1200 - 320)));
}
.mb-1 {
	margin-bottom: -10px;
}
.mb-3 {
	margin-bottom: calc(20px + (30 - 20) * ((100vw - 320px) / (1200 - 320)));
}
.mt-5 {
	margin-top: calc(40px + (50 - 40) * ((100vw - 320px) / (1200 - 320)));
}
.mt-6 {
	margin-top: calc(45px + (60 - 45) * ((100vw - 320px) / (1200 - 320)));
}
</style>