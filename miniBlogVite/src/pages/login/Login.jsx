import { Link } from "react-router-dom"
import { Logins } from "./styledLogin"

const Login = () => {
  return (
    <Logins>
      <h2>Fazer Login</h2>
      <form>
        <label>
          <input type='email' placeholder="Digite seu E-mail" required name="email"/>
          <input type='password' placeholder="Digite sua Senha" required name="password" />
        </label>
        <input type='submit' value='Entrar' className="button"/>
      </form>
      <h3>Ainda não possui cadastro?</h3>
   
      <Link to='/register'> <input type='submit' value='Cadastre-se' className="button"/></Link>
    </Logins>
  )
}

export default Login