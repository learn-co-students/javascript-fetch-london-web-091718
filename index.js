const app = "I don't do much.";


const token = "7f20d66061e4e8cd0361a7a789101a29b03d2fdb"
fetch('https://api.github.com/repos',
{
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
