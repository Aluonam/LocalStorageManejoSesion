import React, {useState} from 'react'

const InputManejoSesion = () => {

    const [userData, setUserData] = useState({})

    const handleSaveData = ()=>{
        localStorage.setItem("datos sesion", JSON.stringify(userData))
        setUserData("")
    }

    const handleRecoverData = ()=>{
        const localData = localStorage.getItem("datos sesion")
        setUserData(JSON.parse(localData))
    }

    const handleExit = ()=>{
        localStorage.removeItem("datos sesion")
    }



  return (
    <>
    <input type='text' onChange={(e)=>{setUserData({...userData,username:e.target.value})}} value={userData.username ?? ""}></input>

    <button onClick={()=>{handleSaveData()}}>Iniciar sesión</button>
    <button onClick={()=>{handleRecoverData()}}>Recuperar sesión</button>
    <button onClick={()=>{handleExit()}}>Salir de sesión</button>
    </>
  )
}

export default InputManejoSesion