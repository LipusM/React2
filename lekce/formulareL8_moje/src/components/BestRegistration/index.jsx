const c = console.log.bind(document);

import "./style.scss";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from 'formik';

const validationSchemaObject = Yup.object({
  firstName: Yup.string().min(2, "Musí obsahovat alespoň 2 znaky.").required("Povinné pole."),
  lastName: Yup.string().max(15, "Maximálně může obsahovat 15 znaků.").required("Povinné pole."),
  email: Yup.string().email("Špatný formát e-mailu."),
});

const BestRegistration = () => {

  return (
    <Formik initialValues={{
      firstName: "",
      lastName: "",
      email: "",
    }}
    validationSchema={validationSchemaObject}
    onSubmit={data => c(data)}
    >
      <Form>
          <div>
            <label htmlFor="firstName">Jméno</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName"/>
          </div>

          <div>
            <label htmlFor="lastName">Příjmení</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName"/>
          </div>

          <div>
            <label htmlFor="email">E-mail</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email"/>
          </div>

          <button type="submit">Odeslat</button>
      </Form>
    </Formik>
  )
};

export default BestRegistration;
