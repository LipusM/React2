const c = console.log.bind(document)

import "./style.scss"

const EmailInput = ({email, createEmail}) => {
    
    return (
      <div className="validated-input">
        <input 
          type="email"
          value={email.value}
          onChange={(e) => createEmail(e.target.value)}
        />
        { 
          email.valid 
          ? null 
          : <div className="invalid-msg">Invalid email address</div>
        }
      </div>
    )
  }

  export default EmailInput