import styled from 'styled-components';

import headerBgProfile from '../../assets/images/Background.svg';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Header = styled.div`
    background: #D4C2FF;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const HeaderNavigation = styled.div`
    background: #774DD6;
    height: 7rem;
    color: #D4C2FF;
    width: 100%;
    border-bottom: 1px solid #6842C2;

    .group{
        margin: auto;
        width: 80%;
        height: 7rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        height: 1.6rem;
    }

    p {
        font-family: Archivo;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 17px;
        text-align: center;
    }
`

export const HeaderContent = styled.div`
    background: var(--color-primary) url(${headerBgProfile}) no-repeat center;
    background-size: 130rem;
    width: 100%;
    height: 60rem;

    align-items: center;
    justify-content: center;
    text-align: center;
    
    #userAvatar{
        margin-top: 12rem;
        width: 20rem; 
        height: 20rem; 
        border-radius: 10rem;
    }

    h2{
        margin-top: 4rem;
        color: #FFFFFF;
        font-size: 36px;
        line-height: 25px;
    }

    p{
        margin-top: 1.5rem;
        color: #D4C2FF;
        font-family: Poppins;
        font-size: 24px;
        line-height: 26px;
    }

    @media (max-width: 700px) {
        height: 40rem;
        background-size: 80rem;

        #userAvatar{
            margin-top: 2rem;
            width: 12rem; 
            height: 12rem; 
            border-radius: 6rem;
        }

        h2{
            font-size: 26px;
        }
    
        p{
            margin-top: 1.5rem;
            font-size: 24px;
        }
    }

`

export const Content = styled.div`
    max-width: 76rem;
    background: var(--color-box-base);  
    border-radius: 0.8rem;

    border: 1px solid var(--color-line-in-white);
    margin: -7rem auto 3.2rem;
    padding-top: 6.4rem;


    .schedule-item {
        margin-bottom: 3rem;
        border-bottom: 1px solid var(--color-line-in-white);
        position: relative;

        .removeArea{
            position: absolute;
            color: #E33D3D;
            font-family: Archivo;
            font-size: 1.4rem;
            padding-left: 0.6rem;
            padding-right: 0.6rem;
            padding-top: 0.4rem;
            padding-bottom: 0.4rem;
            top: calc(0rem);
            left: calc(96%);
            font-weight: 600;
            cursor: pointer;
            background: #fff;
            border: 1px solid #ccc;
        }
    }

    @media (min-width: 700px) {
        .groupGrid{
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 1.6rem;

            .input-block{
                margin-top: 0 !important;
                margin-bottom: 2rem;
                
            } 
        }

        .schedule-item .items{
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            column-gap: 1.6rem;
        }

        .schedule-item .input-block{
            margin-top: 0 !important;
        } 
    }
`
export const Fieldset = styled.fieldset`
    margin-top: 6.4rem;

    border: 0;
    padding: 0 2.4rem;
    margin-bottom: 2.4rem;

    .input-block + .input-block {
        margin-top: 2rem;
    }

    .input-block + .textarea-block,
    .select-block + .input-block {
        margin-top: 1.5rem;
    }


    legend {
        color: var(--color-text-complement);
        font: 700 2.4rem Archivo;
        color: var(--color-text-title);
        margin-bottom: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 1.6rem;
        border-bottom: 1px solid var(--color-line-in-white);

        button {
            background: none;
            border: 0;
            color: var(--color-primary);
            font: 700 1.6rem Archivo;
            cursor: pointer;
            transition: color 0.2s;

            &:hover{
                color: var(--color-primary-dark);
            }
        }
    }

    @media (min-width: 700px) {
        padding: 0 6.4rem;
    }
`

export const Footer = styled.div`
    background: var(--color-box-footer);
    border-top: 1px solid var(--color-line-in-white);
    padding-top: 2.4rem;
    margin-top: 6.4rem;

    display: grid;
    grid-template-columns: 2fr 1fr;
    line-height: 5rem;
    align-items: center;
    justify-content: center;

    #aviso {
        margin-right: auto;
        font-size: 1.4rem;
        display: flex;
        flex-direction: row;
        line-height: 2.4rem;
        color: var(--color-text-complement);

        img{
            margin-right: 2rem;
        } 

        p{
            margin-right:auto;
        }

        span{
            color: #8257E5;
        }
    }

    button{
        width: 100%;
        height: 5.6rem;
        background: var(--color-secundary);
        color: var(--color-button-text);
        border: 0;
        border-radius: 0.8rem;
        cursor: pointer;
        font: 700 1.6rem Archivo;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: background-color 0.2s;

        &:hover{
            background: var(--color-secundary-dark);
        }
    }

    @media (max-width: 700px) {
        background: red;
        justify-content: space-between;

        p {
            align-self: start;
            justify-content: space-between;
            margin: auto;
            font-size: 1.6rem;
        }

        button {
            width: 20rem;
            margin-top: 0;
            margin-top: 4rem;
            width: 100%;
            height: 5.6rem;
            border-radius: 0.8rem;
            font: 700 2rem Archivo;
        }

        grid-template-columns: 1fr;
        grid-template-row: 1fr;
    }
`