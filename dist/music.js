const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    mini:true,
    fixed: true,
    autoplay: true,
    audio: [
        {
            name: 'Renaissance',
            artist: 'artist1',
            url: 'http://lc-LlEhgVRc.cn-n1.lcfile.com/IGGIooDCCf4frfa7RcweLKzSQOyXW4xo/Paolo%20Buonvino%20_%20Skin%20-%20Renaissance%20%28From%20_Medici_%20Masters%20of%20Florence_%29.ogg            ',
            cover: 'http://lc-LlEhgVRc.cn-n1.lcfile.com/N4LXdIoXca8eU0QVP4t89FgLT5y5fJEL/1699240100844.jpg',
        },
        {
            name: '无脚鸟',
            artist: 'artist2',
            url: 'http://lc-LlEhgVRc.cn-n1.lcfile.com/OelWymsM7XwSiiraPsVBh4lroGxkWHx6/%E8%9B%99%E5%A9%B6%2C%E8%94%A1%E7%BF%8A%E6%98%87%20-%20%E6%97%A0%E8%84%9A%E9%B8%9F.mp3            ',
            cover: 'http://lc-LlEhgVRc.cn-n1.lcfile.com/fzuV4PgUOap3Ywb2P8rlQrLPCVrkyV8u/v2-2a8bef27b97a30190b0ab7da274bdff1_720w.jpg',
        }
    ]
});