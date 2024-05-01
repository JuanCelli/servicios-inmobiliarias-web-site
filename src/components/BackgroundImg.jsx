import styled from "styled-components"
import { colors } from "../styled/config"

const ImgContainer = styled.div`
    background-image: url("/assets/ImgInicio.jpg") ;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;


    @media (max-width: 768px) {
      height: 100vh;
  }
    `;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100;
  position: absolute;
  top:0;
  overflow: hidden;



`

const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: ${colors.TrasparentInicio} ; */
  position: relative;
  border-radius: 1rem;
  height: 10rem;
  top: 20%;
  border-color:4px ${colors.Color1};
  /* box-shadow: 0 0 15px ${colors.Section1}; */
  z-index: 5;
`

const Title = styled.h2`
  font-style: italic;
  font-size: 2.5rem;
  font-weight: 500;
  color: ${colors.Color8} ;
  justify-self: center;
  margin: 2rem;
  text-align: center;
  z-index: 5;

  @media (max-width: 768px) {
    top:30%;
    font-size: 2rem;
  }
`


export const BackgroundImg = () => {
  return (
    <ImgContainer>
      {/* <Img src="/assets/ImgInicio.jpg"/> */}
      <ContainerTitle>
        <Title>La confianza es mi garantía y tu satisfacción mi prioridad</Title>
      </ContainerTitle>
      
    </ImgContainer>
  )
}
