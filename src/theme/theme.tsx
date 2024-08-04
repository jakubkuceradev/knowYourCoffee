const theme = {
    colors: {
        background: "#1d1d1d",
        text: {
            light: "#ffffff",
            dark: "#000000",
        },
    },
    typography: {
        fontFamily: {
            body: '"Montserrat", Arial, Helvetica, sans-serif',
            header: '"Rubik", Arial, Helvetica, sans-serif',
        },
    },
    spacing: {
        xs: "0.6rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "4rem",
    },
    breakpoints: {
        mobile: "500px",
        desktop: "1000px",
    },
};

export default theme;
export type ThemeType = typeof theme;
