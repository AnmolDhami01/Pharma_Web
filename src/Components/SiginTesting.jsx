import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Grid, TextField } from "@mui/material";
import {
  Avatar,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import CreateUser from "./CreateUser";
// import axios from "./Config/axiosConfig";
import Joi from "joi-browser";
import Swal from "sweetalert2";
import axios from "axios";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SiginTesting({ history, match }) {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState(null);
  const [mode, setMode] = useState("CREATE");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formSchema = {
    password: Joi.string().min(4).max(30).required().label("Password"),
    email: Joi.string().email().min(7).max(30).required().label("Email"),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //validatino

    let result = Joi.validate(formData, formSchema, { abortEarly: false });
    if (result.error) {
      setErrors(result.error.details);
    } else {
      setErrors(null);

      axios
        .post("http://localhost:5000/api/auth/login", formData)
        .then((res) => {
          // const json = res.json();
          if (res.status === 200) {
            setOpen(false);
            Swal.fire("Logged In!", "Logged In!", "success");
            // localStorage.setItem("token", json.authtoken);
            navigate("../company", { replace: true });
          } else {
            Swal.fire("Opps!", "Something went wrong...", "error");
          }
        });
    }
  };
  return (
    <div>
      <Button
        sx={{ color: "white" }}
        onClick={handleClickOpen}
        startIcon={<PersonIcon />}
      >
        Sign In
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "#0c8540" }}>
                <PersonIcon />
              </Avatar>
              <Typography component="h1" variant="h5" fontFamily="Poppins">
                Login
              </Typography>
              <form onSubmit={handleSubmit} onChange={handleChange}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} lg={12}>
                        <TextField
                          autoComplete="email"
                          name="email"
                          fullWidth
                          label="Email Address"
                          autoFocus
                          value={formData?.email}
                          InputLabelProps={{
                            shrink: formData ? true : false,
                          }}
                          error={
                            errors &&
                            errors.find((er) => er.context.key === "email")
                          }
                          helperText={
                            errors &&
                            errors.map(
                              (err) =>
                                err.context.key === "email" && err.message
                            )
                          }
                        />
                      </Grid>

                      <Grid item xs={12} sm={12} lg={12}>
                        <TextField
                          fullWidth
                          id="password"
                          label="Password"
                          type="password"
                          name="password"
                          autoComplete={false}
                          InputLabelProps={{
                            shrink: formData ? true : false,
                          }}
                          error={
                            errors &&
                            errors.find((er) => er.context.key === "password")
                          }
                          value={formData?.password}
                          helperText={
                            errors &&
                            errors.map(
                              (err) =>
                                err.context.key === "password" && err.message
                            )
                          }
                        />
                      </Grid>
                    </Grid>

                    <Grid container justifyContent="flex-end">
                      <Grid item xs={12} sm={12} lg={12}>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2, backgroundColor: "#0c8540" }}
                        >
                          SIGN IN
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </form>
            </Box>
          </Container>
        </DialogContent>
      </Dialog>
    </div>
  );
}
