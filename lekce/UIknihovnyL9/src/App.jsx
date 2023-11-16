const c = console.log.bind(document);

import "./app.scss";
import SideBar from "./components/SideBar";
import Button from "./components/Button";
import Box from "./components/Box";

import { Page, Grid, Card, Text } from "@geist-ui/core";

const App = () => {
  return (
    <>
      {/* <SideBar title="Titulek sidebaru">
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero error adipisci aspernatur nesciunt illum unde?</p>
        <ul>
          <li>asdfas</li>
          <li>asdfasdfasd</li>
        </ul>

        <Calendar />
        <News />

        <Button>Ano</Button>
        <Button>Ne</Button>
      </SideBar> */}

      {/* <Box left={<><h3>Super nadpis</h3> <p>Odstavec vlevo</p></>} right={<p>Odstavec vpravo</p>}>
        <h2>Nadpis</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, eligendi!</p>
      </Box> */}

      {/* <Modal title="Chcete všechno smazat?">
        <p>Opravdu chcete smazat všechno? Tato akce nelze vrátit kámo!</p>
      </Modal> */}

      <Page>
        <h2>Toto je moje stránka</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, maxime
          repellendus.
        </p>

        <Grid.Container gap={2} justify="center" height="100px">
          <Grid xs={8}>
            <Card shadow type="success" width="100%">
            <Text h3>Titulek</Text>
            <Text p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A pariatur doloribus repellat ab, exercitationem quis!</Text>
            </Card>
          </Grid>
          <Grid xs={8}>
            <Card shadow type="purple" width="100%" />
          </Grid>
          <Grid xs={8}>
            <Card shadow type="cyan" width="100%" />
          </Grid>
        </Grid.Container>
      </Page>
    </>
  );
};

export default App;
