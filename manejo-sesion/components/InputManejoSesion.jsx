import React, {useState} from 'react'

const InputManejoSesion = () => {

    const [userData, setUserData] = useState({})

    const handleSaveData = ()=>{
        localStorage.setItem("datos sesion", JSON.stringify(userData))
    }


  return (
    <>
    <input type='text' onChange={(e)=>{setUserData({...userData,username:e.target.value})}}></input>

    <button onClick={()=>{handleSaveData()}}>Iniciar sesión</button>
    </>
  )
}

export default InputManejoSesion