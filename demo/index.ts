import { SalteAuth } from '@salte-auth/salte-auth';
import { Redirect } from '@salte-auth/redirect';
import { Google } from '../src/google';

const auth = new SalteAuth({
  providers: [
    new Google({
      clientID: '680805279527-a1fpj4j0q31e58qstvih9p2rljsdadp9.apps.googleusercontent.com',
      responseType: 'code',
    })
  ],

  handlers: [
    new Redirect({
      default: true
    })
  ]
});

const button = document.createElement('button');
button.innerHTML = `Login`;
button.addEventListener('click', () => {
  auth.login({
    provider: 'google'
  });
});

document.body.appendChild(button);

