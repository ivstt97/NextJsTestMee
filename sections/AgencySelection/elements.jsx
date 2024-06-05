import styled from "styled-components";
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "~/components";

export const Wrapper = styled(SectionContainer)`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 5rem auto;
  background-image: url("/img/background.png");
  background-repeat: no-repeat;
  background-size: contain;
`;

export const StyledTitle = styled(SectionBigHeading)`
  text-align: center;
  color: black;
  margin-bottom: 0.5rem;
`;

export const StyledDescription = styled(SectionSubheading)`
  text-align: center;
  color: black;
  margin-bottom: 2rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin-top: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const VideoContainer = styled.div`
  padding: 0 2rem;
  flex: 1;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  flex: 1;
  max-width: 100%;
  padding: 0 2rem;

  @media (min-width: 768px) {
    max-width: 50%;
  }
`;
