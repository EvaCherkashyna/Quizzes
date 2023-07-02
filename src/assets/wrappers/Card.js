import styled from 'styled-components'

const Wrapper = styled.article`
  position: relative;
  width: 80%;
  height: 60%;

  display:flex;
  flex-direction:column;
  padding: 30px;
  margin: auto;
  margin-top: 20px;

  font-family: var(--bodyFont);
  hyphens: manual;

  border:1px solid var(--blue-400);
  border-radius: 5px;
  background-color: white;
  box-shadow: var(  --shadow-1);

  & .card-question-count{
    position: absolute;
    right: 20px;
    top: 20px;
  }
  & .card-question{
    padding-right:40px;
    margin: 0px;

    font-family:var( --headingFont);
    font-size: 25px;
    line-height: 30px;
  }
  & .card-answer{
    margin:  0;
    padding: 10px 10px;

    font-size: 16px;
    border-radius: 5px;

    &:hover{
      color:var(--blue-800);
      cursor:pointer;
      background-color: var(--blue-400);
    }
  }
  & .card-answer-choosed{
  background-color: var(--blue-800);
  color:white;
  }
  & .card-warning{
    margin: -40px 0 40px 0;
    color:lightcoral;
  }
  & .card-btn{
    position: absolute;

    width:150px;
    padding: 7px 9px;
    
    color: white;
    font-size: 16px;
    
    border:none;
    background-color:var(--blue-800);
    bottom:20px;
    border-radius: 5px;
    &:hover{
      background-color: var(--blue-600);
      cursor:pointer;
      transition: all 0.1s ease-in;
    }
  }
  & .card-next-btn{
    right:20px;
  }
  & .card-time{
    position: absolute;
    bottom: -40px;
    left: 0;
    
    margin: 0 auto;
    
    color:white;
  }
  & .card-answers-list{
    margin-bottom:40px;
  }
  @media screen and (min-width: 1200px) {
    & .card-question{
      font-size: 30px;
      line-height: 35px;
    }
    font-size: 20px;
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
    & .card-btn{
      width: 120px;
      font-size: 13px;
    }
    & .card-answers-list{
      margin-bottom:40px;
    }
  }


`
export default Wrapper
