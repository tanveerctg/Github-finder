const github=new Github;
const ui=new UI;

document.querySelector('.searchUser').addEventListener('keyup',function(e){

 let search_user=e.target.value;
 if(search_user !==''){

  github.user(search_user)
  .then(function(data){

      if(data.profile.message==='Not Found'){
        ui.showAlert();
        ui.clearAlert();
      }else{
        ui.getuser(data.profile);
        ui.getrepo(data.repo);
        console.log(data.repo);
      }
  });

 }else{
    ui.clearProfile();
 }
})
