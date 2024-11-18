import { NovidadeStyled } from "./StyleNovidade";

export default function Preparacao() {
    return (
        <NovidadeStyled>
          <img src="src\assets\images\imagem-preparacao.png" alt="" />
          <div className="info-novidade">
            <p className="info-p">PREPARAÇÃO</p>
                <h2>Níveis de torra</h2>
                <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>
                <button>SAIBA MAIS</button>
          </div>
         
        </NovidadeStyled>
    )
}