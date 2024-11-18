import styled from "styled-components";
export const StyleSobre = styled.section`
background-color: #1e3932;
display: flex;

img{
    width: 30vw;
    height: 60vh;
    margin: 5rem;
    
}
.info-novidade{
    height: 55vh;
    width: 30vw;
    margin: 7rem;
    h2{
        font-size: 3rem;
        font-family: "Poppins", serif;
        font-weight: 400;
        color: white;

    }
    .info-p{
        font-weight: 800;
        font-family: "Inter", serif;
        color: white;

    }
    p{
        font-family: "Poppins", serif;
        font-size: 1.2rem;
        color: white;
    }
    button{
        background-color: #037143;
        padding: 0.8rem 3rem ;
        border: 0;
        border-radius: 30px;
        margin: 2rem 0;
        font-family: "Inter", serif;
        color: white;
        font-weight: 700;
        cursor: pointer;
        &:hover{
            background-color: #075534;
        }

    }
}

`
