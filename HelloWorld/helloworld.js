console.log("Hello World!!");
//console.log(window);  //window and dom objects are not availabe in v8 engine in nodejs
//console.log(alert('Hey'));//Only core functions of javascript that are needed in server side are availabe in the nodejs v8 engine 

const add = (a,b) => {
    return a+b;
}

const sub = (a,b) => {
    return a-b;
}

module.exports = {
    add,
    sub
};
//Exporting as a object because of multiple functions to be exported
//module.exports can be used only once in a file
//module.exports = add; (wrong)
//module.exports = sub; (wrong)