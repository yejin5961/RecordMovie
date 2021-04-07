import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

/*
* 회원가입 / 로그인 페이지 레이아웃
 */
const AuthTemplateWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px gray;
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`;

const AuthTemplate = ({children}) => {
    return (
        <AuthTemplateWrapper>
            <WhiteBox>
                <div className="logo-area">
                    <Link to="/">REACTERS</Link>
                </div>
                {children}
            </WhiteBox>
        </AuthTemplateWrapper>
    );
};

export default AuthTemplate;
