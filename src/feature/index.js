import * as Home from './home';
import * as Sign from './sign';
import * as Projects from './projects';
import * as Account from './account';
import * as Contract from './contract';
import * as NavContainer from './nav';
import './feature.css';

export default {
  ...Home,
  ...Sign,
  ...Projects,
  ...Account,
  ...Contract,
  ...NavContainer
};

