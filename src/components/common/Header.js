import React, {useContext} from "react";
import styled from 'styled-components';
import Button from "../common/Button";
import {Link} from 'react-router-dom';
import "../../style/header.css"
import {useUserState, useUserDispatch} from "./LoginContext";

const HeaderWrapper = styled.div`
  height: 40px;
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px gray;
`;

const Header = () => {
    const { user } = useUserState();
    const dispatch = useUserDispatch();

     return (
        <>
            <HeaderWrapper>
                <div className="logo">Movie Record</div>
                <div className="right">
                    {user && user.userId ? (
                        <>
                            <Link to="/mypage">
                                <Button>마이페이지 </Button>
                            </Link>
                             <Link to="/logout">
                                <Button>로그아웃 </Button>
                            </Link>
                            </>
                        ) :
                        (<Link to="/login">
                            <Button>로그인 </Button>
                        </Link>)
                    }
                </div>
            </HeaderWrapper>
        </>
    );
};

export default Header;