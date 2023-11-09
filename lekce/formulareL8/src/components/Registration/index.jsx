const c = console.log.bind(document);

import "./style.scss";
import { useForm } from "../../hooks/useForm";


const Registration = () => {

    const {formData, handleChange, handleSubmit} = useForm({
        firstName: "",
        lastName: "",
    }, (data) => c(data))


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstname">Jméno</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="lastname">Příjmení</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <button type="submit">Odeslat</button>
      </div>
    </form>
  );
};

export default Registration;
