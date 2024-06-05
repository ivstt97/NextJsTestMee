import Image from "next/image";
import {
  CardWrapper,
  SectionInnerHeading,
  SectionParagraph,
  StyledImageContainer,
} from "./elements";

export const Card = ({ icon, title, description, width, ...props }) => {
  return (
    <CardWrapper width={width}>
      <StyledImageContainer>
        <Image
          src={icon.src}
          alt={icon.alt}
          width={icon.width}
          height={icon.height}
        />
      </StyledImageContainer>
      <div>
        <SectionInnerHeading>{title}</SectionInnerHeading>
        <SectionParagraph dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </CardWrapper>
  );
};
