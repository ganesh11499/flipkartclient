
import { Box, Button, Dialog, TextField, Typography, styled } from "@mui/material";
import React, { useState, useContext } from "react";
import { authenticate, authenticateLogin } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

//styles
const Component = styled(Box) `
height:70vh;
width:90vh
`
//left side styling
const Image = styled(Box)`
background:#2874f0  url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
height:78.9%;
width:28%;
padding:45px 35px;
& > p, & > h5 {
    color: #FFFFFF;
    font-weight: 600
}
`

//right side styling
const Wrapper = styled(Box) `
display:flex;
flex-direction:column;
padding:25px 35px;
flex:1;
& > div, & > button , & > p {
    margin-top:8px;
}
`
//LoginButton styles
const LoginButton = styled(Button)`
background:orange;
color:white;
height:45px;
border-radius:2px;
text-transform:none;
`

//RegisterButton styles
const RegisterButton = styled(Button)`
background:white;
color:orange;
height:45px;
border-radius:2px;
text-transform:none;
box-shadow:0 2px  4px 0 rgb(0 0 0/20%)
`

//text styles 
const Text = styled(Typography)`
font-size:12px;
color:#878787;
`

//createUser styles
const CreateUser = styled(Typography)`
color:#2874f0;
font-size:14px;
font-weight:600;
cursor:pointer;
text-align:center;
`
//render login and register
const accountInitialalues = {
    login: {
        view:'login',
        heading:"Log In",
        subHeading: "Login to access to your account"
    },
    singUp: {
        view:'signup',
        heading:"Looks New",
        subHeading: "New to flipkart, create acoount"
    }
}




const LoginDailogue = ({ open, setOpen }) => {
  const {setAccount} = useContext(DataContext)

 
  //render login and register  
  const [account, toggleAccount] =useState(accountInitialalues.login)

  const toggleSignUp = () => {
    toggleAccount(accountInitialalues.singUp)
  }

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialalues.login)
  };

//onchannge
const setInputValues = {
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:'', 
}
const [signUp , setSignUp] =useState(setInputValues);

const handleChange = (e) => {
  setSignUp({ ...signUp, [e.target.name]: e.target.value });
}
//Login Submit
const handleSubmit =async () => {
   const res = await authenticate(signUp)
   if(!res) return;
   handleClose();
   setAccount(signUp.firstname)
}

//login 
const loginInputValues = {
  username: '',
  password: ''
}
const [login, setLogin] = useState(loginInputValues)

const loginchange = (e) => {
  setLogin({...login, [e.target.name]: e.target.value})
}

const loginUser = async() => {
 const res =  await authenticateLogin(login);
 console.log(res)
 if(res.status === 200) {
  alert('login succfully');
  handleClose();
  setAccount(login.username);
 }else{
  alert('Check username and pasword')
 }
}


  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{sx: {maxWidth: 'unset'}}}>
      <Component>
        <Box style={{display:'flex', height:'100%'}}>
          <Image>
             <Typography variant="h5">{account.heading}</Typography>
             <Typography style={{marginTop:20}} cursor="pointer">{account.subHeading}</Typography>
          </Image>
          {
            account.view === 'login' ?
          <Wrapper>
            <TextField variant="standard" name="username" onChange={loginchange} label="Enter username" />
            <TextField variant="standard" password='password' onChange={loginchange} label="Enter Password" />
            <Text>By continue to agree Flipkart</Text>
            <LoginButton onClick={() =>loginUser()}>Login</LoginButton>
            <Typography style={{textAlign:'center'}}>OR</Typography>
            <RegisterButton>Request OTP</RegisterButton>
            <CreateUser onClick={() => toggleSignUp()}>New to flipkart, create acoount</CreateUser>
        </Wrapper>
          :
        <Wrapper>
          <TextField variant="standard" label="Enter Firstname" name='firstname' onChange={(e) => handleChange(e)}/>
          <TextField variant="standard" label="Enter Lastname" name='lastname' onChange={(e) => handleChange(e)}/>
          <TextField variant="standard" label="Enter Username" name='username' onChange={(e) => handleChange(e)}/>
          <TextField variant="standard" label="Enter Email"   name='email'  onChange={(e) => handleChange(e)}/>
          <TextField variant="standard" label="Enter Password" name='password'  onChange={(e) => handleChange(e)}/>
          <TextField variant="standard" label="Enter Phone" name='phone'  onChange={(e) => handleChange(e)}/>
          <LoginButton onClick={() => handleSubmit()}>Continue</LoginButton>
        </Wrapper>
        }
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDailogue;
