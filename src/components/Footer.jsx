import styled from "styled-components"
import { colors } from "../styled/config"

import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Item from "./ItemLinkContact.jsx";



const ContainerFooter = styled.footer`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    min-height: 35vh;
    background-color: ${colors.Color3};
    padding: 2rem 0rem;
`

const SectionFooter = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem 1.2rem;
`

const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  `



const TitleSection = styled.h2`
  margin-bottom: 1rem;
  color: ${colors.fontArticules};
  font-weight: 400;
  font-size: 1.5rem;
`

const Map = styled.iframe`
`





const Footer = () => {
  return (
    <ContainerFooter>
      <SectionFooter>
        <TitleSection>Contacto</TitleSection>
        <ContainerItems>
          <Item icon={<InstagramIcon fontSize="medium"/>} url="https://www.instagram.com/veronicagorrita" text="@veronicagorrita"/>
          <Item icon={<WhatsAppIcon fontSize="medium"/>} url="https://wa.me/5401136332152" text="+54 011 36332152"/>
          <Item icon={<MailOutlineIcon fontSize="medium"/>} url="mailto:serviciosinmobiliarios.vg@gmail.com" text="serviciosinmobiliarios.vg@gmail.com"/>
        </ContainerItems>
      </SectionFooter>
      <SectionFooter>
        <TitleSection>Info</TitleSection>
        <ContainerItems>
          <Item icon={<LocationOnIcon fontSize="medium"/>} text="Maure 3549, CABA"/>
          <Item icon={<BeenhereIcon fontSize="medium"/>} text="Matricula CUCICBA: 8893"/>
          <Item icon={<AccessTimeIcon fontSize="medium"/>} text="Horarios: Lunes a Viernres de 10 a 18hs"/>
        </ContainerItems>
      </SectionFooter>
    </ContainerFooter>
  )
}

export default Footer