import styled from 'styled-components'

const Wrapper = styled.header`
  width: 80%;
  margin: 20px auto;

  border-radius: 5px;

  & .logo-title{
    display: inline;
    margin-bottom: 0;
    margin-top: 0;

    color: white;
    font-size: 30px;
    font-style: uppercase;
    font-family: var(--headingFont);

    & .logo-icon{
      vertical-align: sub;
    }
    
  }
  & .nav-link{
    padding-left: 20px;
    color:white;
    &:hover{
      text-decoration: underline;
      transition: all 0.1s ease;
    }
  }
  @media screen and (min-width: 1400px) {
    & .logo-title{
      font-size: 3.3rem;
    }

  }
  @media screen and (min-width: 1200px) {
    margin: 7px auto;
    & .logo-title{
      font-size: 2.5rem;
    }
    & .nav-link{
      font-size: 1.5rem;
  }
  }
  @media screen and (max-width: 560px) {
    margin: 10px auto;
    width: 90%;
    font-size: 20px;
  }

`
export default Wrapper;
