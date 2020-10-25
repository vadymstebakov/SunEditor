'use strict';

import '../../src/assets/css/suneditor.css';
import '../../src/assets/css/suneditor-contents.css';

import suneditor from '../../src/suneditor';
import plugins from '../../src/plugins';
import { ko } from '../../src/lang';
import lang from '../../src/lang';
import u from '../../src/lib/util';

import custom_plugin_submenu from './custom_plugin_submenu';
import custom_plugin_dialog from './custom_plugin_dialog';
import Resolutions from './Resolutions';
// import subLib from './sub_lib';
import custom_container from './custom_container';
import custom_audio from './custom_audio';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import CodeMirror from 'codemirror';


// import 'katex/dist/katex.min.css';
import Katex from 'katex';

Array.prototype._move = function(from, to)
{
    this.splice(to, 0, this.splice(from, 1)[0]);
};

const align = require('../../src/plugins/submenu/align')

// const shadow = document.querySelector('#app').attachShadow({ mode: 'open' })
// const appEl = document.createElement('textarea')
// const appStyle = document.createElement('style')
// appStyle.textContent = u.getPageStyle();

// shadow.appendChild(appStyle);
// shadow.appendChild(appEl);
// suneditor.create(appEl, {
//     width: '400px',
//     height: 500
// })

const fs = [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72, 8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72
    ,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72
    ,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72
    ,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72
    ,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72
    ,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72
    ,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72
    ,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72
    ,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72
    ,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72
    ,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72
    ,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72
    ,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72
    ,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72
    ,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72
    ,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72
    ,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72
    ,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72
    ,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72
    ,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72
    ,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72
    ,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72
    ];

let ssss = suneditor.create(("sample1"), {
    plugins: plugins, //[sunEditorNpsButtonBgColor, sunEditorNpsButtonFontColor, sunEditorNpsButtonFontSize],
    // font: [
    //     'Arial', 'Impact', 'Georgia', 'tahoma', 'Verdana'
    // ],
    toolbarContainer: document.getElementById('test_tool2'),
    tabDisable: true,
    fontSize: fs,
    linkProtocol: 'https://',
    buttonList: [
        ['align', 'fullScreen'],
        ['-right', 'link'],
        ['-right', 'table'],
        ['-right', ':more1-More Text-default.more_text', 'font', 'fontSize', 'formatBlock'],
        [':more2-More Text-default.more_paragraph', 'fontColor', 'bold', 'underline', 'italic'],
        [':more3-More Text-default.more_plus', 'undo', 'redo', 'image'],
        // [{
        //         name: 'npsButtonBgColor',
        //         dataCommand: 'npsButtonBgColor',
        //         buttonClass: '',
        //         title: translator.get("invitations.npsBgColorButtonInfoText"),
        //         dataDisplay: 'submenu',
        //         innerHTML: NPS_BG_COLOR_ICON
        //     },
        //     {
        //         name: 'npsButtonFontColor',
        //         dataCommand: 'npsButtonFontColor',
        //         buttonClass: '',
        //         title: translator.get("invitations.npsFontColorButtonInfoText"),
        //         dataDisplay: 'submenu',
        //         innerHTML: NPS_FONT_COLOR_ICON
        //     },
        //     {
        //         name: 'npsButtonFontSize',
        //         dataCommand: 'npsButtonFontSize',
        //         buttonClass: '',
        //         title: translator.get("invitations.npsFontSizeButtonInfoText"),
        //         dataDisplay: 'submenu',
        //         innerHTML: NPS_FONT_SIZE_ICON
        //     }
        // ],
        ['%510', [
            ['align', 'fullScreen'],
            [':moreText-More Text-default.more_paragraph', 'undo', 'redo', 'image'],
            [':command2-title2-text.Insert', 'codeView', 'preview', 'font', 'fontSize', 'formatBlock'],
            ['outdent', 'indent'],
        ]]
    ],
    // lang: langToUse
});

// ssss.disabled();

// ssss.setContents(`<p><br /></p><div class="se-component se-image-container __se__float-none"><img src="http://suneditor.com/docs/cat.jpg" alt="" style="" /></div><p><br /></p>`)


suneditor.create('scrolleditor', {
    plugins: plugins,
    // mode: 'balloon-always',
    katex: Katex,
    fontSize: fs,
    // attributesWhitelist: 'style',
    buttonList: [
        ['font', 'fontSize', 'formatBlock'],
    ],
})

