import React, { useRef, useState } from "react";
import { Link } from "react-scroll";
import "../headers/Header.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { Button, Grid, TextField, useMediaQuery } from "@mui/material";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "auto",
  bgcolor: "skyblue",
  border: "inherit",
  borderRadius: "15px",
  color: "whitesmoke",
  p: 4,
};

const Headers = () => {
  const [open, setOpen] =useState(false);
  const [text,setText] = useState("")
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const form = useRef()

  const sendEmail = ()=> { 
    emailjs.sendForm("service_g5hkegu","template_yx3somp",form.current,"AJFIa0g72ZHP76FZQ")
    .then((res)=>{
       for(let i=0;i<form.current.length;i++){
        //  console.log(form.current[i].value)
         form.current[i].value = ""
      }
      setText("Message sent successfully")
      // console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div className="header">
      <div className="header_left">
        <h1>
          Develop<span>er</span>
        </h1>
      </div>
      <div className="header_right">
        <Link to="about" smooth={true} duration={500}>
            <h4>About Me</h4>
          {/* <h4>About Me</h4> */}
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <h4>Skills</h4>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <h4>Projects</h4>
        </Link>
        <Link to="experience" smooth={true} duration={500}>
          <h4>Experience</h4>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <h4>Contact</h4>
        </Link>
        <h4 onClick={handleOpen} className="header_rightBtn">
          Join with Me
        </h4>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}> 
            <form  ref={form} onSubmit={handleSubmit(sendEmail)}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="First Name"
                    name="firstName"
                    placeholder="Enter first name"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    {...register("firstName", {required: "First Name is required"})}
                    error={Boolean(errors.firstName)}
                    helperText={errors.firstName?.message}
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="Last Name"
                    name="lastName"
                    placeholder="Enter last name"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    {...register("lastName", {required: "Last Name is required"})}
                    error={Boolean(errors.lastName)}
                    helperText={errors.lastName?.message}
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    type="email"
                    label="Email"
                    name="email"
                    placeholder="Enter email"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    {...register("email", {required: "Email is required"})}
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message}
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    type="number"
                    label="Phone No."
                    name="phoneNo"
                    placeholder="Enter Ph.no"
                    variant="outlined"
                    color="primary"
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    placeholder="Type your message here..."
                    color="primary"
                    variant="outlined"
                    fullWidth
                    {...register("message", {required: "Message is required"})}
                    error={Boolean(errors.message)}
                    helperText={errors.message?.message}
                  />
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  item
                >
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  item
                >
                <h4 style={{color:"green"}}>{text}</h4>
                </Grid>
              </Grid>
              </form>
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};

export default Headers;
