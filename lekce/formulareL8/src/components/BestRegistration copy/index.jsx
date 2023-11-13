const c = console.log.bind(document);

import "./style.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchemaObject = Yup.object({
  firstName: Yup.string().min(2, "Musí obsahovat alespoň 2 znaky.").required("Povinné pole."),
  lastName: Yup.string().max(15, "Maximálně může obsahovat 15 znaků.").required("Povinné pole."),
  email: Yup.string().email("Špatný formát e-mailu."),
});

const BestRegistration = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: validationSchemaObject,
    onSubmit: (data) => {
      c(data);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
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
      </div>

      <div>
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
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
      </div>

      <button type="submit">Odeslat</button>
    </form>
  );
};

export default BestRegistration;
