import React from "react";
import styled from 'styled-components';
import Button from "../common/Button";
import {Link} from 'react-router-dom';
import "../../style/header.css"

const HeaderWrapper = styled.div`
  height: 40px;
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px gray;
`;

const Spacer = styled.div`
  height: 4rem;
`;

const Header = () => {
    return (
        <>
            <HeaderWrapper>
                <div className="logo">Movie Record</div>
                <div className="right">
                    <Link to="/login">
                        <Button>로그인</Button>
                    </Link>
                </div>
            </HeaderWrapper>
        <Spacer />
        </>
    );
};

export default Header;