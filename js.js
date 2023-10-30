const navcon=document.getElementById("navcontainer");
const sideham=document.getElementById("sideprofile");
const sidepro=document.getElementById("sideprofileham");
const sidepro1=document.getElementById("sideprofileham1");
const concards=document.getElementById("concards");
const plantcon=document.getElementById("plantcon");
const mobmenu=document.getElementById("mobmenu");
const chatbox=document.getElementById("chatbox");
const sendlogo=document.getElementById("sendlogo");
const msgin=document.getElementById("msgin");
const approve=document.getElementsByClassName("approve");
const reject=document.getElementsByClassName("reject");
const navh=navcon.offsetHeight;
const comtitle=document.getElementById("comtitle");
const loadanim=document.getElementById("loadanim");
const addcon=document.getElementById("addcon");
const addform=document.getElementById("addform");
const form=document.getElementById("addform").querySelector('form');
const descriptionbox=document.querySelector("#addcon #description");
const charcount=document.getElementById("charcount");
const panels=document.getElementsByClassName('panels');
const chatlogo=document.getElementById('chatlogo');
const dashboardpanel=document.getElementById("dashpanel");
const accrejpop=document.getElementById("accrejpop");
const producthistorydashbut=document.getElementById("producthistorydashbut");
const mylistingsdashbut=document.getElementById("mylistingsdashbut");
const myproductdata={};

let tabclicked=0;

for(let i=1;i<=9;i++)
{
    let sellcard=document.createElement('div');
    sellcard.id=`card${i}`;
    sellcard.className="sellcard";
    let imgcon=document.createElement('div');
    imgcon.className="imgcon";

    let img1=document.createElement('div');
    img1.classList.add("img");
    img1.classList.add("imgopac1");
    img1.id=`img1${i}`;
    img1.style.backgroundImage="url('resources/img1.jpg')";

    let img2=document.createElement('div');
    img2.className="img";
    img2.id=`img2${i}`;
    img2.style.backgroundImage="url('resources/img2.jpeg')";

    let img3=document.createElement('div');
    img3.className="img";
    img3.id=`img3${i}`;
    img3.style.backgroundImage="url('resources/img3.jpeg')";

    let img4=document.createElement('div');
    img4.className="img";
    img4.id=`img4${i}`;
    img4.style.backgroundImage="url('resources/img4.jpeg')";
    

    let popdes=document.createElement('div');
    popdes.className="popdes";
    popdes.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eveniet!";
    imgcon.appendChild(img1);
    imgcon.appendChild(img2);
    imgcon.appendChild(img3);
    imgcon.appendChild(img4);
    imgcon.appendChild(popdes);
    let descon=document.createElement("descon");
    descon.className="descon";
    let arrowdes=document.createElement("arrowdes");
    arrowdes.className="arrowdes";
    let productname=document.createElement("div");
    productname.className="productname";
    productname.innerText="Lenovo Laptop";
    let productprice=document.createElement("div");
    productprice.className="productprice";
    productprice.innerText="₹20000";
    let butdes=document.createElement("div");
    butdes.className="butdes";
    let approve=document.createElement('div');
    approve.className="approve";
    approve.innerText="Approve";
    let reject=document.createElement('div');
    reject.className="reject";
    reject.innerText="Reject";
    butdes.appendChild(approve);
    butdes.appendChild(reject);
    descon.appendChild(arrowdes);
    descon.appendChild(productname);
    descon.appendChild(productprice);
    descon.appendChild(butdes);
    sellcard.appendChild(imgcon);
    sellcard.appendChild(descon);
    concards.appendChild(sellcard);
}



document.querySelectorAll('.imgopac1').forEach((opacimg)=>{
    opacimg.style.opacity=1;
});

function cardimgslide()
{
    document.querySelectorAll('.sellcard .imgcon').forEach((imgconsingle)=>{
        let shownid=imgconsingle.querySelector('.imgopac1').id;
        imgconsingle.querySelector('.imgopac1').style.opacity="0";
        imgconsingle.querySelector('.imgopac1').classList.remove("imgopac1");
        imgconsingle.querySelector(`#img${(Number(shownid[3]))%4+1}${shownid.substring(4)}`).classList.add('imgopac1');
        imgconsingle.querySelector('.imgopac1').style.opacity="1";
    });
}

setInterval(cardimgslide,3000);


setTimeout(() => {
let leftlap;
if(window.innerWidth>768)
{
leftlap=sidepro.getBoundingClientRect().x+sidepro.getBoundingClientRect().width+5+'px';
comtitle.style.transform="scale(1) translate(0,0)";
comtitle.style.left=leftlap;
}
else
{
    comtitle.style.left="50%";
    comtitle.style.transform="scale(1) translateX(-50%)";
}
let toplap=(navcon.clientHeight/2-comtitle.clientHeight/2)+'px';
comtitle.style.top=toplap;
loadanim.style.opacity="0";
if(window.innerWidth<=768)
{
    document.getElementById('comlogo').style.display="none";
}
else
{
    document.getElementById('comlogo').style.display="block";
}
setTimeout(() => {
    loadanim.style.zIndex="-1";
    loadanim.style.visibility="hidden";
}, 0);
}, 2000);

dashboardpanel.style.height=`calc(100vh - ${navh}px)`;
// dashboardpanel.style.top=`${navh}px`;
sideham.style.height=`calc(100vh - ${navh}px)`;
concards.style.height=`calc(100vh - ${navh}px)`;
sideham.style.top=`${navh}px`;
chatbox.style.height=`calc(100% - calc(100vh - ${chatlogo.getBoundingClientRect().y-40}px) )`;
chatbox.style.bottom=`calc(100vh - ${chatlogo.getBoundingClientRect().y-30}px)`;
sendlogo.style.width=msgin.offsetHeight*0.6+'px';
sendlogo.style.fontSize=msgin.offsetHeight*0.3+'px';
addcon.style.height=`calc(100vh - ${navh}px)`;
accrejpop.style.top=`${navh - accrejpop.offsetHeight -5}px`;


