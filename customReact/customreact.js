function customRender(reactElement, container) {
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

        for(let prop in reactElement.props){
            //this is just to demonstrate old ways of react where they had children within props
            if(prop == 'children') continue;
            
            domElement.setAttribute(prop, reactElement.props[prop])
        }

    container.appendChild(domElement)

}


//create an 'a' tag 
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google.com'
}

const mainContainer = document.querySelector('#root')


customRender(reactElement, mainContainer)