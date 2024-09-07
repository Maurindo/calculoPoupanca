import styles from './explicacao.module.css';

function Explicacao(){
    return(
        <div className={styles.corpo}>
            <p>
                A poupança é um tipo de investimento bastante popular no Brasil, 
                especialmente por ser considerado seguro e de fácil acesso. 
                Veja como ela funciona e como os juros são calculados:
            </p>
            <br/>

            <h3>
                1. O que é a Poupança?
            </h3>
            <p>
                A poupança é uma conta bancária que rende juros sobre o saldo depositado. 
                Ela é garantida pelo Fundo Garantidor de Créditos (FGC) até o limite de 
                R$ 250.000 por pessoa, por instituição financeira.
            </p>
            <br/>
            <br/>

            <h3>
                2. Como os Juros São Calculados?
            </h3>
            <p>
                O rendimento da poupança depende da Taxa Selic, que é a taxa básica de juros da economia brasileira. 
                Existem duas formas principais de calcular os juros da poupança:
            </p>
            <br/>
            <br/>
            <h3>
                Quando a Taxa Selic está acima de 8,5% ao ano:
            </h3>
            <p>
                O rendimento da poupança é fixo em 0,5% ao mês + a Taxa Referencial (TR), 
                que é uma taxa adicional calculada pelo Banco Central.
            </p>
            <br/>
            <br/>
            <h3>
                Quando a Taxa Selic está igual ou abaixo de 8,5% ao ano:
            </h3>
            <p>
                O rendimento da poupança é 70% da Taxa Selic + TR.
            </p>
            <br/>

            <h3>
                3. Exemplo de Cálculo dos Juros
            </h3>
            <h3>
                Suponha que a Taxa Selic esteja em 6% ao ano.
            </h3>

            <p>
                O rendimento anual da poupança será de 70% de 6%, o que dá 4,2% ao ano (sem contar a TR, que atualmente está zerada).
            </p>
            <br/>
            <br/>

            <h3>
                Se você tem R$ 10.000 na poupança:
            </h3>

            <p>
                Após um ano, seu saldo será de R$ 10.420,00 (10.000 x 1,042).
            </p>

            
        </div>
    );
}

export default Explicacao;