function showcard()
{
const offset=concards.offsetHeight*0.7;
        // console.log(offset)
        document.querySelectorAll(".sellcard").forEach((card)=>{
            const currcard=card.getBoundingClientRect().y-concards.getBoundingClientRect().y;
            // console.log(offset,currcard);
            if(currcard<=offset)
            {
                card.style.opacity='1';
                card.style.transform='translateY(0)';
                
                setTimeout(() => {
                    card.classList.add("shown");
                    // card.style.transition="none";
                }, 1000);
                
            }
            else
            {
                    // card.style.transition='transform 1s, opacity 1s';
                    card.classList.remove("shown");
                    setTimeout(() => {
                        card.style.opacity='0';
                        card.style.transform='translateY(40%)';
                        
                    }, 0);
            }
        }
        );
}

document.querySelectorAll('.sellcard').forEach((card)=>{
    card.addEventListener("click",(e)=>
    {
        if(document.getElementById("chatlogo").classList.contains('opened'))
    {
        document.getElementById("chatlogo").classList.remove('opened');
        document.getElementById("closechat").style.opacity="0";
        document.getElementById("openchat").style.opacity="1";
        chatbox.style.opacity="0";
        setTimeout(() => {
            chatbox.style.zIndex="-1";
        }, 200);
        sendlogo.style.fontSize=msgin.offsetHeight*0.3+'px';
    }

        let approve=card.querySelector('.approve');//cannot use this over here
        let reject=card.querySelector('.reject');
        let arrowdes=card.querySelector('.arrowdes');
        let popinfopanel=document.getElementById("cardinfopanel");
        let popinfo=document.getElementById("cardinfo");
        if(e.target!==approve && e.target!==reject && e.target!==arrowdes)
        {
            popinfopanel.style.visibility="visible";
            document.getElementById("chatlogo").style.zIndex="10";
            setTimeout(() => {
                popinfo.style.opacity="1";
                popinfo.style.transform="translateY(0)";
                document.getElementById("chatlogo").style.opacity="1";
            }, 500);
            let i=0;
            document.querySelectorAll("#cardimageslide>div").forEach((divs)=>
            {
                let cs=getComputedStyle(card.querySelectorAll(".img")[i]);
                let bi=String(cs.getPropertyValue("background-image"));
                let k=0;
                let j=0;
                for(j=0;j<bi.length;j++)
                {
                    if(bi[j]==='/')
                    k++;
                    if(k===3)
                    {
                        break;
                    }
                }
                let url=`.${bi.substring(j,bi.length-2)}`;
                divs.querySelector("img").src=url;
                i++;
                
            });
            document.getElementById("popid1").innerText="Lorem Singh";
            document.getElementById("popid2").innerText=card.querySelector(".productname").innerText;
            document.getElementById("popid3").innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi commodi accusamus sequi nobis mollitia.";
            document.getElementById("popid4").innerText=card.querySelector(".productprice").innerText;
            document.getElementById("popid5").innerText="123, Green Park, Mumbai, Maharashtra - 400001, India";
        }
    });
});

document.getElementById("cardinfopanel").addEventListener("click",function(e){
    if(e.target===this)
    {
        if(document.getElementById("chatlogo").classList.contains('opened'))
        {
        document.getElementById("chatlogo").classList.remove('opened');
        document.getElementById("closechat").style.opacity="0";
        document.getElementById("openchat").style.opacity="1";
        chatbox.style.opacity="0";
        setTimeout(() => {
            chatbox.style.zIndex="-1";
        }, 200);
        sendlogo.style.fontSize=msgin.offsetHeight*0.3+'px';
        }
        let popinfo=document.getElementById("cardinfo");
        setTimeout(() => {
            this.style.visibility="hidden";
            document.getElementById("chatlogo").style.zIndex="-1";
        }, 1000);
        document.getElementById("chatlogo").style.opacity="0";
        popinfo.style.opacity="0";
        popinfo.style.transform="translateY(50%)";

    }
});

showcard();
    concards.addEventListener('scroll',showcard);

window.addEventListener("resize",function()
{
    if(document.getElementById("dashpanel").classList.contains("opendash"))
    {
    
            if(document.querySelector("li.selected"))
        {
            document.querySelector("li.selected").classList.remove("selected");  
        }
        else if(document.querySelector("a.selected"))
        {
            document.querySelector("a.selected").classList.remove("selected"); 
        }
        
    }

    const navh=navcon.offsetHeight;
    sideham.style.height=`calc(100vh - ${navh}px)`;
    sideham.style.top=`${navh}px`;
    concards.style.height=`calc(100vh - ${navh}px)`;
    chatbox.style.height=`calc(100% - calc(100vh - ${chatlogo.getBoundingClientRect().y-40}px) )`;
    chatbox.style.bottom=`calc(100vh - ${chatlogo.getBoundingClientRect().y-30}px)`;
    sendlogo.style.width=msgin.offsetHeight*0.6+'px';
    sendlogo.style.fontSize=msgin.offsetHeight*0.3+'px';
    addcon.style.height=`calc(100vh - ${navh}px)`;
    dashboardpanel.style.height=`calc(100vh - ${navh}px)`;
    accrejpop.style.top=`${navh - accrejpop.offsetHeight - 5}px`;


    setTimeout(() => {
        let leftlap;
        if(window.innerWidth>768)
        {
        leftlap=sidepro.getBoundingClientRect().x+sidepro.getBoundingClientRect().width+5+'px';
        comtitle.style.transform="scale(1) translate(0,0)";
        comtitle.style.left=leftlap;
        }
        else
        {
            comtitle.style.left="50%";
            comtitle.style.transform="scale(1) translateX(-50%)";
        }
        let toplap=(navcon.clientHeight/2-comtitle.clientHeight/2)+'px';
        comtitle.style.top=toplap;
        loadanim.style.opacity="0";
        if(window.innerWidth<=768)
        {
            document.getElementById('comlogo').style.display="none";
        }
        else
{
    document.getElementById('comlogo').style.display="block";
}
        setTimeout(() => {
            loadanim.style.zIndex="-1";
            loadanim.style.visibility="hidden";
        }, 0);
        }, 2000);
        
        
        
        showcard();

});



