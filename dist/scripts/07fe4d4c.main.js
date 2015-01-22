"use strict";CanvasRenderingContext2D.prototype.roundedRect=function(a,b,c,d,e,f){a.moveTo(b,c+f),a.lineTo(b,c+e-f),a.quadraticCurveTo(b,c+e,b+f,c+e),a.lineTo(b+d-f,c+e),a.quadraticCurveTo(b+d,c+e,b+d,c+e-f),a.lineTo(b+d,c+f),a.quadraticCurveTo(b+d,c,b+d-f,c),a.lineTo(b+f,c),a.quadraticCurveTo(b,c,b,c+f)};var nestingRules={metaLevel:{children:[{"class":"Sensor"},{"class":"Profile"},{"class":"Explanation"},{"class":"ReasoningFailure"},{"class":"Goal"},{"class":"FailureSolutionPlan"},{"class":"MonitoringTask"},{"class":"GoalGeneration"},{"class":"FailureExplanation"},{"class":"FailureDetection"},{"class":"ProfileGeneration"},{"class":"ControlTask"},{"class":"PlanConfiguration"},{"class":"ControlActivation"},{"class":"PlanExecution"},{"class":"StrategySelection"},{"class":"CostCalculation"},{"class":"ReasoningPlan"}],parent:[{"class":"Canvas"}]},objectLevel:{children:[{"class":"ComputationalData"},{"class":"ReasoningTrace"},{"class":"Strategy"},{"class":"ComputationalStrategy"},{"class":"CognitiveTask"},{"class":"ReasoningTask"}],parent:[{"class":"Canvas"}]}},dependencesRules=[{"class":"GoalGeneration",generate:[{"class":"Goal",container:"MetaLevel",relationship:"Generates"}]},{"class":"FailureExplanation",generate:[{"class":"Explanation",container:"MetaLevel",relationship:"Generates"}]},{"class":"FailureDetection",generate:[{"class":"ReasoningFailure",container:"MetaLevel",relationship:"Detects"}]},{"class":"ProfileGeneration",generate:[{"class":"Profile",container:"MetaLevel",relationship:"Generates"}]},{"class":"ReasoningTask",generate:[{"class":"Profile",container:"MetaLevel",relationship:"Has"},{"class":"ComputationalData",container:"ObjectLevel",relationship:"Generates"},{"class":"ReasoningTrace",container:"ObjectLevel",relationship:"Generates"},{"class":"ComputationalStrategy",container:"ObjectLevel",relationship:"Has"},{"class":"Goal",container:"ObjectLevel",relationship:"Has"}]},{"class":"ComputationalStrategy",generate:[{"class":"Profile",container:"MetaLevel",relationship:"Has"}]},{"class":"ReasoningTrace",generate:[{"class":"ComputationalData",container:"MetaLevel",relationship:"Has"}]},{"class":"CognitiveTask",generate:[{"class":"ComputationalStrategy",container:"ObjectLevel",relationship:"Has"},{"class":"Goal",container:"ObjectLevel",relationship:"Has"}]}],relationshipRules=[{"class":"FailureExplanation",endpoint:"Explanation",relationship:"Generates"},{"class":"ProfileGeneration",endpoint:"Profile",relationship:"Generates"},{"class":"CognitiveTask",endpoint:"ComputationalData",relationship:"Generates"},{"class":"GoalGeneration",endpoint:"Explanation",relationship:"Reads"},{"class":"FailureExplanation",endpoint:"ReasoningTrace",relationship:"Reads"},{"class":"FailureDetection",endpoint:"Sensor",relationship:"Reads"},{"class":"ProfileGeneration",endpoint:"ComputationalData",relationship:"Reads"},{"class":"ReasoningFailure",endpoint:"Explanation",relationship:"Has"},{"class":"ReasoningTask",endpoint:"ReasoningFailure",relationship:"Has"},{"class":"ReasoningTask",endpoint:"Strategy",relationship:"Uses"},{"class":"ReasoningTask",endpoint:"ComputationalStrategy",relationship:"Uses"},{"class":"ReasoningTrace",endpoint:"ComputationalData",relationship:"Has"},{"class":"FailureSolutionPlan",endpoint:"ControlTask",relationship:"Has"},{"class":"CognitiveTask",endpoint:"ComputationalStrategy",relationship:"Has"},{"class":"PlanConfiguration",endpoint:"FailureSolutionPlan",relationship:"InsertTask"},{"class":"ReasoningFailure",endpoint:"ControlActivation",relationship:"Enables"},{"class":"ControlActivation",endpoint:"PlanExecution",relationship:"Starts"},{"class":"PlanExecution",endpoint:"FailureSolutionPlan",relationship:"Reads"},{"class":"ControlTask",endpoint:"Profile",relationship:"Reads"},{"class":"ControlTask",endpoint:"Explanation",relationship:"Reads"},{"class":"StrategySelection",endpoint:"Goal",relationship:"Reads"},{"class":"StrategySelection",endpoint:"Profile",relationship:"Reads"},{"class":"StrategySelection",endpoint:"ComputationalStrategy",relationship:"Recommends"},{"class":"CostCalculation",endpoint:"Profile",relationship:"Reads"},{"class":"StrategySelection",endpoint:"CostCalculation",relationship:"Uses"},{"class":"Strategy",endpoint:"Profile",relationship:"Has"},{"class":"ComputationalStrategy",endpoint:"Profile",relationship:"Has"}],common={metalevel_element:function(){return{init:function(){var a={changeZindex:!0,move:function(){this.x<0?this.x=0:!1,this.y<0?this.y=0:!1,this.x>this.parent.width-this.width?this.x=this.parent.width-this.width:!1,this.y>this.parent.height-this.height?this.y=this.parent.height-this.height:!1,this.updateProperties&&this.updateProperties({x:parseInt(this.x),y:parseInt(this.y)})},bubble:!1};this.dragAndDrop(a),this.class_label=this.core.display.text({x:4,y:5,origin:{x:"left",y:"top"},align:"center",font:"bold 12px Arial",text:"<<"+this["class"]+">>",fill:"#fff"}),this.addChild(this.class_label),this.label=this.core.display.text({x:4,y:27,origin:{x:"left",y:"top"},align:"center",font:"12px Arial",text:this["class"],fill:"#fff"}),this.addChild(this.label),this.bind("click tap",function(a){if(a.stopPropagation(),this.setFocusedObject&&this.setFocusedObject(this),this.updateProperties&&this.updateProperties({x:parseInt(this.x),y:parseInt(this.y),width:parseInt(this.width),height:parseInt(this.height),label:this.label.text,"class":this["class"]}),this.getToolSelected){var b=this.getToolSelected();null!=b&&this.drawLine&&this.drawLine(this)}})},draw:function(){0===this.width?this.width=this.defaultWidth:!1,0===this.height?this.height=this.defaultHeight:!1,this.stroke="2px #000";var a=this.core.canvas,b=this.getOrigin(),c=this.abs_x-b.x,d=this.abs_y-b.y,e=this.width;if(height=this.height,a.beginPath(),a.moveTo(0,23),a.lineTo(this.width,23),a.stroke(),this.fill="#FF7979",this.stroke="2px #000",""!==this.fill&&(a.fillStyle=this.fill,a.roundedRect(a,c,d,e,height,7),a.fill()),this.strokeWidth>0&&(a.strokeStyle=this.strokeColor,a.lineWidth=this.strokeWidth,a.stroke()),a.closePath(),this.lines.length>0)for(var f in this.lines)null!=this.lines[f].line&&"l"==this.lines[f].line.env?("start"==this.lines[f].observe?(this.lines[f].line.x=this.x+this.width/2,this.lines[f].line.y=this.y+this.height/2):(this.lines[f].line.width=this.x-this.lines[f].line.x+this.width/2,this.lines[f].line.height=this.y-this.lines[f].line.y+this.height/2),this.lines[f].line.line.start={x:0,y:0},this.lines[f].line.line.end={x:this.lines[f].line.width,y:this.lines[f].line.height},this.lines[f].line.label.x=this.lines[f].line.width/2,this.lines[f].line.label.y=this.lines[f].line.height/2-10):null!=this.lines[f].line?("start"==this.lines[f].observe?(this.lines[f].line.x=this.parent.x+this.x+3,this.lines[f].line.y=this.parent.y+this.y):(this.lines[f].line.width=this.parent.x+this.x+3-this.lines[f].line.x,this.lines[f].line.height=this.parent.y+this.y-this.lines[f].line.y),this.lines[f].line.line.start={x:0,y:0},this.lines[f].line.line.end={x:this.lines[f].line.width,y:this.lines[f].line.height},this.lines[f].line.label.x=this.lines[f].line.width/2,this.lines[f].line.label.y=this.lines[f].line.height/2-10):this.lines.splice(this.lines[f],1)},setText:function(a){""!=a&&(this.label.text=a)},setWidth:function(a){this.widthEditable&&a<this.parent.width&&a<this.parent.width-this.width?this.width=a:console.log("valor no permitido")},setHeight:function(a){this.heightEditable&&a<this.parent.height&&a<this.parent.height-this.height?this.height=a:console.log("valor no permitido")}}},objectlevel_element:function(){return{init:function(){var a={changeZindex:!0,move:function(){this.x<0?this.x=0:!1,this.y<0?this.y=0:!1,this.x>this.parent.width-this.width?this.x=this.parent.width-this.width:!1,this.y>this.parent.height-this.height?this.y=this.parent.height-this.height:!1,this.updateProperties&&this.updateProperties({x:parseInt(this.x),y:parseInt(this.y)})},bubble:!1};this.dragAndDrop(a),this.class_label=this.core.display.text({x:4,y:5,origin:{x:"left",y:"top"},align:"center",font:"bold 12px Arial",text:"<<"+this["class"]+">>",fill:"#fff"}),this.addChild(this.class_label),this.label=this.core.display.text({x:4,y:27,origin:{x:"left",y:"top"},align:"center",font:"12px Arial",text:this["class"],fill:"#fff"}),this.addChild(this.label),this.bind("click tap",function(a){if(a.stopPropagation(),this.setFocusedObject&&this.setFocusedObject(this),this.updateProperties&&this.updateProperties({x:parseInt(this.x),y:parseInt(this.y),width:parseInt(this.width),height:parseInt(this.height),label:this.label.text,"class":this["class"]}),this.getToolSelected){var b=this.getToolSelected();null!=b&&this.drawLine&&this.drawLine(this)}})},draw:function(){0==this.width?this.width=this.defaultWidth:!1,0==this.height?this.height=this.defaultHeight:!1,this.stroke="2px #000";var a=this.core.canvas,b=this.getOrigin(),c=this.abs_x-b.x,d=this.abs_y-b.y,e=this.width;if(height=this.height,a.beginPath(),a.moveTo(0,23),a.lineTo(this.width,23),a.stroke(),this.fill="#1ABC9C",this.stroke="2px #000",""!==this.fill&&(a.fillStyle=this.fill,a.roundedRect(a,c,d,e,height,7),a.fill()),this.strokeWidth>0&&(a.strokeStyle=this.strokeColor,a.lineWidth=this.strokeWidth,a.stroke()),a.closePath(),this.lines.length>0)for(var f in this.lines)null!=this.lines[f].line&&"l"==this.lines[f].line.env?("start"==this.lines[f].observe?(this.lines[f].line.x=this.x+this.width/2,this.lines[f].line.y=this.y+this.height/2):(this.lines[f].line.width=this.x-this.lines[f].line.x+this.width/2,this.lines[f].line.height=this.y-this.lines[f].line.y+this.height/2),this.lines[f].line.line.start={x:0,y:0},this.lines[f].line.line.end={x:this.lines[f].line.width,y:this.lines[f].line.height},this.lines[f].line.label.x=this.lines[f].line.width/2,this.lines[f].line.label.y=this.lines[f].line.height/2-10):null!=this.lines[f].line?("start"==this.lines[f].observe?(this.lines[f].line.x=this.parent.x+this.x+3,this.lines[f].line.y=this.parent.y+this.y):(this.lines[f].line.width=this.parent.x+this.x+3-this.lines[f].line.x,this.lines[f].line.height=this.parent.y+this.y-this.lines[f].line.y),this.lines[f].line.line.start={x:0,y:0},this.lines[f].line.line.end={x:this.lines[f].line.width,y:this.lines[f].line.height},this.lines[f].line.label.x=this.lines[f].line.width/2,this.lines[f].line.label.y=this.lines[f].line.height/2-10):this.lines.splice(this.lines[f],1)},setText:function(a){""!=a&&(this.label.text=a)},setWidth:function(a){this.widthEditable&&a<this.parent.width&&a<this.parent.width-this.width?this.width=a:console.log("valor no permitido")},setHeight:function(a){this.heightEditable&&a<this.parent.height&&a<this.parent.height-this.height?this.height=a:console.log("valor no permitido")}}},relationship:function(){return{init:function(){this.line=this.core.display.line({start:{x:0,y:0},end:{x:0,y:0},stroke:"1px #000",cap:"round"}),this.addChild(this.line),this.label=this.core.display.text({text:this["class"],fill:"#000",origin:{x:"center",y:"center"},font:"12px Arial"}),this.addChild(this.label),this.bind("click tap",function(a){a.stopPropagation(),this.setFocusedObject&&this.setFocusedObject(this),this.updateProperties&&this.updateProperties({x:"",y:"",width:"",height:"",label:this.label.text,"class":this["class"]})})},draw:function(){{var a=(this.core.canvas,this.getOrigin());this.abs_x-a.x,this.abs_y-a.y,this.width,this.height}},setText:function(a){""!=a&&(this.label.text=a)}}},container:function(){return{init:function(){var a={changeZindex:!1,move:function(){this.x<0?this.x=0:!1,this.y<0?this.y=0:!1,this.x>this.parent.width-this.width?this.x=this.parent.width-this.width:!1,this.y>this.parent.height-this.height?this.y=this.parent.height-this.height:!1,this.updateProperties&&this.updateProperties({x:parseInt(this.x),y:parseInt(this.y)})},bubble:!1};this.dragAndDrop(a),this.class_label=this.core.display.text({x:4,y:5,origin:{x:"left",y:"top"},align:"center",font:"bold 14px Arial",text:"<<"+this["class"]+">>",fill:"#aaa"}),this.addChild(this.class_label),this.label=this.core.display.text({x:this.class_label.x+this.class_label.width+5,y:5,origin:{x:"left",y:"top"},align:"center",font:"14px Arial",text:this["class"],fill:"#000"}),this.addChild(this.label),this.bind("click tap",function(a){if(a.stopPropagation(),this.setFocusedObject&&this.setFocusedObject(this),this.updateProperties&&this.updateProperties({x:parseInt(this.x),y:parseInt(this.y),width:parseInt(this.width),height:parseInt(this.height),label:this.label.text,"class":this["class"]}),this.getToolSelected&&null!=this.getToolSelected()){for(var b=!1,c=0,d=this.getToolSelected();!b&&c<this.nestingRules.children.length;)this.nestingRules.children[c]["class"]===d&&(b=!0),c+=1;b&&this.addNewChild?this.addNewChild(this,d):console.log("can not create a new instance.")}})},draw:function(){this.fill="#eee",this.stroke="2px #bdc7d8",0==this.width?this.width=this.defaultWidth:!1,0==this.height?this.height=this.defaultHeight:!1;var a=this.core.canvas,b=this.getOrigin(),c=this.abs_x-b.x,d=this.abs_y-b.y,e=this.width;height=this.height,a.beginPath(),""!==this.fill&&(a.fillStyle=this.fill,a.fillRect(c,d,e,height),a.setLineDash([5])),this.strokeWidth>0&&(a.strokeStyle=this.strokeColor,a.lineWidth=this.strokeWidth,a.strokeRect(c,d,e,height)),a.closePath()},setText:function(a){""!=a&&(this.label.text=a)},setWidth:function(a){this.widthEditable&&a<this.parent.width&&a<this.parent.width-this.width?this.width=a:console.log("valor no permitido")},setHeight:function(a){this.heightEditable&&a<this.parent.height&&a<this.parent.height-this.height?this.height=a:console.log("valor no permitido")}}}},MetaLevel=function(a,b){return oCanvas.extend({core:b,"class":"MetaLevel",widthEditable:!0,heightEditable:!0,defaultWidth:600,defaultHeight:200,shapeType:"rectangular",nestingRules:nestingRules.metaLevel},a,common.container())};oCanvas.registerDisplayObject("MetaLevel",MetaLevel,"init");var ObjectLevel=function(a,b){return oCanvas.extend({core:b,"class":"ObjectLevel",widthEditable:!0,heightEditable:!0,defaultWidth:600,defaultHeight:200,shapeType:"rectangular",nestingRules:nestingRules.objectLevel},a,common.container())};oCanvas.registerDisplayObject("ObjectLevel",ObjectLevel,"init");var Sensor=function(a,b){return oCanvas.extend({core:b,"class":"Sensor",widthEditable:!0,heightEditable:!1,defaultWidth:100,defaultHeight:80,shapeType:"rectangular",lines:[],relationshipRules:relationshipRules},a,common.metalevel_element())};oCanvas.registerDisplayObject("Sensor",Sensor,"init");var Profile=function(a,b){return oCanvas.extend({core:b,"class":"Profile",widthEditable:!0,heightEditable:!1,defaultWidth:100,defaultHeight:80,shapeType:"rectangular",lines:[],relationshipRules:relationshipRules},a,common.metalevel_element())};oCanvas.registerDisplayObject("Profile",Profile,"init");var Explanation=function(a,b){return oCanvas.extend({core:b,"class":"Explanation",widthEditable:!0,heightEditable:!1,defaultWidth:130,defaultHeight:80,shapeType:"rectangular",lines:[],relationshipRules:relationshipRules},a,common.metalevel_element())};oCanvas.registerDisplayObject("Explanation",Explanation,"init");var ReasoningFailure=function(a,b){return oCanvas.extend({core:b,"class":"ReasoningFailure",widthEditable:!0,heightEditable:!1,defaultWidth:140,defaultHeight:80,shapeType:"rectangular",lines:[],relationshipRules:relationshipRules},a,common.metalevel_element())};oCanvas.registerDisplayObject("ReasoningFailure",ReasoningFailure,"init");var Goal=function(a,b){return oCanvas.extend({core:b,"class":"Goal",widthEditable:!0,heightEditable:!1,defaultWidth:100,defaultHeight:80,shapeType:"rectangular",lines:[],relationshipRules:relationshipRules},a,common.metalevel_element())};oCanvas.registerDisplayObject("Goal",Goal,"init");var FailureSolutionPlan=function(a,b){return oCanvas.extend({core:b,"class":"FailureSolutionPlan",widthEditable:!0,heightEditable:!1,defaultWidth:150,defaultHeight:80,shapeType:"rectangular",lines:[],relationshipRules:relationshipRules},a,common.metalevel_element())};oCanvas.registerDisplayObject("FailureSolutionPlan",FailureSolutionPlan,"init");var ReasoningPlan=function(a,b){return oCanvas.extend({core:b,"class":"ReasoningPlan",widthEditable:!0,heightEditable:!1,defaultWidth:150,defaultHeight:80,shapeType:"rectangular",lines:[],relationshipRules:relationshipRules},a,common.metalevel_element())};oCanvas.registerDisplayObject("ReasoningPlan",ReasoningPlan,"init");var MonitoringTask=function(a,b){return oCanvas.extend({core:b,"class":"MonitoringTask",widthEditable:!0,heightEditable:!1,defaultWidth:130,defaultHeight:80,shapeType:"rectangular",lines:[],relationshipRules:relationshipRules},a,common.metalevel_element())};oCanvas.registerDisplayObject("MonitoringTask",MonitoringTask,"init");var GoalGeneration=function(a,b){return oCanvas.extend({core:b,"class":"GoalGeneration",widthEditable:!0,heightEditable:!1,defaultWidth:130,defaultHeight:80,shapeType:"rectangular",lines:[],relationshipRules:relationshipRules},a,common.metalevel_element())};oCanvas.registerDisplayObject("GoalGeneration",GoalGeneration,"init");var FailureExplanation=function(a,b){return oCanvas.extend({core:b,"class":"FailureExplanation",widthEditable:!0,heightEditable:!1,defaultWidth:150,defaultHeight:80,shapeType:"rectangular",lines:[],relationshipRules:relationshipRules},a,common.metalevel_element())};oCanvas.registerDisplayObject("FailureExplanation",FailureExplanation,"init");var FailureDetection=function(a,b){return oCanvas.extend({core:b,"class":"FailureDetection",widthEditable:!0,heightEditable:!1,defaultWidth:130,defaultHeight:80,shapeType:"rectangular",lines:[],relationshipRules:relationshipRules},a,common.metalevel_element())};oCanvas.registerDisplayObject("FailureDetection",FailureDetection,"init");var ProfileGeneration=function(a,b){return oCanvas.extend({core:b,"class":"ProfileGeneration",widthEditable:!0,heightEditable:!1,defaultWidth:150,defaultHeight:80,shapeType:"rectangular",lines:[],relationshipRules:relationshipRules},a,common.metalevel_element())};oCanvas.registerDisplayObject("ProfileGeneration",ProfileGeneration,"init");var ControlTask=function(a,b){return oCanvas.extend({core:b,"class":"ControlTask",widthEditable:!0,heightEditable:!1,defaultWidth:130,defaultHeight:80,shapeType:"rectangular",lines:[],relationshipRules:relationshipRules},a,common.metalevel_element())};oCanvas.registerDisplayObject("ControlTask",ControlTask,"init");var PlanConfiguration=function(a,b){return oCanvas.extend({core:b,"class":"PlanConfiguration",widthEditable:!0,heightEditable:!1,defaultWidth:150,defaultHeight:80,shapeType:"rectangular",lines:[],relationshipRules:relationshipRules},a,common.metalevel_element())};oCanvas.registerDisplayObject("PlanConfiguration",PlanConfiguration,"init");var ControlActivation=function(a,b){return oCanvas.extend({core:b,"class":"ControlActivation",widthEditable:!0,heightEditable:!1,defaultWidth:150,defaultHeight:80,shapeType:"rectangular",lines:[],relationshipRules:relationshipRules},a,common.metalevel_element())};oCanvas.registerDisplayObject("ControlActivation",ControlActivation,"init");var PlanExecution=function(a,b){return oCanvas.extend({core:b,"class":"PlanExecution",widthEditable:!0,heightEditable:!1,defaultWidth:130,defaultHeight:80,shapeType:"rectangular",lines:[],relationshipRules:relationshipRules},a,common.metalevel_element())};oCanvas.registerDisplayObject("PlanExecution",PlanExecution,"init");var StrategySelection=function(a,b){return oCanvas.extend({core:b,"class":"StrategySelection",widthEditable:!0,heightEditable:!1,defaultWidth:150,defaultHeight:80,shapeType:"rectangular",lines:[],relationshipRules:relationshipRules},a,common.metalevel_element())};oCanvas.registerDisplayObject("StrategySelection",StrategySelection,"init");var ComputationalData=function(a,b){return oCanvas.extend({core:b,"class":"ComputationalData",widthEditable:!0,heightEditable:!1,defaultWidth:150,defaultHeight:80,shapeType:"rectangular",lines:[],relationshipRules:relationshipRules},a,common.objectlevel_element())};oCanvas.registerDisplayObject("ComputationalData",ComputationalData,"init");var ReasoningTrace=function(a,b){return oCanvas.extend({core:b,"class":"ReasoningTrace",widthEditable:!0,heightEditable:!1,defaultWidth:130,defaultHeight:80,shapeType:"rectangular",lines:[],relationshipRules:relationshipRules},a,common.objectlevel_element())};oCanvas.registerDisplayObject("ReasoningTrace",ReasoningTrace,"init");var Strategy=function(a,b){return oCanvas.extend({core:b,"class":"Strategy",widthEditable:!0,heightEditable:!1,defaultWidth:130,defaultHeight:80,shapeType:"rectangular",lines:[],relationshipRules:relationshipRules},a,common.objectlevel_element())};oCanvas.registerDisplayObject("Strategy",Strategy,"init");var ComputationalStrategy=function(a,b){return oCanvas.extend({core:b,"class":"ComputationalStrategy",widthEditable:!0,heightEditable:!1,defaultWidth:180,defaultHeight:80,shapeType:"rectangular",lines:[],relationshipRules:relationshipRules},a,common.objectlevel_element())};oCanvas.registerDisplayObject("ComputationalStrategy",ComputationalStrategy,"init");var CognitiveTask=function(a,b){return oCanvas.extend({core:b,"class":"CognitiveTask",widthEditable:!0,heightEditable:!1,defaultWidth:130,defaultHeight:80,shapeType:"rectangular",lines:[],relationshipRules:relationshipRules},a,common.objectlevel_element())};oCanvas.registerDisplayObject("CognitiveTask",CognitiveTask,"init");var ReasoningTask=function(a,b){return oCanvas.extend({core:b,"class":"ReasoningTask",widthEditable:!0,heightEditable:!1,defaultWidth:130,defaultHeight:80,shapeType:"rectangular",lines:[],relationshipRules:relationshipRules},a,common.objectlevel_element())};oCanvas.registerDisplayObject("ReasoningTask",ReasoningTask,"init");var CostCalculation=function(a,b){return oCanvas.extend({core:b,"class":"CostCalculation",widthEditable:!0,heightEditable:!1,defaultWidth:130,defaultHeight:80,shapeType:"rectangular",lines:[],relationshipRules:relationshipRules},a,common.objectlevel_element())};oCanvas.registerDisplayObject("CostCalculation",CostCalculation,"init");var Generates=function(a,b){return oCanvas.extend({core:b,"class":"Generates",shapeType:"radial"},a,common.relationship())};oCanvas.registerDisplayObject("Generates",Generates,"init");var Has=function(a,b){return oCanvas.extend({core:b,"class":"Has",shapeType:"radial"},a,common.relationship())};oCanvas.registerDisplayObject("Has",Has,"init");var Detects=function(a,b){return oCanvas.extend({core:b,"class":"Detects",shapeType:"radial"},a,common.relationship())};oCanvas.registerDisplayObject("Detects",Detects,"init");var Reads=function(a,b){return oCanvas.extend({core:b,"class":"Reads",shapeType:"radial"},a,common.relationship())};oCanvas.registerDisplayObject("Reads",Reads,"init");var Enables=function(a,b){return oCanvas.extend({core:b,"class":"Enables",shapeType:"radial"},a,common.relationship())};oCanvas.registerDisplayObject("Enables",Enables,"init");var Uses=function(a,b){return oCanvas.extend({core:b,"class":"Uses",shapeType:"radial"},a,common.relationship())};oCanvas.registerDisplayObject("Uses",Uses,"init");var Recommends=function(a,b){return oCanvas.extend({core:b,"class":"Recommends",shapeType:"radial"},a,common.relationship())};oCanvas.registerDisplayObject("Recommends",Recommends,"init");var Starts=function(a,b){return oCanvas.extend({core:b,"class":"Starts",shapeType:"radial"},a,common.relationship())};oCanvas.registerDisplayObject("Starts",Starts,"init");var InsertTask=function(a,b){return oCanvas.extend({core:b,"class":"InsertTask",shapeType:"radial"},a,common.relationship())};oCanvas.registerDisplayObject("InsertTask",InsertTask,"init");var Monitors=function(a,b){return oCanvas.extend({core:b,"class":"Monitors",shapeType:"radial"},a,common.relationship())};oCanvas.registerDisplayObject("Monitors",Monitors,"init");var MetaThink=function(a){function b(){y=document.querySelector("#stage"),c($(x.dom.propertiesBar)),m(),n(),p(),d(),$(document).on(x.events.keydown,h)}function c(a){D.label=$(a).find("input.label"),D.width=$(a).find("input.width"),D.height=$(a).find("input.height"),D.x=$(a).find("input.x"),D.y=$(a).find("input.y"),D["class"]=$(a).find("input.type");for(var b in D)$(D[b]).on(x.events.focusout,f),$(D[b]).on(x.events.keypress,g)}function d(){$(x.dom.tools).on(x.events.click,e)}function e(a){for(var b=a.target;"a"!==b.tagName.toLowerCase();)b=b.parentNode;$(x.dom.toolActive).removeClass("active"),$(b).addClass("active");for(var c=$(b).attr("t"),d=!1,e=0;!d&&e<E.length;)E[e].name===c&&(d=!0,B=E[e]["class"]),e+=1}function f(){j()}function g(a){var b=a.keyCode?a.keyCode:a.which;b===x.keyCode&&j()}function h(a){var b=a.keyCode?a.keyCode:a.which;if(b===x.deleteKeyCode&&null!==A){if("rectangular"===A.shapeType&&A.lines){for(var c in A.lines)A.lines[c].line.remove();for(;A.lines.length>0;)A.lines.pop();A.lines.splice(0,A.lines.length)}else if("rectangular"===A.shapeType&&!A.lines)for(var d in A.children)if(A.children[d].lines){for(var e in A.children[d].lines)A.children[d]&&A.children[d].lines[e]&&A.children[d].lines[e].line.remove();if(A.children[d])for(;A.children[d].lines.length>0;)A.children[d].lines.pop()}A.remove(),A=null,i(),z.redraw()}}function i(){o({label:"",width:"",height:"",x:"",y:"","class":""})}function j(){null!==A&&(A.setWidth&&"rectangular"===A.shapeType&&A.setWidth(parseInt($(D.width).val())),A.setHeight&&"rectangular"===A.shapeType&&A.setHeight(parseInt($(D.height).val())),A.x&&"rectangular"===A.shapeType&&(A.x=parseInt($(D.x).val())),A.y&&"rectangular"===A.shapeType&&(A.y=parseInt($(D.y).val())),A.setText&&A.setText($(D.label).val()),z.redraw())}function k(a){null!==a&&(A=a)}function l(){return B}function m(){var b=document.querySelector("#main div.right div.stage-container"),c=document.querySelector("#wrapper > header"),d=parseInt($(c).css("height")),e=document.querySelector("#properties-bar"),f=parseInt($(e).css("height"));$(b).css("height",a.innerHeight-(d+f))}function n(){$("#accordion").accordion({heightStyle:"content",header:"> .category > .header"}),$("div.sub-menu").accordion({heightStyle:"content",header:".sub-category > .sub-header"})}function o(a){for(var b in a)$(D[b]).val(a[b])}function p(){y.width=2*a.innerWidth,y.height=2*a.innerHeight,z=oCanvas.create({canvas:y,background:"#fff"}),z.bind(x.events.click,q)}function q(){if(null!==l()){var a=z.display[l()]({x:z.mouse.x,y:z.mouse.y,updateProperties:o,setFocusedObject:k,getToolSelected:l,addNewChild:r});a.nestingRules&&a.nestingRules.parent&&a.nestingRules.parent.length>0?(z.addChild(a),B=null,$(x.dom.toolActive).removeClass("active")):console.log("this object can not be added directly on stage.")}else A=null,i()}function r(a,b){var c=z.display[b]({x:z.mouse.x-a.x,y:z.mouse.y-a.y,updateProperties:o,setFocusedObject:k,getToolSelected:l,drawLine:u});a.addChild(c),s();for(var d in dependencesRules)if(dependencesRules[d]["class"]===b){var e=dependencesRules[d].generate;for(var f in e)t(e[f]["class"],c,e[f].container,e[f].relationship)}}function s(){B=null,$(x.dom.toolActive).removeClass("active")}function t(a,b,c,d){for(var e=z.display[a]({x:b.x+b.width+50,y:b.y,updateProperties:o,setFocusedObject:k,getToolSelected:l,drawLine:u}),f=!1,g=0;!f&&g<z.children.length;){if(z.children[g]["class"]&&z.children[g]["class"]===c){f=!0,z.children[g].addChild(e);var h=z.display[d]({env:"e",setFocusedObject:k,updateProperties:o});e.parent["class"]===b.parent["class"]?(h=z.display[d]({env:"l",setFocusedObject:k,updateProperties:o}),b.parent.addChild(h),h.zIndex=0,z.redraw()):z.addChild(h),b.lines.push({line:h,observe:"start"}),e.lines.push({line:h,observe:"end"})}g+=1}f||console.log("error de generacion automatica.")}function u(a){var b=l(),c=a.relationshipRules;if(null===C)console.log("Primer elemento seleccionado para hacer la relacion."),w(a,c,"class",b)?(console.log("Elemento valido para hacer una relacion."),C=a):(console.log("No se permite la relacion de este objeto con otro."),s());else if(C.id!==a.id)if(console.log("Segundo elemento seleccionado para hacer la relacion."),w(a,c,"endpoint",b)){if(console.log("Elemento valido para hacer una relacion."),v(C,a))console.log("ya existe una relacion entre los dos elementos"),console.log("no se hara la relacion");else{console.log("haciendo la relacion...");var d=z.display[b]({setFocusedObject:k,updateProperties:o});C.parent["class"]===a.parent["class"]?(d.env="l",a.parent.addChild(d),d.zIndex=0,z.redraw()):(d.env="e",z.addChild(d)),C.lines.push({line:d,observe:"start"}),a.lines.push({line:d,observe:"end"})}C=null,s()}else console.log("No se permite la relacion de este objeto con otro."),C=null,s();else console.log("Ha seleccionado dos veces el mismo elemento"),C=null,s()}function v(a,b){for(var c=0,d=!1,e=!1;!d&&c<a.lines.length;){for(var f=0;!e&&f<b.lines.length;)a.lines[c].line.id===b.lines[f].line.id&&(d=!0,e=!0),f+=1;c+=1}return d||e?!0:!1}function w(a,b,c,d){for(var e=!1,f=0;!e&&f<b.length;){if(a["class"]===b[f][c]&&b[f].relationship===d)return e=!0,!0;f+=1}return!1}var x={name:"MetaThink main module",events:{click:"click",ready:"ready",resize:"resize",focusout:"focusout",keypress:"keypress",keydown:"keydown",scroll:"scroll"},keyCode:13,deleteKeyCode:46,dom:{canvas:"stage",propertiesBar:"div#properties-bar",tools:"a.tool",toolActive:"a.active"}},y=null,z=null,A=null,B=null,C=null,D={label:{},width:{},height:{},x:{},y:{},"class":{}},E=[{name:"meta-level","class":"MetaLevel"},{name:"object-level","class":"ObjectLevel"},{name:"sensor","class":"Sensor"},{name:"profile","class":"Profile"},{name:"explanation","class":"Explanation"},{name:"reasoning-failure","class":"ReasoningFailure"},{name:"goal","class":"Goal"},{name:"failure-solution-plan","class":"FailureSolutionPlan"},{name:"monitoring-task","class":"MonitoringTask"},{name:"goal-generation","class":"GoalGeneration"},{name:"failure-explanation","class":"FailureExplanation"},{name:"failure-detection","class":"FailureDetection"},{name:"profile-generation","class":"ProfileGeneration"},{name:"control-task","class":"ControlTask"},{name:"plan-configuration","class":"PlanConfiguration"},{name:"control-activation","class":"ControlActivation"},{name:"plan-execution","class":"PlanExecution"},{name:"strategy-selection","class":"StrategySelection"},{name:"computational-data","class":"ComputationalData"},{name:"reasoning-trace","class":"ReasoningTrace"},{name:"strategy","class":"Strategy"},{name:"computational-strategy","class":"ComputationalStrategy"},{name:"cognitive-task","class":"CognitiveTask"},{name:"reasoning-task","class":"ReasoningTask"},{name:"reasoning-plan","class":"ReasoningPlan"},{name:"cost-calculation","class":"CostCalculation"},{name:"generates","class":"Generates"},{name:"detects","class":"Detects"},{name:"has","class":"Has"},{name:"reads","class":"Reads"},{name:"enables","class":"Enables"},{name:"uses","class":"Uses"},{name:"recommends","class":"Recommends"},{name:"starts","class":"Starts"},{name:"insert-task","class":"InsertTask"},{name:"monitors","class":"Monitors"}];return{init:b,config:x}}(window);$(document).on(MetaThink.config.events.ready,MetaThink.init);