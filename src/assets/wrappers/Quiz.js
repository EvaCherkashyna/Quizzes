import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;

  display:flex;
  flex-direction:column;
  width:300px;
  height: 400px;
  padding: 10px;

  font-family: var(--bodyFont);

  border:1px solid var(--blue-400);
  border-radius: 5px;
  background-color: white;
  box-shadow: var(  --shadow-1);
  
  & .quiz-count{
    position: absolute;
    bottom: 45px;
  }
  & .quiz-name{
    margin: 10px 0;

    font-family: var( --headingFont);
    color:var(--blue-800);
    font-size: 20px;
  }
  & .quiz-banner{
    width:100%;
    height:200px;

    border-radius: 5px;
    background-image: url(${props => props.src});
    background-position: center;
  }
  & .quiz-icon{
    vertical-align: text-top;
    font-size: 22px;
  }
  & .quiz-start-btn{
    position: absolute;
    bottom: 15px;
    
    display: flex;
    width: 150px;
    min-width: max-content;
    padding: 7px 10px;
    
    color: #fff;
    font-family: var(--bodyFont);
    
    background-color: var(--blue-800);
    border: none;
    border-radius: 5px;
    box-shadow: var(  --shadow-2);
    transition: all 0.1s ease-in;
    &:hover{
      background-color: var(--blue-500);
    }
    &:disabled{
      background-color: gray;
    }
  }
  @media screen and (min-width: 1400px) {
    width: 22rem;
    & .quiz-count{
      font-size: 20px;
    }
    & .quiz-name{
      font-size: 22px;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 44%;
  }

  @media screen and (max-width: 680px) {
    width: 70%;
    height: 450px;
    margin: auto;
    & .quiz-banner{
      height:250px;
    }

  }
  @media screen and (max-width: 620px) {
    width: 80%;

  }
  @media screen and (max-width: 420px) {
    width: 90%;
    height: 400px;
    & .quiz-banner{
      height:200px;
    }
  }
`
export default Wrapper;
