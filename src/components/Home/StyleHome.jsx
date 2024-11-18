import styled from "styled-components";

export const HomeStyled = styled.main`
display: flex;

.intro-home{
     margin: 1rem 5rem;
    display: flex;
    flex-direction: column;
}
h1{
    font-family: "Poppins", sans-serif;
    margin: 2rem 2rem 0;
    font-size: 4rem;
    font-weight: 300;
    line-height: 3rem;

}
.subtexto-home{
    font-family: "Poppins", sans-serif;
    font-size: 4rem;
    margin: 0 2rem;
         strong{
        color: #037143;
        font-size: 5rem;
    }
}
.descricao-home{
    width: 50vw;
    font-size: 1.3rem;
    margin: 0 2rem;
    font-family: "Poppins", sans-serif;

}
button{
    background-color:#0F744B;
    width: 10vw;
    padding: 0.8rem;
    margin: 0.5rem 2rem;
    border:0;
    border-radius: 20px;
    color:white;
    font-family: "Inter", serif;
    font-weight: 500;
    &:hover{
        background-color: #075534;
    }
}
.item-home{
    background-color: #0F744B;
    border-top-left-radius: 100%;
    position: fixed;
    right: 0;
    width: 40vw;
    height: 80vh;
    z-index: 10;
    img{
        width: 30vw;
    }
}
.item-opcao{
    position: absolute;
    bottom: 0;
    left: 38rem;
    z-index: 999;
    img{
        width: 7vw;
        transition: opacity 0.3s ease;
        cursor: pointer;
    }
}
#imagem1:hover{
    content: url("/src/assets/images/imagem1.png");
}
#imagem2:hover{
    content: url("/src/assets/images/imagem2.png");
}
#imagem3:hover{
    content: url("/src/assets/images/imagem3.png");
}
   
.item-redes-home{
    z-index: 999;
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 2rem;
    bottom:15rem;
    
    img{
    width: 2vw;
    margin: 0.5rem 0;
    transition: transform 0.3s ease;

    }
}
#fb:hover{
    transform: scale(1.2);
}
#ig:hover{
    transform: scale(1.2);

}
#tt:hover{
    transform: scale(1.2);

}
`
