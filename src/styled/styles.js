import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";

// ?Cuando se quiere animar un styled component, pues se pone
// ?como si fuera un componente normal, es decir, se pone como
// ?styled(motion.div)``;

export const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

export const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 20%;
    display: flex;
    justify-content: center;
    aling-items: center;
  }
`;

export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 3rem;
`;

// ?Asi es como le agregamos estilos a un componente ya creado
export const SLink = styled(NavLink)`
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: linear-gradient(35deg, #494949, #313131);
  margin-right: 1rem;
  text-decoration: none;
  width: 6rem;
  height: 6rem;
  transform: scale(0.8);
  @media (max-width: 768px) {
    margin: 0 auto;
  }
  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

export const FormStyle = styled.form`
  position: relative;
  width: 100%;
  div {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.2rem;
    color: white;
    padding: 0.5rem 3rem;
    border-radius: 0.4rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export const DetailWrapper = styled(motion.div)`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5rem;
    margin-top: 1rem;
  }
  li {
    margin-top: 1rem;
    font-size: 1.2rem;
    line-height: 2.5rem;
    ul {
      margin-top: 2rem;
    }
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid #313131;
  margin-right: 2rem;
  font-weight: 600;
`;

export const Info = styled.div`
  margin-left: 10rem;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 3rem;
  font-weight: 400;
  font-family: "Water Brush", cursive;
`;

export const Nav = styled.div`
  transform: translateX(-30%);
  position: sticky;
  top: 0;
  padding: 2rem 0rem;
  display: flex;
  justify-content: start;
  align-items: center;
  svg {
    font-size: 2.5rem;
  }
`;
