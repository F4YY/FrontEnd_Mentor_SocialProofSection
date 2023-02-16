import styled from "styled-components";

export const Vstack = styled.div`
    display: flex;
    flex-direction: column;
`
export const Hstack = styled.div`
    display: flex;
    flex-direction: row;
`
export const Hstackflexi = styled(Hstack)`
    @media screen and (max-width:600px){
        flex-direction: column;
    }
`
//Styled for Main info section:
export const StyledMainInfo = styled(Vstack)`
    width: 400px;
    height: 200px;
    padding: 0 50px 90px 20px;
    @media screen and (max-width:960px){
        width: auto;
        height: auto;
        padding: 20px 20px 20px 30px;
    }
    @media screen and (max-width:600px){
        width: auto;
        height: auto;
        padding: 20px;
    }
`
//Styled for 5 stars rated reviews section:
export const Styledspreadrating = styled(Vstack)`
    padding: 0 20px 50px 60px;
    margin: auto;
    @media screen and (max-width:960px){
        padding: 0;
    }
    @media screen and (max-width:600px){
        padding: 0;
    }
`
export const Styledrating = styled(Hstackflexi)`
    width: 350px;
    height: 40px;
    border-radius: 8px;
    padding: 5px 30px;
    margin: 8px 0;
    align-items: center;
    background-color: var(--Light-Grayish-Magenta);
    &:nth-child(2){
        margin-left:45px;
    }
    &:nth-child(3){
        margin-left:90px;
    }
    @media screen and (max-width:960px){
        width: 320px;
        height: auto;
        padding: 5px;
        margin: 5px 10px;
        &:nth-child(2){
            width: auto;
            height: auto;
            padding: 5px;
            margin:5px 25px;
        }
        &:nth-child(3){
            width: auto;
            height: auto;
            padding: 5px;
            margin:5px 40px;
        }
    }
    @media screen and (max-width:600px){
        width: auto;
        height: auto;
        padding: 5px 30px;
        margin:10px 20px;
        &:nth-child(2){
            width: auto;
            height: auto;
            padding: 5px 50px;
            margin:10px 20px;
        }
        &:nth-child(3){
            width: auto;
            height: auto;
            padding: 5px 30px;
            margin:10px 20px 30px;
        }
    }
`
export const StarsIcon = styled.img`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin-right: 8px;
    padding-top:5px;
`
//Styled for 3 bottom cards section:
export const Styledspreadcards = styled(Hstackflexi)`
    margin:auto;
`
export const Styledcard = styled(Vstack)`
    width: 280px;
    height: 175px;
    padding: 20px;
    margin: 0 13px;
    border-radius: 8px;
    background-color: var(--Very-Dark-Magenta);
    &:nth-child(2){
        margin-top:18px;
    }
    &:nth-child(3){
        margin-top:36px;
    }
    @media screen and (max-width:960px){
        width: 100%;
        height: 100%;
        padding: 10px 15px 20px;
        margin:8px 20px;
        &:nth-child(2){
            height: 100%;;
            padding: 10px 15px 20px;
            margin:20px 10px;
        }
        &:nth-child(3){
            height: 100%;
            padding: 10px 15px 20px;
            margin:30px 20px;
        }
    }
    @media screen and (max-width:600px){
        width: auto;
        height: auto;
        padding: 20px 15px 30px;
        margin:10px 20px;
        &:nth-child(2){
            padding: 20px 15px 30px;
            margin:10px 20px;
        }
        &:nth-child(3){
            padding: 20px 15px 30px;
            margin:10px 20px;
        }
    }
`
export const UppersideCard = styled(Hstack)`
    align-items: center;
    padding: 15px 10px;
`
export const ProfpicCard = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`
//Styled for Attribution :
export const Attribution = styled.div`
    display: flex;
    margin: 10px auto 0;
    text-align: center;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 10px 20px 5px;
    }
`
export const AttributionA = styled(Attribution)`
    color: hsl(228, 45%, 44%);
`