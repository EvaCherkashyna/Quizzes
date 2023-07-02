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
  
  color: var(--blue-800);
  hyphens: manual;
  font-family: var(--bodyFont);
  
  border:1px solid var(--blue-400);
  border-radius: 5px;
  background-color: white;
  box-shadow: var(  --shadow-1);
  & .card-title{
    font-size: 2rem;
    margin: 10px 0;
  }
  & .card-paragraph{
    font-size: 1rem;
    margin:  5px 0;
  }  
  @media screen and (min-width: 1200px) {
    font-size: 20px;

    & .card-title{
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 680px) {
    & .card-title{
      font-size: 1.4rem;
    }
  }   
  @media screen and (max-width: 560px) {
    width: 90%;
    margin-top: 10px;
  }
  @media screen and (max-width: 420px) {
    padding: 12px 15px;
    & .card-title{
      font-size: 1.2rem;
    }
  } 
`
export default Wrapper
