import styled from 'styled-components'

const Wrapper = styled.article`
  position: relative;
  
  display:flex;
  flex-direction:column;
  width: 80%;
  height: 60%;
  margin: auto;
  margin-top: 20px;
  padding: 30px;
  
  font-family: var(--bodyFont);
  color: var(--blue-800);
  hyphens: manual;
  
  border:1px solid var(--blue-400);
  border-radius: 5px;
  background-color: white;
  box-shadow: var(  --shadow-1);
  & .card-title{
    font-size: 18px;
    margin: 10px 0;
  }
  & .card-question-count{
    position: absolute;
    right: 20px;
    top: 20px;
  }

  & .card-question{
    margin: 0px;
    padding-right:40px;

    font-family:var( --headingFont);
    font-size: 25px;
    line-height: 30px;
  }
  & .card-answer{
    border-radius: 5px;
    margin:  0;
    font-size: 16px;
    padding: 10px 10px;
  }
  & .correct{
    background-color: var(--blue-500);
    color:white;
  }
  & .incorrect{
    background-color: lightcoral;
    color:white;
  }

  @media screen and (min-width: 1200px) {
    font-size: 20px;
    & .card-question{
      font-size: 30px;
      line-height: 35px;
    }
    & .card-title{
      font-size: 16px;
    }
  }
  @media screen and (max-width: 1200px) {
    & .card-question{
  line-height: 30px;
  }
  }
  @media screen and (max-width: 680px) {
    & .card-question{
    font-size: 20px;
    line-height: 20px;
    }
    & .card-answer{
      font-size: 15px;
      padding: 10px 8px;
    }
    & .card-title{
      font-size: 15px;
    }
    & .card-btn{
      font-size: 15px;
    }
  } 
  @media screen and (max-width: 560px) {
    width: 90%;
    margin-top: 10px;
  }
  @media screen and (max-width: 420px) {
    padding: 12px 15px;
    & .card-answers-list{
      margin-bottom:60px;
    }
    & .card-question-count{
      font-size: 15px;
    }
    & .card-question{
      font-size: 18px;
      line-height: 18px;
    }
    & .card-answer{
      font-size: 13px;
      padding: 10px 8px;
    }
    & .card-title{
      font-size: 14px;
    }
    & .card-btn{
      width: 120px;
      font-size: 13px;
    }
  } 
`
export default Wrapper
