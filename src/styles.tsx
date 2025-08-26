import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100vh;
  width: 100%;
  background-color: var(--gray-600);
`

export const InputAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`

export const Input = styled.input`
  border: none;
  padding: 0 12px;
  background-color: var(--gray-200);
  height: 45px;
  font-size: 18px;
  border-radius: 12px;
`

export const Button = styled.button`
  height: 35px;
  padding: 0 24px; 
  width: fit-content; 
  border-radius: 12px;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  background: rgba(204, 204, 204, 0.6);
  border: none;
  &:hover {
    background: rgba(204, 204, 204, 0.8);
    transition: 0.2s ease, color 0.2s ease;
  }
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  justify-content: center;
`

export const FormatedPrice = styled.p`
  color: var(--gray-300);
`

export const PriceValue = styled.p`
  color: var(--gray-200);
`