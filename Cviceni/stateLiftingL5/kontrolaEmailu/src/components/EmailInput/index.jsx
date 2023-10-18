const c = console.log.bind(document)

import "./style.scss"

import { useState } from "react"

const EmailInput = () => {
    const [email, setEmail] = useState('');
    
    return (
      <div className="validated-input">
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        { 
          email.includes('@') 
          ? null 
          : <div className="invalid-msg">Invalid email address</div>
        }
      </div>
    )
  }