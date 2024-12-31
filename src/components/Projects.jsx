import React from 'react'
import data from '../components/lib/data'
import Frame from './Frame'

const Projects = () => {

    const projectContainer = data.map(info => {
        return(
            <Frame 
            key = {info.id}
            {...info} />
        )
    })
  return (
    <section className="p-4 md:px-6 bg-[#F1F0E8] dark:dark dark:bg-inherit" id="projects">
      <div>
        <h2 className="text-[#89A8B2] text-center my-3 text-xl md:text-3xl">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 place-items-center">
          {projectContainer}
        </div>
      </div>
    </section>
  );
}

export default Projects