import styled from "styled-components"

const HomeDetails = styled.div`
    .content {
        padding: 2rem 20rem;
        display: flex;
    }

    @media (max-width: 1600px) {
        .content {
            padding: 2rem 10rem;
        }
    }

    @media (max-width: 1366px) {
        .content {
            padding: 2rem 6rem;
        }
    }

    @media (max-width: 1200px) {
        .content {
            padding: 2rem 4rem;
        }
    }

    @media (max-width: 992px) {
        .content {
            padding: 2rem 3rem;
            flex-direction: column;
            gap: 2rem;
        }
    }

    @media (max-width: 768px) {
        .content {
            padding: 2rem;
            gap: 1.5rem;
        }
    }

    @media (max-width: 576px) {
        .content {
            padding: 1.5rem;
            gap: 1.25rem;
        }
    }

    @media (max-width: 428px) {
        .content {
            padding: 1rem;
            gap: 1rem;
        }
    }
`

export default HomeDetails