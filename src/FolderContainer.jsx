/**
 * Created by dianailies on 7/25/2016.
 */
import React, {Component} from 'react';
import Files from "./Files.jsx";
import AnotherFolderContainer from "./AnotherFolderContainer.jsx";


let index = 0;


class FolderContainer extends Component {
    render() {

        let output = [];
console.log(this.props.data);
console.log(this.props.data.name);

        this.props.data.forEach((item)=> {

            if (item.type === 'folder' && (item.name).match(this.props.searchingText) !== null) {
                output.pop();
                output.push (<AnotherFolderContainer data={this.props.data} searchingText={this.props.searchingText}
                                                  key={++index} handle={this.props.handle}/>);
            }
            else {
                if (item.type === 'file' && (this.props.searchingText === "" || (item.name).match(this.props.searchingText) !== null)) {
                    output.push(<Files name={item.name} key={++index}/>);

                }
                if (item.children != null) {
                    output.push(<FolderContainer data={item.children} searchingText={this.props.searchingText}
                                                 key={++index} handle={this.props.handle}/>);

                }

            }
        });


        return (
            <ul  className="folder-container">
                {output}
            </ul>
        )
    }
}


export default FolderContainer;