
import styled from 'styled-components';

export const PageHeaderComp = styled.header`
    display: flex;
    flex-direction: column;
    background: var(--color-primary);
    height: 47rem;
`
export const HeaderNavigation = styled.div`
    background: #774DD6;
    border-bottom: 1px solid #6842C2;
    height: 7rem;
    color: #D4C2FF;
    width: 100%;
    
    .top-bar-container{
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--color-text-in-primary);
        padding: 1.6rem 0;
    
        a {
            height: 3.2rem;
            transition: opacity 0.2s;
            
            :hover {
                opacity: 0.6;
            }
        }
    
        > img{
            height: 1.6rem;
        }
    }
`

export const HeaderContent = styled.div`
    margin: auto;
    height: 100%;

    display:flex;
    align-items:center;

    @media (min-width: 700px) {
        width: 76rem;
    }
`

export const Content = styled.div`
    margin-top: -5rem;
    width: 100%;
    text-align:center;

    h1{
        color: #fff;
        margin-bottom: 2rem;
    }

    .group{
        color: var(--color-text-in-primary);

        #welcomeMessage {
            
            display: flex;
            flex-direction: column;

            color: var(--color-text-in-primary);

            img{
                visibility: hidden;
                margin-right: 1rem;
            }
        }
    }


    @media (min-width: 700px) {
        padding: 0rem;
        text-align:left;

        h1{
            width: 60%;
        }

        p{
            max-width: 30rem;
            font-size: 1.5rem;
        }
    
        .group{
            margin-top: 2rem;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            color: var(--color-text-in-primary);


            #welcomeMessage {
                flex-direction: row;

                img{
                    visibility: visible;
                }
            }
        }
    }
`
