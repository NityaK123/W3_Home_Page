import React from 'react'

const Card = () => {

    const tech = ["R", "Kotlin", "Node.js", "React", "JSON", "Vue", "Sass", "Icons", "SVG", "Canavas", "Colors", "Git", "Pandas", "Scipy", "AppML", "Go", "MongoDB", "Statistics", "Code Game", "Excel", "Machine Learning", "Data Science", "MySql"]

    return (
        <>
            <div id="card">
                {
                    tech.map((val) => {
                        return (
                            <>
                                <div>
                                    <b>{val}</b>
                                </div>
                         </>
                      )
                  })
                }
            </div>
        </>
    )
}

export default Card
