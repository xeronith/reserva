import styled from 'styled-components/native'

export const ContainerView = styled.View`
  flex: 1;
  padding: 30px;
`

export const AvailableTimeView = styled.View`
  padding: 20px 0;
  margin-bottom: 10px;
  border-radius: 10px;
`

export const GrayAvailableTimeView = styled(AvailableTimeView)`
  padding: 20px;
  background-color: #fff;
  border-width: 1px;
  border-color: #ddd;
`

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
`

export const CustomerName = styled.Text`
  font-size: 25px;
  font-weight: bold;
`

export const CustomerEmail = styled.Text`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 30px;
`

export const Time = styled.Text`
  font-size: 20px;
  font-weight: bold;
`

export const Period = styled.Text`
  color: #c00;
  font-size: 15px;
`

export const Fee = styled.Text`
  position: absolute;
  right: 15px;
  bottom: 15px;
  font-size: 45px;
  font-weight: bold;
  color: #666;
`

export const Message = styled.Text`
  padding: 30px 0;
  font-size: 20px;
`

export const ErrorMessage = styled.Text`
  padding: 30px 0;
  font-size: 20px;
  color: red;
`

export const ImageContainerView = styled.View`
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 30px;
  border-radius: 10px;
  overflow: hidden;
`

export const ImageView = styled.Image`
  resize-mode: cover;
  flex: 1;
  aspect-ratio: 1.5;
`

export const Input = styled.TextInput`
  padding: 20px;
  border-color: #ccc;
  border-width: 1px;
  background-color: #fff;
  border-radius: 10px;
  font-size: 20px;
  width: 100%;
  margin-bottom: 20px;
`