import styles from './calcular.module.css';
import { useState } from 'react';

function Calcular(){
    //criando usestate valores que vou manipular (valorInput,setValorInput)
    //valores utilizar para apresentar na parte html (valorFinal)
    const [valorInput, setValorInput] = useState('');
    const [valorFinal, setValorFinal] = useState('');
    let valorSelic;
    let novoValor;
    //useState Selic
    const [selicInput, setSelicInput] = useState('');

    //convertendo o valorInput em  número
    const valor = parseFloat(valorInput)||0;
    const selic = parseFloat(selicInput)||0;

    //essa função está em onChange evento que coletar o que foi digitado
    const handleValorImputChange = (event) => setValorInput(
        event.target.value
    )

    const handleSelicimputChange = (event) => setSelicInput(
        event.target.value
    )

    

    //essa função está no onClick
    const calcular = (evente) => {
        evente.preventDefault()
        if (selic <= 8.5){
            valorSelic = (selic * 70) / 100
        } else if (selic > 8.5) {
            valorSelic = 0.5 
        }
        if (valorSelic > 0.5){
           novoValor = ((valor * valorSelic) / 100) + valor
        } else if ( valorSelic == 0.5) {
            novoValor = (valor * 0.005) + valor
        }
        setValorFinal(novoValor);
        
    }
    return(
        <div className={styles.corpo}>
            <label htmlFor='valor'>Valor para calcular: </label>
            <input type="text" name='valor' placeholder='R$' onChange={handleValorImputChange}/>
            <br/>
            <label htmlFor="selic">Taxa Selic: </label>
            <input type="text" name='selic' onChange={handleSelicimputChange} />
            <br/>
            <button onClick={calcular}>Calcular</button>
            <p>Após um ano</p>
            <p>R$:{valorFinal}</p>
        </div>
    );
}

export default Calcular;