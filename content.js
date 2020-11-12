setTimeout(()=>{
    let iframes = document.querySelectorAll("iframe")
    let plays = document.querySelectorAll(".play")

    function replaceIframes(ifr) {
        if (ifr.length != 0) {
            Array.from(ifr).forEach(el => {
                if (el.getAttribute("src")) {
                    if (el.getAttribute("src").split("//www.youtube.com").length > 1) {
                        let vid_id = Math.floor(Math.random()*(10-1)+1)
                        let vid = new DOMParser().parseFromString(`<video src="//videos.cdn-xporn.com/27b05bd0c966ecdbd81c8ad7a9446ac3/parse_video/cdn/${vid_id}.mp4" autoplay="autoplay"  controls>`, "text/html").body.querySelector("video")
                        vid.style.maxWidth = "100%"
                        vid.style.objectFit = "contain"
                        el.parentNode.appendChild(vid)
                        el.remove()
                    }
                }
            })
        }

    }


    if (plays.length != 0) {
        Array.from(plays).forEach(el => {
            el.onclick = () => {
                let video_prom = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        let vid = document.querySelectorAll("iframe")
                        resolve(vid)
                    }, 1500)
                })

                video_prom.then(videos => {
                    replaceIframes(videos)
                })
            }
        })
    } else {
        replaceIframes(iframes)
    }

},1500)

