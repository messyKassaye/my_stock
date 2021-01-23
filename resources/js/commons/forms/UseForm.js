const { useState } = require("react")

const UseForm = (initialValue)=>{
    const [inputs,setInputs] = useState(initialValue)

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }

    const handleSubmit = (event) => {
        console.log(inputs)
      }

      return {
        handleSubmit,
        handleInputChange,
        inputs
        };
}

export default UseForm