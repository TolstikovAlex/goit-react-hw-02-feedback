import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: ${props => props.theme.sizes.large};
  margin-top: ${props => props.theme.space[5]}px;
  padding-bottom: ${props => props.theme.space[7]}px;
  flex-direction: column;
  align-items: center;
  border: ${props => props.theme.borders.normal};
  border-radius: ${props => props.theme.radii.normal};
  background-color: ${props => props.theme.colors.accent};
  box-shadow: ${props => props.theme.shadows.normal};
`;
