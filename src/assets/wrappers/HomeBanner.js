import styled from 'styled-components'

const Wrapper = styled.section`
  position: absolute;
  top:0;

  width: 100vw;
  height: 40vw;
  margin-left: -10vw;
  padding: 5vw 10vw ;

  background-image:url("https://media.istockphoto.com/id/589553688/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%BD%D0%B0%D0%BA-%D0%BF%D0%B8%D1%82%D0%B0%D0%BD%D0%BD%D1%8F-3d.jpg?s=612x612&w=0&k=20&c=2Mc7c_VWAWaaqfVmLrRa00WoIab5L-ebSrXR6w1xsuU=");
  background-position: center;
  background-size: contain;
  box-shadow: inset rgb(53 171 180) 0px -20px 35px 10px, inset rgb(53 171 180) 50px 0px 1000px 44px;
 
  & .home-title{
    position: relative;
    display: flex;
    align-items: center;

    font-size: 4rem;
  }
  & span .home-icon-stats{
    vertical-align: text-bottom;
    font-size: 1.2rem;
  }
  & .home-stats{
    margin-left: auto;
    padding: 7px 7px;
    
    font-size: 1rem;
    color:white;
    
    background-color:var(--blue-800);
    border-radius: 5px;
    &:hover{
    background-color: var(--blue-500);
    transition: all 0.1s ease-in;
    cursor:pointer;
  }
  }
  & .home-greating{
    font-size: 1.3rem;
    margin: 5px 0;
  }

  & .home-icon{
    vertical-align: text-top;
  }
  & .home-btn{
    padding: 10px;
    width: 200px;
    
    color:white;
    font-size: 1rem;
    
    background-color: var(--blue-800);
    border-radius: 5px;
    border:none;
    box-shadow: var(--shadow-2);
    &:hover{
      background-color: var(--blue-500);
      transition: all 0.1s ease-in;
      cursor:pointer;
    }
  }
  @media screen and (max-width: 1040px) {
    height: 400px;
    & .home-stats{
      font-size: 1rem;
      padding: 7px 7px;
    }
  }
  @media screen and (max-width: 680px) {
    height: 500px;
    & span .home-icon-stats{
      vertical-align: text-bottom;
      font-size: 1rem;
    }
    & .home-stats{
      font-size: 0.9rem;
    }
  }
  @media screen and (max-width: 560px)  {
    & .home-stats-text{
      display: none;
    }
    & span .home-icon-stats{
      font-size: 1.2rem;
    }
    & .home-title{
      font-size: 3.2rem;
    }
  }
  @media screen and (max-width: 420px) {
    height: 600px;
    & .home-title{
      font-size: 2.8rem;
    }
    & .home-icon{
      display: none;
    }
  }
`
export default Wrapper
