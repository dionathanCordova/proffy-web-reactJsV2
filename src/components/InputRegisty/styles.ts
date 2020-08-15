import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background: #FFF;
    border-radius: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-right: 14px;
    border: 1px solid var(--color-line-in-white);
    color: #666360;

    svg{
        margin-top: 1.7rem;
        cursor: pointer;
    }

    input {
        flex: 1;
        width: 100%;
        height: 5rem;
        padding-left: 1.3rem;
        padding-top: 2rem;
        background: transparent;
        border: 0;
        border-color: transparent;
        outline: none;
        position:relative;
        
        ::placeholder{
            opacity: 0;
        }

        &:not(:placeholder-shown) + label {
            transform: translate(0, 0.9rem);
            font-size: 1.2rem;
        }

        &:focus {
            border-left: 3px solid var(--color-primary); 
        }

        &:focus + label,
        &:valid + label{
            transform: translateY(-5%);
            font-size: 1.2rem;
        }

        &:hover + label{
            filter: brightness(70%);
        }

    }

    label{
        position: absolute;
        padding-left: 1.3rem;
        font-size: 1.2rem;
        color: var(--color-text-complement);
        point-events: none;
        transform: translate(0rem, 1.8rem);
        transition: transform 0.3s ease;
    }
`
export const Error = styled.div`
    height: 20px;
    margin-left: 16px;

    svg {
        margin: 0;
    }

    span {
        background: #c53838;
        color: #FFF;

        &::before{
            border-color: #c53030 transparent;
        }
    }
`