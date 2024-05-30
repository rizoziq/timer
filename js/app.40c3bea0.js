(function(){"use strict";var t={812:function(t,e,s){var a=s(3751),i=s(225),l=(s(4188),s(8548)),o=s(641);const n=t=>((0,o.Qi)("data-v-c63c391a"),t=t(),(0,o.jt)(),t),d={class:"container"},r=n((()=>(0,o.Lk)("h1",null,"任务管理 App",-1))),k=n((()=>(0,o.Lk)("span",null,"确定清除已完成任务？",-1))),u={class:"dialog-footer"};function m(t,e,s,a,i,l){const n=(0,o.g2)("el-button"),m=(0,o.g2)("el-col"),c=(0,o.g2)("Download"),h=(0,o.g2)("el-icon"),p=(0,o.g2)("DocumentAdd"),f=(0,o.g2)("el-upload"),T=(0,o.g2)("el-row"),b=(0,o.g2)("el-dialog"),g=(0,o.g2)("AddTask"),y=(0,o.g2)("TaskInfo"),w=(0,o.g2)("el-scrollbar"),v=(0,o.g2)("TaskSummary"),F=(0,o.g2)("EditTask"),C=(0,o.g2)("el-collapse-item"),D=(0,o.g2)("el-collapse"),_=(0,o.g2)("TaskStat");return(0,o.uX)(),(0,o.CE)("div",d,[r,(0,o.bF)(T,null,{default:(0,o.k6)((()=>[(0,o.bF)(m,{span:6},{default:(0,o.k6)((()=>[(0,o.bF)(n,{type:"primary",onClick:l.sortTasksByName},{default:(0,o.k6)((()=>[(0,o.eW)(" 按任务名排序 ")])),_:1},8,["onClick"])])),_:1}),(0,o.bF)(m,{span:6},{default:(0,o.k6)((()=>[(0,o.bF)(n,{type:"primary",onClick:l.sortTasksByAddTime},{default:(0,o.k6)((()=>[(0,o.eW)(" 按添加时间排序 ")])),_:1},8,["onClick"])])),_:1}),(0,o.bF)(m,{span:6},{default:(0,o.k6)((()=>[(0,o.bF)(n,{type:"primary",onClick:l.exportTasks},{default:(0,o.k6)((()=>[(0,o.eW)(" 导出任务 "),(0,o.bF)(h,null,{default:(0,o.k6)((()=>[(0,o.bF)(c)])),_:1})])),_:1},8,["onClick"])])),_:1}),(0,o.bF)(m,{span:6},{default:(0,o.k6)((()=>[(0,o.bF)(f,{action:"#","auto-upload":!1,"on-change":l.importTasks},{default:(0,o.k6)((()=>[(0,o.bF)(n,{type:"primary"},{default:(0,o.k6)((()=>[(0,o.eW)(" 导入任务 "),(0,o.bF)(h,null,{default:(0,o.k6)((()=>[(0,o.bF)(p)])),_:1})])),_:1})])),_:1},8,["on-change"])])),_:1})])),_:1}),(0,o.bF)(n,{type:"danger",onClick:e[0]||(e[0]=t=>i.dialogVisible=!0)},{default:(0,o.k6)((()=>[(0,o.eW)("清除已完成任务")])),_:1}),(0,o.bF)(b,{modelValue:i.dialogVisible,"onUpdate:modelValue":e[2]||(e[2]=t=>i.dialogVisible=t),title:"提示",width:"500"},{footer:(0,o.k6)((()=>[(0,o.Lk)("div",u,[(0,o.bF)(n,{onClick:e[1]||(e[1]=t=>i.dialogVisible=!1)},{default:(0,o.k6)((()=>[(0,o.eW)("取消")])),_:1}),(0,o.bF)(n,{type:"primary",onClick:l.clearCompleted},{default:(0,o.k6)((()=>[(0,o.eW)(" 确定 ")])),_:1},8,["onClick"])])])),default:(0,o.k6)((()=>[k])),_:1},8,["modelValue"]),(0,o.bF)(g,{tasks:i.tasks,onAddTask:l.addTask},null,8,["tasks","onAddTask"]),(0,o.bF)(D,{accordion:""},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.tasks,((t,s)=>((0,o.uX)(),(0,o.Wv)(C,{key:s,title:s},{default:(0,o.k6)((()=>[(0,o.bF)(w,{height:"400px"},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(t,((t,e)=>((0,o.uX)(),(0,o.Wv)(y,{key:e,task:t,onCompleteTask:l.completeTask,onDeleteTask:l.deleteTask,onOpenEditTask:l.openEditTask},null,8,["task","onCompleteTask","onDeleteTask","onOpenEditTask"])))),128))])),_:2},1024),(0,o.bF)(v,{tasks:t},null,8,["tasks"]),(0,o.bF)(F,{modelValue:i.editTaskVisible,"onUpdate:modelValue":e[3]||(e[3]=t=>i.editTaskVisible=t),tasks:i.tasks,editTaskId:i.editTaskId,editTaskVisible:i.editTaskVisible,onEditTask:l.editTask},null,8,["modelValue","tasks","editTaskId","editTaskVisible","onEditTask"])])),_:2},1032,["title"])))),128))])),_:1}),(0,o.bF)(v,{tasks:i.tasks},null,8,["tasks"]),(0,o.bF)(_,{tasks:i.tasks},null,8,["tasks"])])}s(4114),s(4603),s(7566),s(8721);const c={class:"progress"};function h(t,e,s,a,i,l){const n=(0,o.g2)("el-statistic"),d=(0,o.g2)("el-col"),r=(0,o.g2)("el-row"),k=(0,o.g2)("el-progress"),u=(0,o.g2)("el-card");return(0,o.uX)(),(0,o.Wv)(u,{class:"summary",shadow:"hover"},{default:(0,o.k6)((()=>[(0,o.bF)(r,null,{default:(0,o.k6)((()=>[(0,o.bF)(d,{span:12},{default:(0,o.k6)((()=>[(0,o.bF)(n,{value:this.taskNumber,title:"总任务数"},null,8,["value"])])),_:1}),(0,o.bF)(d,{span:12},{default:(0,o.k6)((()=>[(0,o.bF)(n,{value:this.allTime,title:"总时间",suffix:"分钟"},null,8,["value"])])),_:1}),(0,o.bF)(d,{span:12},{default:(0,o.k6)((()=>[(0,o.bF)(n,{value:this.completedTaskNumber,title:"已完成任务数"},null,8,["value"])])),_:1}),(0,o.bF)(d,{span:12},{default:(0,o.k6)((()=>[(0,o.bF)(n,{value:this.completedTime,title:"已完成时间",suffix:"分钟"},null,8,["value"])])),_:1}),(0,o.bF)(d,{span:12},{default:(0,o.k6)((()=>[(0,o.bF)(n,{value:this.showFirstTaskAddTime,title:"首次添加任务时间"},null,8,["value"])])),_:1}),(0,o.bF)(d,{span:12},{default:(0,o.k6)((()=>[(0,o.bF)(n,{value:this.predictFinishTime,title:"预计完成时间"},null,8,["value"])])),_:1})])),_:1}),(0,o.Lk)("div",c,[(0,o.bF)(k,{"text-inside":!0,percentage:this.completedPercentage,"stroke-width":20},null,8,["percentage"])])])),_:1})}var p={props:{tasks:Object},data(){return{taskNumber:0,allTime:0,completedTaskNumber:0,completedTime:0,completedPercentage:0,firstTaskAddTime:"",showFirstTaskAddTime:"",predictFinishTime:""}},watch:{tasks:{handler:"calculateTaskSummary",deep:!0,immediate:!0}},methods:{calculateTaskSummary(){let t=0,e=0,s=0,a=0;if(Array.isArray(this.tasks))for(let l of this.tasks)t++,e+=l.duration,l.isCompleted&&(s++,a+=l.duration),(!this.firstTaskAddTime||l.addTaskTime<this.firstTaskAddTime)&&(this.firstTaskAddTime=l.addTaskTime);else for(let l in this.tasks)for(let i of this.tasks[l])t++,e+=i.duration,i.isCompleted&&(s++,a+=i.duration),(!this.firstTaskAddTime||i.addTaskTime<this.firstTaskAddTime)&&(this.firstTaskAddTime=i.addTaskTime);let i=a/e*100;i=Number.parseFloat(i.toFixed(2)),this.taskNumber=t,this.allTime=e,this.completedTaskNumber=s,this.completedTime=a,this.completedPercentage=i,this.showFirstTaskAddTime=new Date(this.firstTaskAddTime).toLocaleString(),this.predictFinishTime=this.calculatePredictFinishTime()},calculatePredictFinishTime(){const t=(new Date).getTime(),e=t+(this.allTime-this.completedTime)/this.completedTime*(t-this.firstTaskAddTime);return new Date(e).toLocaleString()}}},f=s(6262);const T=(0,f.A)(p,[["render",h]]);var b=T,g=s(33);const y={class:"date-info"},w=(0,o.Lk)("br",null,null,-1),v={key:0};function F(t,e,s,a,i,l){const n=(0,o.g2)("el-checkbox"),d=(0,o.g2)("el-col"),r=(0,o.g2)("Edit"),k=(0,o.g2)("el-icon"),u=(0,o.g2)("el-button"),m=(0,o.g2)("Delete"),c=(0,o.g2)("el-row"),h=(0,o.g2)("el-card");return(0,o.uX)(),(0,o.Wv)(h,{class:"card",shadow:"hover"},{default:(0,o.k6)((()=>[(0,o.bF)(c,{gutter:20},{default:(0,o.k6)((()=>[(0,o.bF)(d,{span:16},{default:(0,o.k6)((()=>[(0,o.bF)(n,{modelValue:i.isCompleted,"onUpdate:modelValue":e[0]||(e[0]=t=>i.isCompleted=t),size:"large"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",{id:"taskNameAndDuration",class:(0,g.C4)({completed:this.isCompleted})},(0,g.v_)(s.task.taskName)+" - "+(0,g.v_)(s.task.duration)+"分钟 ",3)])),_:1},8,["modelValue"])])),_:1}),(0,o.bF)(d,{span:4},{default:(0,o.k6)((()=>[(0,o.bF)(u,{class:"centered-button",type:"primary",onClick:e[1]||(e[1]=t=>l.openEditTask(this.task))},{default:(0,o.k6)((()=>[(0,o.bF)(k,null,{default:(0,o.k6)((()=>[(0,o.bF)(r)])),_:1})])),_:1})])),_:1}),(0,o.bF)(d,{span:4},{default:(0,o.k6)((()=>[(0,o.bF)(u,{class:"centered-button",type:"danger",onClick:e[2]||(e[2]=t=>l.deleteTask(this.task))},{default:(0,o.k6)((()=>[(0,o.bF)(k,null,{default:(0,o.k6)((()=>[(0,o.bF)(m)])),_:1})])),_:1})])),_:1})])),_:1}),(0,o.bF)(c,null,{default:(0,o.k6)((()=>[(0,o.bF)(d,{span:8,offset:16},{default:(0,o.k6)((()=>[(0,o.Lk)("div",y,[(0,o.Lk)("span",null,"添加时间: "+(0,g.v_)(new Date(this.task.addTaskTime).toLocaleString()),1),w,this.task.isCompleted?((0,o.uX)(),(0,o.CE)("span",v,"完成时间: "+(0,g.v_)(new Date(this.task.completeTaskTime).toLocaleString()),1)):(0,o.Q3)("",!0)])])),_:1})])),_:1})])),_:1})}var C={components:{Edit:l.Edit,Delete:l.Delete},data(){return{isCompleted:this.task.isCompleted}},watch:{isCompleted(){this.$emit("complete-task",this.task,this.isCompleted)}},props:{task:Object},methods:{openEditTask(t){this.$emit("open-edit-task",t)},deleteTask(t){this.$emit("delete-task",t)}}};const D=(0,f.A)(C,[["render",F]]);var _=D;const V={class:"input-group"};function S(t,e,s,i,l,n){const d=(0,o.g2)("el-option"),r=(0,o.g2)("el-select"),k=(0,o.g2)("el-input"),u=(0,o.g2)("el-button");return(0,o.uX)(),(0,o.CE)("div",V,[(0,o.bF)(r,{modelValue:l.taskGroup,"onUpdate:modelValue":e[0]||(e[0]=t=>l.taskGroup=t),filterable:"","allow-create":"","default-first-option":"",placeholder:"选择/输入任务组"},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.tasks,((t,e)=>((0,o.uX)(),(0,o.Wv)(d,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),(0,o.bF)(k,{modelValue:l.taskName,"onUpdate:modelValue":e[1]||(e[1]=t=>l.taskName=t),placeholder:"输入任务名"},null,8,["modelValue"]),(0,o.bF)(k,{onKeyup:(0,a.jR)(n.addTask,["enter"]),modelValue:l.duration,"onUpdate:modelValue":e[2]||(e[2]=t=>l.duration=t),modelModifiers:{number:!0},type:"number",placeholder:"输入任务持续时间"},null,8,["onKeyup","modelValue"]),(0,o.bF)(u,{type:"primary",onClick:n.addTask},{default:(0,o.k6)((()=>[(0,o.eW)("添加任务")])),_:1},8,["onClick"])])}var O=s(163),I={data(){return{taskGroup:"",taskName:"",duration:0,isCompleted:!1,addTaskTime:0,completeTaskTime:0}},props:{tasks:Object},methods:{addTask(){let t={taskId:Math.random().toString(36).substring(2,10),taskName:this.taskName,duration:this.duration,isCompleted:this.isCompleted,addTaskTime:(new Date).getTime(),completeTaskTime:0};if(this.tasks[this.taskGroup])for(let e of this.tasks[this.taskGroup])if(e.taskName===this.taskName)return void(0,O.nk)({message:"任务名已存在",type:"error"});this.$emit("add-task",this.taskGroup,t),(0,O.nk)({message:"添加成功",type:"success"})}}};const N=(0,f.A)(I,[["render",S]]);var A=N;function E(t,e,s,i,l,n){const d=(0,o.g2)("el-input"),r=(0,o.g2)("el-button"),k=(0,o.g2)("el-dialog");return(0,o.uX)(),(0,o.Wv)(k,{title:"编辑任务",class:"input-group",width:"500"},{default:(0,o.k6)((()=>[(0,o.bF)(d,{modelValue:l.taskGroup,"onUpdate:modelValue":e[0]||(e[0]=t=>l.taskGroup=t),placeholder:"输入任务组"},null,8,["modelValue"]),(0,o.bF)(d,{modelValue:l.taskName,"onUpdate:modelValue":e[1]||(e[1]=t=>l.taskName=t),placeholder:"输入待完成任务"},null,8,["modelValue"]),(0,o.bF)(d,{onKeyup:(0,a.jR)(n.editTask,["enter"]),modelValue:l.duration,"onUpdate:modelValue":e[2]||(e[2]=t=>l.duration=t),modelModifiers:{number:!0},type:"number",placeholder:"输入任务持续时间"},null,8,["onKeyup","modelValue"]),(0,o.bF)(r,{type:"primary",onClick:n.editTask},{default:(0,o.k6)((()=>[(0,o.eW)("编辑任务")])),_:1},8,["onClick"])])),_:1})}var x={data(){return{taskGroup:"",taskName:"",duration:0,isCompleted:!1,addTaskTime:0,completeTaskTime:0}},props:{tasks:Object,editTaskId:String,editTaskVisible:Boolean},watch:{editTaskVisible(){this.editTaskVisible&&this.getTask()}},methods:{getTask(){for(let t in this.tasks)for(let e of this.tasks[t])e.taskId===this.editTaskId&&(this.taskGroup=t,this.taskName=e.taskName,this.duration=e.duration,this.isCompleted=e.isCompleted,this.addTaskTime=e.addTaskTime,this.completeTaskTime=e.completeTaskTime)},editTask(){let t={taskId:this.editTaskId,taskName:this.taskName,duration:this.duration,isCompleted:this.isCompleted,addTaskTime:this.addTaskTime,completeTaskTime:this.completeTaskTime};this.$emit("edit-task",this.taskGroup,t),(0,O.nk)({message:"编辑成功",type:"success"})}}};const L=(0,f.A)(x,[["render",E]]);var j=L;const W=(0,o.Lk)("div",{id:"calendar",style:{width:"800px",height:"200px"}},null,-1),G={class:"slider-demo-block"},X=(0,o.Lk)("div",{style:{display:"flex","justify-content":"space-between"}},[(0,o.Lk)("div",{id:"hourlyChart",style:{width:"45%",height:"400px"}}),(0,o.Lk)("div",{id:"weeklyChart",style:{width:"45%",height:"400px"}})],-1),M=(0,o.Lk)("div",{id:"main",style:{width:"600px",height:"400px"}},null,-1);function $(t,e,s,a,i,l){const n=(0,o.g2)("el-scrollbar"),d=(0,o.g2)("el-slider");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(n,{"wrap-class":"scrollbar-wrapper",style:{overflow:"auto"}},{default:(0,o.k6)((()=>[W])),_:1}),(0,o.Lk)("div",null,[(0,o.Lk)("div",G,[(0,o.bF)(d,{modelValue:i.selectedGrouping,"onUpdate:modelValue":e[0]||(e[0]=t=>i.selectedGrouping=t),min:3,max:12,marks:i.marks,onChange:l.handleChange},null,8,["modelValue","marks","onChange"])]),X]),M],64)}var B=s(3680),U={components:{},props:{tasks:Object},data(){return{dailyDuration:{},hourlyDuration:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],weeklyDuration:[0,0,0,0,0,0,0],selectedGrouping:"3",step:[1,2,3,4,6,8,12],marks:{3:"3",4:"4",6:"6",8:"8",12:"12"}}},watch:{tasks:{handler:"drawEcharts",deep:!0},selectedGrouping(t){this.drawHourlyEcharts(t)}},methods:{handleChange(t){const e=[3,4,6,8,12],s=e.reduce(((e,s)=>Math.abs(s-t)<Math.abs(e-t)?s:e));this.selectedGrouping=s},calculateDailyCompleteTaskDuration(){let t=new Date(2025,1,1),e=new Date(2024,1,1);for(let a in this.tasks)for(let s of this.tasks[a])if(s.isCompleted){const a=new Date(s.completeTaskTime);a<t&&(t=a),a>e&&(e=a)}t.setHours(0,0,0,0),e.setHours(0,0,0,0);let s={};for(let a=t;a<=e;a.setDate(a.getDate()+1)){const t=a.getFullYear(),e=a.getMonth()+1,i=a.getDate(),l=`${t}-${e}-${i}`;s[l]=0}for(let a in this.tasks)for(let t of this.tasks[a])if(t.isCompleted){const e=new Date(t.completeTaskTime),a=e.getFullYear(),i=e.getMonth()+1,l=e.getDate(),o=`${a}-${i}-${l}`;s[o]+=t.duration}return s},drawEcharts(){this.dailyDuration=this.calculateDailyCompleteTaskDuration(),this.drawLineEcharts(this.dailyDuration),this.drawCalenderEcharts(this.dailyDuration),this.drawHourlyEcharts(),this.drawWeeklyECharts()},drawLineEcharts(){const t=B.Ts(document.getElementById("main")),e={title:{text:"每日完成任务时间"},tooltip:{trigger:"axis"},legend:{data:["时间"]},grid:{left:"10%",right:"5%",bottom:"20%",containLabel:!1},toolbox:{feature:{saveAsImage:{},magicType:{type:["line","bar"]}}},xAxis:{type:"category",boundaryGap:!1,data:Object.keys(this.dailyDuration),axisTick:{alignWithLabel:!0}},yAxis:{type:"value"},dataZoom:[{type:"slider",show:!0,xAxisIndex:[0],start:1,end:100}],series:[{name:"时间",type:"line",stack:"总量",data:Object.values(this.dailyDuration)}]};t.setOption(e)},drawCalenderEcharts(){const t=B.Ts(document.getElementById("calendar")),e={tooltip:{position:"top"},visualMap:{min:0,max:720,show:!1,inRange:{color:["#ebedf0","#c6e48b","#7bc96f","#239a3b","#196127"]}},calendar:{top:90,left:"5%",right:"5%",cellSize:[14,14],range:Object.keys(this.dailyDuration)[0].split("-")[0],itemStyle:{boradColor:"#fff",borderWidth:2},yearLabel:{show:!1},dayLabel:{firstDay:1,nameMap:"cn"},monthLabel:{nameMap:"cn",margin:10},splitLine:{show:!0,lineStyle:{color:"#000",width:.5,type:"solid"}}},series:{type:"heatmap",coordinateSystem:"calendar",data:Object.keys(this.dailyDuration).map((t=>[t,this.dailyDuration[t]]))}};t.setOption(e)},drawHourlyEcharts(){const t=B.Ts(document.getElementById("hourlyChart"));this.hourlyDuration=this.hourlyDuration.map((()=>0));for(let i in this.tasks)for(let t of this.tasks[i])if(t.isCompleted){const e=new Date(t.completeTaskTime),s=e.getHours();this.hourlyDuration[s]+=t.duration}const e={};for(let i in this.hourlyDuration){const t=Math.floor(parseInt(i)/parseInt(this.selectedGrouping));e[t]||(e[t]=0),e[t]+=this.hourlyDuration[i]}const s=Object.entries(e).map((([t,e])=>({name:`${t*this.selectedGrouping}:00 - ${(+t+1)*this.selectedGrouping}:00`,value:e}))),a={tooltip:{trigger:"item"},legend:{orient:"horizontal",bottom:"bottom"},series:[{name:"Daily Statistic",type:"pie",radius:"50%",data:s,label:{show:!0,position:"inside"},emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};t.setOption(a)},drawWeeklyECharts(){const t=B.Ts(document.getElementById("weeklyChart"));this.weeklyDuration=this.weeklyDuration.map((()=>0));for(let a in this.tasks)for(let t of this.tasks[a])if(t.isCompleted){const e=new Date(t.completeTaskTime),s=e.getDay();this.weeklyDuration[s]+=t.duration}const e=Object.entries(this.weeklyDuration).map((([t,e])=>({name:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][t],value:e}))),s={tooltip:{trigger:"item"},legend:{orient:"horizontal",bottom:"bottom"},series:[{name:"Weekly Statistic",type:"pie",radius:"50%",data:e,label:{show:!0,position:"inside"},emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};t.setOption(s)}}};const J=(0,f.A)(U,[["render",$]]);var P=J,K={name:"App",components:{TaskSummary:b,TaskInfo:_,AddTask:A,EditTask:j,TaskStat:P,Download:l.Download,DocumentAdd:l.DocumentAdd},data(){return{dialogVisible:!1,editTaskVisible:!1,editTaskId:"",tasks:{}}},computed:{},mounted(){const t=localStorage.getItem("tasks");t&&(this.tasks=JSON.parse(t))},methods:{sortTasksByName(){for(let t in this.tasks)this.tasks[t].sort(((t,e)=>{const s=parseInt(t.taskName.match(/\d+/)[0]),a=parseInt(e.taskName.match(/\d+/)[0]);return s<a?-1:s>a?1:t.taskName.localeCompare(e.taskName)}));localStorage.setItem("tasks",JSON.stringify(this.tasks))},sortTasksByAddTime(){for(let t in this.tasks)this.tasks[t].sort(((t,e)=>t.addTaskTime-e.addTaskTime));localStorage.setItem("tasks",JSON.stringify(this.tasks))},addTask(t,e){this.tasks.hasOwnProperty(t)?this.tasks[t].push(e):this.tasks[t]=[e],localStorage.setItem("tasks",JSON.stringify(this.tasks))},openEditTask(t){this.editTaskId=t.taskId,this.editTaskVisible=!0},editTask(t,e){for(let s in this.tasks){for(let a=0;a<this.tasks[s].length;a++)this.tasks[s][a].taskId===e.taskId&&(s===t?this.tasks[s][a]=e:(this.tasks[s]=this.tasks[s].filter((t=>t.taskId!==e.taskId)),0===this.tasks[s].length&&delete this.tasks[s],this.tasks.hasOwnProperty(t)?this.tasks[t].push(e):this.tasks[t]=[e]));localStorage.setItem("tasks",JSON.stringify(this.tasks))}this.editTaskVisible=!1},changeVisible(){this.dialogVisible=!this.dialogVisible},deleteTask(t){for(let e in this.tasks)this.tasks[e]=this.tasks[e].filter((e=>e.taskId!==t.taskId));for(let e in this.tasks)0===this.tasks[e].length&&delete this.tasks[e];localStorage.setItem("tasks",JSON.stringify(this.tasks))},completeTask(t,e){for(let s in this.tasks)this.tasks[s]=this.tasks[s].map((s=>(s.taskId===t.taskId&&(s.isCompleted=e,s.isCompleted?s.completeTaskTime=(new Date).getTime():s.completeTaskTime=0),s)));localStorage.setItem("tasks",JSON.stringify(this.tasks))},clearCompleted(){this.changeVisible();for(let t in this.tasks)this.tasks[t]=this.tasks[t].filter((t=>!t.isCompleted));for(let t in this.tasks)0===this.tasks[t].length&&delete this.tasks[t];localStorage.setItem("tasks",JSON.stringify(this.tasks))},exportTasks(){const t=JSON.stringify(this.tasks),e=new Blob([t],{type:"application/json"}),s=URL.createObjectURL(e),a=document.createElement("a");a.href=s,a.download="tasks.json",document.body.appendChild(a),a.click(),document.body.removeChild(a)},importTasks(t){if(t){const e=new FileReader;e.onload=()=>{const t=JSON.parse(e.result);this.tasks=t,localStorage.setItem("tasks",JSON.stringify(this.tasks))},e.readAsText(t.raw)}}}};const H=(0,f.A)(K,[["render",m],["__scopeId","data-v-c63c391a"]]);var R=H,z=s(6278),Q=new z.Ay.Store({state:{count:0},mutations:{increment(t){t.count++}}});const Y=(0,a.Ef)(R).use(Q).use(i.A).mount("#app");for(const[Z,q]of Object.entries(l))Y.component(Z,q)}},e={};function s(a){var i=e[a];if(void 0!==i)return i.exports;var l=e[a]={exports:{}};return t[a].call(l.exports,l,l.exports,s),l.exports}s.m=t,function(){var t=[];s.O=function(e,a,i,l){if(!a){var o=1/0;for(k=0;k<t.length;k++){a=t[k][0],i=t[k][1],l=t[k][2];for(var n=!0,d=0;d<a.length;d++)(!1&l||o>=l)&&Object.keys(s.O).every((function(t){return s.O[t](a[d])}))?a.splice(d--,1):(n=!1,l<o&&(o=l));if(n){t.splice(k--,1);var r=i();void 0!==r&&(e=r)}}return e}l=l||0;for(var k=t.length;k>0&&t[k-1][2]>l;k--)t[k]=t[k-1];t[k]=[a,i,l]}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,l,o=a[0],n=a[1],d=a[2],r=0;if(o.some((function(e){return 0!==t[e]}))){for(i in n)s.o(n,i)&&(s.m[i]=n[i]);if(d)var k=d(s)}for(e&&e(a);r<o.length;r++)l=o[r],s.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return s.O(k)},a=self["webpackChunktimer"]=self["webpackChunktimer"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[504],(function(){return s(812)}));a=s.O(a)})();
//# sourceMappingURL=app.40c3bea0.js.map