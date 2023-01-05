
export const parseToFormData = (fields) => {

    let form_data = new FormData()

    for (let i in fields) {
        form_data.append(i, fields[i])
    }
    return form_data

}

export const objectToQuery = (object) => {

    let query = '?'
    for (let i in object) {
        query += i + '=' + object[i] + '&'
    }
    return query;

}

export const extractFile = (id) => {

    let _input_file = document.querySelector('#' + id)
    return (_input_file && _input_file.files) ? _input_file.files[0] : {}

}

export const changeArrayItemPosition = (last_index, new_index, array, callBack) => {

    let aux_item = array[last_index]
    let aux_array = [...array]
    aux_array.splice(last_index, 1)
    aux_array.splice(new_index, 0, aux_item)
    if (callBack) callBack()
    return aux_array

}
export const fadeIn = (element_to_show) => {
    element_to_show.style.opacity = 0
    element_to_show.style.display = 'block'

    const show_interval = setInterval(() => {
        element_to_show.style.opacity = +element_to_show.style.opacity + 0.1

        if (element_to_show.style.opacity == 1) {
            clearInterval(show_interval)
        }
    }, 20)
}
export const fadeOut = (element_to_hide) => {
    element_to_hide.style.opacity = 1
    const hide_interval = setInterval(() => {
        element_to_hide.style.opacity -= 0.1
        if (element_to_hide.style.opacity == 0) {
            element_to_hide.style.display = 'none'
            clearInterval(hide_interval)
        }
    }, 20)
}
export const fade = (hide, show, callBack) => {
    let element_to_hide = document.querySelector(hide)
    let element_to_show = document.querySelector(show)
    fadeOut(element_to_hide)
    setTimeout(() => {
        fadeIn(element_to_show)
    }, 200)
    setTimeout(() => {
        if (callBack != undefined) callBack()
    }, 400)
}

export const parseDate = (date) => {
    return date.split('.')[0].replace('T', ' ')

}