class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        const stringcount = localStorage.getItem('count');
        const count = parseInt(stringcount, 10);

        if(!isNaN(count)) {
            this.setState( () => ({ count }));
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }
    handleAddOne() {
        this.setState( (prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne() {
        this.setState( (prevState) => {
            return {
                count: prevState.count -1
            };
        });
    }
    handleReset() {
        this.setState( (prevState) => {
            return {
                count: 0
            };
        });
        console.log('handleReset')
    }
    render() {
        return (
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

// Counter.defaultProps = {
//     count: 0
// };

ReactDOM.render(<Counter />, document.getElementById('app'));


/*let count=0;
const add = () => {
    count++;
    Rendercount();
};
const Sub = ()=> {
    count--;
    Rendercount();
};

const reset = () => {
    count=0;
    Rendercount();
};

const Rendercount = () => {
    const templatetwo = (
        <div>
            <h1>count: {count}</h1>
            <button onClick={add}>+1</button>
            <button onClick={Sub}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(templatetwo, appRoot);
};

Rendercount();*/

