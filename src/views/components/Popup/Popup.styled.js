import styled from 'styled-components'

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PopupInner = styled.div`
  position: relative;
  padding: 50px 32px;
  width: 80%;
  max-width: 450px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
`
