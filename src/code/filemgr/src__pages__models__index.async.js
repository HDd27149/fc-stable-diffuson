"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[974],{1149:function(fu,j,u){u.r(j),u.d(j,{default:function(){return cu}});var R=u(15009),E=u.n(R),T=u(99289),y=u.n(T),z=u(6154),p="http://server-ai-backend-agwwspzdwb.cn-hangzhou.devsapp.net";function P(){return D.apply(this,arguments)}function D(){return D=y()(E()().mark(function s(){var n;return E()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,z.Z.get("".concat(p,"/oss_models/list"));case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}},s)})),D.apply(this,arguments)}var Z=u(85504),G=u(3991),g=u(42075),H=u(99138),U=u(26196),i=u(62435),V=u(68996),K=u(5574),S=u.n(K),Q=u(36306),J=u(21687),L=u(71230),W=u(15746),X=u(92380),M=u(4393),Y=u(43384),b=u(51904),k=u(19632),w=u.n(k),q=u(97857),$=u.n(q),_=u(96695),I=u.n(_),uu=u(43331),tu=u(53371),nu=u(73532),eu=u(33009),N=u(77794),au=u(63232),ru=u(79531),su=u(68797),lu=u(50942),t=u(86074);function ou(s){var n=s.model,a=i.useContext(Z._),r=a.info,C=nu.Z(),F=S()(C,2),v=F[0],l=F[1],f=l.set,x=l.get;i.useEffect(function(){var o=I()(n.files),e;try{for(o.s();!(e=o.n()).done;){var B=e.value;f(B.filename,!0)}}catch(c){o.e(c)}finally{o.f()}},[n.files]);var d=i.useRef();return(0,t.jsx)(su.Q,{setVisibleCallback:function(e){return d.current=e},modalProps:{title:"\u6587\u4EF6\u4E0B\u8F7D\u786E\u8BA4",okButtonProps:{type:"primary"},okText:"\u4E0B\u8F7D\u9009\u4E2D\u7684\u6A21\u578B",cancelText:"\u53D6\u6D88\u4E0B\u8F7D",onOk:function(){var e=I()(n.files),B;try{var c=function(){var m=B.value;if(x(m.filename)){var vu=m.ossname?"".concat(p,"/oss_models/url/").concat((r==null?void 0:r.region)||"public","/").concat(m.ossname):m.url,O=new uu.tw(vu,m.filename);O.run(),a.setCtx(function(A){return $()($()({},A),{},{tasks:[].concat(w()((A==null?void 0:A.tasks)||[]),[O])})}),eu.Z.success({message:"\u5F00\u59CB\u4E0B\u8F7D ".concat((0,tu.Us)(m.filename))})}d.current&&d.current(!1)};for(e.s();!(B=e.n()).done;)c()}catch(h){e.e(h)}finally{e.f()}}},buttonProps:{children:"\u4E0B\u8F7D\u6A21\u578B"},children:(0,t.jsx)(N.Z,{header:(0,t.jsxs)("span",{style:{color:"red"},children:["\u6A21\u578B\u5C06\u4F1A\u88AB\u4E0B\u8F7D\u81F3 ",(0,t.jsx)(lu.rU,{to:"files",children:"\u6587\u4EF6\u7BA1\u7406"}),"\uFF08NAS\uFF09"," ","\u4E2D\uFF0C\u8FD9\u4F1A\u4EA7\u751F\u4E00\u5B9A\u7684\u5B58\u50A8\u8D39\u7528\uFF0C\u5177\u4F53\u8BA1\u8D39\u89C1"," ",(0,t.jsx)("a",{href:"https://nasnext.console.aliyun.com",target:"_blank",rel:"noreferrer",children:"\u963F\u91CC\u4E91\u6587\u4EF6\u5B58\u50A8 NAS"})]}),dataSource:n.files,renderItem:function(e){return(0,t.jsx)(N.Z.Item,{children:(0,t.jsxs)(g.Z.Compact,{style:{width:"100%"},children:[(0,t.jsx)(au.Z,{checked:!!x(e.filename),onChange:function(c){var h;return f(e.filename,!!(c!=null&&(h=c.target)!==null&&h!==void 0&&h.checked))},style:{marginRight:12}}),(0,t.jsx)(ru.Z,{value:e.filename,disabled:!0,style:{width:"100%"}})]})})}})})}function du(s){var n=s.model;return(0,t.jsx)(M.Z,{actions:[(0,t.jsx)(ou,{model:n})],cover:n.image&&(0,t.jsx)(Y.Z,{src:n.image}),children:(0,t.jsxs)(g.Z,{direction:"vertical",style:{width:"100%"},children:[(0,t.jsx)(M.Z.Meta,{title:n.name,description:(0,X.t)(n.size)}),(0,t.jsx)(g.Z,{children:n.tags.map(function(a){return(0,t.jsx)(b.Z,{children:a},a)})})]})})}function iu(s){var n=s.models,a=n===void 0?[]:n,r=s.loading,C=i.useState(3),F=S()(C,2),v=F[0],l=F[1],f=Q.Z(document.body);i.useEffect(function(){f&&l(Math.max(1,Math.round(f.width/400)))},[f]);var x=i.useMemo(function(){for(var d=[],o=0;o<v;o++)d.push([]);if(a)for(var e=0;e<(a==null?void 0:a.length);e++)d[e%v].push(a[e]);return d},[v,a]);return(0,t.jsx)(J.Z,{active:!0,title:!0,loading:r,children:(0,t.jsx)("div",{style:{display:"flex",alignItems:"flex-start"},children:x.map(function(d,o){return(0,t.jsx)(L.Z,{style:{width:"".concat(1/v*100,"%")},children:d.map(function(e){return(0,t.jsx)(W.Z,{span:24,style:{padding:20},children:(0,t.jsx)(du,{model:e})})})})})})})}function Fu(){var s,n=G.Z(y()(E()().mark(function F(){return E()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,P();case 2:return l.abrupt("return",l.sent);case 3:case"end":return l.stop()}},F)}))),a=n.data,r=n.loading,C=i.useContext(Z._);return(0,t.jsx)(V.r,{disabled:!((s=C.info)!==null&&s!==void 0&&s.withNas),message:"\u60A8\u672A\u6302\u8F7D NAS\uFF0C\u65E0\u6CD5\u4F7F\u7528\u6A21\u578B\u4E0B\u8F7D\u529F\u80FD\u3002",children:(0,t.jsxs)(g.Z,{direction:"vertical",style:{width:"100%",padding:20},children:[(0,t.jsx)(H.Z,{message:"\u6A21\u578B\u5E93\u4F7F\u7528\u8BF4\u660E",description:(0,t.jsxs)(U.Z.Paragraph,{children:["\u6A21\u578B\u5E93\u529F\u80FD\u7531\u963F\u91CC\u4E91 OSS \u63D0\u4F9B\uFF0C\u6A21\u578B/\u6570\u636E\u96C6/\u6587\u4EF6\u5747\u6765\u6E90\u4E8E\u7B2C\u4E09\u65B9\uFF0C\u963F\u91CC\u4E91\u4E0D\u4FDD\u8BC1\u5408\u89C4\u6027\uFF0C\u8BF7\u60A8\u5728\u4F7F\u7528\u524D\u614E\u91CD\u8003\u8651\u3002\u6B64\u5916\uFF0C\u60A8\u8FD8\u5E94\u4E25\u683C\u9075\u5B88\u6CD5\u5F8B\u6CD5\u89C4\u3001\u7B2C\u4E09\u65B9\u8981\u6C42\u7B49\uFF0C\u7279\u522B\u662F\u4E0D\u5F97\u5229\u7528\u672C\u670D\u52A1\u4ECE\u4E8B\u8FDD\u6CD5\u8FDD\u89C4\u884C\u4E3A\uFF08\u5982\u4E0A\u4F20/\u8F93\u5165/\u751F\u6210/\u4E0B\u8F7D/\u4F7F\u7528\u8FDD\u6CD5\u6216\u4E0D\u826F\u4FE1\u606F\u7B49\uFF09\u3002\u5177\u4F53\u8BE6\u89C1"," ",(0,t.jsx)("a",{href:"http://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud201912232313_55403.html",target:"_blank",rel:"noreferrer",children:"\u300A\u5BF9\u8C61\u5B58\u50A8\uFF08OSS\uFF09\u5BF9\u8C61\u5B58\u50A8\uFF08OSS\uFF09\u670D\u52A1\u6761\u6B3E\u300B"})," ","\u53CA\u9875\u9762\u5C55\u793A\u4FE1\u606F\u7B49\u3002\u5982\u60A8\u53D1\u73B0\u4EFB\u4F55\u6A21\u578B/\u6570\u636E\u96C6/\u6587\u4EF6\u7B49\u6709\u95EE\u9898\uFF0C\u8BF7\u53CA\u65F6\u8054\u7CFB\u6211\u4EEC\u5904\u7406\u3002",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)("a",{href:"https://www.yuque.com/publicmodel/kaq1i2/dds7alalpgv6fsbv",target:"_blank",rel:"noreferrer",children:"\u76F8\u5173\u6A21\u578B\u4ECB\u7ECD"})]})}),(0,t.jsx)(iu,{models:a,loading:r})]})})}function cu(){return(0,t.jsx)(Fu,{})}}}]);
