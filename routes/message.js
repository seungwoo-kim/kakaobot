/*var express = require('express');
var router = express.Router();

router.get('/message', (req, res) => {
    const _obj = {
        user_key: req.body.user_key,
        type: req.body.type,
        content: req.body.content
    };
    let message;
    if (req = "정답") {
        message =
            {
                "message":
                {
                    "text": '응답 메세지...',
                    "photo":
                    {
                        "url": "https://i.ytimg.com/vi/wHRYevyAiKM/maxresdefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "message_button":
                    {
                        "label": "라벨입니다",
                        "url": "https://cheese10yun.github.io/"
                    }
                },
                "keyboard":
                {
                    "type": "buttons",
                    "buttons":
                        [
                            "메뉴1",
                            "메뉴2",
                            "메뉴3"
                        ]
                }
            }
    }
    else {
        message =
            {
                "message":
                {
                    "text": '밑의 photo에 대한 글',
                    "photo":
                    {
                        "url": "https://i.ytimg.com/vi/wHRYevyAiKM/maxresdefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "message_button":
                    {
                        "label": "버튼을 누르면 들어가지는 주소",
                        "url": "https://cheese10yun.github.io/"
                    }
                },
                "keyboard":
                {
                    "type": "buttons",
                    "buttons": [
                        "메뉴1",
                        "메뉴2",
                        "메뉴3",
                        "이건 배열"
                    ]
                }

            }
    }


    res.set({
        'content-type': 'application/json'
    }).send(JSON.stringify(message));
});

module.exports = router;*/
