import React from 'react'
import './projects.css'
import Project1 from '../../assets/Project1.png'
import Project2 from '../../assets/Project2.png'
import Project3 from '../../assets/Project3.png'
import Project4 from '../../assets/Project4.png'
import Project5 from '../../assets/Project5.png'

// Array Map Method - dynamically generated
const data = [
  // Objects
  {
    id: 1,
    image: Project1,
    title: 'Project Title',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: Project2,
    title: 'Project Title',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: Project3,
    title: 'Project Title',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 4,
    image: Project4,
    title: 'Project Title',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 5,
    image: Project5,
    title: 'Project Title',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 6,
    image: Project1,
    title: 'Project Title',
    github: 'https://github.com',
    demo: 'https://github.com'
  }
]

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      {/* container */}
      <div className="container project_container">
        {
          data.map(({id,image,title,github,demo}) =>{
            return(
              <article key={id} className="project_item">
                <div className="project_item_image">
                  <img src={image} alt={title} />
                  <div>
                    <h3>Project Title</h3>
                    <div className="project_item_CTA">
                      <a href={github} className='btn'>GitHub</a>
                      <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                  </div>
                </div>
              </article>
            )
          })
        }
      </div> 
    </section>
  )
}

// const Projects = () => {
//   return (
//     <section id='projects'>
//       <h5>My Recent Works</h5>
//       <h2>Projects</h2>
//       <div className="container project_container">
//         <article className="project_item">
//           <div className="project_item_image">
//             <img src={Project1} alt="Photo" />
//             <div>
//             <h3>Project Title</h3>
//               <div className="project_item_CTA">
//                 <a href="https://github.com" className='btn'>GitHub</a>
//                 <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
//               </div>
//             </div>
//           </div>
//         </article>
//         <article className="project_item">
//           <div className="project_item_image">
//             <img src={Project2} alt="Photo" />
//             <div>
//             <h3>Project Title</h3>
//             <div className="project_item_CTA">
//                 <a href="https://github.com" className='btn'>GitHub</a>
//                 <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
//               </div>
//             </div>
//           </div>
//         </article>
//         <article className="project_item">
//           <div className="project_item_image">
//             <img src={Project3} alt="Photo" />
//             <div>
//             <h3>Project Title</h3>
//             <div className="project_item_CTA">
//                 <a href="https://github.com" className='btn'>GitHub</a>
//                 <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
//               </div>
//             </div>
//           </div>
//         </article>
//         <article className="project_item">
//           <div className="project_item_image">
//             <img src={Project4} alt="Photo" />
//             <div>
//             <h3>Project Title</h3>
//             <div className="project_item_CTA">
//                 <a href="https://github.com" className='btn'>GitHub</a>
//                 <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
//               </div>
//             </div>
//           </div>
//         </article>
//         <article className="project_item">
//           <div className="project_item_image">
//             <img src={Project5} alt="Photo" />
//             <div>
//             <h3>Project Title</h3>
//             <div className="project_item_CTA">
//                 <a href="https://github.com" className='btn'>GitHub</a>
//                 <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
//               </div>
//             </div>
//           </div>
//         </article>
//         <article className="project_item">
//           <div className="project_item_image">
//             <img src={Project1} alt="Photo" />
//             <div>
//             <h3>Project Title</h3>
//             <div className="project_item_CTA">
//                 <a href="https://github.com" className='btn'>GitHub</a>
//                 <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
//               </div>
//             </div>
//           </div>
//         </article>
//       </div> 
//     </section>
//   )
// }

export default Projects