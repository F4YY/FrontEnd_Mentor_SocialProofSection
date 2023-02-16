import React from 'react'
import { Hstack, StarsIcon, Styledrating } from './styled/Socialproof.styled'

export const Ratedstars = ({icon,description}) => {
  return (
    <Styledrating>
        <Hstack>
            <StarsIcon src={icon} alt='icon' />
            <StarsIcon src={icon} alt='icon' />
            <StarsIcon src={icon} alt='icon' />
            <StarsIcon src={icon} alt='icon' />
            <StarsIcon src={icon} alt='icon' />
        </Hstack>
        <h6>
            {description}
        </h6>
    </Styledrating>
  )
}
