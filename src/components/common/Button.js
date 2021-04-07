import React from "react";
import styled, {css} from 'styled-components';

const Button = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  background: black;
  
  &:hover {
    background: lightgray;
  }
  
  ${props=>
    props.fullWidth && css`
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          width: 100%;
          font-size: 1.125rem;
          `}

          ${props=>
                  props.cyan && css`
                  background: cadetblue;
                  &:hover {
                    background: #61dafb;
                  }
          `}
`;

const CommonButton = props => <Button {...props} />;

export default CommonButton;