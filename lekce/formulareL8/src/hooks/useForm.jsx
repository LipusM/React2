const c = console.log.bind(document)

import { useState } from "react";

const useForm = (initialValue = {}, onSubmit) => {
  const [formData, setFormData] = useState(initialValue)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    onSubmit(formData)
  }

  return {formData, handleChange, handleSubmit}
}

export default useForm;