let s1 = suneditor.create('editor', {
    plugins: plugins,
    mode: "balloon-always",
    value: '',
    resizingBar: false,
    showPathLabel: false,
    display: "inline",  
    tabDisable: false,
    placeholder: "Enter the question image here",
    buttonList: [["table","removeFormat"]],
})

// s1.core._charCount = function (nextCharCount, blink) {
//     const charCounter = this.context.element.charCounter;
//     if (!charCounter) return true;
//     if (!nextCharCount || nextCharCount < 0) nextCharCount = 0;

//     const maxCharCount = this.context.options.maxCharCount;
//     const wysiwyg = this.context.element.wysiwyg;

//     ///// -- get empty list ////
//     const emptyListCount = this.util.getListChildren(wysiwyg, function (current) {
//         return this.isListCell(current) && current.childNodes.length === 1 && this.isBreak(current.firstChild)
//     }.bind(this.util)).length;
//     //// ------------------ ////

//     this._w.setTimeout(function () {
//         charCounter.textContent = wysiwyg.textContent.length + emptyListCount; // add empty list
//     });

//     if (maxCharCount > 0) {
//         let over = false;
//         const count = wysiwyg.textContent.length + emptyListCount; // add empty list
        
//         if (count > maxCharCount) {
//             this._editorRange();
//             const range = this.getRange();
//             const endOff = range.endOffset - 1;
//             const text = this.getSelectionNode().textContent;

//             this.getSelectionNode().textContent = text.slice(0, range.endOffset - 1) + text.slice(range.endOffset, text.length);
//             this.setRange(range.endContainer, endOff, range.endContainer, endOff);
//             over = true;
//         } else if ((count + nextCharCount) > maxCharCount) {
//             over = true;
//         }

//         if (over) {
//             if (blink && !this.util.hasClass(charCounter, 'se-blink')) {
//                 this.util.addClass(charCounter, 'se-blink');
//                 this._w.setTimeout(function () {
//                     this.removeClass(charCounter, 'se-blink');
//                 }.bind(this.util), 600);
//             }

//             return false;
//         }
//     }

//     return true;
// }.bind(s1.core)

window.cm = CodeMirror

// let s1 = window.s1 = suneditor.create(document.getElementById('editor'), {
//     plugins: [lineHeight],
//     buttonList: [
//         [
//             'lineHeight'
//         ]
//     ],
//     height: 'auto',
//     width: '500px',
//     // mode: 'balloon',
//     stickyToolbar: '0',
//     videoResizing: false,
//     imageWidth: 150,
//     placeholder: 'Start typing something...'
//     // fullPage: true,
    
// });

window.sun_destroy1 = function () {
    s1.destroy()

    // s1.setDefaultStyle('height: auto; font-family: cursive; font-size: 10px; width:300px;');

    // s1.setContents('<!DOCTYPE html>'+
    // '<html lang="en">'+
    // '<head>'+
    //     '<meta charset="UTF-8">'+
    //     '<meta name="viewport" content="width=device-width, initial-scale=1">'+
    //     '<meta name="author" content="https://github.com/JiHong88" />'+
    //     '<meta name="description" content="Pure javascript wysiwyg web editor" /> <!-- meta comment -->'+
    // '<style>'+
    // '/* css comment goes here */'+
    // '</style>'+
    // '</head>'+
    // '<body>'+
    // '<!-- html comment goes here -->'+

    // '</body>'+
    // '</html>')
}

window.sun_create1 = function () {
    // s1.destroy();
    s1 = suneditor.create('editor', {
        plugins: [align, plugins.link],
        buttonList: [['align', 'link', 'bold', 'underline', 'italic', 'strike', 'removeFormat', 'codeView']],
        width: '100%',
        height: 'auto'
      })
}

s1.onKeyDown = function (e, core) {
    const keyCode = e.keyCode
    const ctrl = e.ctrlKey || e.metaKey || keyCode === 91 || keyCode === 92;
    if (ctrl && keyCode === 187) {
        e.preventDefault();
        const anchor = core.util.getParentElement(core.getSelectionNode(), core.util.isAnchor)
        if (anchor) {
            window.open(anchor.href)
        }
    }
}

