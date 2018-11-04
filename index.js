const app = "I don't do much.";


const token = '9288fcb1ec703af0a288dd93f6def357193514ab'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
