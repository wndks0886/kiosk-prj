const LoginEdit = () => {

    const loginValidation = () => {
        alert('btn Click') //유효성 검사 후
        //관리자 //사용자 페이지로 넘어갈 때 여기서 분리 후 submit
    }

    return (
        <div className='loginPage'>
            <div className='loginheader'>
                <h2>로그인</h2>
                <div className='idArea'>
                    <input type="text" placeholder="ID 입력창"/>
                </div>
                <div className='pwArea'>
                    <input type="text" placeholder="PASSWORD 입력창"/>
                </div>
                <div className='loginAsk'>
                    <button onClick={loginValidation}>클릭</button>
                </div>
            </div>
        </div>

    ) // return
} // LoginEditFunction()

export default LoginEdit;
