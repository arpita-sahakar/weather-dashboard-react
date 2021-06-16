import React from 'react'

function DisplayCitiesName({cityNames}) {
    return (
        <div className="displayCitiesName">
            {cityNames.map((el,i) =>{
                return (<div key={i}>
                    <button>{el}</button><br/>
                    </div>)
            })}
   
        </div>
    )
}

export default DisplayCitiesName
