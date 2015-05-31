API_URL = 'http://localhost:8000/api/v1.0';

function displayComment(comment, parentNode){
  var div = document.createElement('div');
  var img = document.createElement('img');
  img.src = 'http://gravatar.com/avatar/' + comment.gravatar;
  div.appendChild(img);

  var span = document.createElement('span');
  span.innerHTML = comment.text;
  div.appendChild(span);

  parentNode.appendChild(div);
  for(var j=0;j<comment.children.length;j++){
    displayComment(comment.children[j], div);
  }
}

function buildComments(pageId){
  var request = new XMLHttpRequest();
  request.onreadystatechange = function(){
    if (request.readyState === 4 && request.status === 200){
      comments = JSON.parse(request.responseText);
      var agora = document.getElementById('agora');
      for(var i=0;i<comments.length;i++){
        displayComment(comments[i], agora);
      }
    }
  };
  request.open('GET', API_URL + '/pages/' + pageId + '/comments', true);
  request.setRequestHeader("Content-Type", "Application/JSON");
  request.setRequestHeader("Accept", "Application/JSON");

  request.send();
}
