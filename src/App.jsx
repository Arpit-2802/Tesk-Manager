import SideBar from './components/SideBar'
import NewProject from './components/NewProject';
import FallBack from './components/FallBack';
import { useState } from 'react';
import SelecetedProject from './components/SelectedProject';

function App() {

  const[projectsState, setProjectsState]=useState({
    selectedProject: undefined,
    projects: [],
  })

  function handleDeleteProject(){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter((project)=> project.id!== prevState.selectedProject)
      }
    })
  }

  function handleSelectProject(id){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProject:id,
      }
    })
  }

  function handleStartAddProject(){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProject:null,
      }
    })
  }

  function handleCancelProject(){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProject:undefined,
      }
    })
  }

  function handleAddProject(projectData){
    setProjectsState(prevState=>{
      const newProject= {
        ...projectData,
        id:Math.random()
      }
      return{
        ...prevState,
        selectedProject: undefined, 
        projects: [...prevState.projects,newProject]
      }
    })
  }

  console.log(projectsState)

  const selectedProjectId=projectsState.projects.find(project => project.id === projectsState.selectedProject)

  let content=<SelecetedProject project={selectedProjectId} onDelete={handleDeleteProject}/>;
  if(projectsState.selectedProject===null){
    content=<NewProject onAdd={handleAddProject} onCancel={handleCancelProject}/>
  }else if(projectsState.selectedProject===undefined)
    content=<FallBack onStartAddProject={handleStartAddProject}/>

  return (
    <>
      <main className='h-screen my-8 flex gap-8'>
        <SideBar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject}/>
        {content}
      </main>
    </>
  );
}

export default App;
