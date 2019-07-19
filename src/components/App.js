import React, { useState } from 'react';
import ResourceList from './ResourceList';

const App = () => {
    const [resource, setResource] = useState('posts');
        return (
            <div className="ui container" style={{marginTop:50}}>
                <div>
                    <button onClick={() => setResource('posts')} className="ui button primary">Posts</button>
                    <button onClick={() => setResource('todos')} className="ui button primary">ToDos</button>
                </div>
                <ResourceList resource={resource} />
            </div>
        )
}

export default App
