import React from 'react'
import MainContainer from '../components/MainContainer'
import { SectionContainer } from '../components/SectionContainer'
import { colors } from '../styled/config'
import { BackgroundImg } from '../components/BackgroundImg'
import Propiedades from '../components/Propiedades'



const Inicio = ({text}) => {
  return (
    <MainContainer >
        <BackgroundImg></BackgroundImg>
        <SectionContainer color={colors.Section1}>
            <Propiedades title="Campana y Jonte" img="/assets/PropiedadCampana.jpg" location="Villa del Parque" garage="Si" rooms={3} size={250}/>
            <Propiedades title="Chenaut y Luis María Campos" img="/assets/PropiedadChenaut.jpg" location="Las Cañitas" garage="No" rooms={1} size={125} />
        </SectionContainer>
        <SectionContainer>
        </SectionContainer>
    </MainContainer>
  )
}



export default Inicio