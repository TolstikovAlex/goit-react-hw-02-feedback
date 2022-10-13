import styled from 'styled-components';

export const StatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.normal};
`;
export const StatsRow = styled.span`
  color: ${props => props.theme.colors.text};
  :not(:last-child) {
    margin-bottom: ${props => props.theme.space[4]}px;
  }
`;
