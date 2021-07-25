import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Modal from '@material-ui/core/Modal';
import style from "../CSS/Components.module.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';


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

  const body = (
      
    <div style={modalStyle} className={classes.paper}>

        <div className={style.toggleBtnLoin}>
          <button onClick={()=>setToggleForm(false)} style={{ backgroundColor: (!toggleForm) ? "#F7C02C" : "white"}}>IRCTC Login</button>
          <button onClick={()=>setToggleForm(true)} style={{ backgroundColor: (toggleForm) ? "#F7C02C" : "white"}}>Guest User Login</button>
        </div>

      <div style={{ display: (!toggleForm) ? "block" : "none"}}>
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
        <hr/>
        <p>Not a member? <Link to="/signup">Signup</Link>  UpForgot <a href="https://www.irctc.co.in/">Password?</a> </p>
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