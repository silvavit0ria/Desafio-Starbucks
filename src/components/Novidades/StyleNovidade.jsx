import styled from "styled-components";

export const NovidadeStyled = styled.section`
    display: flex;
    margin: 5rem;
img{
    width: 20vw;
    margin: 0 8rem;
}
.info-novidade{
    width: 30vw;
    
    h2{
        font-size: 3rem;
        font-family: "Poppins", serif;
        font-weight: 400;
        color: #1E3932;

    }
    .info-p{
        font-weight: 800;
        font-family: "Inter", serif;
        color: #1E3932;

    }
    p{
        font-family: "Poppins", serif;
        font-size: 1.2rem;
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
