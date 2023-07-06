import Education from "./components/Education";
import ExperienceResume from "./components/ExperienceResume";
import { Languages } from "./components/Languages";
import MainSection from "./components/MainSection";
import PageContainer from "./components/PageContainer";
import Reference from "./components/Reference";
import SideSection from "./components/SideSection";
import Skills from "./components/Skills";

function PageThree() {
  return (
    <PageContainer>
      <article className="pt-4">
        <div className="mx-4">
          <ExperienceResume />
        </div>
      </article>
      <div className="flex flex-col bg-gradient-to-br from-sky-800 to-sky-950 text-white mb-4 p-4">
        <SideSection title="Compétences">
          <Skills />
        </SideSection>
        <SideSection title="Langues">
          <Languages />
        </SideSection>
        <SideSection title="Références">
          <div className="flex">
            <Reference name="Stephen O'Reilly" company="Dailymotion" role="Engineering Manager" email="stephen.oreilly@dailymotion.com" />
          </div>
        </SideSection>
        <SideSection title="Formation">
          <div className="flex">
            <Education school="ITIS Formation" course="BTS IRIS" startDate={new Date("2008-09-01")} endDate={new Date("2010-08-01")} />
            <Education school="INGESUP Paris" course="Cycle d'ingénierie TRSE" startDate={new Date("2010-09-01")} endDate={new Date("2012-08-01")} />
          </div>
        </SideSection>
      </div>
    </PageContainer >
  );
}

export default PageThree;
