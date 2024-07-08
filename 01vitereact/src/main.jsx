import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App | CHAI</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href : "https://google.com",
//         target: '_blank'
//     },
//     children: 'Click me to visit Google'
// }

const anotherElement = (
    <a href = "https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href: 'https://x.com', target: '_blank'},
    'Click me to visit X (Formerly twitter)',
    anotherUser     // ye hai evaluated injection ki sidha outcome hi use kar sakte hai
)


ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement 
    
)
