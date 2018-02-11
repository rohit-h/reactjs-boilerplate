import React from 'react';
import ReactDOM from 'react-dom';

// import $ from 'jquery';
// import 'bootstrap/dist/js/bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-reboot.css';

class Layout extends React.Component {
    render() {
        return (
            <h1>Hello React!</h1>
        );
    }
}

ReactDOM.render(<Layout/>, document.getElementById('app'));
