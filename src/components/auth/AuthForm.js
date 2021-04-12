import React, {useState} from "react";
import styled from 'styled-components';
import KakaoLogin from "../common/KakaoLogin";
import {LoginContext} from "../common/LoginContext";

const AuthFormWrapper = styled.div`
  text-align: center;
`;

const Input = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid gray;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: #61dafb;
    border-bottom: 1px solid darkgrey;
  }
  &+& {
    margin-top: 1rem;
  }
`

const AuthForm = () => {
    return (
        <AuthFormWrapper>
            <h2>소셜 간편 로그인</h2>
            <KakaoLogin></KakaoLogin>

            {/*<h3>카 카 오 로 그 인</h3>*/}
            {/*<form>*/}
            {/*    <Input autoComplete="username" name="username" placeholder="카카오 이메일" />*/}
            {/*    <Input autoComplete="new-password" name="password" placeholder="비밀번호" type="password" />*/}
            {/*</form>*/}
            {/*<Link to={"/register"}>회원가입</Link>*/}
            {/*<Link to={"/"}>*/}
            {/*    <Button cyan fullWidth style={{marginTop: '1rem'}} onClick={KakaoLogin}>*/}
            {/*        로그인*/}
            {/*    </Button>*/}
            {/*</Link>*/}
        </AuthFormWrapper>
    );
};

export default AuthForm;