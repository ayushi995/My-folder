import React from 'react';
import './index.css';
import image1 from '../../asset/images/three.jpg';

class Contentpart extends React.Component {
    render() { 
        return(<div>
                    {/*-section-two-*/}
                    <section className="section-two">
                        <div className="main-two">
                        <h2>Create Your Masterpiece</h2>
                        <hr className="hr" />
                        <h3 className="creative">creative collection</h3>
                        <hr className="hr" />
                        </div>
                    </section>
                    {/*section-three-*/}
                    <section className="section-three">
                        <div className="my-container">
                        <div className="row">
                            <div className="col-md-6">
                            <div className="three-images image-one">
                                <h2>Photography</h2>
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="three-images image-two">
                                <h2>Coverage</h2>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    {/*-section-four-*/}
                    <section className="section-four">
                        <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-7 pl-0">
                            <div className="one-image image-three">
                                <img src={image1} />
                            </div>
                            </div>
                            <div className="col-md-5">
                            <div className="one-image threeimage-text">
                                <h2>Free Masterclass</h2>
                                <h3>Creative Photography</h3>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                                eget lectus eu ex ornare porta euismod a libero. Phasellus
                                vehicula placerat enim at egestas. Aliquam suscipit felis in massa
                                hendrerit tristique. In augue diam, pellentesque nec pulvinar in,
                                sagittis ac nulla. Sed eu lectus vitae justo vehicula viverra.
                                Aenean vel urna vitae massa consequat blandit. Quisque sodales
                                sapien vitae malesuada ultricies. Curabitur pretium ipsum non nunc
                                facilisis semper.
                                </p>
                                <button>View More</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
        </div>
        );
    }    
}
 
export default Contentpart;