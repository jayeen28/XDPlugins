const Helpers=require("../../util/helpers"),Usage=require("../../service/UsageService"),GenerateService=require("../../service/GenerateService"),ImagePanel=require("../image/controller"),TextPanel=require("../text/controller");let repeatGrid;function GeneratePanel(){this.Created=!1}GeneratePanel.prototype.Create=async function(){let e=this;return GenerateService.GetView().then(r=>(Helpers.AddCSS("/main.css"),Helpers.AddCSS("/partial/generate/style.css"),e.Container=$create("div"),e.Container.innerHTML=r,e.Panel=e.Container.querySelector("#panel"),e.Warning=e.Container.querySelector("#warning"),e.ViewContainer=e.Container.querySelector("#generateContainer"),e.Created=!0,e.Container))},GeneratePanel.prototype.ChangeItem=function(e,r){repeatGrid=e,ImagePanel.Created&&ImagePanel.Destroy(),TextPanel.Created&&TextPanel.Destroy(),"Image"===repeatGrid.selectedItem.type?(Usage.ChangePanel("image"),ImagePanel.Create(repeatGrid,this.ViewContainer,r)):(Usage.ChangePanel("text"),TextPanel.Create(repeatGrid,this.ViewContainer))},module.exports=GeneratePanel;