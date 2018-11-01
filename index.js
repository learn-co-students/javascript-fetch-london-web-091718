const app = "I don't do much.";



const token = 'b48c79615a33d0a9a1f7a9435a8695fa8a131298'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
