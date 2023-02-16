import React from 'react'
import { ProfpicCard, Styledcard, UppersideCard, Vstack } from './styled/Socialproof.styled';

export const Card = ({profpic,name,buyerstatus,testimony}) => {
  return (
    <Styledcard>
      <UppersideCard>
        <ProfpicCard src={profpic} alt='profpic' />
        <Vstack>
          <h3>
            {name}
          </h3>
          <h4>
            {buyerstatus}
          </h4>
        </Vstack>
      </UppersideCard>
      <p>
        {testimony}
      </p>
    </Styledcard>
  )
}
