import 'babel-polyfill'


window.onload = ()=>{

  main();
}

const main = ()=>{
  cocanvasplay('video');
  canvasbuttonplay('video-click')
  currentTime('currenttime');

  
}

const canvasplay = async (canvasID)=>{
  const video = await loadvideoSource();
  const canvas = document.getElementById(canvasID);

  canvas.parentNode.appendChild(video);

  const ctx = canvas.getContext('2d');
  const fps = 30;
  setInterval(()=>{
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
  }, 1000/fps)

  video.play();
}

const canvasbuttonplay = async (canvasID)=>{
  const video = await loadvideoSource();
  const canvas = document.getElementById(canvasID);

  canvas.parentNode.appendChild(video);

  const ctx = canvas.getContext('2d');
  const fps = 30;
  setInterval(()=>{
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
  }, 1000/fps)

  const button = document.getElementById(canvasID+'-button');
  button.onclick = ()=>{
    video.play();
  }

}


const currentTime = async (canvasID)=>{
  const video = await loadvideo();
  const canvas = document.getElementById(canvasID);
  const ctx = canvas.getContext('2d');
  const fps = 30;

  canvas.parentNode.appendChild(video);


  let time = 0;
  let lasttime = new Date().getTime();;
  setInterval(()=>{
    //前フレームとの差分
    const currenttime = new Date().getTime();
    const delta = currenttime - lasttime;
    lasttime = currenttime;
    

    time += delta/1000;
    video.currentTime = time;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    //loop
    if(time > video.duration){
      time = 0;
    }
  }, fps);
}

//<video src=""></video>
//のかたち
const loadvideo = ()=>{
  return new Promise((resolve, reject)=>{
    //videoタグ作成
    const video = document.createElement("video")
    video.src = './test1.mp4';


    //アトリビュート追加
    const attrs = ['playsinline', 'webkit-playsinline', 'loop', 'muted']
    for(let i=0; i<attrs.length; i++){
      video.setAttribute(attrs[i], "");
    }
    video.addEventListener('canplaythrough',(e)=>{
      resolve(video)
    })

    video.load();
  })
}

//<video>
//  <source src="">
//</video>
//のかたち
const loadvideoSource = ()=>{
  return new Promise((resolve, reject)=>{
    //videoタグ作成
    const video = document.createElement("video")
    const source = document.createElement("source")
    source.src = './test1.mp4';
    source.type = 'video/mp4'
    video.appendChild(source);

    //アトリビュート追加
    const attrs = ['controls', 'playsinline', 'webkit-playsinline', 'loop', 'muted']
    for(let i=0; i<attrs.length; i++){
      video.setAttribute(attrs[i], "");
    }
    video.addEventListener('canplaythrough',(e)=>{
      resolve(video)
    })

    video.load();
  })
}

const wait = (time)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve()}, time);
  })
}
