import styled from 'styled-components'

const Wrapper = styled.main`
  width: 80%;
  margin:auto;
  
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
    @media screen and (max-width: 420px) {
      & .stats-quizzes{
        padding-top: 320px;
      }
  } 
`
export default Wrapper
