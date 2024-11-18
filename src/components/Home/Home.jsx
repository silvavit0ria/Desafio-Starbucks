import { useState } from "react";
import { HomeStyled } from "./StyleHome";
import imagemgrande1 from '../../assets/images/imagemgrande1.png'
import imagemgrande2 from '../../assets/images/imagemgrande2.png'
import imagemgrande3 from '../../assets/images/imagemgrande3.png'
export default function Home() {
   const[TrocarSabor, setTrocarSabor] = useState(imagemgrande1);
   const [fundo, setFundo] = useState('#0F744B');
   const trocarImagem1 =()=>{
    setTrocarSabor(imagemgrande1);
    setFundo('#0F744B');
   };
   const trocarImagem2=()=>{
    setTrocarSabor(imagemgrande2);
    setFundo('#ECAE00');
   }
   const trocarImagem3=()=>{
    setTrocarSabor(imagemgrande3);
    setFundo('#870C0B');
   
   }
    return (
        <HomeStyled>
           <div className="intro-home">
            <h1>Mais que Café </h1>
            <p className="subtexto-home">Isso  é <strong>Starbucks</strong></p>
            <p className="descricao-home">A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
            <button>SAIBA MAIS</button>
        </div> 
        <div className="item-home" style={{ backgroundColor: fundo }}>
            <img src={TrocarSabor} 
             alt="imagem copo demonstrativo"  />
             
        </div>
        <div className="item-redes-home">
            <img src="src\assets\images\fb.png" alt="logo facebook" id="fb"/>
            <img src="src\assets\images\ig.png" alt="logo instagram" id="ig" />
            <img src="src\assets\images\tt.png" alt="logo twitter"  id="tt"/>

        </div>
        <div className="item-opcao">

        <img 
                src="src\assets\images\imagem1.1.png" 
                alt="Opção 1" 
                id="imagem1" 
                className="imagem1"
                onClick={trocarImagem1} 
              />
       <img 
                src="src\assets\images\imagem2.2.png" 
                alt="Opção2" 
                id="imagem2" 
                className="imagem2"
                onClick={trocarImagem2} 
              />
        <img 
                src="src\assets\images\imagem3.3.png" 
                alt="Opção 3" 
                id="imagem3" 
                className="imagem3"
                onClick={trocarImagem3} 
              />
        </div>

        </HomeStyled>
    )
}