sidepro.addEventListener("click",function()
{
    if(this.classList.contains('opened'))
    {
        document.getElementById("side2").style.opacity="0";
        document.getElementById("side1").style.opacity="1";
        this.classList.remove("opened");
        sideham.style.transform="translateX(-100%)";
        
    }
    else
    {
        
        document.getElementById("side2").style.opacity="1";
        document.getElementById("side1").style.opacity="0";
        this.classList.add("opened");
        sideham.style.transform="translateX(0%)";
    }
});
plantcon.addEventListener("click",function()
{
    
    if(this.classList.contains('opened'))
    {
        
        this.classList.remove("opened");
        mobmenu.style.height="0";
        mobmenu.style.padding="0px";
    }
    else
    {
        
        this.classList.add("opened");
        const maxh=mobmenu.scrollHeight;
        mobmenu.style.height=maxh+"px";
        mobmenu.style.padding=`10px 0 ${maxh}px 0`;
    }
});
sidepro1.addEventListener("click",function()
{
    if(this.classList.contains('opened'))
    {
        document.getElementById("side12").style.opacity="0";
        document.getElementById("side11").style.opacity="1";
        this.classList.remove("opened");
        sideham.style.transform="translateX(-100%)";
    }
    else
    {
        
        document.getElementById("side12").style.opacity="1";
        document.getElementById("side11").style.opacity="0";
        this.classList.add("opened");
        sideham.style.transform="translateX(0%)";
    }
});





// let noofcads=0;
function nocard()
{
    ///////////////////////////////change it to 0///////////////
    const pairs = document.querySelectorAll('.sellcard');
    if(pairs.length==0)
    {
        concards.style.overflowY="hidden";
        document.getElementById("nocard").style.zIndex="5";
        document.getElementById("nocard").style.opacity="1";
    }
    else
    {
        concards.style.overflowY="auto";
        document.getElementById("nocard").style.zIndex="-10";
        document.getElementById("nocard").style.opacity="0";
    }
}
nocard();

const pairs = document.querySelectorAll('.sellcard');
pairs.forEach(pair => {

    const firstElement = pair.querySelector('.popdes');
    const secondElement = pair.querySelector('.arrowdes');

    // Add a mouseover event listener to the first element
    secondElement.addEventListener('mouseover', () => {
        // Show the second element
        firstElement.style.opacity = '1';
    });

    // Add a mouseout event listener to hide the second element when the mouse leaves
    pair.addEventListener('mouseout', () => {
        // Hide the second element
        firstElement.style.opacity = '0';
    });
});

function chatclicked(ele)
{
    chatbox.style.height=`calc(100% - calc(100vh - ${chatlogo.getBoundingClientRect().y-40}px) )`;
    chatbox.style.bottom=`calc(100vh - ${chatlogo.getBoundingClientRect().y-30}px)`;
    if(ele.classList.contains('opened'))
    {
        ele.classList.remove('opened');
        document.getElementById("closechat").style.opacity="0";
        document.getElementById("openchat").style.opacity="1";
        chatbox.style.opacity="0";
        setTimeout(() => {
            chatbox.style.zIndex="-1";
        }, 200);
        sendlogo.style.fontSize=msgin.offsetHeight*0.3+'px';
    }
    else
    {
        ele.classList.add('opened');
        document.getElementById("closechat").style.opacity="1";
        document.getElementById("openchat").style.opacity="0";
        chatbox.style.zIndex="200";
        setTimeout(() => {
            chatbox.style.opacity="1";
        }, 0);
        sendlogo.style.width=msgin.offsetHeight*0.6+'px';
    }
}
function sendmsg()
{
    let val=msgin.innerText;
    let val2=val.trim();
    if(val2.length!==0)
    {
        let sentmsg=document.createElement('div');
        sentmsg.textContent=val;
        sentmsg.className="sent";
        document.getElementById("textcon").appendChild(sentmsg);
        
    }
    msgin.innerText="";
}


