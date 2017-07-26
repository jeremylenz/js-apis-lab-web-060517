//define functions here
var token = "c79ae3ec314e406cc3e41c1f7cbfaa05ca2ebbb9"

var createGist = function(file_name, content, description, token){

  return $.ajax({
    url: 'https://api.github.com/gists',
    type: 'POST',
    data: JSON.stringify({
    "description": description,
    "public": true,
    "files": {
      "test_file.md": {
            "content": content
        }
      }
    }),
    headers: {
    Authorization: "token " + token
    }

  }).done(function(data) {
    myGists(data.owner.login, token)
  })


};

var myGists = function (username, token){
  return $.ajax({
    url: 'https://api.github.com/users/' + username + '/gists',
    type: 'GET',
    headers: {
    Authorization: "token " + token }
  })

};

var bindCreateButton = function() {
  // call functions here

};

$(document).ready(function(){

  $('.my-form').on('submit', function (event) {
    event.preventDefault()
    var fileName = $('#file_name').val()
    var desc = $('#description').val()
    var contn = $('#contents').val()
    console.log(createGist(fileName, contn, desc, token))

  })
});


// token c79ae3ec314e406cc3e41c1f7cbfaa05ca2ebbb9
