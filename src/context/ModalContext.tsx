import React, { useState } from 'react'
import { createContext } from 'react'

interface IModalContext {
    modal: boolean,
    open: () => void,
    close: () => void
}
// У Context есть два основных поля - провайдер, консьюмор
export const ModalContext = createContext<IModalContext>({
    modal: false,
    open: () => {},
    close: () => {}
})


export const ModalState = ({children}: {children: React.ReactNode}) => {
    const [modal, setModal] = useState(false)
    const open = () => setModal(true)
    const close = () => setModal(false)



    return (
        <ModalContext.Provider value={{ open, close, modal }} >
            { children }
        </ModalContext.Provider>
    )
}