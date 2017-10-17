importScripts('https://www.gstatic.com/firebasejs/4.5.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.5.1/firebase-messaging.js');
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDHZTrl00SP05ao8jsj1E80gFV2LC2x-fQ",
    authDomain: "gcall-4a0f8.firebaseapp.com",
    databaseURL: "https://gcall-4a0f8.firebaseio.com",
    projectId: "gcall-4a0f8",
    storageBucket: "gcall-4a0f8.appspot.com",
    messagingSenderId: "851484560417"
};

firebase.initializeApp(config);

var messaging = firebase.messaging();

// 接收到通知并展示
messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    var payload = {
        collapse_key: "do_not_collapse",
        data: {
            data: '{"data":{"clAid":"341184599174222592","clNm":"小白猫","to":"100030025010","fr":"100044425732","clTm":1508203797804},"dataType":"call","id":1508203797804}',
            type: "2"
        },
        from: "851484560417",
        priority: "high"
    }
    var data = notificationDataProcessing(payload);
    return self.registration.showNotification(data.title, data.options);
});

// 数据处理;
function notificationDataProcessing(res) {
    var msgType = res.data.type,
        msgData = null;
    msgData = res.data.data;
    if (msgData && typeof msgData == string) {
        msgData = $.parseJSON(msgData);
    }
    switch (msgType) {
        case '1': // 际信消息; 
            msgData = showImMsgStyle(msgData);
            break;
        case '2': // 际话消息;
            msgData = showTalkMsgStyle(msgData);
            break;
        default:
    }

    var notifi = {
        title: '际客 - 国搜际客',
        options: {
            body: 'Background Message body.',
            icon: './images/icon.png',
            images: 'http://datacenter.devimg.com/group1/M00/0B/DE/wKgAKlfXZ42EJXZaAAAAAAAAAAA076_824x300.jpg?1507787545725',
            tag: 'GcallOfflineNotification'
        }
    }
    return notifi;
}

// 展示际信(IM)消息的具体处理;
function showImMsgStyle(msgData){
    if(typeof msgData != object){
        return;
    }
    var resultIm = {};
    return resultIm;
}

// 展示际话(Talk)消息的具体处理;
function showTalkMsgStyle(msgData){
    if(typeof msgData != object){
        return;
    }
    var resultIm = {}; 
    return resultIm;
}