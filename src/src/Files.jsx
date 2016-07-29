/**
 * Created by dianailies on 7/25/2016.
 */


import React, {Component} from 'react';

class Files extends Component {

    render() {
        return (
            <li className='file-item'>
                {this.props.name}</li>
        );
    }
}


export default Files;