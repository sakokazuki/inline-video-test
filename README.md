# inline-video-test

## page
https://sakokazuki.github.io/inline-video-test/

## development

`yarn install`  
`yarn dev`  

## 検証結果(2018.5更新)


|                   | control click | autoplay | canvas-play | canvas-clickplay | canvas-currenttime | 注釈 |
|:------------------|:-------------:|:--------:|:-----------:|:----------------:|:------------------:|:----:|
|Chrome             | ○ | ○ | ○ | ○ | ✗ | - |
|FireFox            | ○ | ○ | ○ | ○ | △ | A |
|Safari             | ○ | ○ | ○ | ○ | ○ | - |
|IE11               | ○ | ○ | ○ | ○ | ○ | - |
|Edge               | ○ | ○ | ○ | ○ | ○ | - |
|iOS Safari 10~*1   | ○ | ○ | ○ | ○ | ○ | - |
|iOS Safari ~9*2    | ✗ | ✗ | ✗ | ✗ | ○ | - |
|Android*1 Browser  | ○ | ✗ | ✗ | ○ | ✗ | B |
|Android*1 Chrome   | ○ | ○ | ✗ | ○ | ✗ | - |
|Android*2 Browser  | ○ | ○ | ✗ | ○ | ✗ | B |
|Android*2 Chrome   | ○ | ○ | ✗ | ○ | ✗ | - |

*1 iOS 11.3.1
*2 iOS 9.3.5
*3 Galaxy S5 SCL23 v6.0.1
*4 GALAXY J SC-02F v5.0  

control click: コントロールを出して再生ボタンを押してインライン再生できるかどうか
auto play: inlineで動画がオートプレイされるかどうか。(再生ボタンを押さないと始まらない場合は✗)
canvas-play: videoをcanvasに描画し、play関数で再生。
canvas-click-play: videoをcanvasに描画し, onclickのクリックイベントからplay関数で再生。
canvas-currenttime: videoをcanvasに描画し, 再生はせずcurrenTtimeを更新する。  

A: canvas-currenttimeは描画はされるものの、フレーム落ちしているので実用性にはかける
B: ビデオの同時再生ができない模様