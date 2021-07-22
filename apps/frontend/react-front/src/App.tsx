import "./App.css";

import { ThemeProvider } from "styled-components";

// Assets
import GlobalStyle from "./styles/global";
import theme from "./styles/themes/default";

import {
  AppIcon,
  AppInput,
  AppCard,
  AppButton,
} from "@web-components/components";

import logoImg from "./assets/images/pzl-logo.svg";

function App() {
  return (
    // Styled components theme provider
    <ThemeProvider theme={theme}>
      <div className="wrapper">
        <h1>React Front App 😀 😃 😄 😁 😆 😅 😂 🤣 😄 😀</h1>

        <hr />

        <AppIcon src={logoImg} />

        <hr />

        <AppInput placeholder="Exemplo de input de texto..." />

        <hr />

        <AppCard>
          <h3 slot="header">Meu card de exemplo.</h3>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            soluta ex quas ipsum impedit odit! Molestias, quidem consequatur
            tenetur asperiores odio.
          </p>

          <AppButton slot="footer">Teste</AppButton>
        </AppCard>
      </div>

      {/* Estilo Global */}
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
