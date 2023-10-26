import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const styles = {
    card: {
        maxWidth: 400,
        borderRadius: "20px",
    },
    media: {
        height: 200,
    },
};
export default function MediaCard({ imageSource, title, content }) {

    return (
        <Card sx={styles.card}>
            <CardMedia
                sx={styles.media}
                image={imageSource}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    size="small"
                >
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}