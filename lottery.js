var lotteryFunc = () => {
    console.clear()
    console.log('开始抽奖')
    const names = document.getElementsByClassName('name')
    if(!names || !names.length) {
        console.log('很可惜，未能找到候选者名单，~(￣0￣)/')
    } else {
        let str = ''
        str += `当前动态下用户数量为：${names.length}\n`
        console.log(`当前动态下用户数量为：${names.length}`);
        str += '他们是：\n'
        console.log('他们是：')
        str += '==>分割线<==\n'
        console.log('==>分割线<==')
        
        names.forEach( (name, index) => {
            str += `第 ${index + 1} 位：${name.innerText}\n`
            console.log(`第 ${index + 1} 位：${name.innerText}`)
        } )
        str += '==>分割线<==\n'
        console.log('==>分割线<==')
        str += '以此名单为准\n'
        console.log('以此名单为准')
        str += '让我们揭晓谁会收到随机之神的青睐吧～\n'
        console.log('让我们揭晓谁会收到随机之神的青睐吧～')
        str += '锵锵～'
        console.log('锵锵～\n')
        const index = Math.floor(Math.random() * 17);
        const target = names[index]
        str += '有请我们今日的幸运儿～\n'
        console.log('有请我们今日的幸运儿～')
        str += `他是：第 ${index + 1}位：${target.innerText}`
        console.log(`他是：第 ${index + 1}位：${target.innerText}`)
        const lottery = document.getElementById('lottery')
        const temp = document.getElementById('result')
        if(temp){
            temp.remove(temp)
        }
        var result = document.createElement("div"); //创建一个标签
        
        result.id = 'result'
        result.innerText = str
        result.style.width = "auto";
        result.style.height = "auto";
        result.style.color = "#000";
        result.style.textAlign = 'center'
        result.style.fontSize = "14px";
        result.style.border = "1px solid #000";
        result.style.padding = '16px';
        console.log(str)
        lottery.appendChild(result)
    }
}
var init = () => {
    const lottery = document.getElementById('lottery')
    if(lottery) {
        lottery.remove(lottery)
    }
    var frameDiv = document.createElement("div"); //创建一个标签
    frameDiv.id = "lottery";
    frameDiv.style.width = "auto";
    frameDiv.style.height = "auto";
    frameDiv.style.color = "#000";
    frameDiv.style.textAlign = 'center'
    frameDiv.style.fontSize = "14px";
    frameDiv.style.border = "1px solid #000";
    frameDiv.style.padding = '16px';
    var bodyFa = document.getElementsByClassName("comment-send ")[0]; //通过id号获取frameDiv 的父类（也就是上一级的节点）
    console.log(bodyFa);
    bodyFa.appendChild(frameDiv); //把创建的节点frameDiv 添加到父类body 中；
    var btn = document.createElement("button"); //创建一个标签
    btn.innerText = '点我抽奖'
    btn.onclick = lotteryFunc
    frameDiv.appendChild(btn)
}

init()
