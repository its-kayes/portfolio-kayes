import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Banner() {
  return (
    <Box
      className="h-screen"
      bgcolor="#0A182E"
      marginTop={3}
      sx={{ flexGrow: 1 }}
    >
      <Grid container columns={16}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid display="flex" justifyContent="center" item xs={8}>
          <img
            className="w-1/3 rounded-3xl max-w-lg h-auto rounded-lg transition-all duration-600 cursor-pointer filter grayscale hover:grayscale-0"
            src="/profile.jpg"
            alt="image description"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
