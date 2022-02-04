const LinksSocialMedia = {
  github: 'EduSantos20',
  youtube: 'channel/UCJlFUOlM1ryE9Ys9zeG_q4w',
  instagram: 'eduaardosaantos',
  facebook: 'profile.php?id=100008359867328',
  twitter: 'Eduardo46537803'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name //peguei todos esse conteudo da ipa do github
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
