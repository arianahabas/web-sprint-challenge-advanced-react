// write your custom hook here to control your checkout form
import { useState } from 'react'

export function useForm(initalForm) {
    const [values, setValues] = useState(initalForm)

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
      
      
      return[values ,handleChanges, ]
}