let ss = window.ss = suneditor.create(document.getElementById('editor1'), {
    value: "",
    rtl: true,
    tableCellControllerPosition: 'top',
    lang: lang.ko,
    plugins: plugins,
    katex: Katex,
    // value: '',
    // imageAccept: "*",
    // videoAccept: "*",
    // audioAccept: ".mp3",
    codeMirror: CodeMirror,
    display: 'block',
    width: '100%',
    height: '500px',
    audioTagAttrs: {
        controlslist: "nodownload",
    },
    videoTagAttrs: {
        poster: "http://suneditor.com/docs/loading.gif",
        autoplay: true
    },
    videoIframeAttrs: {
        style: "border: 2px solid red;" 
    },
    // height: 'auto',
    iframeCSSFileName: '.+',
    addTagsWhitelist: 'i',
    popupDisplay: 'full',
    charCounter: true,
    charCounterType: 'byte-html',
    charCounterLabel: 'Characters :',
    imageMultipleFile: true,
    videoMultipleFile: true,
    audioMultipleFile: true,
    // imageUploadUrl: 'http://localhost:3000/editor/upload',
    // videoUploadUrl: 'http://localhost:3000/editor/upload',
    // audioUploadUrl: 'http://localhost:3000/editor/upload',
    icons: {
        expansion: "<span>A</span>",
        reduction: "<span>Z</span>"
    },
    // iframe: true,
    videoFileInput: true,
    audioFileInput: true,
    placeholder: 'Start typing something...',
    templates: [
        {
            name: 'Template-1',
            html: '<p>HTML source1</p>'
        },
        {
            name: 'Template-2',
            html: '<p>HTML source2</p>'
        }
    ],
    // maxCharCount: 670,
    imageGalleryUrl: 'https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo',
    buttonList: [
        // default
        ['undo', 'redo'],
        ['font', 'fontSize', 'formatBlock'],
        ['paragraphStyle', 'blockquote'],
        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
        ['fontColor', 'hiliteColor', 'textStyle'],
        ['removeFormat'],
        ['outdent', 'indent'],
        ['align', 'horizontalRule', 'list', 'lineHeight'],
        ['table', 'link', 'image', 'video', 'audio', 'math'],
        ['imageGallery'],
        ['fullScreen', 'showBlocks', 'codeView'],
        ['preview', 'print'],
        ['save', 'template'],
        // // (min-width: 1565)
        // ['%1565', [
        //     ['undo', 'redo'],
        //     ['font', 'fontSize', 'formatBlock'],
        //     ['paragraphStyle', 'blockquote'],
        //     ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
        //     ['fontColor', 'hiliteColor', 'textStyle'],
        //     ['removeFormat'],
        //     ['outdent', 'indent'],
        //     ['align', 'horizontalRule', 'list', 'lineHeight'],
        //     ['table', 'link', 'image', 'video', 'audio', 'math'],
        //     ['imageGallery'],
        //     ['fullScreen', 'showBlocks', 'codeView'],
        //     ['-right', ':i-More Misc-default.more_vertical', 'preview', 'print', 'save', 'template']
        // ]],
        // // (min-width: 1455)
        // ['%1455', [
        //     ['undo', 'redo'],
        //     ['font', 'fontSize', 'formatBlock'],
        //     ['paragraphStyle', 'blockquote'],
        //     ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
        //     ['fontColor', 'hiliteColor', 'textStyle'],
        //     ['removeFormat'],
        //     ['outdent', 'indent'],
        //     ['align', 'horizontalRule', 'list', 'lineHeight'],
        //     ['table', 'link', 'image', 'video', 'audio', 'math'],
        //     ['imageGallery'],
        //     ['-right', ':i-More Misc-default.more_vertical', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print', 'save', 'template']
        // ]],
        // // (min-width: 1326)
        // ['%1326', [
        //     ['undo', 'redo'],
        //     ['font', 'fontSize', 'formatBlock'],
        //     ['paragraphStyle', 'blockquote'],
        //     ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
        //     ['fontColor', 'hiliteColor', 'textStyle'],
        //     ['removeFormat'],
        //     ['outdent', 'indent'],
        //     ['align', 'horizontalRule', 'list', 'lineHeight'],
        //     ['-right', ':i-More Misc-default.more_vertical', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print', 'save', 'template'],
        //     ['-right', ':r-More Rich-default.more_plus', 'table', 'link', 'image', 'video', 'audio', 'math', 'imageGallery']
        // ]],
        // // (min-width: 1123)
        // ['%1123', [
        //     ['undo', 'redo'],
        //     [':p-More Paragraph-default.more_paragraph', 'font', 'fontSize', 'formatBlock', 'paragraphStyle', 'blockquote'],
        //     ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
        //     ['fontColor', 'hiliteColor', 'textStyle'],
        //     ['removeFormat'],
        //     ['outdent', 'indent'],
        //     ['align', 'horizontalRule', 'list', 'lineHeight'],
        //     ['-right', ':i-More Misc-default.more_vertical', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print', 'save', 'template'],
        //     ['-right', ':r-More Rich-default.more_plus', 'table', 'link', 'image', 'video', 'audio', 'math', 'imageGallery']
        // ]],
        // // (min-width: 817)
        // ['%817', [
        //     ['undo', 'redo'],
        //     [':p-More Paragraph-default.more_paragraph', 'font', 'fontSize', 'formatBlock', 'paragraphStyle', 'blockquote'],
        //     ['bold', 'underline', 'italic', 'strike'],
        //     [':t-More Text-default.more_text', 'subscript', 'superscript', 'fontColor', 'hiliteColor', 'textStyle'],
        //     ['removeFormat'],
        //     ['outdent', 'indent'],
        //     ['align', 'horizontalRule', 'list', 'lineHeight'],
        //     ['-right', ':i-More Misc-default.more_vertical', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print', 'save', 'template'],
        //     ['-right', ':r-More Rich-default.more_plus', 'table', 'link', 'image', 'video', 'audio', 'math', 'imageGallery']
        // ]],
        // // (min-width: 673)
        // ['%673', [
        //     ['undo', 'redo'],
        //     [':p-More Paragraph-default.more_paragraph', 'font', 'fontSize', 'formatBlock', 'paragraphStyle', 'blockquote'],
        //     [':t-More Text-default.more_text', 'bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'fontColor', 'hiliteColor', 'textStyle'],
        //     ['removeFormat'],
        //     ['outdent', 'indent'],
        //     ['align', 'horizontalRule', 'list', 'lineHeight'],
        //     [':r-More Rich-default.more_plus', 'table', 'link', 'image', 'video', 'audio', 'math', 'imageGallery'],
        //     ['-right', ':i-More Misc-default.more_vertical', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print', 'save', 'template']
        // ]],
        // // (min-width: 525)
        // ['%525', [
        //     ['undo', 'redo'],
        //     [':p-More Paragraph-default.more_paragraph', 'font', 'fontSize', 'formatBlock', 'paragraphStyle', 'blockquote'],
        //     [':t-More Text-default.more_text', 'bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'fontColor', 'hiliteColor', 'textStyle'],
        //     ['removeFormat'],
        //     ['outdent', 'indent'],
        //     [':e-More Line-default.more_horizontal', 'align', 'horizontalRule', 'list', 'lineHeight'],
        //     [':r-More Rich-default.more_plus', 'table', 'link', 'image', 'video', 'audio', 'math', 'imageGallery'],
        //     ['-right', ':i-More Misc-default.more_vertical', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print', 'save', 'template']
        // ]],
        // // (min-width: 420)
        // ['%420', [
        //     ['undo', 'redo'],
        //     [':p-More Paragraph-default.more_paragraph', 'font', 'fontSize', 'formatBlock', 'paragraphStyle', 'blockquote'],
        //     [':t-More Text-default.more_text', 'bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'fontColor', 'hiliteColor', 'textStyle', 'removeFormat'],
        //     [':e-More Line-default.more_horizontal', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'lineHeight'],
        //     [':r-More Rich-default.more_plus', 'table', 'link', 'image', 'video', 'audio', 'math', 'imageGallery'],
        //     ['-right', ':i-More Misc-default.more_vertical', 'fullScreen', 'showBlocks', 'codeView', 'preview', 'print', 'save', 'template']
        // ]]
    ],
});
// ss.setContents('fsafsa')
ss.onload = function (core) {
    console.log('onload', core.context.video._infoList);
    // core.focus();
};
ss.onScroll = function (e) {
    // console.log('onScroll', e);
};
ss.onClick = function (e) {
    // console.log('onClick', e);
};
ss.onFocus = function (e, core) {
    console.log('onFocus', e);
};
ss.onBlur = function (e, core) {
    console.log('onBlur', e);
};
ss.onKeyDown = function (e) {
    // console.log('onKeyDown', e);
};
ss.onKeyUp = function (e) {
    // console.log('onKeyUp', e);
};
ss.onDrop = function (e) {
    // console.log('onDrop', e);
    return true;
};
ss.onPaste = function (e, cleanData, maxCharCount, core) {
    // replace () > span.katex
    cleanData = cleanData.replaceAll("(", '<span class="temp-katex">').replaceAll(")", "</span>");

    // set attribute "data-exp"
    // create html string
    let html = "";
    const children = core._d.createRange().createContextualFragment(cleanData).childNodes;
    for (let i = 0, len = children.length, node; i < len; i++) {
        node = children[i];
        if (node.className === "temp-katex") {
            node.className = "katex";
            node.setAttribute("data-exp", node.textContent);
        }
        html += node.outerHTML || node.textContent;
    }

    return core.cleanHTML(html, core.pasteTagsWhitelistRegExp);
}
ss.onAudioUpload = function (targetElement, index, state, videoInfo) {
    // console.log('targetElement:${targetElement}, index:${index}, state:${state}')
    console.log('videoInfo-----', videoInfo)
}
// ss.onVideoUploadError = function (messge, result, core) {
//     console.log('video error-----', messge)
//     return true
// }
ss.onAudioUploadBefore = function (files, info, core) {
    console.log('before-----', files)
    console.log('before----info-', info)
    return true
}
ss.onChange = function (contents, core) {
    console.log('change', core.context.video._infoList)
}

