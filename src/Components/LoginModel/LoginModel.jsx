import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Modal from '@material-ui/core/Modal';
import style from "../CSS/Components.module.css";
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Redux/LogIn/action';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const LoginModel = ({open,handleClose,handleOpen }) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [toggleForm, setToggleForm] = useState(false)
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("")
   const dispatch = useDispatch()
   const isAuth = useSelector(state=>state.login.isAuth)
   const isError= useSelector(state=>state.login.isError)
   const error =useSelector(state=>state.login.error)
   const user = useSelector(state=>state.login.user)
   console.log(user)
   const history= useHistory()
  const handleLogin =async(e)=>
  {
    e.preventDefault();
    const payload ={
      email,
      password
    }
    dispatch(loginUser(payload))
     if(isAuth)
     {
       handleClose()
       alert("login sucess")
      // history.push("/")
     }
  }

  const body = (
      
    <div style={modalStyle} className={classes.paper}>

        <div className={style.toggleBtnLoin}>
          <button onClick={()=>setToggleForm(false)} style={{ backgroundColor: (!toggleForm) ? "#F7C02C" : "white"}}>IRCTC Login</button>
          <button onClick={()=>setToggleForm(true)} style={{ backgroundColor: (toggleForm) ? "#F7C02C" : "white"}}>Guest User Login</button>
        </div>

      <div style={{ display: (!toggleForm) ? "block" : "none"}}>
        <label>Email</label>
        <div className={style.inputContainer}>
            <input className={style.inputField} type="text" placeholder="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <PersonIcon className={style.icon}/>
        </div>

        <label>Password</label>
        <div className={style.inputContainer}>
            <input className={style.inputField} type="password" placeholder="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <VpnKeyIcon className={style.icon}/>
        </div>    
        <button className={style.loginBtn} disabled={email.length===0&&password.length===0} onClick={handleLogin} >Login</button>
        <hr/>
        <p onClick={handleClose}>Not a member? <Link to="/signup">Signup</Link>  UpForgot <a href="https://www.irctc.co.in/">Password?</a> </p>
      </div>

      <div style={{ display: (toggleForm) ? "block" : "none"}}>
        <label>Email</label>
        <div className={style.inputContainer}>
            <input className={style.inputField} type="text" placeholder="Username" name="usrname"/>
            <PersonIcon className={style.icon}/>
        </div>

        <label>Password</label>
        <div className={style.inputContainer}>
            <input className={style.inputField} type="text" placeholder="Username" name="usrname"/>
            <VpnKeyIcon className={style.icon}/>
        </div>    
        <button className={style.loginBtn}>Login</button>
      </div>


    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default  LoginModel;