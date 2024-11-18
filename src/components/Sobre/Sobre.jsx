import { StyleSobre } from "./StyleSobre";
import imagempreparacao2 from '../../assets/images/imagem-preparacao2.png'

export default function Sobre(){
    return (
        <StyleSobre>
           <div className="info-novidade">
            <p className="info-p">PREPARAÇÃO</p>
                <h2>Níveis de torra</h2>
                <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>
                <button>SAIBA MAIS</button>
          </div>
           <img src={imagempreparacao2}alt="" />
        </StyleSobre>
    )
}