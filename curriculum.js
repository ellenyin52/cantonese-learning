import {lessons,advancedLessons} from './data.js';
const extraModules=[
  {
    "topic": "住宿与居家",
    "goal": "处理入住、房间设施和家务问题",
    "scenario": "你入住后发现空调不冷，请说明问题，提出换房或维修要求。",
    "words": [
      [
        "預訂",
        "jyu6 deng6",
        "预订"
      ],
      [
        "入住",
        "jap6 zyu6",
        "入住"
      ],
      [
        "退房",
        "teoi3 fong2",
        "退房"
      ],
      [
        "房間",
        "fong4 gaan1",
        "房间"
      ],
      [
        "鎖匙",
        "so2 si4",
        "钥匙"
      ],
      [
        "冷氣",
        "laang5 hei3",
        "空调"
      ],
      [
        "熱水",
        "jit6 seoi2",
        "热水"
      ],
      [
        "毛巾",
        "mou4 gan1",
        "毛巾"
      ],
      [
        "乾淨",
        "gon1 zeng6",
        "干净"
      ],
      [
        "嘈",
        "cou4",
        "吵"
      ],
      [
        "隔籬",
        "gaak3 lei4",
        "隔壁／旁边"
      ],
      [
        "整",
        "zing2",
        "修理／弄"
      ],
      [
        "壞咗",
        "waai6 zo2",
        "坏了"
      ],
      [
        "搬屋",
        "bun1 uk1",
        "搬家"
      ],
      [
        "租",
        "zou1",
        "租"
      ],
      [
        "按金",
        "on3 gam1",
        "押金"
      ],
      [
        "管理處",
        "gun2 lei5 cyu3",
        "管理处"
      ],
      [
        "倒垃圾",
        "dou2 laap6 saap3",
        "倒垃圾"
      ],
      [
        "洗衫",
        "sai2 saam1",
        "洗衣服"
      ],
      [
        "晾衫",
        "long6 saam1",
        "晾衣服"
      ]
    ],
    "sentences": [
      [
        "我之前預訂咗一間雙人房。",
        "ngo5 zi1 cin4 jyu6 deng6 zo2 jat1 gaan1 soeng1 jan4 fong2.",
        "我之前预订了一间双人房。"
      ],
      [
        "唔好意思，間房嘅冷氣唔夠凍。",
        "m4 hou2 ji3 si1, gaan1 fong2 ge3 laang5 hei3 m4 gau3 dung3.",
        "不好意思，房间的空调不够凉。"
      ],
      [
        "可唔可以幫我換一間靜啲嘅房？",
        "ho2 m4 ho2 ji5 bong1 ngo5 wun6 jat1 gaan1 zing6 di1 ge3 fong2?",
        "可以帮我换一间安静些的房间吗？"
      ],
      [
        "唔該，可唔可以畀多兩條毛巾我？",
        "m4 goi1, ho2 m4 ho2 ji5 bei2 do1 loeng5 tiu4 mou4 gan1 ngo5?",
        "麻烦可以再给我两条毛巾吗？"
      ],
      [
        "聽日最遲幾點要退房？",
        "ting1 jat6 zeoi3 ci4 gei2 dim2 jiu3 teoi3 fong2?",
        "明天最晚几点要退房？"
      ],
      [
        "隔籬太嘈，我成晚都瞓唔着。",
        "gaak3 lei4 taai3 cou4, ngo5 seng4 maan5 dou1 fan3 m4 zoek6.",
        "隔壁太吵，我整晚都睡不着。"
      ],
      [
        "呢度嘅熱水爐好似壞咗。",
        "ni1 dou6 ge3 jit6 seoi2 lou4 hou2 ci5 waai6 zo2.",
        "这里的热水器好像坏了。"
      ],
      [
        "我想問租金包唔包管理費？",
        "ngo5 soeng2 man6 zou1 gam1 baau1 m4 baau1 gun2 lei5 fai3?",
        "我想问租金包不包括管理费？"
      ],
      [
        "搬屋之前要交幾多按金？",
        "bun1 uk1 zi1 cin4 jiu3 gaau1 gei2 do1 on3 gam1?",
        "搬家前需要交多少押金？"
      ],
      [
        "我洗完衫先去倒垃圾。",
        "ngo5 sai2 jyun4 saam1 sin1 heoi3 dou2 laap6 saap3.",
        "我先洗完衣服再去倒垃圾。"
      ]
    ]
  },
  {
    "topic": "身体不适与求医",
    "goal": "描述症状、持续时间和预约需求",
    "scenario": "模拟预约看医生：说明哪里不舒服、持续多久，并询问时间。只练语言，不作医疗判断。",
    "words": [
      [
        "唔舒服",
        "m4 syu1 fuk6",
        "不舒服"
      ],
      [
        "頭痛",
        "tau4 tung3",
        "头痛"
      ],
      [
        "肚痛",
        "tou5 tung3",
        "肚子痛"
      ],
      [
        "喉嚨",
        "hau4 lung4",
        "喉咙"
      ],
      [
        "發燒",
        "faat3 siu1",
        "发烧"
      ],
      [
        "咳",
        "kat1",
        "咳嗽"
      ],
      [
        "睇醫生",
        "tai2 ji1 sang1",
        "看医生"
      ],
      [
        "診所",
        "can2 so2",
        "诊所"
      ],
      [
        "預約",
        "jyu6 joek3",
        "预约"
      ],
      [
        "症狀",
        "zing3 zong6",
        "症状"
      ],
      [
        "敏感",
        "man5 gam2",
        "过敏／敏感"
      ],
      [
        "食藥",
        "sik6 joek6",
        "吃药"
      ],
      [
        "藥房",
        "joek6 fong4",
        "药房"
      ],
      [
        "休息",
        "jau1 sik1",
        "休息"
      ],
      [
        "胃口",
        "wai6 hau2",
        "胃口"
      ],
      [
        "暈",
        "wan4",
        "晕"
      ],
      [
        "持續",
        "ci4 zuk6",
        "持续"
      ],
      [
        "量體溫",
        "loeng4 tai2 wan1",
        "量体温"
      ],
      [
        "覆診",
        "fuk1 can2",
        "复诊"
      ],
      [
        "醫生",
        "ji1 sang1",
        "医生"
      ]
    ],
    "sentences": [
      [
        "我由尋晚開始有啲頭痛。",
        "ngo5 jau4 cam4 maan5 hoi1 ci2 jau5 di1 tau4 tung3.",
        "我从昨晚开始有点头痛。"
      ],
      [
        "我想預約今日下晝睇醫生。",
        "ngo5 soeng2 jyu6 joek3 gam1 jat6 haa6 zau3 tai2 ji1 sang1.",
        "我想预约今天下午看医生。"
      ],
      [
        "我喉嚨痛，仲有啲咳。",
        "ngo5 hau4 lung4 tung3, zung6 jau5 di1 kat1.",
        "我喉咙痛，还有点咳嗽。"
      ],
      [
        "呢個症狀已經持續咗三日。",
        "ni1 go3 zing3 zong6 ji5 ging1 ci4 zuk6 zo2 saam1 jat6.",
        "这个症状已经持续了三天。"
      ],
      [
        "請問最近嘅診所喺邊度？",
        "cing2 man6 zeoi3 gan6 ge3 can2 so2 hai2 bin1 dou6?",
        "请问最近的诊所在哪里？"
      ],
      [
        "我對某啲藥物敏感。",
        "ngo5 deoi3 mau5 di1 joek6 mat6 man5 gam2.",
        "我对某些药物过敏。"
      ],
      [
        "呢隻藥係飯前定飯後食？",
        "ni1 zek3 joek6 hai6 faan6 cin4 ding6 faan6 hau6 sik6?",
        "这种药是饭前还是饭后吃？"
      ],
      [
        "我呢兩日冇乜胃口。",
        "ngo5 ni1 loeng5 jat6 mou5 mat1 wai6 hau2.",
        "我这两天没什么胃口。"
      ],
      [
        "醫生叫我休息多啲，飲多啲水。",
        "ji1 sang1 giu3 ngo5 jau1 sik1 do1 di1, jam2 do1 di1 seoi2.",
        "医生让我多休息、多喝水。"
      ],
      [
        "請問我需唔需要再返嚟覆診？",
        "cing2 man6 ngo5 seoi1 m4 seoi1 jiu3 zoi3 faan1 lai4 fuk1 can2?",
        "请问我需不需要再回来复诊？"
      ]
    ]
  },
  {
    "topic": "工作与协作",
    "goal": "说明进度、确认任务和商量截止时间",
    "scenario": "向同事汇报一项任务：已完成什么、遇到什么问题、何时能交付。",
    "words": [
      [
        "同事",
        "tung4 si6",
        "同事"
      ],
      [
        "開會",
        "hoi1 wui6",
        "开会"
      ],
      [
        "文件",
        "man4 gin2",
        "文件"
      ],
      [
        "資料",
        "zi1 liu6",
        "资料"
      ],
      [
        "進度",
        "zeon3 dou6",
        "进度"
      ],
      [
        "完成",
        "jyun4 sing4",
        "完成"
      ],
      [
        "負責",
        "fu6 zaak3",
        "负责"
      ],
      [
        "跟進",
        "gan1 zeon3",
        "跟进"
      ],
      [
        "確認",
        "kok3 jan6",
        "确认"
      ],
      [
        "截止",
        "zit6 zi2",
        "截止"
      ],
      [
        "趕",
        "gon2",
        "赶"
      ],
      [
        "遲",
        "ci4",
        "迟／晚"
      ],
      [
        "安排",
        "on1 paai4",
        "安排"
      ],
      [
        "討論",
        "tou2 leon6",
        "讨论"
      ],
      [
        "修改",
        "sau1 goi2",
        "修改"
      ],
      [
        "意見",
        "ji3 gin3",
        "意见"
      ],
      [
        "通知",
        "tung1 zi1",
        "通知"
      ],
      [
        "收到",
        "sau1 dou2",
        "收到"
      ],
      [
        "交",
        "gaau1",
        "提交／交给"
      ],
      [
        "抽時間",
        "cau1 si4 gaan3",
        "抽时间"
      ]
    ],
    "sentences": [
      [
        "我想同你確認吓開會嘅時間。",
        "ngo5 soeng2 tung4 nei5 kok3 jan6 haa5 hoi1 wui6 ge3 si4 gaan3.",
        "我想和你确认一下开会的时间。"
      ],
      [
        "呢份文件我仲有少少未做完。",
        "ni1 fan6 man4 gin2 ngo5 zung6 jau5 siu2 siu2 mei6 zou6 jyun4.",
        "这份文件我还有一点没做完。"
      ],
      [
        "你可唔可以幫手跟進呢件事？",
        "nei5 ho2 m4 ho2 ji5 bong1 sau2 gan1 zeon3 ni1 gin6 si6?",
        "你可以帮忙跟进这件事吗？"
      ],
      [
        "我負責整理資料，你負責聯絡同事。",
        "ngo5 fu6 zaak3 zing2 lei5 zi1 liu6, nei5 fu6 zaak3 lyun4 lok3 tung4 si6.",
        "我负责整理资料，你负责联系同事。"
      ],
      [
        "如果有新進度，我會即刻通知你。",
        "jyu4 gwo2 jau5 san1 zeon3 dou6, ngo5 wui5 zik1 hak1 tung1 zi1 nei5.",
        "如果有新进展，我会马上通知你。"
      ],
      [
        "今日可能趕唔切，聽朝交得唔得？",
        "gam1 jat6 ho2 nang4 gon2 m4 cit3, ting1 ziu1 gaau1 dak1 m4 dak1?",
        "今天可能来不及，明早交可以吗？"
      ],
      [
        "我收到你嘅意見，會再修改。",
        "ngo5 sau1 dou2 nei5 ge3 ji3 gin3, wui5 zoi3 sau1 goi2.",
        "我收到了你的意见，会再修改。"
      ],
      [
        "可唔可以抽十分鐘討論吓？",
        "ho2 m4 ho2 ji5 cau1 sap6 fan1 zung1 tou2 leon6 haa5?",
        "可以抽十分钟讨论一下吗？"
      ],
      [
        "唔好意思，我想再確認一次要求。",
        "m4 hou2 ji3 si1, ngo5 soeng2 zoi3 kok3 jan6 jat1 ci3 jiu1 kau4.",
        "不好意思，我想再确认一次要求。"
      ],
      [
        "我做完之後會發畀你。",
        "ngo5 zou6 jyun4 zi1 hau6 wui5 faat3 bei2 nei5.",
        "我做完之后会发给你。"
      ]
    ]
  },
  {
    "topic": "电话与线上沟通",
    "goal": "接电话、留口信和排查联网问题",
    "scenario": "模拟一通电话：先确认身份，说明连接问题，约好稍后回电。",
    "words": [
      [
        "電話",
        "din6 waa2",
        "电话"
      ],
      [
        "聽電話",
        "teng1 din6 waa2",
        "接电话"
      ],
      [
        "打電話",
        "daa2 din6 waa2",
        "打电话"
      ],
      [
        "留言",
        "lau4 jin4",
        "留言"
      ],
      [
        "覆",
        "fuk1",
        "回复"
      ],
      [
        "訊息",
        "seon3 sik1",
        "消息"
      ],
      [
        "收唔到",
        "sau1 m4 dou2",
        "收不到"
      ],
      [
        "上網",
        "soeng5 mong5",
        "上网"
      ],
      [
        "連線",
        "lin4 sin3",
        "连接"
      ],
      [
        "密碼",
        "mat6 maa5",
        "密码"
      ],
      [
        "重新",
        "cung4 san1",
        "重新"
      ],
      [
        "開機",
        "hoi1 gei1",
        "开机"
      ],
      [
        "關機",
        "gwaan1 gei1",
        "关机"
      ],
      [
        "畫面",
        "waa6 min6",
        "画面"
      ],
      [
        "下載",
        "haa6 zoi3",
        "下载"
      ],
      [
        "附件",
        "fu6 gin2",
        "附件"
      ],
      [
        "電郵",
        "din6 jau4",
        "电子邮件"
      ],
      [
        "網址",
        "mong5 zi2",
        "网址"
      ],
      [
        "訊號",
        "seon3 hou6",
        "信号"
      ],
      [
        "聯絡",
        "lyun4 lok3",
        "联系"
      ]
    ],
    "sentences": [
      [
        "喂，請問阿明喺唔喺度？",
        "wai2, cing2 man6 aa3 ming4 hai2 m4 hai2 dou6?",
        "喂，请问阿明在吗？"
      ],
      [
        "佢而家唔方便聽電話，你要唔要留言？",
        "keoi5 ji4 gaa1 m4 fong1 bin6 teng1 din6 waa2, nei5 jiu3 m4 jiu3 lau4 jin4?",
        "他现在不方便接电话，你要不要留言？"
      ],
      [
        "唔該，叫佢得閒覆我電話。",
        "m4 goi1, giu3 keoi5 dak1 haan4 fuk1 ngo5 din6 waa2.",
        "麻烦让他有空给我回电话。"
      ],
      [
        "呢度訊號唔係幾好，我聽唔清楚。",
        "ni1 dou6 seon3 hou6 m4 hai6 gei2 hou2, ngo5 teng1 m4 cing1 co2.",
        "这里信号不太好，我听不清楚。"
      ],
      [
        "我轉個地方再打畀你。",
        "ngo5 zyun3 go3 dei6 fong1 zoi3 daa2 bei2 nei5.",
        "我换个地方再打给你。"
      ],
      [
        "我已經發咗電郵，你收到未？",
        "ngo5 ji5 ging1 faat3 zo2 din6 jau4, nei5 sau1 dou2 mei6?",
        "我已经发了邮件，你收到了吗？"
      ],
      [
        "唔好意思，我開唔到個附件。",
        "m4 hou2 ji3 si1, ngo5 hoi1 m4 dou2 go3 fu6 gin2.",
        "不好意思，我打不开附件。"
      ],
      [
        "可唔可以再發一次個網址？",
        "ho2 m4 ho2 ji5 zoi3 faat3 jat1 ci3 go3 mong5 zi2?",
        "可以再发一次网址吗？"
      ],
      [
        "我試過重新開機，但係仲上唔到網。",
        "ngo5 si3 gwo3 cung4 san1 hoi1 gei1, daan6 hai6 zung6 soeng5 m4 dou2 mong5.",
        "我试过重新开机，但还是上不了网。"
      ],
      [
        "密碼唔使畀我，你自己輸入就得。",
        "mat6 maa5 m4 sai2 bei2 ngo5, nei5 zi6 gei2 syu1 jap6 zau6 dak1.",
        "不用把密码给我，你自己输入就可以。"
      ]
    ]
  },
  {
    "topic": "付款、退换与服务",
    "goal": "确认支付、解释退货原因和保存凭证",
    "scenario": "买到尺寸不合适的衣服，说明原因、询问换货，并确认差价。",
    "words": [
      [
        "現金",
        "jin6 gam1",
        "现金"
      ],
      [
        "信用卡",
        "seon3 jung6 kaat1",
        "信用卡"
      ],
      [
        "轉賬",
        "zyun2 zoeng3",
        "转账"
      ],
      [
        "收據",
        "sau1 geoi3",
        "收据"
      ],
      [
        "找錢",
        "zaau2 cin2",
        "找零"
      ],
      [
        "付款",
        "fu6 fun2",
        "付款"
      ],
      [
        "退款",
        "teoi3 fun2",
        "退款"
      ],
      [
        "換貨",
        "wun6 fo3",
        "换货"
      ],
      [
        "尺碼",
        "cek3 maa5",
        "尺码"
      ],
      [
        "差價",
        "caa1 gaa3",
        "差价"
      ],
      [
        "優惠",
        "jau1 wai6",
        "优惠"
      ],
      [
        "折扣",
        "zit3 kau3",
        "折扣"
      ],
      [
        "保養",
        "bou2 joeng5",
        "保修／保养"
      ],
      [
        "到期",
        "dou3 kei4",
        "到期"
      ],
      [
        "訂單",
        "deng6 daan1",
        "订单"
      ],
      [
        "送貨",
        "sung3 fo3",
        "送货"
      ],
      [
        "運費",
        "wan6 fai3",
        "运费"
      ],
      [
        "損壞",
        "syun2 waai6",
        "损坏"
      ],
      [
        "退貨",
        "teoi3 fo3",
        "退货"
      ],
      [
        "查詢",
        "caa4 seon1",
        "查询"
      ]
    ],
    "sentences": [
      [
        "請問可唔可以用信用卡付款？",
        "cing2 man6 ho2 m4 ho2 ji5 jung6 seon3 jung6 kaat1 fu6 fun2?",
        "请问可以用信用卡付款吗？"
      ],
      [
        "唔該，我想要返張收據。",
        "m4 goi1, ngo5 soeng2 jiu3 faan1 zoeng1 sau1 geoi3.",
        "麻烦我想要一张收据。"
      ],
      [
        "件衫細咗啲，可唔可以換大一個碼？",
        "gin6 saam1 sai3 zo2 di1, ho2 m4 ho2 ji5 wun6 daai6 jat1 go3 maa5?",
        "这件衣服小了点，可以换大一码吗？"
      ],
      [
        "如果換呢款，要補幾多差價？",
        "jyu4 gwo2 wun6 ni1 fun2, jiu3 bou2 gei2 do1 caa1 gaa3?",
        "如果换这款，需要补多少差价？"
      ],
      [
        "我仲留住張單，想問可唔可以退貨。",
        "ngo5 zung6 lau4 zyu6 zoeng1 daan1, soeng2 man6 ho2 m4 ho2 ji5 teoi3 fo3.",
        "我还留着单据，想问能不能退货。"
      ],
      [
        "我收到件貨嗰陣已經有損壞。",
        "ngo5 sau1 dou2 gin6 fo3 go2 zan6 ji5 ging1 jau5 syun2 waai6.",
        "我收到货的时候已经有损坏。"
      ],
      [
        "呢個價錢包唔包送貨？",
        "ni1 go3 gaa3 cin2 baau1 m4 baau1 sung3 fo3?",
        "这个价钱包不包括送货？"
      ],
      [
        "請問退款通常要等幾耐？",
        "cing2 man6 teoi3 fun2 tung1 soeng4 jiu3 dang2 gei2 noi6?",
        "请问退款通常要等多久？"
      ],
      [
        "我想查詢呢張訂單嘅進度。",
        "ngo5 soeng2 caa4 seon1 ni1 zoeng1 deng6 daan1 ge3 zeon3 dou6.",
        "我想查询这个订单的进度。"
      ],
      [
        "呢個優惠幾時到期？",
        "ni1 go3 jau1 wai6 gei2 si4 dou3 kei4?",
        "这个优惠什么时候到期？"
      ]
    ]
  },
  {
    "topic": "兴趣、运动与社交",
    "goal": "描述爱好、邀请参与和礼貌拒绝",
    "scenario": "邀请朋友一起运动；对方没空时，理解对方并提出下次再约。",
    "words": [
      [
        "興趣",
        "hing3 ceoi3",
        "兴趣"
      ],
      [
        "跑步",
        "paau2 bou6",
        "跑步"
      ],
      [
        "游水",
        "jau4 seoi2",
        "游泳"
      ],
      [
        "行山",
        "haang4 saan1",
        "徒步登山"
      ],
      [
        "散步",
        "saan3 bou6",
        "散步"
      ],
      [
        "運動",
        "wan6 dung6",
        "运动"
      ],
      [
        "影相",
        "jing2 soeng2",
        "拍照"
      ],
      [
        "聽歌",
        "teng1 go1",
        "听歌"
      ],
      [
        "煮飯",
        "zyu2 faan6",
        "做饭"
      ],
      [
        "睇書",
        "tai2 syu1",
        "看书"
      ],
      [
        "報名",
        "bou3 meng2",
        "报名"
      ],
      [
        "參加",
        "caam1 gaa1",
        "参加"
      ],
      [
        "活動",
        "wut6 dung6",
        "活动"
      ],
      [
        "陪",
        "pui4",
        "陪伴"
      ],
      [
        "啱",
        "aam1",
        "适合／对"
      ],
      [
        "推辭",
        "teoi1 ci4",
        "推辞"
      ],
      [
        "可惜",
        "ho2 sik1",
        "可惜"
      ],
      [
        "下次",
        "haa6 ci3",
        "下次"
      ],
      [
        "期待",
        "kei4 doi6",
        "期待"
      ],
      [
        "放鬆",
        "fong3 sung1",
        "放松"
      ]
    ],
    "sentences": [
      [
        "我平時放工之後會去跑步。",
        "ngo5 ping4 si4 fong3 gung1 zi1 hau6 wui5 heoi3 paau2 bou6.",
        "我平时下班以后会去跑步。"
      ],
      [
        "你除咗睇戲，仲有咩興趣？",
        "nei5 ceoi4 zo2 tai2 hei3, zung6 jau5 me1 hing3 ceoi3?",
        "你除了看电影，还有什么爱好？"
      ],
      [
        "我最近開始學煮飯，覺得幾有趣。",
        "ngo5 zeoi3 gan6 hoi1 ci2 hok6 zyu2 faan6, gok3 dak1 gei2 jau5 ceoi3.",
        "我最近开始学做饭，觉得挺有趣。"
      ],
      [
        "星期日一齊去行山，你有冇興趣？",
        "sing1 kei4 jat6 jat1 cai4 heoi3 haang4 saan1, nei5 jau5 mou5 hing3 ceoi3?",
        "星期日一起去徒步，你有兴趣吗？"
      ],
      [
        "我未試過呢個活動，新手參加得唔得？",
        "ngo5 mei6 si3 gwo3 ni1 go3 wut6 dung6, san1 sau2 caam1 gaa1 dak1 m4 dak1?",
        "我没试过这个活动，新手可以参加吗？"
      ],
      [
        "唔好意思，今次我有事嚟唔到。",
        "m4 hou2 ji3 si1, gam1 ci3 ngo5 jau5 si6 lai4 m4 dou2.",
        "不好意思，这次我有事来不了。"
      ],
      [
        "好可惜呀，不如下次再約。",
        "hou2 ho2 sik1 aa3, bat1 jyu4 haa6 ci3 zoi3 joek3.",
        "好可惜呀，不如下次再约。"
      ],
      [
        "我想搵啲輕鬆啲嘅運動嚟做。",
        "ngo5 soeng2 wan2 di1 hing1 sung1 di1 ge3 wan6 dung6 lai4 zou6.",
        "我想找一些轻松一点的运动来做。"
      ],
      [
        "得閒出去散吓步，可以放鬆吓。",
        "dak1 haan4 ceot1 heoi3 saan3 haa5 bou6, ho2 ji5 fong3 sung1 haa5.",
        "有空出去散散步，可以放松一下。"
      ],
      [
        "多謝你邀請我，我好期待。",
        "do1 ze6 nei5 jiu1 cing2 ngo5, ngo5 hou2 kei4 doi6.",
        "谢谢你邀请我，我很期待。"
      ]
    ]
  },
  {
    "topic": "突发情况与应变",
    "goal": "清楚说明遗失、迟到和临时改变",
    "scenario": "模拟遗失背包：说明物品特征、最后见到的地方，并询问求助方式。",
    "words": [
      [
        "唔見咗",
        "m4 gin3 zo2",
        "不见了"
      ],
      [
        "銀包",
        "ngan4 baau1",
        "钱包"
      ],
      [
        "背囊",
        "bui3 nong4",
        "背包"
      ],
      [
        "證件",
        "zing3 gin2",
        "证件"
      ],
      [
        "報失",
        "bou3 sat1",
        "报失"
      ],
      [
        "服務台",
        "fuk6 mou6 toi4",
        "服务台"
      ],
      [
        "特徵",
        "dak6 zing1",
        "特征"
      ],
      [
        "最後",
        "zeoi3 hau6",
        "最后"
      ],
      [
        "記得",
        "gei3 dak1",
        "记得"
      ],
      [
        "附近",
        "fu6 gan6",
        "附近"
      ],
      [
        "塞車",
        "sak1 ce1",
        "堵车"
      ],
      [
        "取消",
        "ceoi2 siu1",
        "取消"
      ],
      [
        "臨時",
        "lam4 si4",
        "临时"
      ],
      [
        "改期",
        "goi2 kei4",
        "改期"
      ],
      [
        "安全",
        "on1 cyun4",
        "安全"
      ],
      [
        "小心",
        "siu2 sam1",
        "小心"
      ],
      [
        "幫忙",
        "bong1 mong4",
        "帮忙"
      ],
      [
        "處理",
        "cyu2 lei5",
        "处理"
      ],
      [
        "盡快",
        "zeon6 faai3",
        "尽快"
      ],
      [
        "趕唔切",
        "gon2 m4 cit3",
        "来不及"
      ]
    ],
    "sentences": [
      [
        "唔好意思，我個背囊唔見咗。",
        "m4 hou2 ji3 si1, ngo5 go3 bui3 nong4 m4 gin3 zo2.",
        "不好意思，我的背包不见了。"
      ],
      [
        "係一個黑色背囊，入面有個銀包。",
        "hai6 jat1 go3 hak1 sik1 bui3 nong4, jap6 min6 jau5 go3 ngan4 baau1.",
        "是一个黑色背包，里面有个钱包。"
      ],
      [
        "我最後見到佢係喺巴士站。",
        "ngo5 zeoi3 hau6 gin3 dou2 keoi5 hai6 hai2 baa1 si2 zaam6.",
        "我最后见到它是在公交站。"
      ],
      [
        "請問我應該去邊度報失？",
        "cing2 man6 ngo5 jing1 goi1 heoi3 bin1 dou6 bou3 sat1?",
        "请问我应该去哪里报失？"
      ],
      [
        "如果有人搵到，麻煩你聯絡我。",
        "jyu4 gwo2 jau5 jan4 wan2 dou2, maa4 faan4 nei5 lyun4 lok3 ngo5.",
        "如果有人找到，麻烦你联系我。"
      ],
      [
        "而家塞緊車，我可能會遲到。",
        "ji4 gaa1 sak1 gan2 ce1, ngo5 ho2 nang4 wui5 ci4 dou3.",
        "现在正在堵车，我可能会迟到。"
      ],
      [
        "唔好意思，我臨時有事，要改期。",
        "m4 hou2 ji3 si1, ngo5 lam4 si4 jau5 si6, jiu3 goi2 kei4.",
        "不好意思，我临时有事，需要改期。"
      ],
      [
        "我會盡快處理，再同你講結果。",
        "ngo5 wui5 zeon6 faai3 cyu2 lei5, zoi3 tung4 nei5 gong2 git3 gwo2.",
        "我会尽快处理，再告诉你结果。"
      ],
      [
        "如果趕唔切，我哋就改搭地鐵。",
        "jyu4 gwo2 gon2 m4 cit3, ngo5 dei6 zau6 goi2 daap3 dei6 tit3.",
        "如果来不及，我们就改坐地铁。"
      ],
      [
        "你小心啲，安全最緊要。",
        "nei5 siu2 sam1 di1, on1 cyun4 zeoi3 gan2 jiu3.",
        "你小心一点，安全最重要。"
      ]
    ]
  },
  {
    "topic": "综合交流与个人故事",
    "goal": "连接过去、现在和未来，完成较长对话",
    "scenario": "不看笔记说两分钟：介绍自己、讲一次经历、说明最近的变化和下个月的计划。再练习回答追问。",
    "words": [
      [
        "經歷",
        "ging1 lik6",
        "经历"
      ],
      [
        "以前",
        "ji5 cin4",
        "以前"
      ],
      [
        "後來",
        "hau6 loi4",
        "后来"
      ],
      [
        "當時",
        "dong1 si4",
        "当时"
      ],
      [
        "原來",
        "jyun4 loi4",
        "原来"
      ],
      [
        "終於",
        "zung1 jyu1",
        "终于"
      ],
      [
        "印象",
        "jan3 zoeng6",
        "印象"
      ],
      [
        "難忘",
        "naan4 mong4",
        "难忘"
      ],
      [
        "適應",
        "sik1 jing3",
        "适应"
      ],
      [
        "改變",
        "goi2 bin3",
        "改变"
      ],
      [
        "原因",
        "jyun4 jan1",
        "原因"
      ],
      [
        "過程",
        "gwo3 cing4",
        "过程"
      ],
      [
        "發現",
        "faat3 jin6",
        "发现"
      ],
      [
        "學識",
        "hok6 sik1",
        "学会"
      ],
      [
        "至少",
        "zi3 siu2",
        "至少"
      ],
      [
        "越嚟越",
        "jyut6 lai4 jyut6",
        "越来越"
      ],
      [
        "未必",
        "mei6 bit1",
        "未必"
      ],
      [
        "總之",
        "zung2 zi1",
        "总之"
      ],
      [
        "將來",
        "zoeng1 loi4",
        "将来"
      ],
      [
        "信心",
        "seon3 sam1",
        "信心"
      ]
    ],
    "sentences": [
      [
        "以前我唔敢開口，而家有信心咗。",
        "ji5 cin4 ngo5 m4 gam2 hoi1 hau2, ji4 gaa1 jau5 seon3 sam1 zo2.",
        "以前我不敢开口，现在更有信心了。"
      ],
      [
        "最難忘嗰次係我第一次自己去旅行。",
        "zeoi3 naan4 mong4 go2 ci3 hai6 ngo5 dai6 jat1 ci3 zi6 gei2 heoi3 leoi5 hang4.",
        "最难忘的是我第一次独自旅行。"
      ],
      [
        "當時我好緊張，後來發現冇想像中咁難。",
        "dong1 si4 ngo5 hou2 gan2 zoeng1, hau6 loi4 faat3 jin6 mou5 soeng2 zoeng6 zung1 gam3 naan4.",
        "当时我很紧张，后来发现没有想象中那么难。"
      ],
      [
        "原來講錯都唔緊要，最緊要係繼續講。",
        "jyun4 loi4 gong2 co3 dou1 m4 gan2 jiu3, zeoi3 gan2 jiu3 hai6 gai3 zuk6 gong2.",
        "原来说错也没关系，最重要的是继续说。"
      ],
      [
        "我終於可以用廣東話講清楚自己想要啲咩。",
        "ngo5 zung1 jyu1 ho2 ji5 jung6 gwong2 dung1 waa2 gong2 cing1 co2 zi6 gei2 soeng2 jiu3 di1 me1.",
        "我终于能用粤语说清楚自己想要什么。"
      ],
      [
        "呢段時間我學識咗唔少生活用語。",
        "ni1 dyun6 si4 gaan3 ngo5 hok6 sik1 zo2 m4 siu2 sang1 wut6 jung6 jyu5.",
        "这段时间我学会了不少生活用语。"
      ],
      [
        "雖然未必每句都聽得明，但係已經進步咗。",
        "seoi1 jin4 mei6 bit1 mui5 geoi3 dou1 teng1 dak1 ming4, daan6 hai6 ji5 ging1 zeon3 bou6 zo2.",
        "虽然未必每句话都听得懂，但已经进步了。"
      ],
      [
        "我發現每日練少少，比一次學好多更適合我。",
        "ngo5 faat3 jin6 mui5 jat6 lin6 siu2 siu2, bei2 jat1 ci3 hok6 hou2 do1 gang3 sik1 hap6 ngo5.",
        "我发现每天练一点，比一次学很多更适合我。"
      ],
      [
        "將來我想搵多啲機會同人用廣東話傾偈。",
        "zoeng1 loi4 ngo5 soeng2 wan2 do1 di1 gei1 wui6 tung4 jan4 jung6 gwong2 dung1 waa2 king1 gai2.",
        "以后我想找更多机会用粤语和别人聊天。"
      ],
      [
        "總之，我會繼續練，希望講得越嚟越自然。",
        "zung2 zi1, ngo5 wui5 gai3 zuk6 lin6, hei1 mong6 gong2 dak1 jyut6 lai4 jyut6 zi6 jin4.",
        "总之，我会继续练，希望说得越来越自然。"
      ]
    ]
  }
];
const paired=[
 ['日常问候与近况',0,0,'介绍自己，并说说最近的生活变化。'],
 ['餐厅点餐与口味',1,1,'模拟点餐：说明人数、口味要求，并结账。'],
 ['购物选择与比较',2,5,'比较两件商品，解释偏好，再询问价格。'],
 ['出行问路与确认',3,4,'问路后重复确认路线，再请对方解释不明白的地方。'],
 ['时间安排与邀约',4,2,'邀请朋友见面，协商时间，并处理临时改约。'],
 ['感受与生活经历',5,3,'描述心情或天气，再讲一件最近发生的小事。'],
 ['学习交流与计划',6,6,'说明学习粤语的原因、困难和下一步计划。']
].map(([topic,a,b,scenario])=>({topic,scenario,goal:advancedLessons[b].challenge,tip:advancedLessons[b].tip,words:[...lessons[a].words,...advancedLessons[b].words],sentences:[...lessons[a].sentences,...advancedLessons[b].sentences]}));
export const courseModules=[...paired,...extraModules];
const dayFormats=[
 {label:'新课 · 场景基础',kind:'new',task:'读懂今天的词句，换掉人物、时间或地点，口头改写至少 3 句。',wordIds:[0,1,2,3,4,5,6,7,8,9],sentenceIds:[0,1,2,3,4]},
 {label:'新课 · 自然表达',kind:'new',task:'跟读较长句子，注意连接词和语气；用其中 2 句说自己的情况。',wordIds:[10,11,12,13,14,15,16,17,18,19],sentenceIds:[5,6,7,8,9]},
 {label:'复习 · 主动回想',kind:'recall',task:'遮住粤语和粤拼，看普通话回想表达。完成后揭晓，找出 3 个最不熟的项目再说一遍。',wordIds:[0,2,4,6,8,10,12,14,16,18],sentenceIds:[0,2,4,6,8]},
 {label:'复习 · 听辨跟读',kind:'listen',task:'如有粤语语音，进入听辨模式，隐藏文字听懂后再揭晓、跟读。没有语音时，先读后遮住文字复述。',wordIds:[1,3,5,7,9,11,13,15,17,19],sentenceIds:[1,3,5,7,9]},
 {label:'实战 · 情景对话',kind:'roleplay',task:'先用今日词句热身，再模拟双方各说至少 3 句。更换一个条件，例如时间、地点或要求，再演一遍。',wordIds:[0,3,6,9,10,12,14,16,18,19],sentenceIds:[0,3,5,7,9]},
 {label:'检验 · 模块小测',kind:'assessment',task:'不看文字完成场景任务。自查：能说明需求、能追问、能回应变化。卡住就回看，再独立讲一次。',wordIds:[1,2,4,5,7,8,11,13,15,17],sentenceIds:[1,2,4,6,8]}
];
export const ninetyLessons=courseModules.flatMap((m,moduleIndex)=>dayFormats.map((f,i)=>({
 title:`${m.topic} · ${['先会说','说自然','记得牢','听得懂','接得上','自己讲'][i]}`,
 topic:m.topic,module:moduleIndex,stage:moduleIndex<5?'生活起步':moduleIndex<10?'日常展开':'自主交流',
 day:moduleIndex*6+i+1,kind:f.kind,format:f.label,
 goal:m.goal,challenge:`${f.task} 场景：${m.scenario}`,
 tip:m.tip||'先说明情况，再提出需求；没听懂时，追问并用自己的话确认。',
 words:f.wordIds.map(n=>m.words[n]),sentences:f.sentenceIds.map(n=>m.sentences[n])
})));
