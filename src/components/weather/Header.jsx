import {Grid, Typography} from "@mui/material";

const Header = () => {
    return(
        <Grid item xs={12} textAlign={'center'}>
            <Typography variant={'h1'}>
                Weather App
            </Typography>
        </Grid>
    )
}

export default Header