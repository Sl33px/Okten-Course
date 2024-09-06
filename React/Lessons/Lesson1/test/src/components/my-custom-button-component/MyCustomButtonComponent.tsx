import React, {FC, useState} from 'react';
import './my-custom-button-component.css'

interface IProps {
    nameOfClass: string
    children: React.ReactNode
    label: string
}

export const MyCustomButtonComponent: FC<IProps> = ({nameOfClass, children, label}) => {
    // const [counter, setCounter] = useState(0);
    const [counter, setCounter] = useState(0)
    const someClickHandler = () => {
        setCounter(counter + 1)
    }

    return(
        <div>
            <span>{label}</span>
            <button className={nameOfClass} onClick={() => someClickHandler()}>{children} {counter}</button>
        </div>
    )
}