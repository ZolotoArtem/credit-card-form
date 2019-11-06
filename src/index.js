import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { Card } from './components/card/Card';
import { Form } from './components/form/Form';

function App() {
    const [formData, setFormData] = useState({});
    const [cardFlipped, setCardFlipped] = useState(false);

    return (
        <React.Fragment>
            <Card formData={formData} cardFlipped={cardFlipped} />
            <Form setFormData={setFormData} setCardFlipped={setCardFlipped} cardFlipped={cardFlipped} />
        </React.Fragment>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
