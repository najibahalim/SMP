import { createMuiTheme, responsiveFontSizes, ThemeProvider } from "@material-ui/core";

const themes = createMuiTheme({
    palette: {
        primary: {
            main: "#00af80"
        },
        secondary: {
            main: "#32878c" 
        },
        text : {
            // primary:'#00af80',
            secondary:'#32878c'
        }
    },
    typography: {
        fontFamily: "Roboto"
    }
    // as an aside, highly recommend importing roboto font for Material UI projects! Looks really nice
});

export const theme = responsiveFontSizes(themes);
