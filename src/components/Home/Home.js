import React from "react";
import { Wrapper, Title, SubTitle } from "./HomeStyle";
import Grid from "@material-ui/core/Grid";

const Home = () => {
  return (
    <Wrapper>
      <Grid container>
        <div style={{ margin: "auto" }}>
          <Title>Mateusz Bacherycz</Title>
          <SubTitle>Web Developer</SubTitle>
        </div>
      </Grid>
    </Wrapper>
  );
};

export default Home;
