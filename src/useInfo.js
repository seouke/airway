import { useReducer } from 'react'

const reducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value
    }
}

const useInfo = (initialForm) => {
    const [state, dispatch] = useReducer(reducer, initialForm)

    const onChange = (e) => {
        dispatch(e.target)
    }
    
    return [state, onChange]
}

export default useInfo