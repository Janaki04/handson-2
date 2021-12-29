import React, {useState}  from 'react'
import './style.css'

 function Form() {
  const [inputs, setInputs] = useState({
    name:"",
    department:"",
    rating:""
  });

  const [output, setOutputs] = useState([])

  const handleChange = (event) => {
     setInputs({...inputs,[event.target.name]:event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setOutputs([...output,{...inputs,id:output.length}])
  }
return (
<div>
    <h1 className='heading'>EMPLOYEE FEEDBACK FORM</h1>
    <form onSubmit={handleSubmit}>
      <label className='text1'>Name:
      <input required className='box1' type="text" name="name" value={inputs.name} onChange={handleChange}/>
      </label>
      <label  className='text2'> Department:
        <input required className='box1' type="text" name="department" value={inputs.department} onChange={handleChange}/>
        </label>
        <label className='text3'>Rating:
      <input required className='box1' type="number" name="rating" value={inputs.rating} onChange={handleChange}/>
      </label>
        <input  className='box2' type="submit" />
    </form>
    <div className='box4'>
    { output.map( item =>(
    <h5 className='text4' key={item.id}> Name : {item.name} ; Department : {item.department} ; Rating : {item.rating} </h5>
      ))}
    </div>
    </div>
  )
}
export default Form
