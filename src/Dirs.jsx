/**
 * Created by dianailies on 7/25/2016.
 */
import React, {Component} from 'react';


class Dirs extends Component {
    constructor(props) {
        super(props);
        this.state = {isCollapsed: true};
    }


    handleChange() {
        this.setState({isCollapsed: !this.state.isCollapsed})
    }


    render() {
        if (this.state.isCollapsed)
            return (
                <li className="folder-item false " onClick={this.handleChange.bind(this)}>  {this.props.name}</li>
            );

        else

            return (
                <li className="folder-item hide true" onClick={this.handleChange.bind(this)}>  {this.props.name}</li>

            );


    }
}

export default Dirs;