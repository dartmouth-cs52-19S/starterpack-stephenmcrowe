import React from 'react';
// import {
//     Switch, BrowserRouter as Router, Route, NavLink,
// } from 'react-router-dom';
// import Counter from '../containers/counter';
// import Controls from '../containers/controls';
import '../style.scss';

// const About = (props) => {
//     return <div> All there is to know about me </div>;
// };
// const Welcome = (props) => {
//     return <div>Welcome<Counter /><Controls /></div>;
// };
// const Nav = (props) => {
//     return (
//         <nav>
//             <ul>
//                 <li><NavLink to="/">Home</NavLink></li>
//                 <li><NavLink to="/about">About</NavLink></li>
//                 <li><NavLink to="/test/id1">test id1</NavLink></li>
//                 <li><NavLink to="/test/id2">test id2</NavLink></li>
//             </ul>
//         </nav>
//     );
// };

// const Test = (props) => {
//     return <div> ID: {props.match.params.id} </div>;
// };

// const FallBack = (props) => {
//     return <div>URL Not Found</div>;
// };

const Demo = (props) => {
    return (
        <div className="demo">
            <div className="wrapper">
                <img src="src/img/dartmouth_dpine.png" alt="" />
            </div>
            <div className="wrapper">
                <img src="src/img/dartmouth_dpine.png" alt="" />
            </div>
            <div className="wrapper">
                <img src="src/img/dartmouth_dpine.png" alt="" />
            </div>
        </div>
    );
};

const Demo2 = (props) => {
    return (
        <div className="demo2">
            <div className="wrapper2">
                <img src="src/img/dartmouth_dpine.png" alt="" />
            </div>
            <div className="wrapper2">
                <img src="src/img/dartmouth_dpine.png" alt="" />
            </div>
            <div className="wrapper2">
                <img src="src/img/dartmouth_dpine.png" alt="" />
            </div>
        </div>
    );
};

const App = (props) => {
    return (
        <>
            <Demo />
            <Demo2 />
        </>
    );
    // return (
    //     <Router>
    //         <div>
    //             <Nav />
    //             <Switch>
    //                 <Route exact path="/" component={Welcome} />
    //                 <Route path="/about" component={About} />
    //                 <Route exact path="/test/:id" component={Test} />
    //                 <Route component={FallBack} />
    //             </Switch>
    //             <Demo />
    //         </div>
    //     </Router>
    // );
};

export default App;
// ReactDOM.render(<App />, document.getElementById('main'));
