/**
 * Created by dianailies on 7/26/2016.
 */

import React, {Component} from 'react';
import FolderContainer from './FolderContainer.jsx';
import AnotherFolderContainer from './AnotherFolderContainer.jsx';

var data = [
    {
        type: "folder",
        name: "animals",
        path: "/animals",
        children: [
            {
                type: "folder",
                name: "cat",
                path: "/animals/cat",
                children: [
                    {
                        type: "folder",
                        name: "images",
                        path: "/animals/cat/images",
                        children: [
                            {
                                type: "file",
                                name: "cat001.jpg",
                                path: "/animals/cat/images/cat001.jpg"
                            }, {
                                type: "file",
                                name: "cat001.jpg",
                                path: "/animals/cat/images/cat002.jpg"
                            }
                        ]
                    },
                    {
                        type: "file",
                        name: "cat002.jpg",
                        path: "/animals/cat/images/cat002.jpg"
                    },
                    {
                        type: "file",
                        name: "cat003.jpg",
                        path: "/animals/cat/images/cat003.jpg"
                    }
                ]
            }
        ]
    }
];


class Filter extends Component {
    // var filterText = "";
    constructor(props) {
        super(props);
        this.handleChange = ::this.handleChange;
        this.state = {value: ""};
        ///this.state.value = this.state.value.bind(this);

    }

    handleChange(event) {
        this.setState({
            value: event.target.value


        });
        console.log("in the handleChange  ->  " + event.target.value);

    }

    render() {

        var inputF =  <input placeholder="filter..." type="text"
                             value={this.state.value}
                             onChange={this.handleChange}

        />;

        if (this.state.value === ""){
            console.log("emptyinput");
            return (<div className="widget">
                    {inputF}
                    <div>{ this.state.value ? 'Searching for:' + this.state.value : null }</div>
                    <AnotherFolderContainer
                        data={data}
                        searchingText={this.state.value}
                    />
                </div>


            )
        }

       else {
            console.log("input full");
            return (<div className="widget">
                    {inputF}
                    <div>{ this.state.value ? 'Searching for:' + this.state.value : null }</div>

                    <FolderContainer
                        data={data}

                        searchingText={this.state.value}
                    />
                </div>


            )
    }
}
}
;

export default Filter;