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
            </div>
            <div class="flex-item">
                <div className='projectHeader'>
                    <h2>Real Time Surgical Smoke Detection using Graph Neural Networks and 3D CNNs</h2>
                </div>
                <ul className='projectBullets'>
                    <li>
                    Designed a feature extraction system combining a Graph Neural Network and a 3D Convolutional Neural 
                    Network to detect smoke in surgical videos.
                    </li>
                    <li>
                    Used temporal frame positions to form the Graph Adjacency Matrix, exploring a broad range of features 
                    dynamically during training.
                    </li>
                </ul>
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
            </div>
        </div>

    </div>
  )
}

export default projects