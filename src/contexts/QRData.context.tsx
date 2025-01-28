import React, { createContext, useState } from "react";

interface QRContextProps {
    urlInput: string
    setUrlInput: (value: string) => void
    urlValid: boolean
    setUrlValid: (value: boolean) => void
    urlError: boolean
    setUrlError: (value: boolean) => void
    color: string
    setColor: (value: string) => void
    bgColor: string
    setBgColor: (value: string) => void
}

const QRContext = createContext<QRContextProps>({
    urlInput: '',
    setUrlInput: () => { },
    urlValid: false,
    setUrlValid: () => { },
    urlError: false,
    setUrlError: () => { },
    color: '#000000',
    setColor: () => { },
    bgColor: '#ffffff',
    setBgColor: () => { },
})

const QRProviderWrapper: React.FC<React.PropsWithChildren<{}>> = (props) => {
    const [urlInput, setUrlInput] = useState('')
    const [urlValid, setUrlValid] = useState(false)
    const [urlError, setUrlError] = useState(false)
    const [color, setColor] = useState('#00ff00')
    const [bgColor, setBgColor] = useState('#ffffff00')

    return (
        <QRContext.Provider value={{ urlInput, setUrlInput, urlValid, setUrlValid, urlError, setUrlError, color, setColor, bgColor, setBgColor }}>
            {props.children}
        </QRContext.Provider>
    )
}

export { QRContext, QRProviderWrapper }