import styled from "styled-components"
import { colors } from "../styled/config";



const Section = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    min-height: calc(100vh - 90px);
    padding: 2em;
    background-color: ${(props) => props.color || colors.White};
    overflow: hidden;
`;

const Container = styled.div`
    display: flex;
    flex-direction:${(props) => props.flexDirection || "row"} ;
    justify-content:${(props) => props.justifyContent || "space-around"} ;
    width:${(props) => props.width || "100%"} ;
    align-items:${(props) => props.alignItems || "center"} ;
    box-sizing: border-box;



    @media (max-width: 1600px) {
      width: 90%;
  }

    @media (max-width: 1000px) {
      width: 100%;
      flex-direction:column;
      align-content: center;
      justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: ${(props) => props.ReverseWarp ? "column-reverse" : "column"} ;
    }
`

export const SectionContainer = ({children, color, flexDirection,justifyContent, id,width, alignItems,ReverseWarp }) => {
  return (
    <Section color={color} id={id ?? undefined}>
      <Container flexDirection={flexDirection} justifyContent={justifyContent} width={width} alignItems={alignItems} ReverseWarp={ReverseWarp}>
        {children}
      </Container>
    </Section>
  )
}
