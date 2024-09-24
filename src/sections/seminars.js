import React from 'react'
import './seminars.css'

const seminars = () => {
  return (
    <section id='seminars'>
        <h1 className='title'>Seminars and Talks</h1>

        <div className='seminarContainer'>
            <div className='seminarCard'>
                <h1 className='seminarHeading'>Temporal Graph Neural Networks</h1>
                <p className='seminarDetails'><strong>Date: </strong>March 2024</p>
                <p className='seminarDetails'><strong>Organisation: </strong>Vellore Institute of Technology</p>
                <p className='seminarDetails'>
                Gave a talk on temporal graph neural networks inclusive of representation of dynamic graphs, developing 
                embeddings, mathematics of graph operations and PyTorch implementations.
                </p>
                <div className='seminarLinks'>
                    <a href='https://drive.google.com/drive/folders/1pt_7OeXVmiuaSjysn9HcrPSvpdKl8ZnC'>
                        <svg width="35px" height="35px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path fill="none" d="M0 0h24v24H0z"/>
                                <path d="M13 21v2h-2v-2H3a1 1 0 0 1-1-1V6h20v14a1 1 0 0 1-1 1h-8zm-9-2h16V8H4v11zm9-9h5v2h-5v-2zm0 4h5v2h-5v-2zm-4-4v3h3a3 3 0 1 1-3-3zM2 3h20v2H2V3z"/>
                            </g>
                        </svg>
                    </a>
                    <a href='https://github.com/Deceptrax123/Temporal-GNNs-Seminar'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" className="github" viewBox="0 0 16 14">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div className='seminarCard'>
                <h1 className='seminarHeading'>Google IO Extended: Generative AI</h1>
                <p className='seminarDetails'><strong>Date: </strong>June 2023</p>
                <p className='seminarDetails'><strong>Organisation: </strong>Google Developers Student Club</p>
                <p className='seminarDetails'>
                    Gave a presentation on recent advancements on Googles's recent advancements on Generative AI such as Palm API, 
                    MediaPipe and representation of words and sentences as embeddings.
                </p>
                <div className='seminarLinks'>
                    <a href='https://gdsc.community.dev/events/details/developer-student-clubs-vellore-institute-of-technology-vit-chennai-
                    presents-google-io-extended-vit-chennai/' className='eventDetails'>
                        Event Details →
                    </a>
                </div>
                
                
            </div>
        </div>
    </section>
  )
}

export default seminars