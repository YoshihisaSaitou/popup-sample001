�\�[�X�R�[�h���_�E�����[�h�����L�t�@�C����HTML����ǂݍ��݂܂��B
css/popup_sample001.css
js/popup_sample001.js

�ǂݍ��ݗ�
<link href="css/popup_sample001.css" rel="stylesheet">
<script type="text/javascript" src="//code.jquery.com/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="js/popup_sample001.js"></script>

<body>�����ɉ��L���L�q���܂��B
<div id="popup_yn">
    <div id="popup_yn_txt"></div>
    <div id="popup_yn_notice"></div>
    <div>
        <input id="popup_y_btn" type="button" value="�͂�" />
        <input id="popup_n_btn" type="button" value="������" />
    </div>
</div>
<div id="popup_background"></div>
</pre>

�K�p����^�O�ɉ��L���L�q���܂��B
`class="yn_btn"
data-text="�|�b�v�A�b�v�ɕ\�����镶��"
data-id="�T�[�o�[�T�C�h�ɑ��M����ID"
data-url="�T�[�o�[�T�C�h��URL"`

�^�O�ݒu��
<input class="yn_btn" data-text="�폜�����s���܂����H" type="button" data-id="1" data-url="/admin/delete" value="�폜" />