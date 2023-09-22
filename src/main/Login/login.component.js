import './login.css'
import {useNavigate} from "react-router-dom";
import {InputGroup} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {useState} from "react";
import SignUp from "../SignUp/signUp.component";


const LoginEdit = () => {

    const navigate = useNavigate(); //page 이동 변수
    const [idValue,setId] = useState(''); //id usState
    const [pwValue,setPw] = useState(''); //pw usState

    const saveUserId= (event) =>{
        setId(event.target.value);
    }

    const saveUserPw = (event) =>{
        setPw(event.target.value);
    }

    const loginValidation = () => {
        console.log('getID and Pw',idValue,pwValue); //메인 페이지 이동 전 value값 전달
        navigate('/kiosk'); //키오스크 메인 페이지 이동
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    return (
        <div className='loginPage'>
            <div className='loginHeader'>
                <h2>LOGIN</h2>
            </div>
            <div className='loginContents'>
                <div className='idArea'>
                    <InputGroup className='inputId'>
                        <Form.Control className='inputIdContents'
                            id='inputIdContents'
                            value={idValue}
                            onChange={saveUserId}
                            placeholder="Recipient's username"
                            aria-describedby='basic-addon2'
                            autoComplete='off'
                        />
                        <InputGroup.Text id="basic-addon2">@kiosk.co.kr</InputGroup.Text>
                    </InputGroup>
                </div>
                <div className='pwArea'>
                <InputGroup className='inputPw' >
                    <Form.Control className='inputPassWordContents'
                                  id='inputPassWordContents'
                                  value={pwValue}
                                  onChange={saveUserPw}
                                  placeholder="password"
                                  aria-describedby="basic-addon2"
                                  type="password"
                    />
                </InputGroup>
                </div>
                <div className='loginAsk'>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <button type="button" className="btn btn-secondary" onClick={openModal}>sign up</button>
                            </div>
                            <div className="col">
                                <button type="button" className="btn btn-primary" onClick={loginValidation}>login</button>
                            </div>
                        </div>
                </div>
                </div>
            </div>
            <SignUp isOpen={isModalOpen} closeModal={closeModal}/>
        </div>

    ) // return
} // LoginEditFunction()

export default LoginEdit;
