
const FormInput = ({setInput,name,label,placeholder,value}) => {

    const onChange  =   (x) =>  setInput(val => ({...val,[x.target.name]:x.target.value}))

  return (
    <>
        <label htmlFor={name}>{label}</label>
        <input  className={`input`}  name={name} id={name} value={value[name]} onChange={(e)=>onChange(e)} type="text" placeholder={placeholder}/>
    </>
  )
}

export default FormInput