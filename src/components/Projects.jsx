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
    <section
      className="px-4 pt-2 py-6 md:px-6 bg-[#E5E1DA] dark:dark dark:bg-inherit"
      id="projects"
    >
      <div>
        <h2 className="text-[#89A8B2] text-center my-3 text-xl font-semibold unbounded md:text-3xl">
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