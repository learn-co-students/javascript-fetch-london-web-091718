const app = "I don't do much.";

const token = 'c10c4b63cc2a75e18430482a8a7f9ac5c878d30d'
fetch('https://api.github.com/user/repos', {
    headers: {
        Authorization: `token ${token}`
    }
}).then(res => res.json()).then(json => console.log(json));