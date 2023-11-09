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


{/* <form onSubmit={formik.handleSubmit}>
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
</form> */}