//if dynamically created do this again
for(let i=0;i<approve.length;i++)
{
    const card=document.getElementsByClassName('sellcard')[i];
    approve[i].addEventListener("click",function()
    {
        this.innerText="Approved";
        const img=document.createElement('img');
        img.setAttribute('src','./resources/checked.png');
        this.appendChild(img);
        this.style.pointerEvents="none";
        const accrejpop=document.getElementById("accrejpop");
        accrejpop.style.backgroundColor="green";
        accrejpop.innerText="Card Accepted Successfully :)";
        accrejpop.style.transform="translateY(calc(100% + 15px))";
        setTimeout(() => {
            accrejpop.style.transform="translateY(0)";
        }, 1500);

        {
            const dashcon=document.querySelector("#producthistorydash>table>tbody");

            
            document.getElementById("producthistorytable").style.display="table";
            document.getElementById("norequesthistory").style.display="none";
            document.querySelector("#producthistorydash").style.overflow="auto";
            document.querySelector("#producthistorydash").style.boxShadow="0 0 5px rgba(0, 0, 0, 0.143)";
            document.querySelector("#producthistorydash").style.height="auto";
            


            setTimeout(() => {
            const clickedcard=this.parentNode.parentNode;
            const tr=document.createElement("tr");
            const proname=clickedcard.querySelector(".productname").innerText;
            const proprice=clickedcard.querySelector(".productprice").innerText;
            let lastsr=dashcon.querySelectorAll("tr");
            if(lastsr.length===0)
            lastsr='0';
            else
            lastsr=lastsr[lastsr.length-1].querySelector("td").innerText;
            const td1=document.createElement("td");
            td1.innerText=(+lastsr)+1;
            const td2=document.createElement("td");
            td2.innerText="Joseph Miller";
            const td3=document.createElement("td");
            td3.innerText=proname;
            const td4=document.createElement("td");
            td4.innerText=proprice;
            const td5=document.createElement("td");
            const divbut=document.createElement("div");
            divbut.className='accepteddashstatus';
            divbut.innerText="Accepted";
            td5.appendChild(divbut);
            const td6=document.createElement("td");
            const date=new Date();
            const day=date.getDate().toString().padStart(2, '0');
            const month=(date.getMonth()+1).toString().padStart(2, '0');
            const year=date.getFullYear();
            const hr=date.getHours().toString().padStart(2, '0');
            const min=date.getMinutes().toString().padStart(2, '0');
            const sec=date.getSeconds().toString().padStart(2, '0');
            td6.innerText=`${day}.${month}.${year} / ${hr}:${min}:${sec}`;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            dashcon.appendChild(tr);
            }, 0);
            
        }


    });
    reject[i].addEventListener("click",function()
    {
        card.style.opacity="1";
        card.style.transform="scale(1)";
        setTimeout(() => {
            card.style.transition="transform 0.5s, opacity 0.5s";
        }, 0);
        const accrejpop=document.getElementById("accrejpop");
        accrejpop.style.backgroundColor="red";
        accrejpop.innerText="Card Rejected Successfully :)";
        accrejpop.style.transform="translateY(calc(100% + 15px))";
        card.style.animationName="nil";
        setTimeout(() => {
            card.style.opacity="0";
            card.style.transform="scale(0)";
        }, 0.1);
        setTimeout(() => {
            concards.removeChild(card); 
            setTimeout(() => {
                nocard();
            }, 0);
            setTimeout(() => {
                accrejpop.style.transform="translateY(0)";
            }, 500);
            
            showcard();
        }, 1000);
        
        {
            const dashcon=document.querySelector("#producthistorydash>table>tbody");
            
                document.getElementById("producthistorytable").style.display="table";
                document.getElementById("norequesthistory").style.display="none";
                document.querySelector("#producthistorydash").style.overflow="auto";
                document.querySelector("#producthistorydash").style.boxShadow="0 0 5px rgba(0, 0, 0, 0.143)";
                document.querySelector("#producthistorydash").style.height="auto";
            
            setTimeout(() => {
            const clickedcard=this.parentNode.parentNode;
            const tr=document.createElement("tr");
            const proname=clickedcard.querySelector(".productname").innerText;
            const proprice=clickedcard.querySelector(".productprice").innerText;
            let lastsr=dashcon.querySelectorAll("tr");
            if(lastsr.length===0)
            lastsr='0';
            else
            lastsr=lastsr[lastsr.length-1].querySelector("td").innerText;
            const td1=document.createElement("td");
            td1.innerText=(+lastsr)+1;
            const td2=document.createElement("td");
            td2.innerText="Joseph Miller";
            const td3=document.createElement("td");
            td3.innerText=proname;
            const td4=document.createElement("td");
            td4.innerText=proprice;
            const td5=document.createElement("td");
            const divbut=document.createElement("div");
            divbut.className='rejecteddashstatus';
            divbut.innerText="Rejected";
            td5.appendChild(divbut);
            const td6=document.createElement("td");
            const date=new Date();
            const day=date.getDate().toString().padStart(2, '0');
            const month=(date.getMonth()+1).toString().padStart(2, '0');
            const year=date.getFullYear();
            const hr=date.getHours().toString().padStart(2, '0');
            const min=date.getMinutes().toString().padStart(2, '0');
            const sec=date.getSeconds().toString().padStart(2, '0');
            td6.innerText=`${day}.${month}.${year} / ${hr}:${min}:${sec}`;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            dashcon.appendChild(tr);
            }, 0);
            
        }

    });
}




descriptionbox.addEventListener("keyup",function()
{
    charcount.innerText=`${descriptionbox.value.length}/100`;
    setTimeout(() => {
        const keyUpEvent = new Event('keyup');
        this.dispatchEvent(keyUpEvent);
    }, 1);
});


function showform()
{


const computedStyle = window.getComputedStyle(addform);

const zIndexValue = computedStyle.getPropertyValue('z-index');


    if(zIndexValue!=1)
    {
        document.querySelector("#addform>form").reset();
        addform.style.zIndex="1";
        for(let i=1;i<=4;i++)
        {
            document.getElementById(`lab${i}`).style.background=`url(resources/imguplogo.png)`;
            document.getElementById(`lab${i}`).style.backgroundSize="60%";
            document.getElementById(`lab${i}`).style.backgroundPosition="center";
            document.getElementById(`lab${i}`).style.backgroundRepeat="no-repeat";
        }
    }
    else
    {
        if(document.querySelectorAll('#addmenu>.item.clicked').length!==0)
        {
        document.querySelector("#addform>form").reset();
        for(let i=1;i<=4;i++)
        {
            document.getElementById(`lab${i}`).style.background=`url(resources/imguplogo.png)`;
            document.getElementById(`lab${i}`).style.backgroundSize="60%";
            document.getElementById(`lab${i}`).style.backgroundPosition="center";
            document.getElementById(`lab${i}`).style.backgroundRepeat="no-repeat";
        }
        document.getElementById("imgwarn").style.display="none";
        }
    }
        if(document.querySelectorAll('#addmenu>.item.clicked').length!==0)
        {
        document.querySelector('#addmenu>.item.clicked').classList.remove("clicked");
        tabclicked=0;
        }
    
}


function tabisclicked(tab)
{
    
        
        if(!tab.classList.contains("clicked"))
        {
            
            
            showform();
            tab.classList.add("clicked");
                setTimeout(() => {

                    const pt=document.getElementById("producttitle");
                    const description=document.getElementById("description");
                    const price=document.getElementById("price");
                    const location=document.getElementById("location");
                    pt.value=myproductdata[tab.innerText]["pt"];
                    description.value=myproductdata[tab.innerText]["des"];
                    price.value=myproductdata[tab.innerText]["price"];
                    location.value=myproductdata[tab.innerText]["loc"];
                    const imgs=document.querySelectorAll("#imgpreview>label");
                    imgs[0].style.backgroundImage=`url(${myproductdata[tab.innerText]["i1"]})`;
                    imgs[1].style.backgroundImage=`url(${myproductdata[tab.innerText]["i2"]})`;
                    imgs[2].style.backgroundImage=`url(${myproductdata[tab.innerText]["i3"]})`;
                    imgs[3].style.backgroundImage=`url(${myproductdata[tab.innerText]["i4"]})`;


                }, 0);
                
            
        }
        tabclicked=1;
    
}

document.querySelectorAll("#addmenu>.item").forEach((tab)=>{
    tab.addEventListener("click",function()
    {
        tabisclicked(this);
    });
});



function cancelfun()
{
    if(document.querySelectorAll('#addmenu>.item.clicked').length!==0)
    {
    const tab=document.querySelector('#addmenu>.item.clicked');
    const title=tab.innerText;
    const price=myproductdata[tab.innerText]['price'];
    const loc=myproductdata[tab.innerText]['loc'];
    delete myproductdata[tab.innerText];
    tab.classList.remove("clicked");
    tabclicked=0;
    document.getElementById("addmenu").removeChild(tab);

        {
            const dashcon=document.querySelector("#listingdash>table>tbody");
            let lastsr=dashcon.querySelectorAll("tr");
            if(lastsr.length===0)
            lastsr='0';
            else
            lastsr=lastsr[lastsr.length-1].querySelector("td").innerText;
            const td1=document.createElement("td");
            td1.innerText=(+lastsr)+1;
            const td2=document.createElement("td");
            td2.innerText=title;
            const td3=document.createElement("td");
            td3.innerText=price;
            const td4=document.createElement("td");
            td4.innerText=loc;
            const td5=document.createElement("td");
            td5.innerText="...";
            const td6=document.createElement("td");
            const div=document.createElement("div");
            div.innerText="Deleted";
            div.className="listdeletedstatus";
            td6.appendChild(div);
            const td7=document.createElement("td");
            const date=new Date();
            const day=date.getDate().toString().padStart(2, '0');
            const month=(date.getMonth()+1).toString().padStart(2, '0');
            const year=date.getFullYear();
            const hr=date.getHours().toString().padStart(2, '0');
            const min=date.getMinutes().toString().padStart(2, '0');
            const sec=date.getSeconds().toString().padStart(2, '0');
            td7.innerText=`${day}.${month}.${year} / ${hr}:${min}:${sec}`;
            const tr=document.createElement("tr");
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
            dashcon.appendChild(tr);
            
        }


    }

    addform.style.zIndex="-1";
    document.getElementById("imgwarn").style.display="none";
    for(let i=1;i<=4;i++)
{
    document.getElementById(`lab${i}`).style.background=`url(resources/imguplogo.png)`;
    document.getElementById(`lab${i}`).style.backgroundSize="60%";
    document.getElementById(`lab${i}`).style.backgroundPosition="center";
    document.getElementById(`lab${i}`).style.backgroundRepeat="no-repeat";
}
}

document.getElementById("producttitle").addEventListener("focus",function(){
    document.getElementById("repeatednamespan").style.display="none";
});

const imglist=["","","",""];





