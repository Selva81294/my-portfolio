import './App.css';
import Contact from './Components/Contact/Contact';
import ExperienceContainer from './Components/ExperienceContainer/ExperienceContainer';
import Headers from './Components/headers/Headers';
import ProjectContainer from './Components/ProjectContainer/ProjectContainer';
import SkillContainer from './Components/SkillContainer/SkillContainer';
import TopContainer from './Components/TopContainer/TopContainer';

function App() {
  return (
    <div className="App">
       <Headers/>
       <TopContainer/>
       <SkillContainer/>
       <ProjectContainer/>
       <ExperienceContainer/>
       <Contact/>
    </div>
  );
}

export default App;
