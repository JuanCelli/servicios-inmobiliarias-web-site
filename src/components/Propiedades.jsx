import styled from "styled-components"
import { colors } from "../styled/config"
import StraightenIcon from '@mui/icons-material/Straighten';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import DriveEtaIcon from '@mui/icons-material/DriveEta';

const ContainerPropiedad = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40rem;
    border-radius: .8rem;
    overflow: hidden;
    transition: 0.4s;

    &:hover{
        box-shadow: 0 0 40px ${colors.Color1};
    }
`

const ImgPropiedad = styled.img`
    width: 100%;
    height: 25rem;
    object-fit: cover;
`

const ContainerInfo = styled.div`
    background-color:${colors.White};
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
`

const TitlePropiedad = styled.h5`
    font-size: 2rem;
    font-weight: 400;
    `
const Location = styled.h6`
    font-size: 1rem;
    font-weight: 300;
`

const ContainerPrice = styled.div`
    background-color:${colors.fontArticules};
    color: ${colors.White};
    font-size: 1.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
`

const ContainerIconsInfo = styled.div`
    margin-top: 1rem;
    display: flex;
`

const ContainerIcon = styled.div`
    display: flex;
    margin: 0rem .3rem;
`

const TextInfo = styled.p`
    margin-left: .3rem;
`

const Propiedades = ({img, title, location, rooms, size, garage}) => {
  return (
    <ContainerPropiedad>
        <ImgPropiedad src={img}></ImgPropiedad>
        <ContainerInfo>
            <TitlePropiedad>{title}</TitlePropiedad>
            <Location>{location}</Location>
            <ContainerIconsInfo>
                <ContainerIcon>
                    <StraightenIcon fontSize="small" sx={{color:colors.fontArticules}}/>
                    <TextInfo>{size} M2</TextInfo>
                </ContainerIcon>
                <ContainerIcon>
                    <SingleBedIcon fontSize="small" sx={{color:colors.fontArticules}}/>
                    <TextInfo>{rooms} Dormitorios.</TextInfo>
                </ContainerIcon>
                <ContainerIcon>
                    <DriveEtaIcon fontSize="small" sx={{color:colors.fontArticules}}/>
                    <TextInfo>{garage}</TextInfo>
                </ContainerIcon>


            </ContainerIconsInfo>
        </ContainerInfo>
        <ContainerPrice>USD 100000</ContainerPrice>
    </ContainerPropiedad>
  )
}

export default Propiedades