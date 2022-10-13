import styled from 'styled-components';

export const Btn = styled.button`
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.m};
  padding: ${props => props.theme.space[3]}px;
  border-radius: ${props => props.theme.radii.normal};
  box-shadow: ${props => props.theme.shadows.medium};
  cursor: pointer;

  :not(:last-child) {
    margin-right: ${props => props.theme.space[4]}px;
  }
`;
