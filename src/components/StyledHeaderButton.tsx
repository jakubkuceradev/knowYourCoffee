import LightStrongButton from "./LightStrongButton";
import styled from "styled-components";

const StyledHeaderButton = styled(LightStrongButton)`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0) 100%
    );

    .title-light {
        margin: 0;
        margin-right: 0.4rem;

        font-style: normal;
        font-weight: 400;
        font-size: 1.3rem;
    }

    .title-strong {
        margin: 0;
        font-family: "Rubik Mono One", Arial, Helvetica, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 2.5rem;
    }

    @media (min-width: 500px) {
        .title-light {
            font-size: 1.5rem;
        }

        .title-strong {
            font-size: 2.8rem;
        }
    }

    @media (min-width: 1000px) {
        .title-light {
            font-size: 1.8rem;
        }

        .title-strong {
            font-size: 3.2rem;
        }
    }
`;

export default StyledHeaderButton;
