console.log('app.js is running');  

const app = {
    title: 'Indecision app',
    subtitle: 'Put your life in ht ehands of a computer',
    options: []
};

const onFormsubmit = (e) => {
    e.preventDefault();

    const opt = e.target.elements.opt.value;

    if(opt) {
        app.options.push(opt);
        Rendervalue();
        e.target.elements.opt.value = ' ';
    }
};

const remove = () => {
    app.options = [];
    Rendervalue();
};

const onMakeDecision = () => {
    const RandomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[RandomNum];
    alert(option); 
};

const appRoot = document.getElementById('app');

//const numbers = ['12','32','44'];

const Rendervalue = () => {
    const template = ( 
        <div>
            <h1>Indecision App</h1> 
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options yet'}</p>
            <button disabled={app.options.length > 0 ? false : true} onClick={onMakeDecision}>What should I Do ?</button>
            <button onClick={remove}>Remove All</button>
            <ol>
            {
                app.options.map( (opt) => {
                    return <li key={opt}>option: {opt}</li>
                })
            }
            </ol>
            
            
                <li>No of options: {app.options.length}</li>
            
            <form onSubmit={onFormsubmit}>
                <input type="text" name="opt" />
                <button>Add option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}



Rendervalue();









    