class UI{
  constructor(){
    this.profile=document.querySelector('.profile');
  }
  getuser(user){
    this.profile.innerHTML=`
      <div class="card card-body mt-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Following:${user.following}</span>
            <span class="badge badge-info">Followers:${user.followers}</span>
            <span class="badge badge-success">Gists:${user.public_gists}</span>
            <span class="badge badge-warning">Repos:${user.public_repos}</span>
            <br><br>
            <ul class="list-group-list-group-block">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div> 
      <br>
      <h3 class="mb-3">Latest Repos</h3>
      <div class="repo"></div>`;
  }
  getrepo(repos){
    let output='';
    repos.forEach(function(repo){
      output+=`<div class="card card-body">
                  <div class="row">
                      <div class="col-md-6">
                          <a href='${repo.html_url}'>${repo.name}</a>
                      </div>
                      <div class="col-md-6">
                              <span class="badge badge-info">Stars: ${repo.stargazers_count}</span>
                              <span class="badge badge-success">Watchers: ${repo.watchers_count}</span>
                              <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                      </div> 
                  </div>
                </div>`
    });
      document.querySelector('.repo').innerHTML=output;
  }
  clearProfile(){
    this.profile.innerHTML='';
  }
  clearPreviousAlert(){
    const alert=document.querySelector('.alert');
    if(alert){
      alert.remove();
    }
  }
  showAlert(){
    const msg=document.createElement('div');
    msg.className='alert alert-danger container';
    msg.appendChild(document.createTextNode('Not Found'));
    const parent=document.querySelector('.container');
    const container=document.querySelector('.searchContainer');
    parent.insertBefore(msg,container);

  }
  clearAlert(){
    setTimeout(function(){
      document.querySelector('.alert').remove();
    },1000);
  }

}