
/**
 * * Example of TypeScript, React & TailWind
 * This shows how a few technologies really make the coding experience better
 * You can adopt these in stages, as React itself is complicated, but the others save time and make coding more fun
 * You won't have any of these packages so you won't be able to run this though
 * @returns the entire web page runs from our app function
 */

// ? TypeScript is a framework for introducing strict typing into javascript, like you need to declare variable types in C
// It automatically infers types but you can declare them in various ways 
// E.g., below I use <> to declare that our title is a string, and (): to declare and ensure we return a type of valid HTML element
const app = (): JSX.Element => {

    // ? React is a framework for using states that automatically update contents on the page as our data changes
    // TypeScript also allows us to reduce the chance of a runtime error happening here because it won't let us assign a number here by mistake, for example!
    const [title, setTitle] = useState<string>('Hello, World!'); // Hello World is the default value here

    // This function (called a "Handler") is an example of how we can set a new value (again using arrow syntax because it's nicer than "function")
    // Conventionally this would be named better; prefixed with "handle" and suffixed with the users' action it handles e.g., "handleUserClickTitleButton"
    const editOnPage = () => setTitle('Now THIS is web development!');

    // React is also modular, meaning we use re-usable components that save us a lot of code
    // ? JSX is the format for writing HTML-like components directly in JS (i.e., so we don't have to say body.createElement[div] etc.)
    // ? TailWind is a huge collection of html classes that contain CSS code so we don't need to write any CSS
    return (
        <div className="flex flex-col justify-center">
            {/** Because of tailwind we can do complex things easily, such as centering (above), and making rounded padded and colored shapes (below) */}
            <p className="p-2 rounded bg-gray text-red">
                {/** Because of react we can just reference a variable below and it'll automatically update to any changes */}
                {title}
            </p>
            {/** Because of react we can bind an onclick function to a button extremely easily */}
            <button onClick={editOnPage} />
        </div>
    )
}

/**
 * * Extended example with complex
 * A one page app is a complex website with many views which need to dynamically update data
 * @returns a complex exmaple of a web page
 */

// We can define reusable components which take properties we define in the parameter "props"
const Button = (props:
    {
        name: string,
        onClick: Function
    }
) => <button
    className="p-2 rounded bg-gray text-red"
    onClick={props.onClick}
>
        {props.name}
    </button>

// Then our app can re-use these components without repeating a lot of code
const complexApp = (): JSX.Element => {
    // We start by defining a few more states than before
    const [title, setTitle] = useState<string>('Default title');
    const [subtitle, setSubtitle] = useState<string>('Default subtitle');
    const [image, setImage] = useState<URL>('https://www.imagelocation.com.png');

    // We can use a state to show a certain "view" which comprises many "components"
    // We can even specify that we expect only certain values (e.g., views named viewOne or viewTwo)
    const [view, setView] = useState<'viewOne' | 'viewTwo'>('viewOne');

    // Our handlers will change content dynamically, as above, there's just more of them this time
    const setNewTitle = (text: string) => setTitle(text);
    const setNewSubtitle = (text: string) => setSubtitle(text);
    const setNewImage = (text: string) => setImage('https://www.anotherimagelocation.com.png');

    // We will use some logic to select a certain view
    // We can also use typescript to say that something is the same type as something we've already declared, which is pretty cool
    const getCurrentView = (view: typeof image): JSX.Element => {
        switch (view) {
            // Our first view consists of these components
            case 'viewOne': return <div>
                <p>{subtitle}</p>
                <Button name="Change subtitle" onClick={setNewSubtitle} />
            </div>;
            // but our second view has different ones
            case 'viewTwo': return <div>
                <p>{image}</p>
                <Button name="Change image" onClick={setNewImage} />
            </div>;
            // TypeScript helps us ensure we never reach the default statement which would be a runtime error where we asked for a view we don't have
            default <></>;
        }
    }

    // Elements can be nested in one-another just like HTML 
    return (
        <div className="p-2 flex flex-col justify-center border rounded">

            <p>{title}</p>
            <Button name="Change title" onClick={setNewTitle} />

            {getCurrentView}

        </div>
    )
}