// ss.imageUploadHandler = function (response, core) {
//     console.log('rrrr', response)
// }
function ResizeImage (files, uploadHandler) {
    const uploadFile = files[0];
    const img = document.createElement('img');
    const canvas = document.createElement('canvas');
    const reader = new FileReader();

    reader.onload = function (e) {
        img.src = e.target.result
        img.onload = function () {
            let ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);

            const MAX_WIDTH = 200;
            const MAX_HEIGHT = 100;
            let width = img.width;
            let height = img.height;

            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            } else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }

            canvas.width = width;
            canvas.height = height;

            ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);

            canvas.toBlob(function (blob) {
                uploadHandler([new File([blob], uploadFile.name)])
            }, uploadFile.type, 1);
        }
    }

    reader.readAsDataURL(uploadFile);
}

// ss.onImageUploadBefore = function (files, info, core, uploadHandler) {
//     // ResizeImage(files, uploadHandler)
    
//     const response = { // Same format as "videoUploadUrl" response
//         "result": [ { "url": "http://suneditor.com/docs/cat.jpg", "name": "test", "size": "0" }, ]
//     };
//     uploadHandler(response);
// }

// ss.onImageUpload = function (targetElement, index, state, info, core) {
//     console.log('imageInfo-----', info);
// }

ss.showInline = function (toolbar, context) {

},

