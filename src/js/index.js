import { createInspector } from 'effector-inspector';
import page from 'page';

import '../styles/index.css';
import home from './pages/home';
import about from './pages/about';
import card from './pages/card';
import notFound from './pages/notFound';

page('/', home);

page('/card/:id', card);

page('/about', about);

page('*', notFound);

page();

createInspector();