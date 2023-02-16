import styled from "styled-components";
import bgtopdesktop from '../images/bg-pattern-top-desktop.svg';
import bgbottomdesktop from '../images/bg-pattern-bottom-desktop.svg';
import bgtopmobile from '../images/bg-pattern-top-mobile.svg';
import bgbottommobile from '../images/bg-pattern-bottom-mobile.svg';

export const Container = styled.div`
    --Very-Dark-Magenta: hsl(300, 43%, 22%);
    --Soft-Pink: hsl(333, 80%, 67%);
    --Dark-Grayish-Magenta: hsl(303, 10%, 53%);
    --Light-Grayish-Magenta: hsl(300, 24%, 96%);
    --White: hsl(0, 0%, 100%);
    font-size: 15px;
    font-family: 'League Spartan';
    --bold:700;
    --semibold:500;
    --reguler:400;
    margin: auto;
    display: flex;
    flex-direction: column;
    min-height:100vh;
    width: 100wh;
    align-items: center;
    justify-content: center;
    background-image: url(${bgtopdesktop}),url(${bgbottomdesktop});
    background-repeat: no-repeat;
    background-position: top -40px left 0, bottom -40px right -20px;
    background-color: var(--White);
    @media screen and (max-width:600){
        background-image: url(${bgtopmobile}),url(${bgbottommobile});
    }
    h1{
        font-size: 3.1rem;
        font-weight: var(--bold);
        color: var(--Very-Dark-Magenta);
        letter-spacing: -.1rem;
        margin: 10px 0 25px;
        @media screen and (max-width:960px){
            font-size: 2rem;
            margin: 10px 0 25px;
        }
        @media screen and (max-width:600px){
            font-size: 2.5rem;
            margin: 45px 20px 25px;
            text-align: center;
        }
    }
    h3{
        font-size: 1rem;
        font-weight: var(--semibold);
        color: var(--White);
        margin:3px 20px;
    }
    h4{
        font-size: .96rem;
        font-weight: var(--reguler);
        color: var(--Soft-Pink);
        margin:3px 20px;
    }
    h5{
        font-size: 1rem;
        font-weight: var(--reguler);
        color: var(--Dark-Grayish-Magenta);
        line-height: 1.5rem;
        margin:0;
        @media screen and (max-width:600px){
            font-size: 1.1rem;
            margin: 0 8px;
            text-align: center;
        }
    }
    h6{
        font-size: 1rem;
        font-weight: var(--bold);
        color: var(--Very-Dark-Magenta);
        padding-left: 20px;
        @media screen and (max-width:960px){
            padding: 5px;
            margin:0;
        }
        @media screen and (max-width:600px){
            padding: 12px;
            margin:0;
        }
    }
    p{
        font-size:.95rem;
        font-weight: var(--reguler);
        color: var(--White);
        line-height: 1.3rem;
        padding: 8px 10px;
        margin:0;
        @media screen and (max-width:960px){
            line-height: 1.1rem;
            padding: 3px 10px;
        }
    }
`