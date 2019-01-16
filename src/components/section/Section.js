import styled from 'styled-components'

export default styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 100px 0px 100px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:nth-child(even) {
    background-color: rgba(230,230,230,.75);
  }
  &:nth-child(1) {
    background-color: #131313;
  }
`
