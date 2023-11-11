const c = console.log.bind(document);

import "./style.scss";
import { useFormik } from "formik";

const BetterRegistration = () => {

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    onSubmit: data => {c(data)}
  })


  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstname">Jméno</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formik.values.firstName}
        onChange={formik.handleChange}
      />

      <div></div>

      <label htmlFor="lastname">Příjmení</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formik.values.lastName}
        onChange={formik.handleChange}
      />

      <button type="submit">Odeslat</button>
    </form>
  )
}

export default BetterRegistration;
