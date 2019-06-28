export function addProject(data) {
    return {
        type: 'ADD_PROJECT',
        payload: data
    }
}

export function handleToggle() {
    return {
        type: 'HANDLE_TOGGLE'
    }
}

export function openModal() {
    return {
        type: 'OPEN_MODAL'
    }
}

export function closeModal() {
    return {
        type: 'CLOSE_MODAL'
    }
}