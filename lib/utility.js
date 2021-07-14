




export const convertJsonToGQL = (query, data, string_to_replace) => {
    let form_data = JSON.stringify(data)
    form_data = form_data.replace(/"([^"]+)":/g, '$1:')
    return query.replace(string_to_replace, form_data)
}

export const jsonToGQLString = (json_data) => {
    let json_string = JSON.stringify(json_data)
    return json_string.replace(/"([^"]+)":/g, '$1:')
}
