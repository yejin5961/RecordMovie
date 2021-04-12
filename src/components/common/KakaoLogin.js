import React, { useState, useContext } from "react"
import styled from 'styled-components';
import KaKaoLogin from 'react-kakao-login';
import { useHistory } from 'react-router-dom';
import {UserProvider, useUserState, useUserDispatch} from "../common/LoginContext";

const KaKaoBtn = styled(KaKaoLogin)`
  background-color: transparent !important;
  background: url('data:image/png;base64,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') no-repeat 90%;
  width: 92px !important;
  height: 45px !important;
  //line-height: 40px !important;
  //color: #783c00;
  //background-color: #FFEB00;
  //border: 1px solid transparent;
  //border-radius: 3px;
  //font-size: 16px;
  //font-weight: bold;
  //text-align: center;
  //cursor: pointer;
  //&:hover{
  //    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2)
  //}
`

const KakaoLogin = () => {
    const history = useHistory();
    const [state, setState] = useState({});
    const { userList } = useUserState();
    const dispatch = useUserDispatch();

    const responseKaKao = (res) => {
        setState({
            data: res
        });

        dispatch({
            type: "LOGIN",
            userId: res.profile.id,
        });

        history.push("/movie");
    }

    const responseFail = (err) => {
        alert(err);
    }

    return (
        <>
            <KaKaoBtn
                jsKey={'a288312907246895783ee5f69c73e979'}
                buttonText="KaKao"
                onSuccess={responseKaKao}
                onFailure={responseFail}
                getProfile={true}
            > </KaKaoBtn>
        </>
    )
}

export default KakaoLogin;