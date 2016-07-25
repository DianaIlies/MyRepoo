import React, {Component} from 'react';
import Dirs from './Dirs.jsx';
import Files from './Files.jsx';
import Inp from './inputField.jsx'
import FolderContainer from './FolderContainer.jsx'

// const folders =
//     {
//         type: 'dir',
//         name: 'apppp',
//         children: [
//             {
//                 type: 'file',
//                 name: 'index.html'
//             },
//             {
//                 type: 'dir',
//                 name: 'js',
//                 children: [
//                     {
//                         type: 'file',
//                         name: 'main.js'
//                     },
//                     {
//                         type: 'file',
//                         name: 'app.js'
//                     },
//                     {
//                         type: 'file',
//                         name: 'misc.js'
//                     },
//                     {
//                         type: 'dir',
//                         name: 'vendor',
//                         children: [
//                             {
//                                 type: 'file',
//                                 name: 'jquery.js'
//                             },
//                             {
//                                 type: 'file',
//                                 name: 'underscore.js'
//                             }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 type: 'dir',
//                 name: 'css',
//                 children: [
//                     {
//                         type: 'file',
//                         name: 'reset.css'
//                     },
//                     {
//                         type: 'file',
//                         name: 'main.css'
//                     }
//                 ]
//             }
//         ]
//     }
//     ;

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

class App extends Component {
    render() {

        return (
            <div>
                <Inp />
                <FolderContainer />
               
            </div>

        );

    }
}

export default App;


