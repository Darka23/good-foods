export function errorHandler(name, value, func) {
    if (name == "title") {
        if (value.length < 5) {
            func(state => [...state, { field: name, errorMessage: "Title must be longer than 5 characters" }]);
        }
        else {
            func(state => state.filter(error => error.field != "title"))
        }
    }
    if (name == "description") {
        if (value.length < 20) {
            func(state => [...state, { field: name, errorMessage: "Description must be longer than 20 characters" }]);
        }
        else {
            func(state => state.filter(error => error.field != "description"))
        }
    }
    if (name == "contents") {
        if (value.length < 20) {
            func(state => [...state, { field: name, errorMessage: "Recipe contents must be longer than 20 characters" }]);
        }
        else {
            func(state => state.filter(error => error.field != "contents"))
        }
    }
    if (name == "preparation") {
        if (value.length < 20) {
            func(state => [...state, { field: name, errorMessage: "Method of preparation must be longer than 20 characters" }]);
        }
        else {
            func(state => state.filter(error => error.field != "preparation"))
        }
    }
}