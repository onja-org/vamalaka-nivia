import React from 'react'
import { FETCH_STATUS, ICON_SIZE } from '../../constants'

import { Offer } from '../Offer/Offer'
import { PendingIndicator } from '../PendingIndicator/PendingIndicator'

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
  offers: OfferData[]
  status: string
}
const ListOffers: React.FC<ListOffersProps> = ({
  offers,
  status: pendingStatus,
}) => {
  return (
    <>
      {pendingStatus === FETCH_STATUS.LOADING && (
        <PendingIndicator size={ICON_SIZE.LARGE_ICON} />
      )}
      {offers?.map((offer) => {
        return (
          <Offer
            key={offer.id}
            imageForOffer={offer.photos}
            imageDescription=''
            offerName={offer.title}
            currency={offer.currency}
            unit={offer.price}
            ratingDescription='Star'
            imageForRating=''
            offerDescription={offer.body}
            isPrimary={true}
            isFavourited={false}
            detailButtonText='See details'
            favoriteButtonText='Add to favourite'
            profile=''
            name={offer.username}
            location={{ city: 'Mahanoro', country: 'Madagascar' }}
            amountOfProduct={30}
            star={3}
            amount={25}
          />
        )
      })}
    </>
  )
}

export default ListOffers
