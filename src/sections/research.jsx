import React from 'react'
import './research.css'

const Research = () => {
  return (
    <div id='research'>
        <h1 className='title researchTitle'>My Research Work</h1>
    <div id="researchFlex">
        <div class="row">
            <div class="card">
            <img src='/assets/westEngland.jpeg' className='coverImage' alt='West England' />
            <div className='statement'>
                <h6 className='universityName'>University of West of England</h6>
                <center><h2 className='statementHeading'>Statement:</h2></center>
                <p className='problemStatement'>
                Developing a toolkit for user acceptance of various languages through a qualitative and quantative approach towards 
                language modelling.
                </p>
            </div>

            <ul className='bullets'>
                <li>
                Research on developing embeddings for Indian Languages such as Tamil by analysing spectrograms. Further, the study 
                focuses on a computational model that builds towards developing a toolkit for user acceptance of language technologies.
                </li>
                <li>
                Analyse an individual user's reaction to different languages and study their responses using Machine and Deep 
                Learning methods.
                </li>
            </ul>

            </div>
            <div class="card">
            <img src='/assets/Lincoln.jpg' className='coverImage' alt='West England' />
            <div className='statement'>
                <h6 className='universityName'>University of Lincoln</h6>
                <center><h2 className='statementHeading'>Statement:</h2></center>
                <p className='problemStatement'>
                Improving the domain accuracies of object detection models such as YOLOv5 on Out of Distribution(OOD) 
                samples through Self Supervised Learning and Explainable AI Techniques
                </p>
            </div>

            <ul className='bullets'>
                <li>
                Conducted research on Self-Supervised Learning and pseudo-labeling using YOLOv5. This involved pre-training YOLOv5 and 
                YOLOv3 backbones to generate pseudo labels for multiple objects within an image.
                </li>
                <li>
                Worked on mitigating Out-of-Distribution (OOD) errors in object detection during inference time and implemented a 
                method to transfer backbone weights from YOLOv5 to Ultralytics YOLOv5 following custom pre-training.
                </li>
            </ul>

            </div>
            
        </div>
        <div class="row">
            <div class="card">
            <img src='/assets/VIT.webp' className='coverImage' alt='West England' />
            <div className='statement'>
                <h6 className='universityName'>Vellore Institute of Technology</h6>
                <center><h2 className='statementHeading'>Statement:</h2></center>
                <p className='problemStatement'>
                Side Effect Prediction through Adverse Drug Reaction Analysis by modelling Drug-Drug Interactions using Graph Neural 
                Networks and Self-Supervised Learning
                </p>
            </div>

            <ul className='bullets'>
                <li>
                Designed a comprehensive pipeline to fetch SMILE strings and convert them into featurized Molecular Graphs. 
                Developed Graph Variational Autoencoders and created a Dual Branched Graph Neural Network framework to model drug-drug 
                interactions.
                </li>
                <li>
                Implemented a contrastive training method to enhance GNN resilience against Adversarial Attacks.
                </li>
            </ul>

            </div>
            <div class="card">
            <img src='/assets/VIT.jpg' className='coverImage' alt='West England' />
            <div className='statement'>
                <h6 className='universityName'>Center of Cyber Physical Systems, Vellore Institute of Technology</h6>
                <center><h2 className='statementHeading'>Statement:</h2></center>
                <p className='problemStatement'>
                    Semantic Segmentation of Crop and Weed for Precision Spraying.
                </p>
            </div>

            <ul className='bullets'>
                <li>
                Developed a technique for semantically segmenting crops and weeds using hyperspectral images during early growth 
                stages. Evaluated several semantic segmentation loss functions and constructed a modified U-Net architecture.
                </li>
            </ul>

            </div>
        </div>
    </div>


    </div>
  )
}

export default Research