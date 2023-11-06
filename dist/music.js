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
            name: 'name1',
            artist: 'artist1',
            url: 'http://lc-LlEhgVRc.cn-n1.lcfile.com/IGGIooDCCf4frfa7RcweLKzSQOyXW4xo/Paolo%20Buonvino%20_%20Skin%20-%20Renaissance%20%28From%20_Medici_%20Masters%20of%20Florence_%29.ogg            ',
            cover: 'cover1.jpg',
        },
        {
            name: 'name2',
            artist: 'artist2',
            url: 'url2.mp3',
            cover: 'cover2.jpg',
        }
    ]
});