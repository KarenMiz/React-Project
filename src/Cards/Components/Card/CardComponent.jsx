import React from 'react'
import { CardActionArea, Card } from '@mui/material';
import CardBody from './CardBody';
import CardHeaderComponent from './CardHeaderComponent';
import CardActionBar from './CardActionBar';
import { useNavigate } from 'react-router-dom';
import ROUTES from "../../../routes/routesModel";

export default function CardComponent({ card, handleCardsDelete, handleCardsLike }) {
  const navigate = useNavigate();
  return (<>
    <Card sx={{ width: 250, m: 2, display: 'flex', flexDirection: 'column' }}>
      <CardActionArea
        onClick={() => navigate(ROUTES.CARD_INFO + "/" + card._id)}
      >
        <CardHeaderComponent image={card.image} />
        <CardBody
          bizNumber={card.bizNumber}
          title={card.title}
          subtitle={card.subtitle}
          phone={card.phone}
          address={card.address}
          email={card.email}
        />

      </CardActionArea>
      <div style={{ marginTop: 'auto' }}>
        <CardActionBar
          handleCardsLike={handleCardsLike}
          handleCardsDelete={handleCardsDelete}
          cardId={card._id}
          userId={card.user_id}
          likes={card.likes}
          phone={card.phone}
        />
      </div>
    </Card>
  </>
  );
}
