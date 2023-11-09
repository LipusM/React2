const c = console.log.bind(document);

import "./style.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const validateForm = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Povinné pole";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Může obsahovat max. 15 znaků";
  }

  if (!values.lastName) {
    errors.lastName = "Povinné pole";
  } else if (values.lastName.length > 15) {
    errors.lastName = "Může obsahovat max. 15 znaků";
  }

  return errors;
};

const validationSchemaObject = Yup.object({
  firstName: Yup.string().min(2, "Musí obsahovat alespoň 2 znaky.").required("Povinné pole"),
  lastName: Yup.string().max(15, "Maximálně může obsahovat 15 znaků").required("Povinné pole"),
  email: Yup.string().email("Špatný formát emailu"),
});

const BestRegistration = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        city: "",
      }}
      validationSchema={validationSchemaObject}
      onSubmit={(data) => c(data)}
    >
      <Form>
        <div>
          <label htmlFor="firstName">Jméno</label>
          <Field name="firstName" type="text" as="textarea" />
          <ErrorMessage name="firstName" />
        </div>

        <div>
          <label htmlFor="lastName">Příjmení</label>
          <Field name="lastName" type="text" />
          <ErrorMessage name="lastName" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
        </div>

      <label htmlFor="city">Město</label>
        <Field name="city" as="select">
          <option value="Praha">Praha</option>
          <option value="Brno">Brno</option>
          <option value="Ostrava">Ostrava</option>
        </Field>

        <button type="submit">Odeslat</button>
      </Form>
    </Formik>
  );
};

export default BestRegistration;
