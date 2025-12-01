const {app,BrowserWindow,session}=require('electron');
let win;
app.whenReady().then(()=>{
  win=new BrowserWindow({width:1400,height:900,minWidth:800,minHeight:560,backgroundColor:'#11111b',title:'Luna',
    titleBarStyle:'hidden',titleBarOverlay:{color:'#00000000',symbolColor:'#aaa',height:36},
    webPreferences:{webviewTag:true,contextIsolation:false,nodeIntegration:true}});
  win.setMenuBarVisibility(false);
  win.loadFile('index.html');
});
app.on('web-contents-created',(e,c)=>{
  if(c.getType()==='webview') c.setWindowOpenHandler(({url})=>{win.webContents.send('open',url);return{action:'deny'}});
});
app.on('window-all-closed',()=>app.quit());
