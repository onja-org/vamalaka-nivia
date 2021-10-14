import { DropDown } from '../components/DropDown/DropDown'
import { EditDescription } from '../components/EditDescription/EditDescription'
import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
import {
  Form,
  FormEditDetail,
  HeaderEditOffer,
  WapperEditOffer,
  WrapperButton,
} from '../components/EditorOffer/EditorOfferStyle'

export const EditorOffer = () => {
  return (
    <WapperEditOffer>
      <HeaderEditOffer>Edit Offer</HeaderEditOffer>
      <Form>
        <FormEditDetail>
          <Input
            label={'Product name*'}
            placeholder={''}
            inputType={''}
            inputId={'product'}
            inputValue={'Handmade bag'}
            onChange={() => {}}
          />
          <EditDescription
            textdescription={'description'}
            label={'Description*'}
          />
          <DropDown
            options={[{ label: 'food', value: 'food' }]}
            placeholder={'SELECT CATEGORY'}
            name={'category'}
            id={'category'}
            label={'Category'}
          />
          <Input
            label={'Price'}
            placeholder={'45'}
            inputType={''}
            inputId={'number'}
            inputValue={'45'}
            onChange={() => {}}
          />
          <DropDown
            placeholder={'currency'}
            options={[{ label: 'EURO', value: 'currency' }]}
            name={'currency'}
            id={'category'}
            label={'Currency'}
          />
          <DropDown
            placeholder={'Unit'}
            options={[{ label: 'unit', value: 'unit' }]}
            name={'unit'}
            id={'unit'}
            label={'Unit'}
          />
          <Input
            label={'Amount available'}
            placeholder={''}
            inputType={''}
            inputId={'amout'}
            inputValue={'2000 per month'}
            onChange={() => {}}
          />
        </FormEditDetail>
        <WrapperButton>
          <Button
            label={'Save changes'}
            isPrimary={true}
            type={'submit'}
            onClick={() => {}}
          />
          <Button
            label={'Reset'}
            isPrimary={true}
            onClick={() => {}}
            type={'button'}
          />
          <Button
            type={'button'}
            label={'Preview'}
            isPrimary={false}
            onClick={() => {}}
          />
          <Button
            type={'button'}
            label={'Delete'}
            isPrimary={true}
            onClick={() => {}}
          />
        </WrapperButton>
      </Form>
    </WapperEditOffer>
  )
}
