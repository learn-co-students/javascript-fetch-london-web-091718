const app = "I don't do much.";

const token = 'b3a2960e60e08436c14db3d52c095bd487622016'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
