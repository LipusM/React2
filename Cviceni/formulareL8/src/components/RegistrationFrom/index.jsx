const c = console.log.bind(document);

import "./style.scss";

import { Formik, Field, Form, ErrorMessage, validateYupSchema } from "formik";
import * as Yup from "yup";

const validationSchemaObject = Yup.object({
    email: Yup.string().max(30, <span className="error2">Může obsahovat max. 30 znaků.</span>).required(<span className="error">Povinné pole</span>),
    password: Yup.string().max(50, <span className="error2">Může obsahovat max. 50 znaků.</span>).required(<span className="error">Povinné pole</span>),
    passwordAgain: Yup.string().max(50, <span className="error2">Může obsahovat max. 50 znaků.</span>).required(<span className="error">Povinné pole</span>),
    phone: Yup.string().max(20, <span className="error2">Může obsahovat max. 20 znaků.</span>).required(<span className="error">Povinné pole</span>),
    yourName: Yup.string().max(40, <span className="error2">Může obsahovat max. 40 znaků.</span>),
    street: Yup.string().max(30, <span className="error2">Může obsahovat max. 30 znaků.</span>),
    city: Yup.string().max(20, <span className="error2">Může obsahovat max. 20 znaků.</span>),
    psc: Yup.string().max(6, <span className="error2">Může obsahovat max. 6 znaků.</span>),
    note: Yup.string().max(100, <span className="error2">Může obsahovat max. 100 znaků.</span>),
})

const RegistrationForm = () => {

  return (
    <section id="registration-form">
      <Formik
      initialValues={{
          email: "",
          password: "",
          passwordAgain: "",
          phone: "",
          yourName: "",
          street: "",
          city: "",
          psc: "",
          pickUpPlace: "",
          newsLetter: "",
          note: "",
          gdprCompliance: false,
      }}
      validationSchema={validationSchemaObject}
      onSubmit={data => c(data)}
      >
       {({ values, handleChange })  => (<Form>
          <div className="form-part">
            <h2>Registrační údaje</h2>
            <div className="part">
              <label htmlFor="email">E-mail</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email"/>
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
              <ErrorMessage name="yourName"/>
            </div>
            <div className="part">
              <label htmlFor="street">Ulice</label>
              <Field name="street" type="text" />
              <ErrorMessage name="street"/>
            </div>
            <div className="part">
              <label htmlFor="city">Město</label>
              <Field name="city" type="text" />
              <ErrorMessage name="city"/>
            </div>
            <div className="part">
              <label htmlFor="psc">PSČ</label>
              <Field name="psc" type="text" />
              <ErrorMessage name="psc"/>
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
                <Field type="radio" name="newsLetter" value="yesNewsLetter" />
                Ano
              </label>
              <label className="newsletter-choice">
                <Field type="radio" name="newsLetter" value="noNewsLetter" />
                Ne
              </label>
            </div>
            <div className="part">
              <label htmlFor="note">Poznámka</label>
              <Field name="note" type="text" as="textarea" />
              <ErrorMessage name="note"/>
            </div>
          </div>

          <div className="form-part" id="gdpr">
            <div className="part">
              <label htmlFor="gdprCompliance">
                Souhlas se zpracováním osobních údajů
              </label>
              <Field name="gdprCompliance" type="checkbox" value="Souhlas" checked={values.gdprCompliance} onChange={handleChange}/>
            </div>
          </div>

          <div className="form-part">
            <button disabled={!values.gdprCompliance} type="submit">Odeslat</button>
          </div>
        </Form>
          )}
      </Formik>
    </section>
  );
};

export default RegistrationForm;
