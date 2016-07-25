/**
 * Created by dianailies on 7/25/2016.
 */
import React, {Component} from 'react';
import Dirs from "./Dirs.jsx";
import Files from "./Files.jsx";

let index=0;
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

class FolderContainer extends  Component{
    render()
    {
        let output=[];

        data.forEach((item)=> {
            console.log(item.type);
            if(item.type ==='folder'){
                output.push(<Dirs name={item.name} key={++index} />); }
            else if (item.type ==='file'){
                output.push(<Files name={item.name} key={++index} />);}

            if(item.children){
                output.push(<FolderContainer data={item.children} key={++index} />);
            }

        });
        return (
            <ul>
                {output}
            </ul>
        )
    }
}

export default FolderContainer;