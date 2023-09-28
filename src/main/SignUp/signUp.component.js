import {Button, Form, InputGroup, Modal} from "react-bootstrap";
import './signUp.css'
import {useState} from "react";


const SignUp= ({isOpen,closeModal}) =>{

  const[userNmError,setUserNmError] = useState(false);
  const[userIdError,setUserIdError] = useState(false);
  const nmValidation= (event) =>{
      const regexp = /[ㄱ-ㅎ|가-힣]+$/;
      if(!regexp.test(event.target.value) === true){
          setUserNmError(true)
      }else {
          setUserNmError(false);
      }
  }

  const idValidation = (event) =>{
      const regexp = /^[a-zA-Z]{1}[a-zA-Z0-9_]{4,11}$/;
      if(!regexp.test(event.target.value) === true){
          setUserIdError(true)
      }else {
          setUserIdError(false);
      }
  }

    const fetchModelData = () => {
        fetch('http://localhost:8080/member/memberlist')
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                console.log(JSON.stringify(myJson));
            });
    };




    return (
        <Modal
            show={isOpen}
            onHide={closeModal}
            backdrop="static"
            keyboard={false}
        >
        <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
    <Modal.Body>
        <div className='signUpContent'>
            <div className='area'>
        <div className='idArea'>
            <InputGroup className='inputId'>
                <Form.Control className='inputIdContents'
                              id='inputIdContents'
                              onChange={nmValidation}
                              placeholder="성함을 입력해 주세요."
                              aria-describedby='basic-addon2'
                              autoComplete='off'
                />
            </InputGroup>
            {userNmError && <div className="invalNm-input">*한글이 아니거나 유효한 값이 아닙니다</div>}
        </div>
            </div>
            <div className='area'>
            <div className='idArea'>
                <InputGroup className='inputId'>
                    <Form.Control className='inputIdContents'
                                  id='inputIdContents'
                                  onChange={idValidation}
                                  placeholder="Recipient's email"
                                  aria-describedby='basic-addon2'
                                  autoComplete='off'
                    />
                    <InputGroup.Text id="basic-addon2">@kiosk.co.kr</InputGroup.Text>
                </InputGroup>
                {userIdError && <div className="invalNm-input">*올바른 유형의 메일형식이 아닙니다</div>}
            </div>
            </div>
            <div className='area'>
            <div className='pwArea'>
                <InputGroup className='inputPw' >
                    <Form.Control className='inputPassWordContents'
                                  id='inputPassWordContents'
                                  placeholder="password"
                                  aria-describedby="basic-addon2"
                                  type="password"
                    />
                </InputGroup>
            </div>
            </div>
        </div>
    </Modal.Body>
    <Modal.Footer>
        <Button variant="secondary" onClick={fetchModelData}>
            Close
        </Button>
        <Button variant="primary" onClick={closeModal}>Sign In</Button>
    </Modal.Footer>
        </Modal>
    );
}

export default SignUp;
