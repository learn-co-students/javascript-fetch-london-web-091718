const app = "I don't do much.";

const token = '6f37203d0cde15f76dce69561193a8a8ae0f8ad6';

fetch('https://api.github.com/user/repos', {
    headers: {
        Authorization: `token ${token}`
    }
}).then(res => res.json()).then(json => console.log(json));