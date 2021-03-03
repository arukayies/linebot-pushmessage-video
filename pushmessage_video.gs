const TOKEN = 'LINEのトークンを指定(取得方法：https://arukayies.com/gas/line_bot/gettoken)';
const DEBUGID = 'LINEのユーザIDを指定(取得方法：https://arukayies.com/gas/line_bot/get-userid)';

//LINEBOTで動画メッセージを送るサンプル
function pushmessage_video() {
  //動画メッセージを送る
  UrlFetchApp.fetch('https://api.line.me/v2/bot/message/push', {
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + TOKEN, //LINEのトークンを指定(取得方法：https://arukayies.com/gas/line_bot/gettoken)
    },
    'method': 'POST',
    'payload': JSON.stringify({
      'to': DEBUGID, //LINEのユーザIDを指定(取得方法：https://arukayies.com/gas/line_bot/get-userid)
      'messages': [{
        'type': 'video',
        'originalContentUrl': 'https://www9.nhk.or.jp/das/movie/D0002160/D0002160266_00000_V_000.mp4',//映像：ＮＨＫクリエイティブ・ライブラリー
        'previewImageUrl': 'https://placehold.jp/240x240.jpg?text=test'
      }],
      'notificationDisabled': false // trueだとユーザーに通知されない
    }),
  });
}