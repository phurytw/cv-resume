import ExperienceChocochoBot from "./components/ExperienceChococho";
import ExperienceMediaImmo from "./components/ExperienceMediaImmo";
import ExperienceOuiSncfCont from "./components/ExperienceOuiSncfCont";
import MainSection from "./components/MainSection";
import PageContainer from "./components/PageContainer";

function PageTwo() {
  return (
    <PageContainer>
      <main className="pt-4">
        <div className="mx-4">
          <ExperienceOuiSncfCont />
          <ExperienceMediaImmo />
        </div>
        <MainSection title="Projets personnels">
          <ExperienceChocochoBot />
        </MainSection>
      </main>
    </PageContainer >
  );
}

export default PageTwo;
