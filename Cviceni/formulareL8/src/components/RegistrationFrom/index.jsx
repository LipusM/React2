const c = console.log.bind(document);

import "./style.scss";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  return (
    <section id="registration-form">
      <Formik>
        <Form>
          <div className="form-part">
              <h2>Registrační údaje</h2>
            <div>
              <label htmlFor="email">E-mail</label>
              <Field name="email" type="email" />
            </div>
            <div>
              <label htmlFor="password">Heslo</label>
              <Field name="password" type="password" />
            </div>
            <div>
              <label htmlFor="passwordAgain">Heslo znovu</label>
              <Field name="passwordAgain" type="password" />
            </div>
            <div>
              <label htmlFor="phone">Telefon</label>
              <Field name="phone" type="text" />
            </div>
          </div>

          <div className="form-part">
              <h2>Fakturační údaje</h2>
            <div>
              <label htmlFor="yourName">Vaše jméno</label>
              <Field name="yourName" type="text" />
            </div>
            <div>
              <label htmlFor="street">Ulice</label>
              <Field name="street" type="text" />
            </div>
            <div>
              <label htmlFor="city">Město</label>
              <Field name="city" type="text" />
            </div>
            <div>
              <label htmlFor="psc">PSČ</label>
              <Field name="psc" type="text" />
            </div>
          </div>

          <div className="form-part">
              <h2>Ostatní</h2>
            <div>
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
            <div>
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
            <div>
              <label htmlFor="note">Poznámka</label>
              <Field name="note" type="text" as="textarea" />
            </div>
          </div>

          <div className="form-part" id="gdpr">
            <div>
              <label htmlFor="gdprCompliance">Souhlas se zpracováním osobních údajů</label>
              <Field name="gdprCompliance" type="checkbox" value="Souhlas"/>
            </div>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default RegistrationForm;
