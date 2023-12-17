/*
 * 
 *<div id="parent">
 *   <div id="child">
 *    <h1 id="heading">Hello !! Namasthe Javascript!</h1>
 *   </div>
 *</div> 
 * 
 * 
 * 
 */

const heading = React.createElement( 
    "h1",
    {id:"heading1"},
    "Hello Hello React!!!!"
    );
const parent = React.createElement(
    "div",{id:"parent"},
    React.createElement(
        "div",{id:"child"},
        [heading, React.createElement( 
            "h2",
            {id:"heading1"},
            "I am a h2 tag!"
            )]
        )
    )
//console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);