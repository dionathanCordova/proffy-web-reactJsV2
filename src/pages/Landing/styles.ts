import styled from 'styled-components';
import { shade } from 'polished';

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

export const HeaderContent = styled.div`
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
        
        #powerOf{
            width: 6rem; 
            height: 6rem; 
            border-radius: 3rem;
        }
    }

    .second-box{
        margin-top: 10rem;

        h2{
            font-size: 3rem;
            max-width: 30rem;
        }
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
    display: grid;
    grid-template-columns: 3fr auto auto auto;
    align-items: center;
    min-width: 60%;
    margin:auto;
    justify-content: space-between;

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
    
    .total-connections{
        margin-right: 4rem;
        font-size: 1.4rem;
        max-width: 15rem;

        img{
            margin-left: 0.8rem;
        }

    }
    
`





// @media (min-width: 1100px) {
//     #page-landing-content{
//         max-width: 1100px;

//         display: grid;
//         grid-template-rows: 350px 1fr;
//         grid-template-columns: 2fr 1fr 1fr;
//         grid-template-areas: "logo hero hero" "buttons buttons total"; 
//     }

//     .logo-container{
//         grid-area: logo;
//         align-self:  center;
//         text-align: left;
//         margin: 0;
//     }

//     .logo-container h2{
//         text-align: initial;
//         font-size: 3.6rem;
//     }

//     .logo-container img{
//         height: 100%;
//     }

//     .hero-image{
//         grid-area: hero;
//         justify-self: end;
//     }
    
//     .buttons-container{
//         justify-content: flex-start;
//         grid-area: buttons;
//     }

//     .buttons-container a{
//         font-size: 2.4rem;
//     }

//     .total-connections{
//         grid-area: total;
//         justify-self: end;
//     } 
// }