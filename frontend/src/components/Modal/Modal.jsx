import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

const  modalRoot = document.getElementById('modal-root')

export class Modal extends Component {

    constructor(props){
        super(props);
        this.el = document.createElement('div')
    }

    componentDidMount() {
        modalRoot.appendChild(this.el)
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el)
    }

    render() {
        return (
            ReactDOM.createPortal(
                <div>
                    <div className="modalWindow">
                        <div className="mobal_head">
                            <span className="modal_title">Модальное окно</span>
                            <button className="modal_close" onClick={ this.props.onClose }>Х</button>
                        </div>
                        <div className="inner">


                            { this.props.children }
                        </div>

                    </div>
                    <div className="modal-overlay" id="modal-overlay"></div>
                </div>,
                modalRoot)
        );
    }
}