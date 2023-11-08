"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[196],{4196:(j,g,a)=>{a.r(g),a.d(g,{BackOfficeModule:()=>J});var l=a(6895),v=a(1674),u=a(9993),e=a(8256),p=a(4004),f=a(8505),h=a(384);function i(t){return()=>(0,e.f3M)(h.e).user$.pipe((0,p.U)(o=>Boolean(o&&t.includes(o.role))),(0,f.b)(o=>!1===o&&alert("Acceso Denegado")))}var C=a(4671),M=a(4482),O=a(5403);function w(t,o){return t===o}let U=(()=>{class t{constructor(n,r,s){this.authService=n,this.viewContainerRef=r,this.templateRef=s}ngOnInit(){this.sub=this.authService.user$.pipe((0,p.U)(n=>Boolean(n&&this.allowedRoles?.includes(n.role))),function y(t,o=C.y){return t=t??w,(0,M.e)((n,r)=>{let s,c=!0;n.subscribe((0,O.x)(r,d=>{const m=o(d);(c||!t(s,m))&&(c=!1,s=m,r.next(d))}))})}(),(0,f.b)(n=>n?this.viewContainerRef.createEmbeddedView(this.templateRef):this.viewContainerRef.clear())).subscribe()}ngOnDestroy(){this.sub?.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(h.e),e.Y36(e.s_b),e.Y36(e.Rgc))},t.\u0275dir=e.lG2({type:t,selectors:[["","akoShowForRoles",""]],inputs:{allowedRoles:["akoShowForRoles","allowedRoles"]}}),t})();function b(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"li",7),e.NdJ("click",function(){const c=e.CHM(n).$implicit,d=e.oxw(2);return e.KtG(d.changeUser(c))}),e._uU(1),e.TgZ(2,"small"),e._uU(3),e.qZA()()}if(2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",n.username," "),e.xp6(2),e.Oqu(n.role)}}function R(t,o){if(1&t&&(e.TgZ(0,"ul"),e.YNc(1,b,4,2,"li",6),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",n.users)}}let Z=(()=>{class t{constructor(){this.currentUser=null,this.userChanged=new e.vpe,this.showList=!1}ngOnInit(){}changeUser(n){this.userChanged.emit(n)}toggleList(){this.showList=!this.showList}hideList(){this.showList=!1}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ako-user-selector"]],hostAttrs:["tabindex","0"],hostBindings:function(n,r){1&n&&e.NdJ("click",function(){return r.toggleList()})("blur",function(){return r.hideList()})},inputs:{users:"users",currentUser:"currentUser"},outputs:{userChanged:"userChanged"},decls:9,vars:3,consts:[[1,"info"],["src","/assets/icons/account.svg","aria-hidden","true",1,"account"],[1,"username"],[1,"position"],["src","/assets/icons/down_chevron.svg","aria-hidden","true",1,"chevron"],[4,"ngIf"],["role","button",3,"click",4,"ngFor","ngForOf"],["role","button",3,"click"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.TgZ(2,"p",2),e._uU(3),e.qZA(),e.TgZ(4,"p",3)(5,"small"),e._uU(6),e.qZA()(),e._UZ(7,"img",4),e.qZA(),e.YNc(8,R,2,1,"ul",5)),2&n&&(e.xp6(3),e.Oqu(null==r.currentUser?null:r.currentUser.username),e.xp6(3),e.Oqu(null==r.currentUser?null:r.currentUser.role),e.xp6(2),e.Q6J("ngIf",r.showList))},dependencies:[l.sg,l.O5],styles:['[_nghost-%COMP%]{display:flex;align-items:center;position:relative}[_nghost-%COMP%]:hover{background-color:var(--primary-color-high)}.info[_ngcontent-%COMP%]{display:grid;grid-template:"img username chevron" auto "img position chevron" auto/auto auto auto;place-items:center start;color:#fff;padding:0 var(--base-separation)}.account[_ngcontent-%COMP%]{grid-area:img;width:2rem;height:auto;margin-right:var(--half-separation);-webkit-user-select:none;user-select:none}p[_ngcontent-%COMP%]{font-size:1rem;line-height:1rem}.username[_ngcontent-%COMP%]{text-transform:capitalize;grid-area:username}.position[_ngcontent-%COMP%]{grid-area:position;text-transform:capitalize}small[_ngcontent-%COMP%]{font-size:.7em;opacity:.8}.chevron[_ngcontent-%COMP%]{margin-left:var(--half-separation);grid-area:chevron;width:1.5rem;height:auto;-webkit-user-select:none;user-select:none}ul[_ngcontent-%COMP%]{position:absolute;top:100%;list-style:none;z-index:1;width:100%;text-transform:capitalize}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;flex-direction:column;background-color:var(--primary-color-high);color:#fff;padding:var(--half-separation) var(--base-separation);white-space:nowrap;text-overflow:ellipsis;overflow:hidden}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:var(--primary-color)}'],changeDetection:0}),t})();function k(t,o){1&t&&(e.TgZ(0,"a",10),e._uU(1,"Pedidos"),e.qZA())}function x(t,o){1&t&&(e.TgZ(0,"a",11),e._uU(1,"Inventario"),e.qZA())}function S(t,o){1&t&&(e.TgZ(0,"a",12),e._uU(1,"Contabilidad"),e.qZA())}function P(t,o){1&t&&(e.TgZ(0,"a",13),e._uU(1,"Web Zarca"),e.qZA())}const A=function(){return["Orders","Manager"]},T=function(){return["Inventory","Manager"]},_=function(){return["Accounting","Manager"]},L=function(){return["Manager"]};let F=(()=>{class t{constructor(n){this.authService=n,this.currentUser$=this.authService.user$,this.users=[{username:"bob",role:"Orders"},{username:"alice",role:"Inventory"},{username:"john",role:"Accounting"},{username:"sarah",role:"Manager"},{username:"pedro",role:"Manager"},{username:"carlos",role:"Manager"}]}loginAsUser(n){this.authService.login({username:n.username,password:"1234"}).subscribe()}logout(){this.authService.logout()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(h.e))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ako-header"]],decls:14,vars:12,consts:[[1,"wrapper"],["id","logo","routerLink","/dashboard"],["routerLink","/orders",4,"akoShowForRoles"],["routerLink","/inventory",4,"akoShowForRoles"],["routerLink","/accounting",4,"akoShowForRoles"],["routerLink","/zarca",4,"akoShowForRoles"],[1,"separator"],[3,"users","currentUser","userChanged"],[3,"click"],["src","/assets/icons/logout.svg","alt",""],["routerLink","/orders"],["routerLink","/inventory"],["routerLink","/accounting"],["routerLink","/zarca"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0)(1,"a",1),e._uU(2,"Back Roles"),e.qZA(),e.TgZ(3,"nav"),e.YNc(4,k,2,0,"a",2),e.YNc(5,x,2,0,"a",3),e.YNc(6,S,2,0,"a",4),e.YNc(7,P,2,0,"a",5),e.qZA(),e._UZ(8,"span",6),e.TgZ(9,"ako-user-selector",7),e.NdJ("userChanged",function(c){return r.loginAsUser(c)}),e.ALo(10,"async"),e.qZA(),e.TgZ(11,"button",8),e.NdJ("click",function(){return r.logout()}),e._UZ(12,"img",9),e._uU(13," Salir "),e.qZA()()),2&n&&(e.xp6(4),e.Q6J("akoShowForRoles",e.DdM(8,A)),e.xp6(1),e.Q6J("akoShowForRoles",e.DdM(9,T)),e.xp6(1),e.Q6J("akoShowForRoles",e.DdM(10,_)),e.xp6(1),e.Q6J("akoShowForRoles",e.DdM(11,L)),e.xp6(2),e.Q6J("users",r.users)("currentUser",e.lcZ(10,6,r.currentUser$)))},dependencies:[u.yS,U,Z,l.Ov],styles:["[_nghost-%COMP%]{display:flex;width:100%;justify-content:center;background-color:var(--primary-color)}.wrapper[_ngcontent-%COMP%]{display:flex;width:100%;max-width:1400px;justify-content:space-between;align-items:stretch}a[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{display:inline-flex;color:#fff;text-decoration:none;padding:0 var(--base-separation);line-height:3.75rem;border-radius:4px}a[_ngcontent-%COMP%]:hover, button[_ngcontent-%COMP%]:hover{background-color:var(--primary-color-high)}#logo[_ngcontent-%COMP%]{font-weight:600;font-size:1.1rem;margin-right:calc(var(--double-separation) * 2)}button[_ngcontent-%COMP%]{background:none;border:none;font-size:1rem;display:flex;align-items:center}button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:1.15rem;height:auto;margin-right:var(--half-separation)}.separator[_ngcontent-%COMP%]{margin:0 auto}"],changeDetection:0}),t})(),H=(()=>{class t{constructor(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ako-back-office-layout"]],decls:4,vars:0,consts:[["role","heading"],[1,"wrapper"]],template:function(n,r){1&n&&(e._UZ(0,"ako-header",0),e.TgZ(1,"main")(2,"div",1),e._UZ(3,"router-outlet"),e.qZA()())},dependencies:[u.lC,F],styles:["[_nghost-%COMP%]{display:grid;height:100vh;width:100vw;grid-template-rows:3.75rem auto}main[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:center;padding-top:var(--double-separation)}main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{display:flex;width:100%;max-width:1400px}"],changeDetection:0}),t})(),B=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ako-dashboard"]],decls:4,vars:0,template:function(n,r){1&n&&e._UZ(0,"div")(1,"div")(2,"div")(3,"div")},styles:['[_nghost-%COMP%]{display:grid;grid-template:"graph1 graph1 list" 3fr "graph2 graph3 list" 1.5fr/1.5fr 1.5fr 1fr;height:700px;width:100%;padding:0 var(--base-separation);gap:var(--base-separation)}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{border-radius:8px;background-color:#cdc4ed}div[_ngcontent-%COMP%]:nth-child(1){grid-area:graph1}div[_ngcontent-%COMP%]:nth-child(2){grid-area:graph2}div[_ngcontent-%COMP%]:nth-child(3){grid-area:graph3}div[_ngcontent-%COMP%]:nth-child(4){grid-area:list}'],changeDetection:0}),t})(),D=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ako-zarca"]],decls:2,vars:0,consts:[["href","https://www.zarca.es/"]],template:function(n,r){1&n&&(e.TgZ(0,"a",0),e._uU(1,"Acceso a la Web"),e.qZA())},changeDetection:0}),t})();const z=[{path:"",component:H,children:[{path:"dashboard",component:B},{path:"orders",canActivate:[i(["Orders","Manager"])],canLoad:[i(["Orders","Manager"])],loadChildren:()=>a.e(974).then(a.bind(a,3974)).then(t=>t.OrdersModule)},{path:"inventory",canActivate:[i(["Inventory","Manager"])],canLoad:[i(["Inventory","Manager"])],loadChildren:()=>a.e(266).then(a.bind(a,8266)).then(t=>t.InventoryModule)},{path:"accounting",canActivate:[i(["Accounting","Manager"])],canLoad:[i(["Accounting","Manager"])],loadChildren:()=>a.e(577).then(a.bind(a,7577)).then(t=>t.AccountingModule)},{path:"zarca",component:D}]}];let I=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild(z),u.Bz]}),t})(),J=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.ez,I,v.n]}),t})()}}]);