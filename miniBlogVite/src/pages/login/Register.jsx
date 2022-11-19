import { Logins } from './styledLogin'
import { useEffect, useState } from 'react'
import { useAuthentication } from '../../hook/useAuthentication'


const Register = () => {

  const { createUser , error:authError, loading} = useAuthentication()

  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    setError('')

    const user = {
      displayName,
      email,
      password
    }

    if(password !== confirmPassword){
      setError('As senhas precisam ser iguais!')
      return
    }
      const res =  createUser(user)
    } 
  

  useEffect(()=>{

    authError && setError(authError)
    
  },[authError])

  return (
    <Logins>
    <h2>Cadastre-se</h2>
    <form onSubmit={handleSubmit}>

        <label>
          <input 
            type='text' 
            placeholder="Digite seu Nome" 
            required 
            name="name" 
            value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
        </label>

        <label>
          <input 
            type='email' 
            placeholder="Digite seu E-mail" 
            required 
            name="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}/>
        </label>

        <label>
        <input
            type="password"
            name="password"
            required
            placeholder="Insira a senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>

        <label>
          <input 
            type='password'
            placeholder="Confirme sua Senha"
            required name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />
        </label>

      {!loading && <input type='submit' value='Cadastrar' className="button"/>}
      {loading && <input type='submit' value='Aguarde...' disabled className="button" id="disable"/>}
      
      
        {error && <p className='error'>{error}</p>}
     

    </form>
  </Logins>
  )
  }


export default Register