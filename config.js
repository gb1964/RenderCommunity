
exports.appname = 'Render Community';

// url for proper link generation
exports.url = 'http://localhost:3000';

// email settings (same as nodemailer)
exports.emailType = 'nodemailer-smtp-transport';
exports.emailSettings = {
  service: 'smtp.163.com',
  auth: {
//    user: 'RenderCommunity@smtp.sendgrid.net',
//    pass: 'gb123456'
    user: 'RenderCommunity@smtp.163.com',
    pass: 'render1234'
  }
};

exports.emailTemplate = 'lockit-template-blank';

// use CouchDB
//exports.db = 'http://127.0.0.1:5984/';

// or if you want to use MongoDB
 exports.db = {
   url: 'mongodb://localhost:27017/',
   name: 'RenderCommunity',
   collection: 'account'  // collection name for MongoDB
 };
// or if you want to use rest
//exports.rest = true;

exports.rest = {

  // set starting page for single page app
  index: 'public/index.html',

  // use view engine (render()) or send static file (sendfile())
  useViewEngine: false

};

// lock account
exports.failedLoginsWarning = 3;
exports.failedLoginAttempts = 5;
exports.accountLockedTime = '20 minutes';


exports.signup = {
  route: '/signup',
  tokenExpiration: '1 day',
  views: {
    signup: '',         // input fields 'name', 'email' and 'password' | local variable 'error' | POST /'signup.route'
    linkExpired: '',    // message link has expired | input field 'email' | POST /'signup.route'/resend-verification
    verified: '',       // message email is now verified and maybe link to /'login.route'
    signedUp: '',       // message email has been sent => check your inbox
    resend: ''          // input field 'email' | local variable 'error' | POST /'signup.route'/resend-verification
  },
  handleResponse: true  // let lockit handle the response after signup success
 };

// login settings
exports.login = {
  route: '/login',
  logoutRoute: '/logout',
  views: {
    login: '',          // input fields 'login' and 'password' | POST /'login.route' | local variable 'error'
    loggedOut: ''       // message that user logged out
  },
  handleResponse: true  // let lockit handle the response after login/logout success
};

// forgot password settings
exports.forgotPassword = {
  route: '/forgot-password',
  tokenExpiration: '1 day',
  views: {
    forgotPassword: '', // input field 'email' | POST /'forgotPassword.route' | local variable 'error'
    newPassword: '',    // input field 'password' | POST /'forgotPassword.route'/#{token} | local variable 'error'
    changedPassword: '',// message that password has been changed successfully
    linkExpired: '',    // message that link has expired and maybe link to /'forgotPassword.route'
    sentEmail: ''       // message that email with token has been sent
  },
//  handleResponse: true
};

// delete account settings
exports.deleteAccount = {
  route: '/delete-account',
  views: {
    remove: '',         // input fields 'username', 'phrase', 'password' | POST /'deleteAccount.route' | local variable 'error'
    removed: ''         // message that account has been deleted
  },
  handleResponse: true  // let lockit handle the response after delete account success
};

// from email address
exports.emailFrom = 'welcome@RenderCommunity';

// email signup template
exports.emailSignup = {
  subject: 'Welcome to <%- appname %>',
  text: [
    '<h2>Hello <%- username %></h2>',
    'Welcome to <%- appname %>.',
    '<p><%- link %> to complete your registration.</p>'
  ].join(''),
  linkText: 'Click here'
};

// signup process -> email already taken
exports.emailSignupTaken = {
  subject: 'Email already registered',
  text: [
    '<h2>Hello <%- username %></h2>',
    'you or someone else tried to sign up for <%- appname %>.',
    '<p>Your email is already registered and you cannot sign up twice.',
    ' If you haven\'t tried to sign up, you can safely ignore this email. Everything is fine!</p>',
    '<p>The <%- appname %> Team</p>'
  ].join('')
};

// signup process -> resend email with verification link
exports.emailResendVerification = {
  subject: 'Complete your registration',
  text: [
    '<h2>Hello <%- username %></h2>',
    'here is the link again. <%- link %> to complete your registration.',
    '<p>The <%- appname %> Team</p>'
  ].join(''),
  linkText: 'Click here'
};

// forgot password
exports.emailForgotPassword = {
  subject: 'Reset your password',
  text: [
    '<h2>Hey <%- username %></h2>',
    '<%- link %> to reset your password.',
    '<p>The <%- appname %> Team</p>'
  ].join(''),
  linkText: 'Click here'
};
