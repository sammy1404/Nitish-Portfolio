import React from 'react'
import "./projects.css"; // We'll add some CSS here

const projects = () => {
  return (
    <div id='projects'>
        <h1 className='title projectTitle'>My Projects</h1>
        <div class="flex-container">
            <div class="flex-item">
                <div className='projectHeader'>
                    <h2>Molecular Property Prediction using Graph Isomorphism and Contrastive Self-Supervised Learning</h2>
                </div>
                <ul className='projectBullets'>
                    <li>
                    Developed an adversarial pre-training approach based on model perturbation and information loss to 
                    robustly pre-train a Graph Convolution-based encoder.
                    </li>
                    <li>
                    Integrated the pre-trained model with a Graph Isomorphism framework to predict molecular properties, 
                    achieving state-of-the-art results on MoleculeNet benchmarks.
                    </li>
                </ul>
                <div className='projectsRow'>
                <a href='https://github.com/Deceptrax123/Molecule-Chemical-Property-Prediction-using-Graph-Isomorphism-and-Adversarial-Pretraining'>Molecular Property Prediction code</a>
                <a href='https://github.com/Deceptrax123/Defending-Graph-Neural-Networks-against-Adversarial-Attacks'>Adversarial attack defence code</a>
                </div>
                
            </div>
            <div className="flex-item">
                <div className="projectHeader">
                    <h2>Real Time Surgical Smoke Detection using Graph Neural Networks and 3D CNNs</h2>
                </div>
                <ul className="projectBullets">
                    <li>
                    Designed a feature extraction system combining a Graph Neural Network and a 3D Convolutional Neural
                    Network to detect smoke in surgical videos.
                    </li>
                    <li>
                    Used temporal frame positions to form the Graph Adjacency Matrix, exploring a broad range of features
                    dynamically during training.
                    </li>
                </ul>
                <div className='githubLogo'>
                    <a href='https://github.com/Deceptrax123/Real-Time-Smoke-Detection-during-Laproscopy-using-surgical-videos'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" className="github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                    </a>
                </div>
                
                
                
            </div>

            <div class="flex-item">
                <div className='projectHeader'>
                    <h2>Differential Equations using Equilibrium Driven Neural Networks</h2>
                </div>
                <ul className='projectBullets'>
                    <li>
                    Implemented a numerical solution using neural networks to solve ordinary and partial differential 
                    equations while considering mathematical constraints.
                    </li>
                    <li>
                    The implemenation takes consideration of boundary conditions such as Dirichilet and Neumann Boundary 
                    Conditions for Partial Differential Equations.
                    </li>
                </ul>
                <div className='githubLogo'>
                    <a href='github.com/deceptrax123/differential-equations-using-neural-networks'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" className="github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                    </a>

                </div>
            </div>
            <div class="flex-item">
                <div className='projectHeader'>
                    <h2>Self Supervised Psuedo-labelling using Autoencoders built on YOLOv5 Backbone</h2>
                </div>
                <ul className='projectBullets'>
                    <li>
                    Pre-trained the YOLOv5 backbone to localize multiple objects within an image and developed a pipeline to 
                    transfer the pre-trained backbone weights to Ultralytics YOLOv5 for fine-tuning.
                    </li>
                </ul>
                <div className='githubLogo'>
                    <a href='https://github.com/Deceptrax123/Self-Supervised-Learning-using-YOLOv5-Backbone'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" className="github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                    </a>

                </div>
            </div>
            <div class="flex-item">
                <div className='projectHeader'>
                    <h2>Mitigation of Spurious Correlations in YOLOv5</h2>
                </div>
                <ul className='projectBullets'>
                    <li>
                    Identified patterns in misclassified instances of YOLOv5 and developed instance-based mitigation techniques, 
                    including Image Inpainting and Weighted Box Fusion (WBF).
                    </li>
                </ul>
                <div className='githubLogo'>
                    <a href='https://github.com/Deceptrax123/Spurious-Correlation-Mitigation-in-YOLOv5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" className="github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                    </a>

                </div>
            </div>
            <div class="flex-item">
                <div className='projectHeader'>
                    <h2>Deep Learning Based Asymmetric Cryptographic Scheme using GANs</h2>
                </div>
                <ul className='projectBullets'>
                    <li>
                    Created a deep learning-based technique using GANs to encrypt medical images. The network comprises 2 
                    generators and 2 discriminators to maintain cycle consistencies.
                    </li>
                </ul>
                <div className='githubLogo'>
                    <a href='https://github.com/Deceptrax123/Deep-Learning-Based-Medical-Image-Encryption-and-Decryption-using-GANs'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" className="github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                    </a>

                </div>
            </div>
            <div class="flex-item">
                <div className='projectHeader'>
                    <h2>Plastic Detection using Reflectance Images of Hyperspectral Bands</h2>
                </div>
                <ul className='projectBullets'>
                    <li>
                    Performed a deep learning-based mapping from RGB space to reflectance images followed by reflectance-based 
                    thresholding for plastic detection.
                    </li>
                    <li>
                    The project involves an initial spectral analysis and dataset creation by mapping the multispectral images to 
                    its reflectance images using the reflectances of each band against both surface and plastic.
                    </li>
                </ul>
                <div className='githubLogo'>
                    <a href='https://github.com/Deceptrax123/Plastic-Detection-using-Reflectance-Images-of-Hyperspectral-Bands'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" className="github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                    </a>

                </div>
            </div>
            <div class="flex-item">
                <div className='projectHeader'>
                    <h2>Tamil Speech to Text using Spectrogram Analysis</h2>
                </div>
                <ul className='projectBullets'>
                    <li>
                    Developed during a 72-hour hackathon, involving speech processing techniques like silence removal, L1 Formant 
                    analysis, and Short Time Fourier Transforms to segment Tamil audio into phonetics,thus enabling us to win the 
                    hackathon.
                    </li>
                </ul>
                <div className='githubLogo'>
                    <a href='https://github.com/Deceptrax123/Tamil-STT-using-Spectrogram-Analysis'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" className="github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                    </a>

                </div>
            </div>
        </div>

    </div>
  )
}

export default projects