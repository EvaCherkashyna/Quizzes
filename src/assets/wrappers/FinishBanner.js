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

  & .finish-message{
    max-width: 80%;
  }
  & .finish-title{
    font-size: 4rem;
  }

  & .finish-icon{
    vertical-align: text-top;
  }
  & .finish-btn{
    width: 200px;
    padding: 10px;

    color:white;
    font-size: 1rem;
    
    background-color: var(--blue-800);
    border-radius: 5px;
    border:none;
    box-shadow: var(--shadow-2);
    &:hover{
      background-color: var(--blue-500);
      transition: all 0.1s ease-in;
    }
  }
  @media screen and (min-width: 1400px) {
    font-size: 1.5rem;
    & .finish-btn{
      width: 250px;
      padding: 15px;
      font-size: 1.5rem;
    }
    & .finish-title{
      font-size: 4.5rem;
      }
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.3rem;
    & .finish-btn{
      width: 230px;
      padding: 13px;
      font-size: 1.3rem;
    }
    & .finish-title{
      font-size: 4.3rem;
    }
  }
  @media screen and (max-width: 1040px) {
    height: 400px;
    & .finish-title{
      font-size: 3rem;
    }
  }
  @media screen and (max-width: 680px) {
    height: 500px;
    & .finish-title{
      font-size: 2.5rem;
    }
  }
  @media screen and (max-width: 560px) {
    padding: 5vw 5vw ;
  }
  @media screen and (max-width: 420px) {
    height: 600px;
    & .finish-title{
      font-size: 2rem;
    }
  }
`
export default Wrapper
