import React from 'react'
import w3logo from '../Images/image.png'

const Header = () =>{

    const tech = ["HTML","CSS","JAVASCRIPT","SQL","PYTHON","JAVA","PHP","C","C++","C#","BOOTSTRAP","REACT","MYSQL","JQUERY","EXCEL","XML","DJANGO","NUMPY","PANDAS","R","TYPESCRIPT","GIT","ANGULAR","MONGODB","AI","GO"]
    

    const LeftScroll=()=>{
        const container = document.querySelector('#navbar');
        container.scrollBy(-100, 0); // Scroll down by 100px
    }

    const RightScroll=()=>{
        const container = document.querySelector('#navbar');
        container.scrollBy(100, 0); // Scroll down by 100px
    }
    return(
        <>
            <div id="header">
                <div>
                    <img src={w3logo} alt="" style={{width:"35px"}}/>
                </div>
                <div class="head">
                    <a href=""> Tutorials</a>
                </div>
                <div class="head">
                    <a href="">Exercises</a>
                </div>
                <div class="head">
                    <a href="">Certificates</a>
                </div>
                <div class="head"> 
                    <a href="">Services</a>
                </div>
            </div>
            <div id="nav">
                <button onClick={LeftScroll}>&lt;</button>
            <nav id="navbar">
                
                     {
                        tech.map((val)=>{
                           return(
                               <>
                                   <a href="#">{val}</a>
                              </>
                           )
                      })
                 }  
                </nav>
                <button onClick={RightScroll}>&gt;</button>
            </div>
        </>
    )
}

export default Header