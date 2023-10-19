const c = console.log.bind(document)

import "./style.scss"
import { useState } from "react"

import EmailInput from "../EmailInput"

const OrderForm = () => {

    const [email, setEmail] = useState({
        value: "",
        valid: false,
    })

    const handleEmailChange = (newValue) => {
        setEmail({
            value: newValue,
            valid: newValue.includes("@"),
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        c(email)
    }

    return (
        <form onSubmit={handleSubmit}>
            <EmailInput email={email} createEmail={handleEmailChange}/>
            <button type="submit">Odeslat</button>
        </form>
    )

}

export default OrderForm