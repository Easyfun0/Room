
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBf7mAL-4bxe-BaDLK1dmul6Ch1qj4LhME",
    authDomain: "public-e68f4.firebaseapp.com",
    databaseURL: "https://public-e68f4.firebaseio.com",
    projectId: "public-e68f4",
    storageBucket: "public-e68f4.appspot.com",
    messagingSenderId: "60217241448"
  };
  firebase.initializeApp(config);


  //dom
  var txt = document.getElementById('txt');
  var send = document.getElementById('send');
  var list = document.getElementById('list');
  var myDate = document.getElementById('date');
  var myTime = document.getElementById('time');

  var todos = firebase.database().ref('todos');

  send.addEventListener('click',function(e){
    //   console.log(txt.value);
    //   console.log(time.value);
      todos.push({content: txt.value,
    });
  })

  //顯示出來
  todos.on('value',function(snapshot){
      var str = '';
      var data = snapshot.val();
      for(var item in data){
          str+= '<li data-key="xxx">' + data[item].content+'</li>';
      }
        // console.log(str);
        list.innerHTML = str;
  })

  //刪除邏輯






  /////JQ
  $(function() {
    $( "#datepicker" ).datepicker({
      showOtherMonths: true,
      selectOtherMonths: true
    });
  });
//   $(function() {
//     $( "#timepicker" ).timepicker({
//       showOthertimes: true,
//       selectOthertimes: true
//     });
//   });

