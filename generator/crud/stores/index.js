import { defineStore } from 'pinia'
import __name__(pascalCase)Services from '../services/index.js'
import useNotyf from '@/composables/useNotyf.js'
export default defineStore({
	id: '__name__(kebabCase)-store',
	state: () => ({
		module_name: '',
		active_page: '',
		modal: '',
		modal_title: '',
		items: {
			__name__(snakeCase): {
				list: [],
				selected_item: {},
				selected_item_index: -1,
				paginator: {
					items_per_page: 5,
					current_page: 1,
					search: '',
					total_pages: 0,
					total_items: 0,
					key: 0
				}
			}
		},
		forms: {
			create_update___name__(snakeCase): ''
		}
	}),

	actions: {
		setItems(items_name, items) {
			this.items[items_name].list = items
		},
		setModal(m) {
			this.modal = m
		},
		setModalTitle(mt) {
			this.modal_title = mt
		},
		setSelectedItem(items_name, item) {
			this.items[items_name].selected_item = item
		},
		setSelectedItemIndex(items_name, index) {
			this.items[items_name].selected_item_index = index
		},
		setActivePage(id) {
			this.active_page = id
		},
		setModuleName(mn) {
			this.module_name = mn
		},
		setPagination(settings) {
			this.items[settings.paginator].paginator.current_page = settings.current_page ?? this.items[settings.paginator].paginator.current_page;
			this.items[settings.paginator].paginator.items_per_page = settings.items_per_page ?? this.items[settings.paginator].paginator.items_per_page;
			this.items[settings.paginator].paginator.search = settings.search ?? this.items[settings.paginator].paginator.search;
			this.items[settings.paginator].paginator.total_pages = settings.total_pages ?? this.items[settings.paginator].paginator.total_pages;
			this.items[settings.paginator].paginator.total_items = settings.total_items ?? this.items[settings.paginator].paginator.total_items;
			this.items[settings.paginator].paginator.key = settings.key ?? this.items[settings.paginator].paginator.key;
		},
		setFormMode(form, mode) {
			this.forms[form] = mode
		},
		//begin::modal options
		configModal(config) {
			console.log(config)
		},
		setItemToSee(item, index) {

		},
		setItemToUpdate(item, index) {

		},

		openModalToCreate(item, index) {

		},
		closeModal() {
		},
		//end::modal options
		fetch__name__(pascalCase)(items_per_page, current_page, search) {

	__name__(pascalCase)Services.paginate(items_per_page, current_page, search).then((response) => {
		console.log(response.data)
		this.setItems('__name__(snakeCase)', response.data.data.items)
		this.setPagination({
			paginator: '__name__(snakeCase)',
			current_page: response.data.data.pagination.current_page,
			total_pages: Math.ceil(response.data.data.pagination.total / parseInt(response.data.data.pagination.per_page)),
			total_items: response.data.data.pagination.total,
			key: ++this.items.__name__(snakeCase).paginator.key
		})
	})

},
	find() {

},
	async create__name__(pascalCase)(form) {
	// let data = {
	// 	name: form.name,
	// 	type_category: form.type,
	// 	description: form.description,
	// }
	let response = await __name__(pascalCase)Services.create(form)
		let notyf = useNotyf()
		switch(response.status) {
			case 200: {
		this.set__name__(pascalCase)List()
		notyf.success('============== creada exitosamente')
		return true
		break
	}
			default: {
		notyf.error('Ocurrió un problema al crear ===============')
		break;
	}
}
},
async update__name__(pascalCase)(form, id) {
	// let data = {
	// 	name: form.name,
	// 	type_category: form.type,
	// 	description: form.description,
	// 	status: form.status ? 'active' : 'deleted'
	// }

	let response = await __name__(pascalCase)Services.update(form, id)
	let notyf = useNotyf()
	switch (response.status) {
		case 200: {
			this.set__name__(pascalCase)List()
			notyf.success('============ editada exitosamente')

			break
		}
		default: {
			console.log('nel')
			notyf.error('Ocurrió un problema al actualizar')
			break
		}
	}
},
async delete__name__(pascalCase)(id) {

	let response = await __name__(pascalCase)Services.delete (id)
	let notyf = useNotyf()
	switch (response.status) {
		case 200: {
			this.set__name__(pascalCase)List()
			notyf.success('============ editada exitosamente')

			break
		}
		default: {
			notyf.error('Ocurrió un problema al eliminar')
			break
		}
	}
},
confirmAction(was_confirmed) {
	if (!was_confirmed) return
	alert('execute ' + this.action_to_confirm)
},
set__name__(pascalCase)List() {
	this.fetch__name__(pascalCase)(this.items.__name__(snakeCase).paginator.items_per_page, this.items.__name__(snakeCase).paginator.current_page, this.items.__name__(snakeCase).paginator.search)
},
init() {
	this.set__name__(pascalCase)List()
	this.setModuleName('__name__(pascalCase)')
	this.setActivePage('#list')
},
	},
})
