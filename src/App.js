import styled from "styled-components";
import Container from "./components/common/Container";
import Item from "./components/common/Item";

const Wrapper = styled.div`
  > * {
    border: 2px dashed red;
  }
`;

function App() {
  return (
    <Wrapper>
      <header>logo | links | ctas</header>

      {/* <Container>
        <Item col="s1-5" row="s1 m4" hide="s m">
          1
        </Item>
        <Item col="s1-3 l7" row="s1-3 m3" hide="s">
          2
        </Item>
        <Item col="s3-5" row="s3 m2 l2">
          3
        </Item>
        <Item col="s2-4" row="s4 m1">
          4
        </Item>
      </Container> */}

      {/* TODO: REFINAR BREAKPOINT. TÁ QUEBRANDO ANTES MESMO DE COMEÇAR A DIMINUIR O TAMANHO ÚTIL (container queries venham logooo) */}

      <Container as="section" style={{ alignItems: "center" }}>
        <Item col="s1-5 m1-4 l2-7" row="s2">
          <h2>Share your home, nanny and costs</h2>
          <p>
            You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be,
            well, fantastic?! If only it was easy to connect with other parents to share your costs?
            Well now it is, with Hapu. <a href="#">Hapu means tribe</a> and it’s our foundational 3
            tribal principles that empowers you to create and manage your own tribe. A tribe that
            together has the power to create new affordable solutions in childcare that work for you
            and your community.
          </p>
          <a href="#">Ready to get started?</a>
        </Item>
        <Item col="s1-5 m4-7 l7-13" row="s1">
          <img
            src="https://www.madrecor.com.br/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg"
            alt=""
          />
        </Item>
      </Container>

      <div>faixa de disponibilidade</div>

      <section>
        <h1>bloco 1</h1>
        <p>texto</p>
        <img
          src="https://www.madrecor.com.br/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg"
          alt=""
        />
      </section>

      <section>
        <h1>bloco 2</h1>
        <p>texto</p>
        <form action="">
          <input type="text" />
          <input type="text" />
          <button>enviar</button>
        </form>
      </section>

      <section>
        <img
          src="https://www.madrecor.com.br/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg"
          alt=""
        />
        <h1>bloco 3</h1>
        <p>texto</p>
      </section>

      <section>
        <h1>bloco 4</h1>
        <p>texto</p>
      </section>

      <section>
        <h1>bloco 5</h1>
        <p>texto</p>
      </section>

      <section>
        <h1>cta block</h1>
        <button>cta</button>
      </section>

      <footer>logo | links | redes sociais | copyright</footer>
    </Wrapper>
  );
}

export default App;
