import styles from "./Footer.module.css"
import logo from "./../Header/logo.png"
const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <img src={logo} alt="Logo da Alura Latam" />
      <p>Desafio Oracle Next Education - ONE + Alura Latam feito por Jeferson Santos</p>
    </footer>
  )
}

export default Footer