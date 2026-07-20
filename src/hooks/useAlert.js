import { useCallback, useState } from 'react'

const useAlert = () => {
    const [alert, setAlert] = useState({ show: false, text: '', type: 'danger' })

    const showAlert = useCallback(({ text, type = 'danger' }) => setAlert({
        show: true,
        text,
        type
    }), [])

    const hideAlert = useCallback(() => setAlert({
        show: false,
        text: '',
        type: 'danger'
    }), [])

    return { alert, showAlert, hideAlert }
}

export default useAlert
