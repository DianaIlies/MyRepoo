/**
 * Created by dianailies on 7/26/2016.
 */
import React, {Component} from 'react';
import Dirs from "./Dirs.jsx";
import Files from "./Files.jsx";

let index = 0;

class AnotherFolderContainer extends Component {

    render() {

        let output = [];
console.log(this.props.isCollapsed);

        this.props.data.forEach((item)=> {

            if (item.type === 'folder') {

                output.push(
                    <Dirs name={item.name} myItem={item} key={++index} handle={this.props.handle}/>
                );

            }
            else if (item.type === 'file') {
                output.push(<Files name={item.name} key={++index}/>);

            }
            if (item.children != null) {
                output.push(<AnotherFolderContainer data={item.children} key={++index} handle={this.props.handle}/>);

            }

        });
        return (
            <ul className="folder-container">
                {output}
            </ul>
        )
    }

}


export default AnotherFolderContainer;