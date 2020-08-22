import styled from 'styled-components';
import { shade } from 'polished';

interface CustomProps {
    image: string;
}

export const Container = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Header = styled.div`
    width: 100vw;
    height: 100%;
    max-height: 60rem;
    background: var(--color-primary);
    justify-content: center;
    align-items: center;
`

export const HeaderContent = styled.div<CustomProps>`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    margin:auto;

    > div {
        margin-top: 2rem;
        min-width: 60%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        color: #D4C2FF;
    }

    .first-box{
       
        height: 7rem;

        button{
            display: flex;
            align-items: center;
            justify-content: center;
            background: #774DD6;
            width: 5rem;
            height: 5rem;
            border-radius: 0.8rem;
            border: 0;

            &:hover{
                background: ${shade(0.2, '#774DD6')};
            }

        }

        
        #userAvatar{
            cursor: pointer;
            background: url(${(p: CustomProps) => p.image}) no-repeat center;
            background-size: cover;
            width: 6rem; 
            height: 6rem; 
            border-radius: 3rem;
        }
        

        @media (max-width: 700px) {
            width: 100%;
            padding: 2rem;

            #userAvatar{
                width: 3rem; 
                height: 3rem; 
                border-radius: 1.5rem;
            }

            button{
                width: 4rem;
                height: 4rem;
            }
        }
    }

    .second-box{
        margin-top: 10rem;

        h2{
            font-size: 3rem;
            max-width: 30rem;
        }

        @media (max-width: 700px) {
            display: grid;
            grid-template-row: 1fr;
            justify-content: center;
            align-items:center;
            text-align: center;

            .logo-container{
                margin-top: -4rem;                
                width: 100%;

                h2{
                    font-size: 3rem;
                    margin-bottom: 4rem;
                }
            }

            img{ 
                width: 30rem;
            }
        }
    }

    a{
        text-decoration: none;
        color: #D4C2FF;
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 30px;
    }
`

export const UserInfo = styled.div`
    
    display:flex;
    flex-direction: row;
    align-items: center;

    p{
        margin-left: 3rem;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    min-width: 60%;
    margin:auto;

    .buttons-container {
        display: flex;
        justify-content: center;
        margin: 1.2rem 0;

        a {
            width: 30rem;
            height: 6.4rem;
            border-radius: 0.8rem;
          
            font: 700 2.0rem Archivo;
        
            display: flex;
            align-items: center;
            justify-content: center;
        
            text-decoration: none;
            color: var(--color-button-text);
        
            transition: background-color 0.2s;
        }

        a:first-child{
            margin-right: 1.6rem;
        }

        a img{
            width: 4rem;
        }

        a.study{
            background: var(--color-primary-lighter);
        }
        
        a.study:hover{
            background: var(--color-primary-light);
        }

        a.give-classes{
            background: var(--color-secundary);
        }
        
        a.give-classes:hover{
            background: var(--color-secundary-dark);
        }

        a img{
            margin-right: 2.4rem;
        }
    }

    .text-container{
        margin-right: 3rem;
        width: 70rem;
        display: flex;
        flex-direction: row;

        align-items: center;
        justify-content: space-between;

        .total-connections{
            text-align: end;
            width: 20rem;
            margin-left: auto;
            img{
                margin-left: 1rem;
            }
        }
    }
    


    @media (max-width: 700px) {
        flex-direction: column;
        max-width: 20rem;

        .text-container{
            margin:auto;
            text-align: center;
            width: 20rem;
            display: flex;
            flex-direction: column;
            align-items:center;
            
            span {
                margin-top: 3rem;
            }

            .total-connections{
                text-align: center;
            }
        }

        .buttons-container{
            margin-top: 3rem;
            display: flex;
            flex-direction: column;

            a{
                margin-bottom: 2rem;
            }
        }
    }
    
`
// grid-template-columns: 3fr auto auto auto;