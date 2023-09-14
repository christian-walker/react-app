// PascalCasing - Captilize first letter of every word
function Message() {
    // JSX: Javascript XML - reference: https://babeljs.io/

    const name = 'Chris';
    if(name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

export default Message;