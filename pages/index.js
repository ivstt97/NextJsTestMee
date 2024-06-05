import { Hero, AgencySelection } from "../sections";
import Head from "next/head";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const agencySelectionProps = {
  title: "Managed agency selection",
  subtitle: "Strengthen your onboarding process",
  videoSrc: {
    src: "/img/video.png",
    alt: "video",
    width: 394,
    height: 550,
  },
  steps: [
    {
      icon: {
        src: "/img/brief.png",
        alt: "Brief Icon",
        width: 40,
        height: 40,
      },
      title: "Brief",
      description:
        "Complete <b>brief writing</b> or simple guidance on what to include, we’ve got you covered.",
      width: "290px",
    },

    {
      icon: {
        src: "/img/search.png",
        alt: "Search Icon",
        width: 40,
        height: 40,
      },
      title: "Search",
      description:
        "In-depth agency search covering; <b>criteria matching</b>, door knocking and due-diligence vetting.",
      width: "330px",
    },
    {
      icon: {
        src: "/img/pitch.png",
        alt: "Pitch Icon",
        width: 40,
        height: 40,
      },
      title: "Pitch",
      description:
        "Comprehensive <b>pitch management</b>, including comms, diary management and pitch hosting.",
      width: "370px",
    },
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <Hero {...heroProps} />
        <AgencySelection {...agencySelectionProps} />
      </div>
    </>
  );
}
