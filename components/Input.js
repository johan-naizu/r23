
const Input = ({setInput,name,label,placeholder,value}) => {

    const onChange  =   (x) =>  setInput(x.target.value)
    const val   =   value

  return (
    <>
        <label htmlFor={name}>{label}</label>
        <input  className={`input`}  name={name} id={name} value={value} onChange={(e)=>onChange(e)} type="text" placeholder={placeholder}/>
    </>
  )
}

export default Input