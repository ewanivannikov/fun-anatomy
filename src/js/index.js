import page from 'page';
import '../styles/index.css';
import home from './pages/home';
import about from './pages/about';
import card from './pages/card';
import notFound from './pages/notFound';
import {createStore, createEvent, createEffect, createStoreObject, forward} from 'effector';


page('/', home);

page('/card/:id', card);

page('/about', about);

page('*', notFound);

page();