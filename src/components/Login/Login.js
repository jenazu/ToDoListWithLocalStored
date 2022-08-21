import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

export default function Login() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/app");
  }

  return (
    <Contaner>
      <Wrapper>
        <form className="form">
          <div className="field">
            <label>Email Address</label>
            <input id="email" name="email" type="email" />
          </div>
          <div className="field">
            <label>Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button onClick={handleClick} className="submit-btn">
            Login
          </button>
        </form>
      </Wrapper>
    </Contaner>
  );
}

const Contaner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: lightcyan;
  height: 100vh;
`;
const Wrapper = styled.div`
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 150px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;

  .form {
    width: 300px;
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(35px);
    background-color: rgba(255, 255, 255, 0.8);
    height: 150px;
    justify-content: center;
    border-radius: 20px;
  }
  .field {
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
  }
  .submit-btn {
    align-self: flex-end;
    width: 80px;
  }
`;
