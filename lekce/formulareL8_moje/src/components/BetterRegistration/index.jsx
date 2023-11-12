const c = console.log.bind(document);

import "./style.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

/* const validateForm = (values) => {
  const errors = {}

  if(!values.firstName){
    errors.firstName = "Povinné pole"
  } else if (values.firstName.length > 15){
    errors.firstName = "Může obsahovat max. 15 znaků."
  }

  if(!values.lastName){
    errors.lastName = "Povinné pole"
  } else if (values.firstName.length > 15){
    errors.lastName = "Může obsahovat max. 15 znaků."
  }

  return errors
} */

const validationSchemaObject = Yup.object({
  firstName: Yup.string().min(2, "Musí obsahovat alespoň 2 znaky.").required("Povinné pole."),
  lastName: Yup.string().max(15, "Maximálně může obsahovat 15 znaků.").required("Povinné pole."),
  email: Yup.string().email("Špatný formát e-mailu."),
});

/* const BetterRegistration = () => {

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validate: validateForm,
    onSubmit: data => {c(data)}
  }) */

  const BetterRegistration = () => {

    const formik = useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
      },
      validate: validationSchemaObject,
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
        onBlur={formik.handleBlur}
      />
      {formik.touched.firstName && formik.errors.firstName && <p>{formik.errors.firstName}</p>}
      <div></div>

      <label htmlFor="lastname">Příjmení</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.lastName && formik.errors.lastName && <p>{formik.errors.lastName}</p>}

      <button type="submit">Odeslat</button>
    </form>
  )
}

export default BetterRegistration;
