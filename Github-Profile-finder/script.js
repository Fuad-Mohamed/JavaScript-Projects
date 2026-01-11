// 1. Correct way to select the 'profile' element:
const profileDetails = document.getElementById("profile");
const nameInput = document.getElementById("name-input");
const searchBtn = document.getElementById("btn");
const BASE_URL = `https://api.github.com/users/`;

async function getProfileDetails() {
  const response = await fetch(`${BASE_URL}${nameInput.value}`);
  const result = await response.json();
  if (result) {
    displayProfileDetails(result); // pass GitHub data, NOT a DOM element!
  }
}

function displayProfileDetails(data) {
  const { avatar_url, followers, following, public_repos, login, html_url } =
    data;

  profileDetails.innerHTML = `
    <p><a href="${html_url}" target="_blank">${login}</a></p>
    <img src="${avatar_url}" alt="avatar" width="100"/>
    <p>Followers : ${followers}</p>
    <p>Following : ${following}</p>
    <p>Public Repos : ${public_repos}</p>
  `;
}

searchBtn.addEventListener("click", getProfileDetails);
