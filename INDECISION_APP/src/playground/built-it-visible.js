
class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    
    toggleVisibility() {
        this.setState( (prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render () {
         return (
            <div>
                <h1>Visibility toggle</h1>
                <button onClick={this.toggleVisibility}>
                 {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>     
                {this.state.visibility && (
                <div>
                    <p>These are the details</p>
                </div>       
                )}   
            </div>
        );
    }
}


ReactDOM.render(<VisibilityToggle />, document.getElementById('app')); 


// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     Renderall();
// };

// const Renderall = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility toggle</h1>
//             <button onClick={toggleVisibility}>
//             {visibility ? 'Hide details' : 'Show details'}
//             </button>     
//             {visibility && (
//              <div>
//                 <p>These are the details</p>
//              </div>       
//             )}   
//         </div>
//     );

//     ReactDOM.render(jsx, document.getElementById('app'));
// };


// Renderall();