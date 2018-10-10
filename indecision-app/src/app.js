console.log('teste')

// JSX - JavaScript XML

const template = (
    <div>
        <h1>Marcello</h1>
        <p>This is some info here</p>
        <ol>
            <li> Item one </li>
            <li> Item two </li>
        </ol>
    </div>
);

const user = {
    name: "Marcello",
    age: 23,
    location: "Goiânia - Goiás - Brazil"
}

function getLocation(location) {
    if (location) return <p>My location is {location}</p>
}

const templateTwo = (
    <div>

        <h1>There is the templateTwo</h1>
        <h1>{user.name ? user.name : 'Ninguém'}</h1>
        {(user.age && user.age >= 23) && <p>My age is {user.age}</p>}
        {getLocation(user.location)}
        <ol>
            <li> Item one </li>
            <li> Item two </li>
        </ol>
    </div>
);
const appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot)