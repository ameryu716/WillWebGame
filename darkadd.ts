function classAddNewElementR(tagname:string,classname:string):HTMLElement{
    const newelement:HTMLElement = document.createElement(tagname);
    newelement.classList.add(classname);
    return newelement;
}
function inTextAddNewElementR(tagname:string,innerText:string):HTMLElement{
    const newelement:HTMLElement = document.createElement(tagname);
    newelement.innerText = innerText;
    return newelement;
}
function newLinkR(link:string,innerText:string):HTMLAnchorElement{
    const newLinkElement = document.createElement("a");
    newLinkElement.href = link;
    newLinkElement.innerText = innerText;
    return newLinkElement;
}

function toggleAbilityAdd(terminal:"mobile"|"PC"){
    window.addEventListener("load",()=>{
        const navRtoggleBt:HTMLButtonElement|null = (<HTMLButtonElement>document.getElementById("nav-c-switch"));
        const CustomRMenu:HTMLDivElement|null = (<HTMLDivElement>document.getElementById("custom-r-menu"));
        let rightMenuToggle = false;
        let toggleWidth:string = "";
        //端末ごとにメニュー引き出し幅変更
        if(terminal === "mobile"){
            toggleWidth = "-70.5vw";
        }else if(terminal === "PC"){
            toggleWidth = "-30.5vw";
        }
        navRtoggleBt.addEventListener("click",()=>{
            if(rightMenuToggle){
                //open
                CustomRMenu.style.right = toggleWidth;
                rightMenuToggle = false;
            }else{
                //close
                CustomRMenu.style.right = "0.5vw";
                rightMenuToggle = true;
            }
        })
    })
}

if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    //スマートフォン時に実行したいjs
    // window.addEventListener("load",()=>{
    //     const menuswitchelement:HTMLElement|null = document.getElementById("primary-menu-toggle");
    //     const menulist:HTMLElement|null = document.getElementById("site-header-menu");
    //     const threebarsFA:any = (<HTMLButtonElement>menuswitchelement).getElementsByClassName("fa-bars")[0];
    //     threebarsFA.classList.remove("fa-bars");
    //     threebarsFA.classList.add("fa-chevron-right");
    //     let faclick:boolean = false;

    //     menuswitchelement!.addEventListener("click",()=>{
    //         if(faclick){
    //             faclick = false;
    //             threebarsFA.style.transform = "rotateZ(0deg)";
    //             setTimeout(() => {
    //                 menulist!.style.height = "0";
    //             }, 50);
    //         }else{
    //             faclick = true;
    //             threebarsFA.style.transform = "rotateZ(90deg)";
    //             setTimeout(() => {
    //                 menulist!.style.height = "90px";
    //             }, 50);
    //         }
    //     })
    // })

    toggleAbilityAdd("mobile");
}else{
    // window.addEventListener("load",()=>{

    //     //PC版
    //     const mainnav:HTMLElement|null = document.getElementById("main-nav");
    
    //     const navswitcher:HTMLElement = classAddNewElementR("div","navswitcher");
    //     mainnav!.appendChild(navswitcher);
    //     //ホバー時ナビ表示用ラップ

    //     const switchtryangle:HTMLElement = classAddNewElementR("div","switchtryangle")
    //     navswitcher.appendChild(switchtryangle);
    //     // 三角作成

    //     const switchtryangleinnerdiv:HTMLElement = classAddNewElementR("div","switchtryangle-innerdiv")
    //     switchtryangle.appendChild(switchtryangleinnerdiv);
    //     //三角の中の疑似背景部分作成

    //     const morestring:HTMLElement = classAddNewElementR("div","morestring");
    //     const newspanelement:HTMLElement = inTextAddNewElementR("span","MORE");

    //     morestring.appendChild(newspanelement);
    //     navswitcher.appendChild(morestring);
    //     //文字部分
    
    //     const linklist:HTMLElement = classAddNewElementR("div","linklist")
    //     const li1:HTMLElement = document.createElement("li");
    //     li1.appendChild(newLinkR("https://willwebgame.com/contact/","お問い合わせ"));
    //     const li2:HTMLElement = document.createElement("li");
    //     li2.appendChild(newLinkR("https://willwebgame.com/privacy-policy/","プライバシーポリシー"));
    //     const newUl:HTMLUListElement = document.createElement("ul");
    //     newUl.appendChild(li1);
    //     newUl.appendChild(li2);
    //     linklist.appendChild(newUl);

    //     //linklist.innerHTML = "<ul><li><a href='https://willwebgame.com/contact/'>お問い合わせ</a></li><li><a href='https://willwebgame.com/privacy-policy/'>プライバシーポリシー</a></li></ul>";


        
    //     navswitcher.appendChild(linklist);
    //     //リンクリスト部
    
    //     navswitcher.addEventListener("mouseenter",()=>{
    //         linklist.style.height = "85px";
    //         linklist.style.padding = "0 10px 10px 5px";
    //         navswitcher.style.height = "180px";
    //         navswitcher.style.width = "180px";
    //         switchtryangle.style.animationName = "none";
    //         morestring.style.animationName = "none";
    //         setTimeout(() => {
    //             morestring.style.transform = "scale(1)";
    //             switchtryangle.style.transform = "translate(0px, 22px) rotateZ(60deg)";
    //         }, 10);
    //     })
    //     navswitcher.addEventListener("mouseleave",()=>{
    //         linklist.style.height = "0px";
    //         linklist.style.padding = "0";
    //         navswitcher.style.height = "60px";
    //         navswitcher.style.width = "70px";
    //         switchtryangle.style.transform = "translate(0px, 0px) rotateZ(0deg)";
    //         morestring.style.transform = "scale(0.8)";
    //         setTimeout(() => {
    //             switchtryangle.style.animationName = "menutryangle";
    //             morestring.style.animationName = "morestrscaling";
    //         }, 500);
    //     })
    // })
    toggleAbilityAdd("PC");
}