// ss.showController = function (name, controllers, core) {
//     let c = null;
//     console.log('target', core.currentControllerTarget);
//     for (let i in controllers) {
//         c = controllers[i];
//         if (core.util.hasClass(c, 'se-controller-resizing')) {
//             const updateButton = c.querySelector('[data-command="update"]');
//             if (name === 'image') updateButton.setAttribute('disabled', true);
//             else updateButton.removeAttribute('disabled');
//         }
//     }
// }

window.sun_noticeOpen = function () {
    ss.noticeOpen('test notice');
}

window.sun_noticeClose = function () {
    ss.noticeClose();
}

window.sun_save = function () {
    ss.save();
}

window.sun_getContext = function () {
    console.log(ss.getContext());
}

window.sun_getImagesInfo = function () {
    console.log(ss.getImagesInfo());
    ss.getImagesInfo().list[0].select();
}

window.sun_insertHTML = function (html) {
    ss.insertHTML('<img style="height:100px; width:100px;" src="http://suneditor.com/docs/cat.jpg" /><p>fdafds</p>', true, true, true)
}

window.sun_getContents = function () {
    // alert(ss.getContents());

    console.log(ss.getText());

    // ss.core.commandHandler(null, 'selectAll')
    // let t = '';
    // const lines = ss.core.getSelectedElements();
    // for (let i = 0, len = lines.length; i < len; i++) {
    //     t += lines[i].textContent + '\n';
    // }
    // console.log(t);

    // console.log(ss.core.context.element.wysiwyg.textContent)
}

