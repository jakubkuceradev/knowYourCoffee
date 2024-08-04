import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html,
    body,
    #root {
        height: 100%;
    }

    body {
        margin: 0;
        font-family: ${(props) => props.theme.typography.fontFamily.body};
        color: ${(props) => props.theme.colors.text.light};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: url(./assets/coffee-beans-background.webp), ${(props) =>
            props.theme.colors.background};
        background-size: cover;
        transition: background-size 0.3s ease;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    img {
        max-width: 100%;
        height: auto;
        display: block;
    }

    button {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        background: inherit;
        border: inherit;
        cursor: pointer;
        text-align: inherit;
        width: inherit;
        color: inherit;
    }

    input {
        font-family: inherit;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        border: none;
        outline: none;
    }

    ul,
    ol {
        list-style: none;
    }

    /* Typography */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${(props) => props.theme.typography.fontFamily.header};
        margin-bottom: ${(props) => props.theme.spacing.xs};
        font-weight: 600;
    }

    h2 {
        font-weight: 700;
        font-size: 2rem;
    }

    h3 {
        font-weight: 700;
        font-size: 1.6rem;
    }

    h4 {
        font-family: "Montserrat", Arial, Helvetica, sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 1.1rem;
        
        color: #000000;
    }

    p {
        font-style: normal;
        font-size: 1rem;
        font-weight: 400;
        
        color: #ffffff;
    }

    strong {
        font-weight: 600;
    }

    /* Utility */

    .container {
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
        padding: 0 1.5rem;
    }

    .round-top-corners {
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
    }

    .round-bottom-corners {
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }

    .mt-0 {
        margin-top: 0 !important;
    }

    .mt-1 {
        margin-top: 0.25rem !important;
    }

    .mt-2 {
        margin-top: 0.5rem !important;
    }

    .mt-3 {
        margin-top: 1rem !important;
    }

    .mt-4 {
        margin-top: 1.5rem !important;
    }

    .display {
        display: auto;
    }

    .hide {
        display: none;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
        .container {
            max-width: 500px;
        }
        
        h2 {
            font-size: 2.6rem;
        }
        
        h3 {    
            font-size: 2.3rem;
        }
        
        h4 {
            font-size: 1.4rem;
        }
        
        p {
            font-size: 1.3rem;
        }
    }

    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
        .container {
            max-width: 600px;
        }
        
        h2 {
            font-size: 2.8rem;
        }
        
        h3 {
            font-size: 2.4rem;
        }
        
        h4 {
            font-size: 1.6rem;
        }
        
        p {
            font-size: 1.4rem;
        }
    }
`;

export default GlobalStyles;
