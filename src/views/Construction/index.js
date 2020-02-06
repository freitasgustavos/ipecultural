import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

export default function Construction() {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        style={{ height: "100vh", padding: 10 }}
      >
        <img src={require("assets/img/logo_2.png")} alt="Logo" width={400} />
        <h1>
          Página em <strong>construção</strong>
        </h1>
        <p>
          R. Tupaciguara, 600 - Nossa Sra. Aparecida, Uberlândia - MG, 38400-618
        </p>
        <p>
          <a href="tel:03432145447">(34) 3214-5447</a>
        </p>
      </Box>
    </Container>
  );
}
