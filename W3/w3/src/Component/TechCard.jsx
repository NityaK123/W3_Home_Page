import React from 'react'


const TechCard=()=>{

    const data = [
        {tech:"HTML",text:"The language for building web pages",text1:"Learn HTML",text2:"Video Tutorial",text3:"HTML Reference",text4:"Get Certified"},
        {tech:"CSS",text:"The language for styling web pages",text1:"Learn CSS",text2:"Video Tutorial",text3:"CSS Reference",text4:"Get Certified"},
        {tech:"JavaScript",text:"The language for programming web pages",text1:"Learn JavaScript",text2:"Video Tutorial",text3:"JavaScrupt Reference",text4:"Get Certifief"},
        {tech:"Python",text:"A popular programming language",text1:"Learn Python",text2:"Video Tutorial",text3:"Python Reference",text4:"Get Certified"},
        {tech:"SQL",text:"A language for accessing databases",text1:"Learn SQL",text2:"Video Tutorial",text3:"SQL Reference",text4:"Get Certifief"}
    ]
    
    return(
        <>
            {
                data.map((val)=>{
                    return(
                        <>
                            <div id="techcard">
                                <h1>{val.tech}</h1>
                                <b>{val.text}</b>
                                <div>{val.text1}</div>
                                <div>{val.text2}</div>
                                <div>{val.text3}</div>
                                <div>{val.text4}</div>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default TechCard

