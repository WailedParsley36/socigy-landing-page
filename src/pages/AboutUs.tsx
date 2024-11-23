// import Hero from "@/components/hero-about";
// import Timeline from "@/components/timeline";
// import Team from "@/components/team";
// import Benefits from "@/components/benefits";
// import Career from "@/components/career";
// import Clients from "@/components/clients";
// import Cta from "@/components/cta";
import Hero from "../sections/about-us/Hero";
import Timeline from "../sections/about-us/Timeline";
import Team from "../sections/about-us/Team";
import PageMetadata from "../components/PageMetadata";

export default function AboutUs() {
  return (
    <>
      <PageMetadata title={"Socigy - Get To Know Us More!"} description={"We had enough of the big tech gigants not caring for their people inside their social networks and here we are, building the next age of social networks"} />

      <Hero />
      <Timeline />
      <Team />
      {/* <Timeline />
      <Team />
      <Benefits />
      <Career />
      <Clients />
      <Cta /> */}
    </>
  );
}
