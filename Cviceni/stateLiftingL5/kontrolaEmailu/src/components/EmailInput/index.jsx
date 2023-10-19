const c = console.log.bind(document)

import "./style.scss"

const EmailInput = ({email, onChange}) => {
    
    return (
      <div className="validated-input">
        <input 
          type="email"
          value={email.value}
          onChange={(e) => onChange(e.target.value)}
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