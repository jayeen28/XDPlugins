const os=require("os"),Helpers=require("../util/helpers"),MockService=require("../service/MockService"),Usage=require("../service/UsageService"),GeneratePanel=require("../partial/generate/controller"),RepeatGrid=require("../service/RepeatGridService"),columnWidth=300;let UI,Mock,TheRepeatGrid,EditContext,selectGridCell,changeRG,RGSelection,RGList,repeatGridMock,optionIndex,resizeListener,selectCell=function(){UI.ChangeItem(TheRepeatGrid,EditContext)},drawRG=function(e){selectGridCell.innerHTML="",repeatGridMock.innerHTML="",Mock.FakeIt(TheRepeatGrid,{width:e,height:e},repeatGridMock,selectGridCell,selectCell),Mock.SelectFirst(TheRepeatGrid)},resizeRG=function(e){Mock.Resize(TheRepeatGrid,{width:e,height:e})};function Generate(){}Generate.prototype.Show=async function(e){if(UI=new GeneratePanel,Mock=new MockService,resizeListener=!1,optionIndex=0,!UI.Created){e.node.firstChild&&e.node.firstChild.remove(),e.node.appendChild(await UI.Create());let t=await Helpers.GetUser();Usage.PanelOpen(t,os.platform())}},Generate.prototype.Hide=function(e){e.node.firstChild&&e.node.firstChild.remove(),UI=void 0,Mock=void 0,TheRepeatGrid=void 0,Usage.PanelClose()},Generate.prototype.Update=function(e){EditContext=e.editContext;let t,i=Helpers.GetRGs(e);setTimeout(()=>{if(i.length){UI.Panel.className="show",UI.Warning.className="hide",RGSelection=$first("#RGSelection"),RGList=$first("#RGList"),selectGridCell=$first("#selectGridCell"),repeatGridMock=$first("#repeatGridMock"),1===i.length?RGSelection.style.display="none":RGSelection.style.display="block";let e,n=$first("#panelFlex"),r=UI.Panel.getBoundingClientRect().width;changeRG=function(){optionIndex=this.value,t=i[optionIndex],TheRepeatGrid&&TheRepeatGrid._rg.guid===t.guid||(TheRepeatGrid=new RepeatGrid(t),(r=UI.Panel.getBoundingClientRect().width)<300?(e=r,n.classList.remove("row"),n.classList.add("column")):(n.classList.remove("column"),n.classList.add("row"),setTimeout(()=>{e=selectGridCell.getBoundingClientRect().width},100)),setTimeout(()=>{drawRG(e)},100)),resizeListener||UI.Panel.parentNode.addEventListener("resize",()=>{resizeListener=!0,UI.Panel.getBoundingClientRect().width!==r&&((r=UI.Panel.getBoundingClientRect().width)<300?(e=r,n.classList.remove("row"),n.classList.add("column")):(n.classList.remove("column"),n.classList.add("row"),e=selectGridCell.getBoundingClientRect().width),resizeRG(e))})},Helpers.MakeRGList(RGList,i,optionIndex,changeRG)}else UI.Panel.className="hide",UI.Warning.className="show",TheRepeatGrid=void 0},200)},module.exports=new Generate;