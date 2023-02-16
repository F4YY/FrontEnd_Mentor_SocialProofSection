import React from 'react';
import { Container } from './styled/Container.styled';
import colton from './images/image-colton.jpg';
import irene from './images/image-irene.jpg';
import anne from './images/image-anne.jpg';
import star from './images/icon-star.svg';
import { Card } from './Card';
import { Attribution, AttributionA, Hstack, Hstackflexi, StyledMainInfo, Styledspreadcards, Styledspreadrating, Vstack } from './styled/Socialproof.styled';
import { Ratedstars } from './Ratedstars';

const Ratingstars = [
  {
    starsicon: star,
    description: 'Rated 5 Stars in Reviews'
  },
  {
    starsicon: star,
    description: 'Rated 5 Stars in Report Guru'
  },
  {
    starsicon: star,
    description: 'Rated 5 Stars in BestTech'
  },
]

const Triplecards = [
  {
    profpic:colton,
    name:'Colton Smith',
    buyerstatus:'Verified Buyer',
    testimony:'"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"'
  },
  {
    profpic:irene,
    name:'Irene Roberts',
    buyerstatus:'Verified Buyer',
    testimony:'"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."'
  },
  {
    profpic:anne,
    name:'Anne Wallace',
    buyerstatus:'Verified Buyer',
    testimony:'"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"'
  },
]

export const SocialProof = () => {
  return (
    <Container>
      <Vstack>
        <Hstackflexi>
          <Vstack>
            <StyledMainInfo>
              <h1>
                10,000+ of our users love our products.
              </h1>
              <h5>
                We only provide great products combined with excellent customer service.
                See what our satisfied customers are saying about our services.
              </h5>
            </StyledMainInfo>
          </Vstack>
          <Vstack>
            <Styledspreadrating>
              {Ratingstars.map((rating)=>
                <Ratedstars
                  key={rating.description}
                  icon={rating.starsicon}
                  description={rating.description}
                />
              )}
            </Styledspreadrating>
          </Vstack>
        </Hstackflexi>
        <Hstack>
          <Styledspreadcards>
            {Triplecards.map((eachcard)=>
              <Card
                key={eachcard.name}
                profpic={eachcard.profpic}
                name={eachcard.name}
                buyerstatus={eachcard.buyerstatus}
                testimony={eachcard.testimony}
              />
            )}
          </Styledspreadcards>
        </Hstack>
      </Vstack>
      <Attribution>
      <AttributionA>
                <h4>Challenge by<a href="https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA/hub" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | Social Proof Section.</a></h4>
            </AttributionA>
            <AttributionA>
                <h4>&nbsp;&nbsp;Coded by <a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></h4>
            </AttributionA>
        </Attribution>
    </Container>
  )
}