window.sun_setContents = function (content) {
    ss.setContents('<style>div{color: red;}</style><p><br></p><img src="https://picsum.photos/200/300"><img src="https://picsum.photos/200/300"><p><br></p>');
    ss.core.history.reset(true);
    ss.core.focusEdge(null);
    // ss.core.context.tool.save.disabled = true;
}

window.sun_appendContents = function (content) {
    ss.appendContents(content);
}

window.sun_disabled = function () {
    ss.disabled();
}

window.sun_enabled = function () {
    ss.enabled();
}

window.sun_show = function () {
    ss.show();
}

window.sun_hide = function () {
    ss.hide();
}

window.sun_destroy = function () {
    // ss.destroy();
    ss.setToolbarButtons([
        [':command2-title2-text.Insert', 'codeView', 'preview'],
        ['outdent', 'indent']
    ])
}

window.sun_create = function () {
    // ss = suneditor.create('editor1', {
    //     plugins: plugins,
    //     height: 148
    // });
    ss.setOptions({
        height: 'auto'
    })
}


const editor = suneditor.init({
    plugins: [
        plugins.hiliteColor,
        plugins.align,
        plugins.horizontalRule,
        plugins.list,
        plugins.table,
        plugins.link,
        custom_plugin_submenu
    ],
    width: '100%',
    // iframe: true,
});

let s2 = window.s2 = editor.create(document.getElementById('editor2'), {
    // lang: lang.ru,
    // mode: 'inline',
    value: "",
    previewTemplate: `
    <h1>Preview Template</h1>
    {{ contents }}
    <div style="background: #ccc;">Footer</div>`,
    // toolbarWidth: 150,
    attributesWhitelist: {'all': 'uk-icon'}, 
    plugins: plugins,
    fontSize: fs,
    // maxHeight: '400px',
    katex: Katex,
    height: '700px',
    defaultStyle: 'height: 500px; font-size:10px;',
    imageGalleryUrl: 'http://localhost:3000/editor/gallery',
    // height: 400,
    fontSizeUnit: 'pt',
    imageResizing: true,
    // imageWidth: '400',
    buttonList: [
        ['undo', 'redo'],
        ['font', 'fontSize', 'formatBlock'],
        ['paragraphStyle'],
        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
        ['removeFormat'],
        ['outdent', 'indent'],
        ['align', 'horizontalRule', 'list', 'lineHeight', 'table'],
        ['fullScreen', 'showBlocks', 'codeView'],
        ['preview', 'print'],
        ['save', 'template'],
        // ['mention'],
    ],
    icons: {
        underline: '',
        strike: '',
        caption: ''
    },
    templates: [
        {
            name: 'template1',
            html: '<p>fdkjslfjdslkf</p>'
        },
        {
            name: 'templeeeeeeeeeeeeeate2',
            html: '<p><strong>11111</strong></p>'
        },
        {
            name: 'template3',
            html: '<p><u>22222</u></p>'
        }
    ],
    callBackSave: function (contents) {
        alert(contents)
    },
    formats: ['h1', 'p', 'blockquote', {
        tag: 'div',
        class: '__se__format__aaa',
        name: 'custom div',
        command: 'replace'
    }],
    // iframe: true,
    // fullPage: true,
    // mode: 'balloon',
    codeMirror: CodeMirror,
    // codeMirror: {
    //     src: CodeMirror,
    //     options: {
    //         mode: 'xml'
    //     }
    // },
    // placeholder: 'Start typing something.3..'
    // imageUploadSizeLimit: 30000
});

// plugins.mention.getItems = async term => 
//   [
//     {name: 'auser1'},
//     {name: 'buser2'},
//     {name: 'cuser2'},
//   ].filter(u => u.name.includes(term));

// plugins.mention.getValue = ({ name }) => `@${name}`;
// plugins.mention.getId = ({ name }) => name;
// plugins.mention.renderItem = ({name}) => `<span>${name}</span>`;

// s2.core.callPlugin('mention');
// s2.onKeyDown = e => {
//   if (e.key === '@') {
//     s2.core.context.mention.open();
//     e.preventDefault();
//     e.stopPropagation();
//   }
// }

