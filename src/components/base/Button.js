import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const PureButton = ({ to, ...props }) => {
  return to ? <Link to={to} {...props} /> : <button {...props} />;
};

const Button = styled(PureButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  background-color: #fc7560;
  text-align: center;
  color: white;
  font-size: 14px;
  width: 100%;
  border: 0;
  outline: 0;
  margin-bottom: ${props =>
    props.marginBottom ? props.marginBottom : css`5px`};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : css``)};
  margin-right: ${props => (props.marginRight ? props.marginRight : css``)};
  margin-top: ${props => (props.marginTop ? props.marginTop : css``)};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-box-shadow: 0px 4px 8px 0px rgba(252, 117, 96, 0.3);
  -moz-box-shadow: 0px 4px 8px 0px rgba(252, 117, 96, 0.3);
  box-shadow: 0px 4px 8px 0px rgba(252, 117, 96, 0.3);
  &:hover {
    background-color: rgb(252, 117, 96, 0.8);
    -webkit-box-shadow: 0px 4px 8px 0px rgba(252, 117, 96, 0);
    -moz-box-shadow: 0px 4px 8px 0px rgba(252, 117, 96, 0);
    box-shadow: 0px 4px 8px 0px rgba(252, 117, 96, 0);
  }
  &:focus {
    background-color: rgb(252, 117, 96, 0.7);
  }
`;
export const Secondary = styled(Button)`
  background-color: transparent;
  border: 1px solid #fc7560;
  color: #fc7560;
  box-shadow: none;
  &:hover {
    background-color: rgb(252, 117, 96, 0.8);
    color: #fff;
  }
  &:focus {
    background-color: rgb(252, 117, 96, 0.7);
    color: #fff;
  }
`;

export default Button;
