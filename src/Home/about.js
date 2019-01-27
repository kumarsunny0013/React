import React,{Component} from 'react'
import Layout from './layout';
import Footer from './footer';

class About extends Component{
    render(){
        return(
            <div>
                <Layout data="about"/>
                <h3 className="text-center">SUNNY KUMAR</h3>
                <Footer/>
            </div>
        )
    }
}

export default About;