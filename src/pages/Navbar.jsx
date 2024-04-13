import "./style.css";
import styled from "styled-components";
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <Main>
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/product">PRODUCT</Link>
            <Link to="/login">LOGIN</Link>
        </Main>
    )
}

export default Navbar;

const Main = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0px;
  margin-bottom: 30px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: #00796B;
`