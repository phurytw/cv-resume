import Avatar from "./components/Avatar";
import Contact from "./components/Contact";
import ExperienceDailymotion from "./components/ExperienceDailymotion";
import ExperienceOuiSncf from "./components/ExperienceOuiSncf";
import MainSection from "./components/MainSection";
import Name from "./components/Name";
import PageContainer from "./components/PageContainer";
import Title from "./components/Title";

function PageOne() {
  return (
    <PageContainer>
      <header className="w-full bg-gradient-to-br from-sky-800 to-sky-950 text-white mb-4">
        <div className="flex pb-4">
          <Avatar />
          <div className="flex flex-col w-full items-start m-4 mb-2 p-2 justify-evenly">
            <Name />
            <Title />
            <Contact />
          </div>
        </div>
      </header>
      <div className="flex">
        <main>
          <MainSection title="Expérience professionnelle - années d'expérience: 10">
            <ExperienceDailymotion />
            <ExperienceOuiSncf />
          </MainSection>
        </main>
      </div>
    </PageContainer >
  );
}

export default PageOne;
