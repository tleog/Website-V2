/**
 * Comments are essential to organizing code for ourselves and for others
 * ! We can use them to highlight important things,
 * todo Remind us of things to do,
 * ? Raise questions, 
 * * Or emphasise certain parts like a title
 * Functions usually have one comment above them with the following structure:
 * 
 * * Title
 * Description
 * a long description should take two lines, alternatively can use ! ? todo here
 * @param parameterName if the function has parameters, describe them
 * @param anotherParameterName ... one line for each param
 * @returns if the function returns anything, describe it  
 */

/**
 * * Edit Text on Page
 * Example of how we can dynamically edit content already on the page
 * @param text text to update on page
 */


const editOnPage = (text) => {

    // Get element to edit
    const ele = document.querySelector('#exampleEle');

    // Set text contents
    ele.innerText = text;

}