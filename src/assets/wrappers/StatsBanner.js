import styled from 'styled-components'

const Wrapper = styled.section`
  position: absolute;
  top:90px;

  width: 100vw;
  height: 40vw;
  margin-left: -10vw;
  padding: 5vw 10vw ;

  background-image:url("https://media.istockphoto.com/id/589553688/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%BD%D0%B0%D0%BA-%D0%BF%D0%B8%D1%82%D0%B0%D0%BD%D0%BD%D1%8F-3d.jpg?s=612x612&w=0&k=20&c=2Mc7c_VWAWaaqfVmLrRa00WoIab5L-ebSrXR6w1xsuU=");
  background-position: center;
  background-size: contain;
  box-shadow: inset rgb(53 171 180) 0px -20px 35px 10px, inset rgb(53 171 180) 50px 0px 1000px 44px;

  & .banner-paragraph{
    font-size: 1.5rem;
  }
  & .banner-title{
    font-size: 3.5rem;
  }

  & .banner-icon{
    vertical-align: text-bottom;
  }

  @media screen and (min-width: 1400px) {
    font-size: 1.5rem;

      & .banner-title{
        font-size: 4.5rem;
      }
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.3rem;
    & .banner-title{
      font-size: 4.2rem;
    }
  }
  @media screen and (max-width: 1040px) {
    height: 400px;
    & .banner-title{
      font-size: 2.7rem;
    }
  }
  @media screen and (max-width: 680px) {
    height: 400px;
    & .banner-title{
      font-size: 1.8rem;
    }
  }
  @media screen and (max-width: 560px) {
    padding: 5vw 5vw ;
    & .banner-title{
      font-size: 1.8rem;
    }
    & .banner-paragraph{
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 420px) {
    height: 600px;
    & .banner-title{
      font-size: 1.6rem;
    }
    & .banner-paragraph{
      font-size: 1.3rem;
    }
  }
  @media screen and (max-width: 420px) {
    height: 300px;
  }
`
export default Wrapper
