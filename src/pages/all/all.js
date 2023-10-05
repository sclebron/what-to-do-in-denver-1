import React from 'react';
import './all.css';

function All({allActivities}) {

    return (
        <div className="all">
        <div className="allContainer">
        {allActivities?.map((allActivities) => (
                <>
                <div className="allTitle">{allActivities.title}</div>
                <img className="allImg" src={allActivities.image} alt="All activity" />
                <div className="allActivity">
                    <div className="allDescription">{allActivities.description}</div>
                    <a className="allWebUrl" href={allActivities.webUrl} target="blank">Visit Website</a>
                </div>
                </>
            ))}
        </div>
        </div>
    )
}

export default All;


    //if the activity is true for that specific selection then push it to the allActivities array

    // if (Option.id === checked) {
    //     all.map((all) => {
    //         if (all.halfDay === true) {
    //         allActivities.push();
    //     }
    //     return allActivities;
    //     })
    // }

    // console.log(allActivities);

    //if user selection for that thing (e.g. "half day") is true && that element is true for a specific activity, then push that activity to a new array

    // all.map((all) => {
    //     if(option.id === checked && all.halfDay === true) {
    //         allActivities.push();
    //     }
    //     return allActivities;
    // })

    // console.log(allActivities);