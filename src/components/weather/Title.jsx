import {Grid, Typography} from "@mui/material";

export default function Title(props){
    return(
        <Grid sx={{margin:5}} item xs={12} textAlign={'center'}>
            <Typography variant={'h1'}>
                {props.value}
            </Typography>
        </Grid>
    )
}

