import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import './Login.scss';

function LoginInput(props) {
  const loginInputChange = (e) => {
    if (props.name === 'text') {
      if (e.target.value.includes('@')) {
        props.validate(true);
      } else {
        props.validate(false);
      }
    } else {
      if (e.target.value.length >= 8) {
        props.validate(true);
      } else {
        props.validate(false);
      }
    }
  };

  return (
    <div className="login-input">
      <input
        type={props.name}
        placeholder={props.text}
        onChange={loginInputChange}
      />
    </div>
  );
}

function LoginButton(props) {
  return (
    <div className="login-button">
      <Link to="/list">
        <button type="button" disabled={!props.isValidate}>
          로그인
        </button>
      </Link>
    </div>
  );
}

function LoginForm() {
  const [isIdValidate, setIsIdValidate] = useState(false);
  const [isPwValidate, setIsPwValidate] = useState(false);

  return (
    <div className="login-form">
      <form>
        <LoginInput
          text="전화번호, 사용자 이름 또는 이메일"
          name="text"
          validate={setIsIdValidate}
        />
        <LoginInput
          text="비밀번호"
          name="password"
          validate={setIsPwValidate}
        />
        <LoginButton isValidate={isIdValidate && isPwValidate} />
      </form>
    </div>
  );
}

function ForgetPw() {
  return (
    <div className="forget-pw">
      <a>비밀번호를 잊으셨나요?</a>
    </div>
  );
}

function Login() {
  return (
    <div className="login">
      <div className="login__inner">
        <h1>WeBucks</h1>
        <LoginForm />
        <ForgetPw />
      </div>
    </div>
  );
}

export default Login;
