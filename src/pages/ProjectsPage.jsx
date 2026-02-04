import React from 'react'
import ProjectsHeroSection from '../components/ProjectsHeroSection'
import LatestWorksSection from '../components/LatestWorksSection'
import ClientsSection from '../components/ClientsSection'
import FooterSection from '../components/FooterSection'

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <ProjectsHeroSection />
      <LatestWorksSection showProjectsSubtitle={true} hideCta={true} />
      <ClientsSection />
      <FooterSection />
    </div>
  )
}

export default ProjectsPage
