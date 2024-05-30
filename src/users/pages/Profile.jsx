import React, { useEffect, useState } from "react";
import useUsers from "../hooks/useUsers";
import { useUser } from "../providers/UserProvider";
import { Container, Box, Typography, Avatar, Paper, Grid, IconButton, CardActions, Tooltip } from "@mui/material";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import Spinner from "../../component/Spinner";
import { useNavigate } from "react-router-dom";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

export default function Profile() {
    const { handleGetUser } = useUsers();
    const { user } = useUser();
    const [userFullData, setUserFullData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            const getUser = async () => {
                setUserFullData(await handleGetUser(user._id));
            };
            getUser();
        }
    }, [user, handleGetUser]);

    if (!user) return <Navigate replace to={ROUTES.CARDS} />;
    if (!userFullData) return <Spinner />;

    return (
        <Container maxWidth="md" sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ my: 1 }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={4} display="flex" justifyContent="center">
                        <Avatar
                            alt={userFullData.image.alt}
                            src={userFullData.image.url}
                            sx={{ width: { xs: 100, md: 200 }, height: { xs: 100, md: 200 } }}
                        />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Paper elevation={2} sx={{ p: 2 }}>
                            <Typography variant="h4" component="div" gutterBottom>
                                {userFullData.name.first} {userFullData.name.middle} {userFullData.name.last}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Email: {userFullData.email}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Phone: {userFullData.phone}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Address: {userFullData.address.street} {userFullData.address.houseNumber}, {userFullData.address.city}, {userFullData.address.state}, {userFullData.address.country}, {userFullData.address.zip}
                            </Typography>
                            <CardActions sx={{ justifyContent: "flex-end" }}>
                                <Tooltip title="Edit your details">
                                    <IconButton onClick={() => { navigate(ROUTES.EDIT_USER); }}>
                                        <ModeEditIcon />
                                    </IconButton>
                                </Tooltip>
                            </CardActions>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
