import Image from "next/image";
import { Card } from "../../collections/Card/Card";
import {
  Wrapper,
  StyledTitle,
  StyledDescription,
  VideoContainer,
  StepsContainer,
  ContentContainer,
} from "./elements";

export const AgencySelection = ({
  title,
  subtitle,
  videoSrc,
  steps,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{subtitle}</StyledDescription>
      <ContentContainer>
        <VideoContainer>
          <Image
            src={videoSrc.src}
            alt={videoSrc.alt}
            width={videoSrc.width}
            height={videoSrc.height}
            layout="intrinsic"
          />
        </VideoContainer>
        <StepsContainer>
          {steps.map((step, index) => (
            <Card
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              width={step.width}
            />
          ))}
        </StepsContainer>
      </ContentContainer>
    </Wrapper>
  );
};
