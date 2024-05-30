import PageHeader from '../../component/PageHeader';
import React, { useEffect } from 'react'
import CardsFeedback from '../Components/CardsFeedback';
import useCards from '../hooks/useCards';
import AddNewCardButton from '../Components/AddNewCardButton';


export default function CardPage() {
  const {  value, getAllCards,handleCardsLike, handleCardsDelete,  } = useCards();
  const {isLoading, error,filterCard} =value;
  useEffect(() => {
    getAllCards();
  }, [getAllCards]);



  return (<>
    <PageHeader
      title="Cards"
      subtitle="On This Page You Can Find All Bussines Cards From All Categories"
    />
     {error && <p>Error: {error}</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
    <CardsFeedback
      cards={filterCard}
      handleCardsLike={handleCardsLike}
      handleCardsDelete={handleCardsDelete}
      isLoading={isLoading}
      error={error}
    />)}
    <AddNewCardButton />
  </>
  );
}
