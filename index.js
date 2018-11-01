const app = "I don't do much.";


const token = '057bb3e0b05ae3ce032fbe3d38e94b2307f015b5'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));