import React from 'react'
import './Footer.css'
import { FaRegHeart } from "react-icons/fa";



export default class Footer extends React.Component {

    render() {
        return (
            <footer className="footerLindo">
                <span>
                    Desenvolvido com <FaRegHeart className="coracao" /> por <strong>COLOCAR NOMES</strong>
                </span>
            </footer>
        )
    }
}
