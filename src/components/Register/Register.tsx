import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const theme = createTheme();

export default function Register(props: any){

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
  email: data.get('email'),
  password: data.get('password'),
  });
  };


  const [inputValues, setInputValue] = useState({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  });

  const [validation, setValidation] = useState({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  });

  //handle submit updates
  function handleChange(event:any) {
  console.log('THIS IS HANDLE')
  const { name, value } = event.target;
  setInputValue({ ...inputValues, [name]: value });
  }

  const checkValidation = () => {
  let errors = validation;

  //first Name validation
  if (!inputValues.username.trim()) {
  errors.username = "Username is required";
  } else {
  errors.username = "";
  }

  // email validation
  const emailCond =
  "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
  if (!inputValues.email.trim()) {
  errors.email = "Email is required";
  } else if (!inputValues.email.match(emailCond)) {
  errors.email = "Please ingress a valid email address";
  } else {
  errors.email = "";
  }

  //password validation
  const cond1 = "/^(?=.*[a-z]).{6,20}$/";
  const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
  const cond3 = "/^(?=.*[0-9]).{6,20}$/";
  const password = inputValues.password;
  if (!password) {
  errors.password = "password is required";
  } else if (password.length < 6) { errors.password="Password must be longer than 6 characters" ; } else if
    (password.length>= 20) {
    errors.password = "Password must shorter than 20 characters";
    } else if (!password.match(cond1)) {
    errors.password = "Password must contain at least one lowercase";
    } else if (!password.match(cond2)) {
    errors.password = "Password must contain at least one capital letter";
    } else if (!password.match(cond3)) {
    errors.password = "Password must contain at least a number";
    } else {
    errors.password = "";
    }

    //matchPassword validation
    if (!inputValues.confirmPassword) {
    errors.confirmPassword = "Password confirmation is required";
    } else if (inputValues.confirmPassword !== inputValues.password) {
    errors.confirmPassword = "Password does not match confirmation password";
    } else {
    errors.password = "";
    }

    setValidation(errors);
    };

    useEffect(() => {
    checkValidation();
    }, [inputValues]);

    /* const handleSubmit = (e:any) => {
    e.preventDefault();
    }; */

    //Snackbar
    
  
      const [openSnackbar, setOpenSnackbar] = React.useState(false);
    
      const handleSnackbarClick = () => {
        setOpenSnackbar(true);
      };
    
    
      const handleSnackbarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenSnackbar(false);
      }

    return(
    <Container>
      <Stack>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
              <Avatar src="naruto_avatar.jpg" sx={{ width: 150, height: 150 }} />
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField autoComplete="given-name" name="username" required fullWidth id="username"
                      label="Username" autoFocus onChange={(e)=> handleChange(e)}
                      value={inputValues.username}
                      />

                  </Grid>

                  <Grid item xs={12}>
                    <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email"
                      onChange={(e)=> handleChange(e)}
                      value={inputValues.email}
                      />

                  </Grid>
                  <Grid item xs={12}>
                    <TextField required fullWidth name="password" label="Password" type="password" id="password"
                      autoComplete="new-password" onChange={(e)=> handleChange(e)}
                      value={inputValues.password}

                      />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField required fullWidth id="confirmPassword" label="Confirm Password" name="confirmPassword"
                      autoComplete="family-name" onChange={(e)=> handleChange(e)}
                      value={inputValues.confirmPassword}

                      />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Remember me"
                    />
                  </Grid>
                  {/* <Grid>
                    <Stack spacing={2} sx={{ width: '100%' }}>                      
                      <Alert severity="info">This is an information message!</Alert>
                    </Stack>
                  </Grid> */}
                </Grid>

                <Button type="submit" fullWidth variant="contained" onClick={handleSnackbarClick} sx={{ mt: 3, mb: 2 }}>
                  Sign Up
                </Button>
                <Snackbar open={openSnackbar} autoHideDuration={5000} onClose={handleSnackbarClose}>
                        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
                          You have been registered!
                        </Alert>
                </Snackbar>
                <Grid container justifyContent="flex-end">
                  <Grid item>

                    <Link href="/login" variant="body2">
                    Already have an account? Sign in
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