const newOption = {
    mode: 'balloon',
    iframe: false,
    plugins: plugins,
    // defaultStyle: 'height: 200px;',
    fontSize: fs,
    height: 150,
    textSizeUnit: 'pt',
    buttonList: [
        ['undo', 'redo'],
        ['font', 'fontSize', 'formatBlock'],
        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
        ['removeFormat'],
        ['fontColor', 'hiliteColor'],
        ['outdent', 'indent'],
        ['align', 'horizontalRule', 'list', 'table'],
        ['link', 'image', 'video'],
        ['fullScreen', 'showBlocks', 'codeView'],
        ['preview', 'print'],
        ['save'],
    ],
    colorList: [
        ['#ccc', '#dedede', 'OrangeRed', 'Orange', 'RoyalBlue', 'SaddleBrown'],
        ['SlateGray', 'BurlyWood', 'DeepPink', 'FireBrick', 'Gold', 'SeaGreen']
    ],
    placeholder: 'Placeholder...'
}
const newOption2 = {
    plugins: [plugins.align],
    mode: 'classic',
    toolbarContainer: document.getElementById('test_tool'),
    maxHeight: '400px',
    height: 150,
    imageWidth: '100%',
    colorList: null,
    iframe: true,
    charCounter: true,
    maxCharCount: 200
}
const newOption3 = {
    mode: 'inline',
    minHeight: '300px',
    colorList: [
        ['#ccc', '#dedede', 'OrangeRed', 'Orange', 'RoyalBlue', 'SaddleBrown']
    ],
    buttonList: [
        ['fontColor', 'hiliteColor']
    ]
}

let imageList = [];
let videoList = [];
let selectedImages = [];
const imageWrapper = document.getElementById('image_wrapper');
const imageSize = document.getElementById('image_size');
const imageRemove = document.getElementById('image_remove');
const imageTable = document.getElementById('image_list');
const videoTable = document.getElementById('video_list');

window.findIndex = function (arr, index) {
    let idx = -1;

    arr.some(function (a, i) {
        if ((typeof a === 'number' ? a : a.index) === index) {
            idx = i;
            return true;
        }
        return false;
    })

    return idx;
}

window.setVideoList = function () {
    let list = '';

    for (let i = 0, video; i < videoList.length; i++) {
        video = videoList[i];
            
        list += '<li>' +
                    '<button title="delete" onclick="selectVideo(\'delete\',' + video.index + ')">X</button>' +
                    '<a href="javascript:void(0)" onclick="selectVideo(\'select\',' + video.index + ')">' + video.src + '</a>' +
                '</li>';
    }

    videoTable.innerHTML = list;
}

window.selectVideo = function (type, index) {
    videoList[findIndex(videoList, index)][type]();
}

window.setImage = function (type, index) {
    imageList[findIndex(imageList, index)][type]();
}

window.checkImage = function (index) {
    const li = imageTable.querySelector('#img_' + index);
    const currentImageIdx = findIndex(selectedImages, index)

    if (currentImageIdx > -1) {
        selectedImages.splice(currentImageIdx, 1)
        li.className = '';
    } else {
        selectedImages.push(index)
        li.className = 'checked';
    }

    if (selectedImages.length > 0) {
        imageRemove.removeAttribute('disabled');
    } else {
        imageRemove.setAttribute('disabled', true);
    }
}

window.deleteCheckedImages = function () {
    const iamgesInfo = s2.getImagesInfo();
    
    for (let i = 0; i < iamgesInfo.length; i++) {
        if (selectedImages.indexOf(iamgesInfo[i].index) > -1) {
            iamgesInfo[i].delete();
            i--;
        }
    }

    selectedImages = []
}

window.setImageList = function () {
    if (imageList.length > 0) imageWrapper.style.display = 'flex';
    else imageWrapper.style.display = 'none';

    let list = '';
    let size = 0;

    for (let i = 0, image, fixSize; i < imageList.length; i++) {
        image = imageList[i];
        fixSize = (image.size / 1000).toFixed(1) * 1
            
        list += '<li id="img_' + image.index + '">' +
                    '<div onclick="checkImage(' + image.index + ')">' +
                        '<div><img src="' + image.src + '"></div>' +
                    '</div>' +
                    '<a href="javascript:void(0)" onclick="setImage(\'select\',' + image.index + ')" class="image-size">' + fixSize + 'KB</a>' +
                    '<div class="image-check"><svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg></div>' +
                '</li>';
        
        size += fixSize;
    }

    imageSize.innerText = size.toFixed(1) + 'KB';
    imageTable.innerHTML = list;
}

