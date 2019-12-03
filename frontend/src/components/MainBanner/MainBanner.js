import React, { Component } from 'react';
import axios from 'axios';


export default class MainBanner extends Component {
    state = {
        banners: []
      }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/v1/acme/main/banners/`)
        .then(res => {
            console.log(res.data.data);
            const banners = res.data.data;
            this.setState({ banners });            
            window.bannerRun()

        });
        
        
    }    

    render() {
        return(
            <div id="da-slider" className="da-slider">
                {this.state.banners.map(banner => 
                    <div className="da-slide" key={ banner.id }>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>
                                        <i>hhh</i>
                                        <br />
                                        <i>RESPONSIVE</i>
                                        <br />
                                        <i>DESIGN</i>
                                    </h2>
                                    <p>
                                        <i>Lorem ipsum dolor amet</i>
                                        <br />
                                        <i>veniam omnis</i>
                                    </p>
                                   
                                    <a href={ banner.attributes.link } className="btn btn-info btn-lg da-link">
                                        Read more
                                    </a>
                                  

                                    <div className="da-img">
                                        <img src={ banner.attributes.image } alt={ banner.attributes.title } />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                 
                
                <nav className="da-arrows">
                    <span className="da-arrows-prev">
                    </span>
                    <span className="da-arrows-next">
                    </span>
                </nav>
            </div>
        )
    }
}