function donefun()
{
    let children=form.querySelectorAll("input:not(input[type='file']),textarea");
    let f=1;
    for(let i=0;i<children.length;i++)
    {
        let val=children[i].value;
        let val2=val.replace(/\s/g, "");//or trim()
        if(val2==='')
        {
            children[i].value="";
            f=0;
            
        }
    }
    if(f==0)
    return false;
    if(document.querySelectorAll('#addmenu>.item.clicked').length===0)
    {
    for(let i=1;i<=4;i++)
    {
        if(document.getElementById(`img${i}`).files.length===0)
        {
            document.getElementById("imgwarn").style.display='block';
            return false;
        }
    }
    }
    
    document.getElementById("imgwarn").style.display='none';

    //putting data in side panel
    if(!tabclicked)
    {
        const pt=document.getElementById("producttitle").value;//original
        const producttitle=pt.replace(/\b\w/g, char => char.toUpperCase());//to show
        const description=document.getElementById("description").value;
        const price=document.getElementById("price").value;
        const location=document.getElementById("location").value;
        const items=document.querySelectorAll('#addmenu>.item');
        for(let i=0;i<items.length;i++)
        {
            if(items[i].innerText==producttitle)
            {
                document.getElementById("repeatednamespan").style.display="inline";
                
                setTimeout(() => {
                    document.getElementById("repeatednamespan").style.display="none";
                }, 5000);
                return false;
            }
        }
        myproductdata[producttitle]={};
        myproductdata[producttitle]["pt"]=pt;
        myproductdata[producttitle]["des"]=description;
        myproductdata[producttitle]["price"]=price;
        myproductdata[producttitle]["loc"]=location;
        myproductdata[producttitle]["i1"]=imglist[0];
        myproductdata[producttitle]["i2"]=imglist[1];
        myproductdata[producttitle]["i3"]=imglist[2];
        myproductdata[producttitle]["i4"]=imglist[3];
        const tab=document.createElement("div");
        tab.className="item";
        tab.innerText=producttitle;
        document.getElementById("addmenu").appendChild(tab);
        tab.addEventListener("click",function()
        {
            tabisclicked(this);
        });
        // console.log(myproductdata);

        {
            const dashcon=document.querySelector("#listingdash>table>tbody");

            
            document.getElementById("mylistingstable").style.display="table";
            document.getElementById("nolistings").style.display="none";
            document.querySelector("#listingdash").style.overflow="auto";
            document.querySelector("#listingdash").style.boxShadow="0 0 5px rgba(0, 0, 0, 0.143)";
            document.querySelector("#listingdash").style.height="auto";
            let lastsr=dashcon.querySelectorAll("tr");
            if(lastsr.length===0)
            lastsr='0';
            else
            lastsr=lastsr[lastsr.length-1].querySelector("td").innerText;
            const td1=document.createElement("td");
            td1.innerText=(+lastsr)+1;
            const td2=document.createElement("td");
            td2.innerText=producttitle;
            const td3=document.createElement("td");
            td3.innerText=price;
            const td4=document.createElement("td");
            td4.innerText=location;
            const td5=document.createElement("td");
            td5.innerText="...";
            const td6=document.createElement("td");
            const divtag=document.createElement("div");
            divtag.className="listcreatedstatus";
            divtag.innerText="Created";
            td6.appendChild(divtag);
            const td7=document.createElement("td");
            const date=new Date();
            const day=date.getDate().toString().padStart(2, '0');
            const month=(date.getMonth()+1).toString().padStart(2, '0');
            const year=date.getFullYear();
            const hr=date.getHours().toString().padStart(2, '0');
            const min=date.getMinutes().toString().padStart(2, '0');
            const sec=date.getSeconds().toString().padStart(2, '0');
            td7.innerText=`${day}.${month}.${year} / ${hr}:${min}:${sec}`;
            const tr=document.createElement("tr");
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
            dashcon.appendChild(tr);
        }



    }
    else
    {
        const tab=document.querySelector(".item.clicked");
        imglist[0]=myproductdata[tab.innerText]["i1"];
        imglist[1]=myproductdata[tab.innerText]["i2"];
        imglist[2]=myproductdata[tab.innerText]["i3"];
        imglist[3]=myproductdata[tab.innerText]["i4"];
        const pt=document.getElementById("producttitle").value;//original
        const producttitle=pt.replace(/\b\w/g, char => char.toUpperCase());//to show
        const description=document.getElementById("description").value;
        const price=document.getElementById("price").value;
        const location=document.getElementById("location").value;
        const items=document.querySelectorAll('#addmenu>.item');
        for(let i=0;i<items.length;i++)
        {
            if(items[i]!=tab && items[i].innerText==producttitle)
            {
                document.getElementById("repeatednamespan").style.display="inline";
                
                setTimeout(() => {
                    document.getElementById("repeatednamespan").style.display="none";
                }, 5000);
                return false;
            }
        }


            {
                let flg=0;
            const dashcon=document.querySelector("#listingdash>table>tbody");
            let lastsr=dashcon.querySelectorAll("tr");
            if(lastsr.length===0)
            lastsr='0';
            else
            lastsr=lastsr[lastsr.length-1].querySelector("td").innerText;
            const td1=document.createElement("td");
            td1.innerText=(+lastsr)+1;
            const td2=document.createElement("td");
            if(producttitle==tab.innerText)
            {
                const div=document.createElement("div");
                div.className="listunchangedstatus";
                div.innerText="Unchanged";
                td2.appendChild(div);
            }
            else
            {
            td2.innerText=producttitle;
            flg=1;
            }
            const td3=document.createElement("td");
            if(price==myproductdata[tab.innerText]['price'])
            {
                const div=document.createElement("div");
                div.className="listunchangedstatus";
                div.innerText="Unchanged";
                td3.appendChild(div);
            }
            else
            {td3.innerText=price; flg=1;}
            const td4=document.createElement("td");
            if(location==myproductdata[tab.innerText]['loc'])
            {
                const div=document.createElement("div");
                div.className="listunchangedstatus";
                div.innerText="Unchanged";
                td4.appendChild(div);
            }
            else
            {td4.innerText=location; flg=1;}
            const td5=document.createElement("td");
            {
                const div=document.createElement("div");
                if(description==myproductdata[tab.innerText]['des'])
                {
                div.className="listunchangedstatus";
                div.innerText="Unchanged";
                }
                else
                {
                div.className="listchangedstatus";
                div.innerText="Changed";
                flg=1;
                }
                td5.appendChild(div);
            }
            const td6=document.createElement("td");
            const divtag=document.createElement("div");
            divtag.className="listupdatedstatus";
            divtag.innerText="Updated";
            td6.appendChild(divtag);
            const td7=document.createElement("td");
            const date=new Date();
            const day=date.getDate().toString().padStart(2, '0');
            const month=(date.getMonth()+1).toString().padStart(2, '0');
            const year=date.getFullYear();
            const hr=date.getHours().toString().padStart(2, '0');
            const min=date.getMinutes().toString().padStart(2, '0');
            const sec=date.getSeconds().toString().padStart(2, '0');
            td7.innerText=`${day}.${month}.${year} / ${hr}:${min}:${sec}`;
            const tr=document.createElement("tr");
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
            if(flg)
            dashcon.appendChild(tr);
            }


            myproductdata[producttitle]={};
            myproductdata[producttitle]["pt"]=pt;
            myproductdata[producttitle]["des"]=description;
            myproductdata[producttitle]["price"]=price;
            myproductdata[producttitle]["loc"]=location;
            myproductdata[producttitle]["i1"]=imglist[0];
            myproductdata[producttitle]["i2"]=imglist[1];
            myproductdata[producttitle]["i3"]=imglist[2];
            myproductdata[producttitle]["i4"]=imglist[3];
            if(producttitle!==tab.innerText)
            delete myproductdata[tab.innerText];
            tab.innerText=producttitle;

    }

    setTimeout(() => {
        tabclicked=0;
        if(document.querySelectorAll('#addmenu>.item.clicked').length!==0)
        {
            document.querySelector('#addmenu>.item.clicked').classList.remove("clicked");
        }
        form.reset();
        for(let i=1;i<=4;i++)
        {
            document.getElementById(`lab${i}`).style.background=`url(resources/imguplogo.png)`;
            document.getElementById(`lab${i}`).style.backgroundSize="60%";
            document.getElementById(`lab${i}`).style.backgroundPosition="center";
            document.getElementById(`lab${i}`).style.backgroundRepeat="no-repeat";
        }
        addform.style.zIndex="-1";
    }, 0);
}





