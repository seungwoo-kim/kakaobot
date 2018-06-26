var express = require('express');
var router = express.Router();


/* router.get('/', function (req, res) {
  const buttons = ["교내식당","메뉴2","메뉴3"];
  let keyboard = {
      "type" : "buttons",
      "buttons" : buttons
  };
  res.set({
    'content-type':'application/json'
  }).send(JSON.stringify(keyboard))
});  */
router.get('/keyboard',function(req,res,next) {
  const menu = {
    type: 'buttons',
    buttons: ["메뉴1","메뉴2","메뉴3"]
  };
  res.set({
    'content-type':'application/json'
  }).send(JSON.stringify(menu))
});

router.get('/message', (req,res)=> {
  const _obj={
    user_key: req.body.user_key,
    type:req.body.type,
    content: req.body.content
  };
  let message={
    "message":{
      "text": '응답 메세지...',
      "photo":{
        "url":"https://i.ytimg.com/vi/wHRYevyAiKM/maxresdefault.jpg",
        "width":640,
        "height":480
      },
      "message_button":{
        "label":"라벨입니다",
        "url":"https://cheese10yun.github.io/"
        }
    },
    "keyboard":{
      "type":"buttons",
      "buttons":[
        "메뉴1",
        "메뉴2",
        "메뉴3"
      ]
    }
  };
  res.set({
    'content-type': 'application/json'
  }).send(JSON.stringify(message));
})

router.get('/friend',(req,res)=>{
  const user_key=req.body.user_key;
  console.log('${user_key}님이 쳇팅방에 참가했습니다.');
  res.set({
    'content-type':'application/json'
  }).send(JSON.stringity({success:true}));
}
);

router.delete('/friend',(req,res)=>{
  const user_key=req.body.user_key;
  console.log('${user_key}님이 쳇팅방을 차단했습니다.');

  res.set({
    'content-type':'application/json'
  }).send(JSON.stringify({success:true}));
});

router.delete('/chat_room/:user_key',(req,res)=>{
  const user_key=req.params.user_key;
  console.log('${user_key}님이 챗팅방에서 나갔습니다.');

  res.set({
    'content-type':'application/jspn'
  }).send(JSON.stringify({success:true}));
});

module.exports = router;
