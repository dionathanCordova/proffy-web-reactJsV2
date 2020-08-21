import styled from 'styled-components';

interface CustomProps {
    image: string;
}

export const PageTeacherForm = styled.div`
    width: 100vw;
    height: 100vh; 

    @media (min-width: 700px) {
        max-width: 100vw;

        .page-header .header-content{
            margin-bottom: 0;
        }
    }

`
export const Main = styled.div`
    width: 100%;
    max-width: 76rem;
    background: var(--color-box-base);
    border-radius: 0.8rem;

    border: 1px solid var(--color-line-in-white);
    margin: -7rem auto 3.2rem;
    padding-top: 6.4rem;
    overflow: hidden;

    .page-header .header-content {
        margin-bottom: 6.4rem;
    }
`
export const Fieldset = styled.fieldset`
    
    border: 0;
    padding: 0 2.4rem;

    + fieldset {
        margin-top: 6.4rem;
    }

    legend {
        font: 700 2.4rem Archivo;
        color: var(--color-text-title);
        margin-bottom: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 1.6rem;
        border-bottom: 1px solid var(--color-line-in-white);
    }

    .input-block + .textarea-block,
    .select-block + .input-block {
        margin-top: 1.5rem;
    }

    legend button{
        background: none;
        border: 0;
        color: var(--color-primary);
        font: 700 1.6rem Archivo;
        cursor: pointer;
        transition: color 0.2s;
    }

    legend button:hover{
        color: var(--color-primary-dark);
    }

    label{
        color: var(--color-text-complement);
    }

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
            left: calc(96.5%);
            font-weight: 600;
            cursor: pointer;
            background: #fff;
            border: 1px solid #ccc;
        }
    }

    @media (min-width: 700px) {
        
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
export const CustomUpload = styled.div<CustomProps>`
    .new-button {
        display: inline-block;
        cursor: pointer;
        background: url(${(p: CustomProps) => p.image}) no-repeat center;
        background-size: cover;
        width: 8rem;
        height: 8rem;
        border-radius: 4rem;

        p{
            margin-left: 9rem;
            margin-top: 3rem;
            width: 25rem;

            font-family: Archivo;
            font-style: normal;
            font-weight: bold;
            font-size: 1.6rem;
            color: #32264D;
        }
    }

    input[type="file"] {
        display:none;
    }
`

export const GroupGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-row: 1fr;

    column-gap: 1.6rem;

    .input-block{
        margin-top: 3rem !important;
        margin-bottom: 2rem;
        
    } 


    @media (min-width: 700px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1.6rem;

        .input-block{
            margin-top: 0 !important;
            margin-bottom: 2rem;
            
        } 

    }
`

export const Footer = styled.div`
    background: var(--color-box-footer);
    border-top: 1px solid var(--color-line-in-white);
    padding-top: 2.4rem;
    margin-top: 6.4rem;
    margin-bottom: 6.4rem;

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
        #aviso {
            margin:auto;
        }

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