s2.onload = function (core, isUpdate) {
    console.log('2222onload222', isUpdate)
}

s2.onImageUpload = function (targetElement, index, state, imageInfo, remainingFilesCount) {
    console.log('imageInfo', imageInfo);

    if (state === 'delete') {
        imageList.splice(findIndex(imageList, index), 1)
    } else {
        if (state === 'create') {
            const image = s2.getImagesInfo()[findIndex(s2.getImagesInfo(), index)]
            imageList.push(image)
        } else { // update
            
        }
    }

    if (remainingFilesCount === 0) {
        console.log('imageList', imageList)
        setImageList(imageList)
    }
}

s2.onVideoUpload = function (targetElement, index, state, videoInfo, remainingFilesCount) {
    console.log('videoInfo', videoInfo);

    if (state === 'delete') {
        videoList.splice(findIndex(videoList, index), 1)
    } else {
        if (state === 'create') {
            videoList.push(videoInfo)
        } else { // update
            //
        }
    }

    if (remainingFilesCount === 0) {
        console.log('videoList', videoList)
        setVideoList(videoList)
    }
}

window.sun_setOptions2 = function () {
    s2.setOptions(newOption);
}

window.sun_setOptions3 = function () {
    s2.setOptions(newOption2);
}
window.sun_setOptions4 = function () {
    s2.setOptions(newOption3);
}

window.sun_insertImage2 = function () {
    s2.insertImage(document.getElementById('sun_files').files);
}


window.sun_destroy2 = function () {
    s2.destroy();
}

window.sun_create2 = function () {
    s2 = suneditor.create('editor2', {
    });
}

let s3 = editor.create(document.getElementsByName('editor3')[0], {
    buttonList: [
        [plugins.formatBlock, 'align', 'horizontalRule', 'list', 'table', 'codeView', plugins.image, plugins.video, plugins.link, plugins.link, plugins.fontColor, plugins.hiliteColor, plugins.fontSize],
    ],
    mode: 'balloon-always',
    lang: ko,
    width: '100%',
    height: '500px',
    stickyToolbar: false,
    popupDisplay: 'local',
    // iframe: true,
    // maxCharCount: 300,
    // resizingBar: false
    // showPathLabel:false
    charCounter: true,
    // formats: ['h1', 'h4', 'pre', 'p', 'blockquote', {
    //     tag: 'div',
    //     class: '__se__format__aaa',
    //     name: 'red div',
    //     style: 'margin: 10px; background-color: #f5f5f5;',
    //     command: 'replace'
    // }],
    placeholder: 'Start typing something.4..',
    // maxCharCount: 280,
});
window.sun_destroy3 = function () {
    s3.destroy();
}

window.sun_create3 = function () {
    s3 = suneditor.create(document.getElementsByName('editor3')[0], {
    });
}

let s4;

window.sun_create4 = function() {
    const win = window.open();
    document.querySelectorAll('link').forEach(function (linkNode) {
        win.document.write(linkNode.outerHTML);
    })
    win.document.write('<textarea name="editor4" id="editor4" style="width: 1080px; height: 200px;"></textarea>');
    s4 = suneditor.create(win.document.querySelector('#editor4'), {
        plugins: plugins,
        buttonList: [
            ['undo', 'redo','removeFormat',
            'font', 'fontSize', 'formatBlock',
            'bold', 'underline', 'italic', 'strike', 'subscript', 'superscript',
            'fontColor', 'hiliteColor',
            'outdent', 'indent',
            'align', 'horizontalRule', 'list', 'table',
            'link', 'image', 'video',
            'fullScreen', 'showBlocks', 'codeView',
            'preview', 'print', 'save']
        ],
        width: '100%',
        stickyToolbar: 0,
        imageWidth: 300,
        mode: 'classic',
        // toolbarWidth: 800,
        maxCharCount: 280,
        height: '500px',
        placeholder: 'Start typing something..5.'
        // callBackSave: (contents) => {
        //     console.log('callback')
        // }
    });
}