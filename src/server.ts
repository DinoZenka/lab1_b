import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import CarsRoute from '@routes/cars.route';
import validateEnv from '@utils/validateEnv';
import cluster from 'cluster';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new CarsRoute(), new AuthRoute()]);

if (cluster.isPrimary) {
  app.listen();
}
