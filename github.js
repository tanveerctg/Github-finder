class Github{

  constructor() {
    this.client_id='f43e2ea32022dad07929';
    this.client_secret='de0c8ff80329ba48d7447704d7fa4ffac4ad259c';
    this.repo_count=5;
  }
  async user(value){
    const profileResponse=await fetch(`https://api.github.com/users/${value}?client_id=${ this.client_id}& client_secret=${this.client_secret}`);

    const repoResponse=await fetch(`https://api.github.com/users/${value}/repos?per_page=${this.repo_count}&client_id=${ this.client_id}& client_secret=${this.client_secret}`);

    const profileData=await profileResponse.json();
    const repoData=await repoResponse.json();

    return{
           profile:profileData,
           repo:repoData
      }
  }
}