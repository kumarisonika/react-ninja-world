import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Checkbox, FormControlLabel } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { getLoginResponse } from '../../apis/loginAPI';




const theme = createTheme();

export default function Login() {
  const [UserNameValue, setUserNameValue] = React.useState<string>()
  const [PasswordValue, setPasswordValue] = React.useState<string>()
  const [ResponseData, setResponseData]= React.useState<any>()

  const {
    mutate: loginResponse,
    isLoading,
    error,
  } = useMutation(getLoginResponse, {
    onSuccess: (data: any) => {
      // setResponseData(data);
      alert('Success')
    },
    onError: () => {
      alert('There was an errorrrrrr')
    },
    onSettled: () => {},
  });
  
  const handleFormSubmit=()=>{
    const NewObj={
      "username":UserNameValue,
      "password":PasswordValue
    }
    console.log(NewObj,"jhdgsdgf")
    loginResponse({
      "username":UserNameValue,
      "password":PasswordValue
    })
  }
  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth:400,
          }}
        >
          <Avatar src="naruto_avatar.jpg" sx={{ width: 100, height: 100 }} />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e)=>
                setUserNameValue(e.target.value)
             }
             value={UserNameValue}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>
                setPasswordValue(e.target.value)
             }
             value={PasswordValue}
            />
            <FormControlLabel
              control={<Checkbox value="remember"  />}
              label="Remember me"
            />
            <Button  fullWidth variant="contained" onClick={handleFormSubmit} sx={{ mt: 3, mb: 2 }}>
                  Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}