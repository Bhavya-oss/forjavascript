import { Avatar, AvatarGroup, Box, Button, Grid, Typography } from "@mui/material";

function HomeHero() {

    return (
        <>
            <Grid container sx={{ marginTop: "64px" }}>
                <Grid item xs={6}>
                    <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                        Game On for Your Next Big Career Move!
                    </Typography>

                    <Typography variant="h5" sx={{ marginTop: "24px" }}>
                        Level Up Your Career with Opportunities Tailored to You
                    </Typography>

                    <Button variant="contained" size="large" sx={{ marginTop: "16px", textTransform: "none", fontWeight: "bold", fontSize: "120%", width: "176px", height: "48px" }} onClick={() => {
                        const data = { b2cRole: "employer" }
                        const queryString = new URLSearchParams(data).toString()
                        setTimeout(() => {
                            window.location.href = `http://localhost:8080/empLogin?${queryString}`
                        }, 500)
                    }}>Join now</Button>

                    <Box sx={{ display: "flex", gap: "8px", alignItems: "center", marginTop: "24px", marginLeft: "8px" }}>
                        <AvatarGroup total={5} sx={{ flexDirection: "row" }}>
                            <Avatar
                                sx={{ width: 32, height: 32 }}
                                alt="Remy Sharp"
                                src="/images/userImages/user1.jpeg" />
                            <Avatar
                                sx={{ width: 32, height: 32 }}
                                alt="Travis Howard"
                                src="/images/userImages/user2.jpeg"
                            />
                            <Avatar
                                sx={{ width: 32, height: 32 }}
                                alt="Agnes Walker"
                                src="/images/userImages/user3.jpeg"
                            />
                            <Avatar
                                sx={{ width: 32, height: 32 }}
                                alt="Trevor Henderson"
                                src="/images/userImages/user4.jpeg"
                            />
                            <Avatar
                                sx={{ width: 32, height: 32 }}
                                alt="Agnes Walker"
                                src="/images/userImages/user5.jpeg"
                            />
                            <Avatar
                                sx={{ width: 32, height: 32 }}
                                alt="Trevor Henderson"
                                src="/images/userImages/user6.jpeg"
                            />
                        </AvatarGroup>
                    </Box>

                    <Typography variant="h6">Over 1k happy users</Typography>

                </Grid>
                <Grid item xs={6}></Grid>
            </Grid>
        </>
    );
}

export default HomeHero;