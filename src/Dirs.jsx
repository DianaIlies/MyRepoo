/**
 * Created by dianailies on 7/25/2016.
 */
import React, {Component} from 'react';

class Dirs extends Component {
    render() {
        //var fold = folders.name;
        return (
            
            <li className='folder-item'>{this.props.name} </li>
        );
    }
}

export default Dirs;