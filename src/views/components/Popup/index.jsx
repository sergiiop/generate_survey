import { PopupContainer, PopupInner } from './Popup.styled'

const Popup = ({ trigger, children }) => {
  return trigger ? (
    <PopupContainer>
      <PopupInner>{children}</PopupInner>
    </PopupContainer>
  ) : (
    ''
  )
}

export { Popup }
