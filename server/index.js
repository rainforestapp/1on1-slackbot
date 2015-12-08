import koa from 'koa';

// endpoints

// sign up
app.get('/auth')

// get list of existing pairings
app.get('/1on1');

// get list of users
app.get('/team')

// update user info
app.put('/user')

// pair with other person
app.post('/1on1')

// remove 1on1 meeting
app.delete('/1on1')
