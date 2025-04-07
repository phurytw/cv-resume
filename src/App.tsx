import Avatar from "./components/Avatar";
import Contact from "./components/Contact";
import Education from "./components/Education";
import ExperienceDailymotion from "./components/ExperienceDailymotion";
import ExperienceMediaImmo from "./components/ExperienceMediaImmo";
import ExperienceOuiSncf from "./components/ExperienceOuiSncf";
import ExperienceUbisoft from "./components/ExperienceUbisoft";
import Hobbies from "./components/Hobbies";
import { Languages } from "./components/Languages";
import MainSection from "./components/MainSection";
import Name from "./components/Name";
import SideSection from "./components/SideSection";
import { Skills } from "./components/Skills";
import Title from "./components/Title";

function App() {
  return (
    <div className="w-[816px] h-[1056px] overflow-hidden">
      <div className="flex">
        <main className="w-4/6">
          <div className="flex">
            <Avatar />
            <div className="flex flex-col w-full items-start m-4 mb-2 justify-evenly">
              <Name />
              <Title />
            </div>
          </div>
          <MainSection title="Expérience professionnelle">
            <ExperienceUbisoft />
            <ExperienceDailymotion />
            <ExperienceOuiSncf />
            <ExperienceMediaImmo />
          </MainSection>
        </main>
        <aside className="w-2/6 p-4 h-[1056px] bg-gradient-to-r from-cyan-700 to-blue-800 text-white flex flex-col items-center">
          <SideSection title="Contact">
            <Contact />
          </SideSection>
          <SideSection title="Compétences">
            <Skills />
          </SideSection>
          <SideSection title="Langues">
            <Languages />
          </SideSection>
          <SideSection title="Formation">
            <Education
              school="ITIS Formation"
              course="BTS IRIS"
              startDate={new Date("2008-09-01")}
              endDate={new Date("2010-08-01")}
            />
            <Education
              school="INGESUP Paris"
              course="Cycle d'ingénierie TRSE"
              startDate={new Date("2010-09-01")}
              endDate={new Date("2012-08-01")}
            />
          </SideSection>
          <SideSection title="Centres d'intérêt">
            <Hobbies />
          </SideSection>
        </aside>
      </div>
    </div>
  );
}

export default App;
