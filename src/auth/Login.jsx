import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isAuth, setIsAuth] = useState(false)
    const [errMessage, setErrMessage] = useState('')

    // Проверяем, авторизован ли пользователь при загрузке компонента
    // useEffect(() => {
    //     const token = localStorage.getItem('authToken')
    //     if(token){
    //         setIsAuth(true)
    //     }
    // }, [])

    const handleLogin = (e) => {
        e.preventDefault()
        // Здесь должна быть логика аутентификации, например, отправка запроса на сервер
        // Для демонстрации, мы просто проверяем, не пустые ли поля
        if(userName && password) {
            // Здесь должна быть логика аутентификации
            // Например, отправка запроса на сервер и получение токена
            // localStorage.setItem('authToken', 'someToken')
            // setIsAuthenticated(true)
            setErrMessage('')
            setIsAuth(true)
        } else {
            setErrMessage('Пожалуйста, заполните оба поля')
        }
    }

    // if(isAuth){
    //     return(<>Вы зашли</>)
    // }

    return(
        <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <label>
            Username:
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
            </label>
            <br />
            <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <br />
            {errMessage && <p>{errMessage}</p>}
            <Link to="/main"><button type="submit">Login</button></Link>
        </form>
        </div>
    )
}

export default Login;