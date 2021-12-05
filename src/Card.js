import React from 'react';

const Card = ({id, name , email }) =>{
    return (
        <div className ="tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
            <img src ={`https://robohash.org/${name}?set=set4`} alt ="robots"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
    // tc - text center
        // bg -back ground
        // dib - display in block
        // br - border radius
        // pa - padding all (pr- padding right , pl- padding left, ... etc)
        // ma - margin all
        // grow - animation
        // bw - border width
        // shadow - shadow
}
export default Card;