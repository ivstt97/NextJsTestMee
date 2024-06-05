import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #f9f9f9;
  border-radius: 10px;
  padding: 1.5rem;
  border: 2px solid transparent;
  transition: transform 0.2s, border-color 0.2s, color 0.2s;
  width: ${({ width }) => width};

  &:hover {
    border-color: #0070f3;
    transform: translateY(-5px);

    h3 {
      color: #0070f3;
      text-decoration: underline;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SectionInnerHeading = styled.h3`
  font-size: 1.2rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #333;
`;

export const SectionParagraph = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #555;
`;

export const StyledImageContainer = styled.div`
  margin-right: 1rem;
  flex-shrink: 0;

  @media (max-width: 767px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;
