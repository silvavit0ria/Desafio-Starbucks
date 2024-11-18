import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 2rem 5rem;
  img {
    width: 5vw;
  }
  nav {
    ul {
      display: flex;
      li {
        padding: 1rem;
        list-style-type: none;
        a {
          font-family: "Poppins", sans-serif;
          color: #333333;
          text-decoration: none;
          &:hover{
            color: #0F744B;
          }
        }
      }
    }
  }
`;
