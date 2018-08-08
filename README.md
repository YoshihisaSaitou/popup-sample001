ソースコードをダウンロードし下記ファイルをHTMLから読み込みます。
`css/popup_sample001.css
js/popup_sample001.js`

読み込み例
<link href="css/popup_sample001.css" rel="stylesheet">
<script type="text/javascript" src="//code.jquery.com/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="js/popup_sample001.js"></script>

<body>直下に下記を記述します。
<div id="popup_yn">
    <div id="popup_yn_txt"></div>
    <div id="popup_yn_notice"></div>
    <div>
        <input id="popup_y_btn" type="button" value="はい" />
        <input id="popup_n_btn" type="button" value="いいえ" />
    </div>
</div>
<div id="popup_background"></div>
</pre>

適用するタグに下記を記述します。
`class="yn_btn"
data-text="ポップアップに表示する文言"
data-id="サーバーサイドに送信するID"
data-url="サーバーサイドのURL"`

タグ設置例
<input class="yn_btn" data-text="削除を実行しますか？" type="button" data-id="1" data-url="/admin/delete" value="削除" />
