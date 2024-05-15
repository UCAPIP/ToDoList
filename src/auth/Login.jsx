// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";


// const Login = () => {
//     const [userName, setUserName] = useState('')
//     const [password, setPassword] = useState('')
//     const [isAuth, setIsAuth] = useState(false)
//     const [errMessage, setErrMessage] = useState('')

//     // Проверяем, авторизован ли пользователь при загрузке компонента
//     // useEffect(() => {
//     //     const token = localStorage.getItem('authToken')
//     //     if(token){
//     //         setIsAuth(true)
//     //     }
//     // }, [])

//     const handleLogin = (e) => {
//         e.preventDefault()
//         // Здесь должна быть логика аутентификации, например, отправка запроса на сервер
//         // Для демонстрации, мы просто проверяем, не пустые ли поля
//         if(userName && password) {
//             // Здесь должна быть логика аутентификации
//             // Например, отправка запроса на сервер и получение токена
//             // localStorage.setItem('authToken', 'someToken')
//             // setIsAuthenticated(true)
//             setErrMessage('')
//             setIsAuth(true)
//         } else {
//             setErrMessage('Пожалуйста, заполните оба поля')
//         }
//     }

//     if(isAuth){
//         return(<>Вы зашли</>)
//     }

//     return(
//         <div className="flex flex-col mx-auto my-5 py-5 w-80 gap-5 bg-white">
//         <h2 className="text-center font-semibold bg-white">Введите ваш логин и пароль</h2>
//         <form onSubmit={handleLogin} 
//         className="bg-white flex flex-col gap-3">
//             <label className="bg-white">
//             Логин:
//             <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} 
//             className="bg-white"/>
//             </label>
            
//             <label className="bg-white">
//             Пароль:
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} 
//             className="bg-white"/>
//             </label>
            
//             {errMessage && <p>{errMessage}</p>}
//             <Link to="/main"><button type="submit" className="bg-white">Войти</button></Link>
//         </form>
//         </div>
//     )
// }

// export default Login;

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/main">
        DelayDelo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Вход
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Электронная почта"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Запомнить меня"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Войти
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Забыли пароль?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="http://localhost:3000/signup" variant="body2">
                    {"Нет аккаунта? Регистрация"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
