const c = console.log.bind(document);

import "./style.scss";

import { Formik, Field, Form, ErrorMessage, validateYupSchema } from "formik";
import * as Yup from "yup";

const validationSchemaObject = Yup.object({
    email: Yup.string().max(30, <span className="error2">Může obsahovat max. 30 znaků.</span>).required(<span className="error">Povinné pole</span>),
    password: Yup.string().max(50, <span className="error2">Může obsahovat max. 50 znaků.</span>).required(<span className="error">Povinné pole</span>),
    passwordAgain: Yup.string().max(50, <span className="error2">Může obsahovat max. 50 znaků.</span>).required(<span className="error">Povinné pole</span>),
    phone: Yup.string().max(20, <span className="error2">Může obsahovat max. 20 znaků.</span>).required(<span className="error">Povinné pole</span>),
})

/* const comparingValues = (values) => {
    if(values.password !== values.passwordAgain){
        c("ahoj")
    }
} */

const RegistrationForm = () => {
  return (
    <section id="registration-form">
      <Formik
      initialValues={{
          email: "",
          password: "",
          passwordAgain: "",
          phone: "",
      }}
      validationSchema={validationSchemaObject}
      onSubmit={data => c(data)}
      /* validate={comparingValues} */
      >
        <Form>
          <div className="form-part">
            <h2>Registrační údaje</h2>
            <div className="part">
              <label htmlFor="email">E-mail</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" className="pokus"/>
            </div>
            <div className="part">
              <label htmlFor="password">Heslo</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password"/>
            </div>
            <div className="part">
              <label htmlFor="passwordAgain">Heslo znovu</label>
              <Field name="passwordAgain" type="password" />
              <ErrorMessage name="passwordAgain"/>
            </div>
            <div className="part">
              <label htmlFor="phone">Telefon</label>
              <Field name="phone" type="text" />
              <ErrorMessage name="phone"/>
            </div>
          </div>

          <div className="form-part">
            <h2>Fakturační údaje</h2>
            <div className="part">
              <label htmlFor="yourName">Vaše jméno</label>
              <Field name="yourName" type="text" />
            </div>
            <div className="part">
              <label htmlFor="street">Ulice</label>
              <Field name="street" type="text" />
            </div>
            <div className="part">
              <label htmlFor="city">Město</label>
              <Field name="city" type="text" />
            </div>
            <div className="part">
              <label htmlFor="psc">PSČ</label>
              <Field name="psc" type="text" />
            </div>
          </div>

          <div className="form-part">
            <h2>Ostatní</h2>
            <div className="part">
              <label htmlFor="pickUpPlace">Preferované odběrné místo</label>
              <Field name="pickUpPlace" type="text" as="select">
                <option value=""></option>
                <option value="Praha">Praha</option>
                <option value="Brno">Brno</option>
                <option value="Ostrava">Ostrava</option>
                <option value="Ostrava">Olomouc</option>
                <option value="Ostrava">Plzeň</option>
              </Field>
            </div>
            <div className="part">
              <label htmlFor="newsletter">Odběr newsletteru:</label>
              <label className="newsletter-choice">
                <Field type="radio" name="picked" value="yes" />
                Ano
              </label>
              <label className="newsletter-choice">
                <Field type="radio" name="notPicked" value="no" />
                Ne
              </label>
            </div>
            <div className="part">
              <label htmlFor="note">Poznámka</label>
              <Field name="note" type="text" as="textarea" />
            </div>
          </div>

          <div className="form-part" id="gdpr">
            <div className="part">
              <label htmlFor="gdprCompliance">
                Souhlas se zpracováním osobních údajů
              </label>
              <Field name="gdprCompliance" type="checkbox" value="Souhlas" />
            </div>
          </div>

          <div className="form-part">
            <button type="submit">Odeslat</button>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default RegistrationForm;
