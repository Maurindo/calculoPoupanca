import Header from './components/header';
import Explicacao from './components/explicacao';
import Img from './components/img';
import Calcular from './components/calculadora';
import styles from './app.module.css';

function App() {
  return (
    <div className={styles.corpo}>
      <Header />
      <Img />
      <div className={styles.corpo2}>
        <Explicacao />
      </div>
      <div className={styles.corpo3}>
        <Calcular />
      </div>
    </div>
  );
}

export default App;
