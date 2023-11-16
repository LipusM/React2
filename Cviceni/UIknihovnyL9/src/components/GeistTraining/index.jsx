const c = console.log.bind(document);

import "./style.scss";

import { Grid, Card, Text, Collapse, Textarea, Loading} from "@geist-ui/core";

const GeistTraining = () => {
  return (
    <>
      <Grid.Container gap={2} justify="center">

        <Grid xs={12} md={24}>
          <Card shadow width="100%" height="max-content">
            <Text h1>Nejlepší webová stránka (zkus říct jinak).</Text>
          </Card>
        </Grid>

        <Grid xs={12} md={6}>
          <Card shadow width="100%" height="max-content">
            <Collapse.Group>
              <Collapse title="Způsob dopravy?">
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
              </Collapse>
              <Collapse title="Jak nás kontaktovat?">
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
              </Collapse>
            </Collapse.Group>
          </Card>
        </Grid>

        <Grid xs={12} md={6}>
          <Card shadow width="100%" height="100%">
          <Textarea placeholder="Please enter a description." type="secondary" width="100%" height="100%" />
          </Card>
        </Grid>
        <Grid xs={12} md={6}>
          <Card shadow width="100%" height="100%">
          <Loading />
            </Card>
        </Grid>

      </Grid.Container>
    </>
  );
};

export default GeistTraining;
