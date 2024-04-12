import { Box, Button, Container, Link, Typography } from "@mui/material";
import { NOT_FOUND_404 } from "../components/constants/ImagesLink";

export default function Custom404() {
  return (
    <>
      <div>
        <Container sx={{ minWidth: "85%" }}>
          <Box sx={{ padding: {xs:"80px 0rem", sm:"100px 5rem", md:"50px  12rem"} }}>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: {xs:"28px", sm:"45px", md:"64px"},
                fontWeight: "500",
                fontStyle: "normal",
                lineHeight: {xs:"43px", sm:"58px", md:"90px"},
                color: "black",
              }}
            >
              we’re sorry we seem to have lost this page, but we don’t want lose
              you.
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Link href="/">
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#0D0E10",
                color: "white",
                "&:hover": {
                  backgroundColor: "#0D0E10",
                  color: "white",
                },
              }}
            >
              Go back to home page
            </Button>
            </Link>
          </Box>

          <Box sx={{textAlign:"center",padding:{xs:"48px 34px",  sm:"50px 46px",md:"50px 20px"}}}>
                <img src={NOT_FOUND_404} className="responsive" alt="not found image"/>
          </Box>


        </Container>
      </div>
    </>
  );
}
