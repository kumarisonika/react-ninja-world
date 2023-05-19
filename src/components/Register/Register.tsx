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
import { useState, useEffect } from 'react';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { getSignUpResponse } from '../../apis/registerAPI';
import { useMutation } from '@tanstack/react-query';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const theme = createTheme();

function Register(props: any){
  const [EmailValue, setEmailValue] = useState<string>()
  const [PasswordValue, setPasswordValue] = useState<string>()
  const [ConfirmPasswordValue, setConfirmPasswordValue] = useState<string>()

  const {
    mutate: signupResponse,
    isLoading,
    error,
  } = useMutation(getSignUpResponse, {
    onSuccess: (data: any) => {
      alert('User Registered!')
    },
    onError: () => {
      alert('Sorry! Could not register the user.')
    },
    onSettled: () => {},
  });

  const handleFormSubmit=()=>{
    signupResponse({
      username:EmailValue,
      password:PasswordValue
    })
  }
  
    return(
    <Container>
      <Stack>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box className='all-center-alignment'
            sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth:400,
          }}>
              <Avatar src="naruto_avatar.jpg" sx={{ width: 100, height: 100 }} />
              <Typography component="h1" variant="h5">
                Sign Up
              </Typography>
              <Box component="form" 
              //  onSubmit={handleSubmit}
               noValidate sx={{ mt: 2 }}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                   {/*  <TextField autoComplete="given-name" name="username" required fullWidth id="username"
                      label="Username" autoFocus 
                      onChange={(e)=> 
                      setUserNameValue(e.target.value)
                    }
                      value={UserNameValue}
                      /> */}

                  </Grid>

                  <Grid item xs={12}>
                    <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email"
                      onChange={(e)=>
                      setEmailValue(e.target.value)
                    }
                      value={EmailValue}
                      />

                  </Grid>
                  <Grid item xs={12}>
                    <TextField required fullWidth name="password" label="Password" type="password" id="password"
                      autoComplete="new-password" 
                      onChange={(e)=>
                         setPasswordValue(e.target.value)
                      }
                      value={PasswordValue}

                      />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField required fullWidth id="confirmPassword" label="Confirm Password" name="confirmPassword"
                      autoComplete="family-name" 
                      onChange={(e)=>
                        setConfirmPasswordValue(e.target.value)
                      }
                      value={ConfirmPasswordValue}

                      />
                  </Grid>
                  <Grid item xs={12}>
                   {/*  <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Remember me"
                    /> */}
                  </Grid>
                </Grid>

                <Button  fullWidth variant="contained" onClick={handleFormSubmit} sx={{ mt: 3, mb: 2 }}>
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>

                    <Link href="/login" variant="body2">
                    Already have an account? Log in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </Stack>
    </Container>
  )
}

export default Register;

