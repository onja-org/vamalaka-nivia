import React from 'react'

import { Offer } from '../Offer/Offer';

interface Photo {
  url: string
  info: string
  isPrimary: boolean
}

interface OfferData {
  id: string
  title: string
  body: string
  photos: Photo[]
  currency: string
  price: string
  username: string
  
}
export interface ListOffersProps {
  offers: OfferData[];
}
const ListOffers: React.FC<ListOffersProps> = ({ offers }) => {
  
  return (
    <>
      {offers?.map((offer) => {
          return (
            <Offer key={offer.id}
              imageForOffer= {offer.photos}
              imageDescription= ''
              offerName= {offer.title}
              currency= {offer.currency}
              unit= {offer.price}
              ratingDescription= "Star"
              imageForRating= ''
              offerDescription= {offer.body}
              isPrimary= {true}
              isFavourited= {false}
              detailButtonText= 'See details'
              favoriteButtonText= 'Add to favourite'
              profile= ""
              name={offer.username}
              location= {{ city: "Mahanoro", country: "Madagascar"}}
              amountOfProduct= {30}
              star= {3}
              amount= {25}
            />
          )
      })}
    </>
  )
}

export default ListOffers
