ソースコードをダウンロードし下記ファイルをHTMLから読み込みます。<br />
css/popup_sample001.css<br />
js/popup_sample001.js<br />

読み込み例<br />
&lt;link href="css/popup_sample001.css" rel="stylesheet"&gt;<br />
&lt;script type="text/javascript" src="//code.jquery.com/jquery-3.2.1.min.js"&gt;&lt;/script&gt;<br />
&lt;script type="text/javascript" src="js/popup_sample001.js"&gt;&lt;/script&gt;<br />
<br />
&lt;body&gt;直下に下記を記述します。<br />
&lt;div id="popup_yn"&gt;<br />
    &lt;div id="popup_yn_txt"&gt;&lt;/div&gt;<br />
    &lt;div id="popup_yn_notice"&gt;&lt;/div&gt;<br />
    &lt;div&gt;<br />
        &lt;input id="popup_y_btn" type="button" value="はい" /&gt;<br />
        &lt;input id="popup_n_btn" type="button" value="いいえ" /&gt;<br />
    &lt;/div&gt;<br />
&lt;/div&gt;<br />
&lt;div id="popup_background"&gt;&lt;/div&gt;<br />
&lt;/pre&gt;<br />
<br />
適用するタグに下記を記述します。<br />
class="yn_btn"<br />
data-text="ポップアップに表示する文言"<br />
data-id="サーバーサイドに送信するID"<br />
data-url="サーバーサイドのURL"<br />

タグ設置例<br />
&lt;input class="yn_btn" data-text="削除を実行しますか？" type="button" data-id="1" data-url="/admin/delete" value="削除" /&gt;
