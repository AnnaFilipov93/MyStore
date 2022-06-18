import React, { Component } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default class Contact extends Component {
    render() {
        return (
            <div style={{color: "#848181"}}>
                <h2>To contact us</h2>
                <h4>Frishman St 86Tel Aviv-Yafo</h4>
                <h5>072-3307677 | 03-5247928</h5>
                <p>
                    <button style={{color: "#848181", border:"none"}}><FacebookIcon/></button>
                    <button style={{color: "#848181", border:"none"}}><InstagramIcon/></button>
                    <button style={{color: "#848181", border:"none"}}><TwitterIcon/></button>
                    </p>
                <a  href="https://www.google.com/maps/place/Frishman+St+86,+Tel+Aviv-Yafo/@32.0793946,34.7767164,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4b8662d54521:0x95dba1ff9f05c72f!8m2!3d32.0793946!4d34.7789051" 
                    target="_blank">Click here to come to us by Google Maps</a>
            </div>
        )
    }
}
