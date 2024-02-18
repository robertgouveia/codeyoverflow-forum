import React from "react";
import {Comments} from './commentData';
import Card from './components/Card';

const App = () => {
    return Comments.map(comment => {
        return <Card commentObject={comment} />
    })
}

export default App;