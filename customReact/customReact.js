function customRender(reactElement,container){
     
    
    /*
     const domElement = document.createElement(reactElement.type)
     domElement.innerHTML = reactElement.children
     domElement.setAttribute('href', reactElement.props.href)
     domElement.setAttribute('target', reactElement.props.target)
 
     container.appendChild(domElement)
     */

    //  Ye neeche wala code jaada better hai code repeat ni kar rhe hai...
     const domElement = document.createElement(reactElement.type)
     domElement.innerHTML = reactElement.children
     for (const prop in reactElement.props) {
        if(prop === 'children') continue
        domElement.setAttribute(prop,reactElement.props[prop])
     }
     container.appendChild(domElement)
}


const reactElement = {
    type: 'a',
    props: {
        href : "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.getElementById('root')


customRender(reactElement,mainContainer)


// Hamne sabse pehle khudka react element banake dekha... toh 2 hi cheejo ki zarurat thi ki ek toh pehle container lo jisme root element ko query karke utha le and uske baad chahiye apne ko ek render method chahiye jo ki elements ko le and container ke andar inject karde. Ab apne ko dekhna tha ki element bante kaise hai toh apan ne khud ke acc bana liya apna customRender method.