for(let i=1;i<=4;i++)//will this i  be automatically attached if an event occur 
{
    document.getElementById(`img${i}`).addEventListener("change",function(){
        let k=1;
        for(let j=1;j<=4;j++)
        {
            if(document.getElementById(`img${j}`).files.length===0)
        {
            k=0;
            break;
        }
        }
        if(k)
        {
            document.getElementById("imgwarn").style.display='none';
        }
        let img=this.files[0];
        const reader=new FileReader();
        reader.onload=()=>{
            const imgUrl=reader.result;
            imglist[i-1]=imgUrl;
            document.getElementById(`lab${i}`).style.background=`url(${imgUrl})`;
            document.getElementById(`lab${i}`).style.backgroundSize="60%";
            document.getElementById(`lab${i}`).style.backgroundPosition="center";
            document.getElementById(`lab${i}`).style.backgroundRepeat="no-repeat";
        }
        reader.readAsDataURL(img);
    });
}

function shownpanel(e,panel)
{
    const shownpanelcon=document.getElementById(panel+'panel');
    if(!shownpanelcon.classList.contains('selectedpanel'))
    {                                                         
        document.getElementById("cardinfopanel").click();
        if(document.getElementById("chatlogo").classList.contains('opened'))
        {
            document.getElementById("chatlogo").classList.remove('opened');
            document.getElementById("closechat").style.opacity="0";
            document.getElementById("openchat").style.opacity="1";
            chatbox.style.opacity="0";
            setTimeout(() => {
                chatbox.style.zIndex="-1";
            }, 200);
            sendlogo.style.fontSize=msgin.offsetHeight*0.3+'px';
        }

        const dashpanel=document.getElementById("dashpanel");


        // document.getElementById("addform").style.zIndex="-1";
        if(!dashpanel.classList.contains("opendash"))
        {
        const oldselected=document.querySelector('.selectedpanel');
            const oldnav=document.querySelector("li.selected"); 
            oldselected.style.opacity="0";
            oldselected.style.transform="scale(0)";
            setTimeout(() => {
                oldnav.classList.remove("selected");
                e.parentNode.classList.add("selected");
                shownpanelcon.style.display="block";
                setTimeout(() => {
                
                shownpanelcon.style.transition="transform 0, opacity 0";
                shownpanelcon.style.opacity="0";
                shownpanelcon.style.transform="scale(0)";
                }, 0);
                setTimeout(() => {
                    oldselected.classList.remove("selectedpanel");
                    oldselected.style.display="none";
                    shownpanelcon.classList.add("selectedpanel");
                    shownpanelcon.style.transition="transform 0.5s, opacity 0.5s";
                    setTimeout(() => {
                    shownpanelcon.style.opacity="1";
                    shownpanelcon.style.transform="scale(1)";
                    
                    }, 0);
                }, 1);
            },499);
        }
        else
        {
            dashpanel.style.transform="scale(0)";
            dashpanel.style.opacity="0";
            setTimeout(() => {
                e.parentNode.classList.add("selected");
                shownpanelcon.style.display="block";
                setTimeout(() => {
                
                    shownpanelcon.style.transition="transform 0, opacity 0";
                    shownpanelcon.style.opacity="0";
                    shownpanelcon.style.transform="scale(0)";
                    }, 0);
                    setTimeout(() => {
                        shownpanelcon.classList.add("selectedpanel");
                        shownpanelcon.style.transition="transform 0.5s, opacity 0.5s";
                        setTimeout(() => {
                        shownpanelcon.style.opacity="1";
                        shownpanelcon.style.transform="scale(1)";
                        
                        }, 0);
                    }, 1);
                    dashpanel.classList.remove("opendash");
            }, 499);
        }
    }
}
function shownpanel1(e,panel)
{
    const shownpanelcon=document.getElementById(panel+'panel');
    if(!shownpanelcon.classList.contains('selectedpanel'))
    {
        document.getElementById("cardinfopanel").click();
        if(document.getElementById("chatlogo").classList.contains('opened'))
        {
            document.getElementById("chatlogo").classList.remove('opened');
            document.getElementById("closechat").style.opacity="0";
            document.getElementById("openchat").style.opacity="1";
            chatbox.style.opacity="0";
            setTimeout(() => {
                chatbox.style.zIndex="-1";
            }, 200);
            sendlogo.style.fontSize=msgin.offsetHeight*0.3+'px';
        }

        const dashpanel=document.getElementById("dashpanel");


        // document.getElementById("addform").style.zIndex="-1";
        if(!dashpanel.classList.contains("opendash"))
       {
        const oldselected=document.querySelector('.selectedpanel');
        const oldnav=document.querySelector("a.selected");
        oldselected.style.opacity="0";
        oldselected.style.transform="scale(0)";
        setTimeout(() => {
            oldnav.classList.remove("selected");
            e.classList.add("selected");
            shownpanelcon.style.display="block";
            setTimeout(() => {
            
            shownpanelcon.style.transition="transform 0, opacity 0";
            shownpanelcon.style.opacity="0";
            shownpanelcon.style.transform="scale(0)";
            }, 0);
            setTimeout(() => {
                oldselected.classList.remove("selectedpanel");
                oldselected.style.display="none";
                shownpanelcon.classList.add("selectedpanel");
                shownpanelcon.style.transition="transform 0.5s, opacity 0.5s";
                setTimeout(() => {
                shownpanelcon.style.opacity="1";
                shownpanelcon.style.transform="scale(1)";
                
                }, 0);
            }, 1);
        },499);
    }
        else
        {
            dashpanel.style.transform="scale(0)";
            dashpanel.style.opacity="0";
            setTimeout(() => {
                e.classList.add("selected");
                shownpanelcon.style.display="block";
                setTimeout(() => {
                
                    shownpanelcon.style.transition="transform 0, opacity 0";
                    shownpanelcon.style.opacity="0";
                    shownpanelcon.style.transform="scale(0)";
                    }, 0);
                    setTimeout(() => {
                        shownpanelcon.classList.add("selectedpanel");
                        shownpanelcon.style.transition="transform 0.5s, opacity 0.5s";
                        setTimeout(() => {
                        shownpanelcon.style.opacity="1";
                        shownpanelcon.style.transform="scale(1)";
                        
                        }, 0);
                    }, 1);
                    dashpanel.classList.remove("opendash");
            }, 499);
        }
    }
    

}

