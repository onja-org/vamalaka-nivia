import React from 'react'
import styled from 'styled-components'
import { CategoryItem } from '../CategoryItem/CategoryItem'
import { PendingIndicator } from '../PendingIndicator/PendingIndicator'
import {FETCH_STATUS, ICON_SIZE} from "../../constants/index";

export interface CategoryListProps {
  primary: boolean
  categories: { id: string | number; title: string }[]
  selectCategory: () => void
  status: string 
}

const CategoryListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
`

export const CategoryList: React.FC<CategoryListProps> = ({
  primary,
  categories,
  selectCategory,
  status: categoriesStatus
}) => {
  return (
    <CategoryListContainer>
      {categoriesStatus === FETCH_STATUS.LOADING && <PendingIndicator size={ICON_SIZE.MEDIUM_ICON} />}
      {categories.map((category: { id: string | number; title: string }) => (
        <CategoryItem
          key={category.id}
          item={category.title}
          primary={primary}
          selectCategory={selectCategory}
        />
      ))}
    </CategoryListContainer>
  )
}
