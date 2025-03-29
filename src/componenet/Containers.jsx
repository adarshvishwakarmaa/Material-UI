import { Container, Typography } from "@mui/material";

const Containers = () => {
  return (
    <div>
      <Container
        sx={{ background: "gray", margin: "2px", padding: "2px" }}
        maxWidth="lg"
      >
        <Typography variant="body2">HELLO THIS IS XL</Typography>
      </Container> <br/>

      <Container
        sx={{ background: "orange", margin: "2px", padding: "2px" }}
        maxWidth="md"
      >
        <Typography variant="body2"> THIS IS XL</Typography>
      </Container> <br/>

      <Container
        sx={{ background: "green", margin: "2px", padding: "2px" }}
        maxWidth="sm"
      >
        <Typography variant="body2">HELLO IS XL</Typography>
      </Container> <br/>
      
      <Container
        sx={{ background: "pink", margin: "2px", padding: "2px" }}
        maxWidth="xs"
      >
        <Typography variant="body2">HELLO THIS XL</Typography>
      </Container> <br/>

      <Container
        sx={{ background: "red", margin: "2px", padding: "2px" }}
        maxWidth="md"
      >
        <Typography variant="body2">HELLO THIS IS </Typography>
      </Container> <br/>

      <Container
        sx={{ background: "blue", margin: "2px", padding: "2px" }}
        maxWidth="xl"
      >
        <Typography variant="body2">HELLO THIS IS XL</Typography>
      </Container>  <br/>
      
      <Container
        sx={{ background: "gray", margin: "2px", padding: "2px" }}
        maxWidth="xs"
      >
        <Typography variant="body2">HELLO XL</Typography>
      </Container>
    </div>
  );
};

export default Containers;
