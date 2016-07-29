import React, {Component} from 'react';
import Dirs from './Dirs.jsx';
import Files from './Files.jsx';
import FolderContainer from './FolderContainer.jsx';
import Filter from './Filter.jsx';
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



class App extends Component {
    render() {

        return (
            <div>
                <Filter />
               
            </div>

        );

    }
}

export default App;


