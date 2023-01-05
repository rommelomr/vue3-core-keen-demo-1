const validations = {
    required: {
        en: 'is required.',
        es: 'es obligatorio.',
    },
    email: {
        en: 'does not have an email format.',
        es: 'no tiene un formato de email.',
    },
    minLength: {
        en: 'does not have an the minimum required.',
        es: 'no tiene el mínimo requerido.',
    },
}
const fieldPrefix = (field, lang) => {
    switch (lang) {
        case 'en': {

            return 'this field'
        }
        case 'es': {

            return 'Este campo '
        }
    }
}
export const translate = (field, validation, lang) => {

    return fieldPrefix(field, lang) + ' ' + validations[validation][lang]
}