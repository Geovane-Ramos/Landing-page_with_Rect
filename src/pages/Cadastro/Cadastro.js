//import Section from "../../components/Section/Section";
import styles from "./Cadastro.module.css";
import Developer from "../../assets/Developer.jpg";

const About = () => {
  return (
    <div className={styles.Container_About}>
      <img src={Developer} alt="Developer" />
      <div className={styles.Container_Form}>
        <h1>Faça seu cadastro ou Login</h1>
        <form>
          <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" placeholder="Digite seu nome" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" placeholder="Digite E-mail" />
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              name="password"
              placeholder="Digite su senha"
            />
          </div>
          <div>
            <label htmlFor="phone">Telefone de contato:</label>
            <input type="text" name="phone" placeholder="Digite seu telefone" />
          </div>
          <input className={styles.Btn_C} type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
};

export default About;
