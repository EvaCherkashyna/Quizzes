import styled from 'styled-components'

const Wrapper = styled.section`
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  padding-top: 42vw;

  @media screen and (max-width: 1040px) {
    padding-top: 420px;
  }

  @media screen and (max-width: 680px) {
    padding-top: 520px;
  }
  @media screen and (max-width: 420px) {
    padding-top: 620px;
  }
`
export default Wrapper
