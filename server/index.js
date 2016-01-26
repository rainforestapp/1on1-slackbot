import koa from 'koa';
import logger from 'koa-logger';
import session from 'koa-session';
import passport from 'koa-passport';
import bodyParser from 'koa-bodyparser';
import serve from 'koa-static';
import Router from 'koa-router';
import path from 'path';
import views from 'koa-views';
import react from 'react-views';
import appComponent from '../components/app';

const staticFiles = path.join(__dirname, '..', 'public');
const viewsPath = path.resolve(__dirname, '..', 'components');
const engine = react({
  path: viewsPath,
  cache: false,
});

const router = new Router();
router.get('/', function* (){
  this.body = yield engine.render('app.js');
});

const app = koa();
app.use(bodyParser())
.use(logger())
.use(serve(staticFiles))
.use(session(app))
.use(router.routes());

//
// endpoints

// index

// sign up
//app.get('/auth')
//
//// get list of existing pairings
//app.get('/1on1');
//
//// get list of users
//app.get('/team')
//
//// update user info
//app.put('/user')
//
//// pair with other person
//app.post('/1on1')
//
//// remove 1on1 meeting
//app.delete('/1on1')
//
//

app.listen(3000);
