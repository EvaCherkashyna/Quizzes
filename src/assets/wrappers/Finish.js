import styled from 'styled-components'

const Wrapper = styled.main`
  width: 80%;
  margin:auto;

  & .finish-statistics{
    color: white;
    padding-top: 42vw;
  }
  @media screen and (max-width: 1040px) {
    & .finish-statistics{
      padding-top: 420px;
    }
  }

  @media screen and (max-width: 680px) {
    & .finish-statistics{
      padding-top: 540px;
    }
  }
  @media screen and (max-width: 420px) {
    & .finish-statistics{
      padding-top: 620px;
    }
  }
`
export default Wrapper
