import styled from 'styled-components'

const Wrapper = styled.main`
  width: 80%;
  margin:auto;
  & .stats-quizzes-title{
    padding:0 10% ;
    & p{
      font-family: var(--headingFont);
      font-size:2rem;
      margin:0;
    }
  }
  & .stats-quizzes{
    color: white;
    padding-top: 42vw;
  }
  @media screen and (max-width: 1040px) {
    & .stats-quizzes{
      padding-top: 420px;
    }
  }

  @media screen and (max-width: 680px) {
    & .stats-quizzes{
      padding-top: 440px;
    }
  }
  @media screen and (max-width: 560px) {
    & .stats-quizzes-title{
      padding:5%;
      & p{

      }
    }
  }
  @media screen and (max-width: 420px) {
      & .stats-quizzes{
        padding-top: 320px;
      }
  } 
`
export default Wrapper
