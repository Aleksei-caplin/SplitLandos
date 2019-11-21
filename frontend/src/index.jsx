import React, {Component} from 'react';
import ReactDom from 'react-dom';

import './assets/global.scss';
 
import { ImageBox } from './components/imageBox';
import { pictures } from './pictures';


console.log(pictures);

class App extends Component{      

    render() {        
        return(
            <main>
                <div className="container">                    
                    
                    <div className="gallery">                        
                        {pictures.map((picture, idx) => <ImageBox key={idx} {...picture} />)}
                    </div>
                </div>
            </main>
        )
    }
}

ReactDom.render(<App />, document.getElementById("root"))