import React from 'react'
import "./publications.css"

const Publications = () => {
  return (
    <section id='publications'>
                <div class="publications">
            <h2 class="title publicationsHeader">Publications</h2>
            <div class="flex-container-publications">
    
                <div class="card-publications">
                    <img src="assets/Hessian-Free.png" alt=""></img>
                    <h3>Detecting Side Effects of Adverse Drug Reactions Through Drug-Drug Interactions</h3>
                    <p>
                        Made use of Dual Path Graph Neural Network Models with Self Supervised Learning using Graph Variational 
                        Autoencoders to model Adverse Drug Eeactions(ADRs) and detect the side effects it causes.
                    </p>
                    <h6 class="DOI">DOI: 10.1109/ACCESS.2024.3407877</h6>
                    <div class="quickLinks">
                        <a href="https://ieeexplore.ieee.org/document/10543001">
                            <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                        <a href="https://github.com/Deceptrax123/Detecting-Side-Effects-of-Adverse-Drug-Reactions-through-Drug-Drug-Interactions-using-Graph-Neural-N">
                            <svg width="35px" height="35px" viewBox="0 1.5 48 48" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve" className='gitLogo'>
                                <path d="M39.155 13.946c-.214-.604-.538-1.212-.999-1.869.848-3.154.253-5.792.225-5.915l-.365-1.564-1.606.019c-.15.002-3.48.063-6.724 1.955a29.635 29.635 0 0 0-11.371 0c-3.243-1.892-6.573-1.953-6.724-1.955l-1.607-.02-.365 1.564c-.028.123-.623 2.761.225 5.915-.461.657-.785 1.266-.999 1.869-1.187 3.356-1.187 6.76.001 10.117 1.07 3.023 4.697 6.116 7.225 6.862.851.251 1.704.422 2.558.545A5.236 5.236 0 0 0 18 34.004v1.281c-.062.036-.127.065-.187.108-.289.211-2.869 1.967-5.505.09-.93-.946-1.386-1.639-1.826-2.309-.988-1.5-1.841-2.586-4.588-3.96a2 2 0 1 0-1.789 3.579c1.991.995 2.341 1.525 3.035 2.581.515.781 1.155 1.754 2.445 3.044l.215.186c1.692 1.27 3.447 1.723 5.053 1.723A9.286 9.286 0 0 0 18 39.76v4.253h4V34.004c0-1.103.897-2 2-2s2 .897 2 2v10h4v-10c0-.955-.23-1.803-.628-2.534a18.287 18.287 0 0 0 2.558-.545c2.527-.746 6.154-3.839 7.226-6.863 1.187-3.357 1.187-6.76-.001-10.116zm-3.77 8.781c-.591 1.667-3.167 3.942-4.588 4.362-4.509 1.331-9.083 1.332-13.594 0-1.421-.42-3.997-2.695-4.587-4.361-.875-2.472-.853-4.969-.001-7.447.485-1.41 1.724-2.427 1.724-2.427l-.398-1.08a9.24 9.24 0 0 1-.548-2.886c.992.233 2.247.664 3.416 1.459l.716.487.845-.188a25.659 25.659 0 0 1 11.262 0l.845.188.716-.487c1.167-.794 2.423-1.225 3.415-1.458a9.169 9.169 0 0 1-.547 2.885l-.398 1.08s1.093.81 1.724 2.427c.951 2.441.872 4.976-.002 7.446z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="card-publications">
                    <img src="assets/NLP.png" alt=""></img>
                    <h3>Autoencoder based approach for the mitigation of spurious correlations</h3>
                    <p>
                        Developed a technique using Autoencoders and Image Painting to analyze and mitigate spurious correlations 
                        in multi-distribution samples. Further, we analysed the patterns occuring in the Out of Distribution(OOD) 
                        samples using autoencoders built on the YOLOv5 backbone through a self-supervised pseudolabelling technique 
                        as a method of model explainability.
                    </p>
                    <h6 class="DOI">DOI: 10.48550/arXiv.2406.18901</h6>
                    <div class="quickLinks">
                        <a href="https://arxiv.org/abs/2406.18901">
                            <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                        <a href="https://github.com/Deceptrax123/Spurious-Correlation-Mitigation-in-YOLOv5">
                            <svg width="35px" height="35px" viewBox="0 3 48 48" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve" className='gitLogo'>
                                <path d="M39.155 13.946c-.214-.604-.538-1.212-.999-1.869.848-3.154.253-5.792.225-5.915l-.365-1.564-1.606.019c-.15.002-3.48.063-6.724 1.955a29.635 29.635 0 0 0-11.371 0c-3.243-1.892-6.573-1.953-6.724-1.955l-1.607-.02-.365 1.564c-.028.123-.623 2.761.225 5.915-.461.657-.785 1.266-.999 1.869-1.187 3.356-1.187 6.76.001 10.117 1.07 3.023 4.697 6.116 7.225 6.862.851.251 1.704.422 2.558.545A5.236 5.236 0 0 0 18 34.004v1.281c-.062.036-.127.065-.187.108-.289.211-2.869 1.967-5.505.09-.93-.946-1.386-1.639-1.826-2.309-.988-1.5-1.841-2.586-4.588-3.96a2 2 0 1 0-1.789 3.579c1.991.995 2.341 1.525 3.035 2.581.515.781 1.155 1.754 2.445 3.044l.215.186c1.692 1.27 3.447 1.723 5.053 1.723A9.286 9.286 0 0 0 18 39.76v4.253h4V34.004c0-1.103.897-2 2-2s2 .897 2 2v10h4v-10c0-.955-.23-1.803-.628-2.534a18.287 18.287 0 0 0 2.558-.545c2.527-.746 6.154-3.839 7.226-6.863 1.187-3.357 1.187-6.76-.001-10.116zm-3.77 8.781c-.591 1.667-3.167 3.942-4.588 4.362-4.509 1.331-9.083 1.332-13.594 0-1.421-.42-3.997-2.695-4.587-4.361-.875-2.472-.853-4.969-.001-7.447.485-1.41 1.724-2.427 1.724-2.427l-.398-1.08a9.24 9.24 0 0 1-.548-2.886c.992.233 2.247.664 3.416 1.459l.716.487.845-.188a25.659 25.659 0 0 1 11.262 0l.845.188.716-.487c1.167-.794 2.423-1.225 3.415-1.458a9.169 9.169 0 0 1-.547 2.885l-.398 1.08s1.093.81 1.724 2.427c.951 2.441.872 4.976-.002 7.446z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="card-publications">
                    <img src="assets/Blockchain.png" alt=""></img>
                    <h3>Color and Brush Stroke Pattern Recognition in Abstract Art using DCGANs</h3>
                    <p>
                        Incorporated DC-GANs to analyze brush stroke patterns in Abstract Art. The study further involved a random walk 
                        into the latent space to develop logical relationships between various colors used by artists.
                    </p>
                    <h6 class="DOI">DOI: 10.48550/arXiv.2403.18397</h6>
                    <div class="quickLinks">
                        <a href="https://arxiv.org/abs/2403.18397">
                            <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                        <a href="https://github.com/Deceptrax123/Pattern-Recognition-in-Abstract-art-">
                            <svg width="35px" height="35px" viewBox="0 3 48 48" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve" className='gitLogo'>
                                <path d="M39.155 13.946c-.214-.604-.538-1.212-.999-1.869.848-3.154.253-5.792.225-5.915l-.365-1.564-1.606.019c-.15.002-3.48.063-6.724 1.955a29.635 29.635 0 0 0-11.371 0c-3.243-1.892-6.573-1.953-6.724-1.955l-1.607-.02-.365 1.564c-.028.123-.623 2.761.225 5.915-.461.657-.785 1.266-.999 1.869-1.187 3.356-1.187 6.76.001 10.117 1.07 3.023 4.697 6.116 7.225 6.862.851.251 1.704.422 2.558.545A5.236 5.236 0 0 0 18 34.004v1.281c-.062.036-.127.065-.187.108-.289.211-2.869 1.967-5.505.09-.93-.946-1.386-1.639-1.826-2.309-.988-1.5-1.841-2.586-4.588-3.96a2 2 0 1 0-1.789 3.579c1.991.995 2.341 1.525 3.035 2.581.515.781 1.155 1.754 2.445 3.044l.215.186c1.692 1.27 3.447 1.723 5.053 1.723A9.286 9.286 0 0 0 18 39.76v4.253h4V34.004c0-1.103.897-2 2-2s2 .897 2 2v10h4v-10c0-.955-.23-1.803-.628-2.534a18.287 18.287 0 0 0 2.558-.545c2.527-.746 6.154-3.839 7.226-6.863 1.187-3.357 1.187-6.76-.001-10.116zm-3.77 8.781c-.591 1.667-3.167 3.942-4.588 4.362-4.509 1.331-9.083 1.332-13.594 0-1.421-.42-3.997-2.695-4.587-4.361-.875-2.472-.853-4.969-.001-7.447.485-1.41 1.724-2.427 1.724-2.427l-.398-1.08a9.24 9.24 0 0 1-.548-2.886c.992.233 2.247.664 3.416 1.459l.716.487.845-.188a25.659 25.659 0 0 1 11.262 0l.845.188.716-.487c1.167-.794 2.423-1.225 3.415-1.458a9.169 9.169 0 0 1-.547 2.885l-.398 1.08s1.093.81 1.724 2.427c.951 2.441.872 4.976-.002 7.446z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                  
            </div>
        </div>
    </section>

  )
}

export default Publications