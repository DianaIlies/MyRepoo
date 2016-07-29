/**
 * Created by dianailies on 7/26/2016.
 */

import React, {Component} from 'react';
import FolderContainer from './FolderContainer.jsx';
import $ from "jquery";




class Filter extends Component {

    constructor(props) {
        super(props);
        this.handleChange = ::this.handleChange;
        this.state = {value: "", data:[]};
    }


    handleChange(event) {
        this.setState({
            value: event.target.value
        });


    }



    componentDidMount(){
        $.ajax({
            url: './src/myJson.json' ,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});

            }.bind(this),
            error: function(xhr, status, err) {
                console.error( status, err.toString());
            }.bind(this)
        });
    }





    render() {

        return (<div className="widget">

            <input placeholder="filter..." type="text"
                   value={this.state.value}
                   onChange={this.handleChange}
                    className = "search"

            />
            <div>{ this.state.value ? 'Searching for:' + this.state.value : null }</div>

            <FolderContainer
                data={this.state.data}
                searchingText={this.state.value}
            />
        </div>)
    }
}
;

export default Filter;