const c = console.log.bind(document)

import "./style.scss"

const EmailInput = ({email, setEmail}) => {
    
    return (
      <div className="validated-input">
        <input 
          type="email"
          value={email.value}
          onChange={(e) => setEmail(e.target.value)}/>
        { 
          email.valid 
          ? null 
          : <div className="invalid-msg">Invalid email address</div>
        }
      </div>
    )
  }

  export default EmailInput