function showdash()
{
    const dashboardpanel=document.getElementById("dashpanel");
    const oldpanel=document.querySelector('.selectedpanel');
    dashboardpanel.classList.add("opendash");
    if(oldpanel)
    {
    oldpanel.style.transform="scale(0)";
    oldpanel.style.opacity="0";
    setTimeout(() => {
        oldpanel.classList.remove("selectedpanel");

        if(window.innerWidth>768)
        {
            document.querySelector("li.selected").classList.remove("selected");  
        }
        else
        {
            document.querySelector("a.selected").classList.remove("selected"); 
        }
        setTimeout(() => {
            oldpanel.style.display="none";
            setTimeout(() => {
                
                dashboardpanel.style.transform="scale(1)";
            dashboardpanel.style.opacity="1";
            }, 0);
        }, 0);
        
    }, 500);
    }
    else
    {
    setTimeout(() => {
        
        dashboardpanel.style.transform="scale(1)";
        dashboardpanel.style.opacity="1";
    }, 500);
    
}
{
    document.getElementById("producthistorydash").style.display="grid";
    document.getElementById("listingdash").style.display="none";
    const dashcon=document.querySelector("#producthistorydash>table>tbody");
    let lastsr=dashcon.querySelectorAll("tr");
    document.querySelector(".dashoption.selected").classList.remove("selected");
    producthistorydashbut.classList.add("selected");
    if(lastsr.length==0)
    {
        document.getElementById("producthistorytable").style.display="none";
        document.getElementById("norequesthistory").style.display="grid";
        document.querySelector("#producthistorydash").style.height="100%";
        document.querySelector("#producthistorydash").style.overflow="hidden";
        document.querySelector("#producthistorydash").style.boxShadow="none";
    }
}
{
    const dashcon=document.querySelector("#listingdash>table>tbody");
    let lastsr=dashcon.querySelectorAll("tr");
    if(lastsr.length==0)
    {
        document.getElementById("mylistingstable").style.display="none";
        document.getElementById("nolistings").style.display="grid";
        document.querySelector("#listingdash").style.height="100%";
        document.querySelector("#listingdash").style.overflow="hidden";
        document.querySelector("#listingdash").style.boxShadow="none";
    }
}
}
producthistorydashbut.addEventListener("click",function()
{
    document.querySelector(".dashoption.selected").classList.remove("selected");
    this.classList.add("selected");
    document.getElementById("producthistorydash").style.display="grid";
    document.getElementById("listingdash").style.display="none";
});
mylistingsdashbut.addEventListener("click",function()
{
    document.querySelector(".dashoption.selected").classList.remove("selected");
    this.classList.add("selected");
    document.getElementById("producthistorydash").style.display="none";
    document.getElementById("listingdash").style.display="grid";
});