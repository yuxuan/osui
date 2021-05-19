import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from '@/modules/App';
import '@/styles';

const main = () => render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.body.appendChild(document.createElement('div'))
);

main();
