(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,n){},130:function(e,t,n){e.exports={friends:"Friends_friends__2u7Ry"}},136:function(e,t,n){e.exports=n(262)},141:function(e,t,n){},142:function(e,t,n){},21:function(e,t,n){e.exports={header:"Header_header__31HxQ",oneHeaderButton:"Header_oneHeaderButton__zLsQ1",allHeaderButton:"Header_allHeaderButton__1Li8L"}},23:function(e,t,n){e.exports={myPosts:"MyPosts_myPosts__2PcZL",imgAddPost:"MyPosts_imgAddPost__1CRsD",posts:"MyPosts_posts__3ugQg",addPost:"MyPosts_addPost__2jsNQ",headlineAddPost:"MyPosts_headlineAddPost__2WCZ2",nikNameAddPost:"MyPosts_nikNameAddPost__3WTZZ",inputArea:"MyPosts_inputArea__3fAEV"}},262:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(55),s=n.n(o),c=(n(141),n(142),n(21)),i=n.n(c),u=n(56),l=n(57);function m(){var e=Object(u.a)(["\n\n\nheight:48px;\nbackground-color:#7280CD; \nborder-radius:3px;\ntext-align: center;\nfont-size:20px;\n&.active {\n    background: red;\n  }\n\n  \n\n"]);return m=function(){return e},e}var f=l.a.div(m()),d=n(7),p=n(6),g=n(4),E=n(126),_=n.n(E).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"edcb0db2-390b-43d1-96c2-48a4199e92c2"}}),b=function(e){return _.get("profile/"+e)},v=function(e,t,n){return _.post("auth/login",{email:e,password:t,rememberMe:n})},P=function(){return _.post("auth/logout")},h=function(e){return _.get("users?count=24&page=".concat(e))},N=function(e){return _.post("follow/"+e)},S=function(e){return _.delete("follow/"+e)},I=function(e){return _.get("users?count=100&page=".concat(e))},y=function(e,t){return _.post("dialogs/".concat(e,"/messages"),{body:t})},O=function(e){return _.get("dialogs/".concat(e,"/messages"))},A=function(e){return _.put("dialogs/".concat(e))},T=function(){return _.get("dialogs")},j=function(e){var t=new FormData;return t.append("image",e),_.post("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},C=function(e){return _.put("profile",e)},R=function(){return _.get("auth/me")},w={status:"INIT",isAuth:!1,userInfo:{userId:null,userName:""}},k="ERROR",U="INPROGRESS",M="SUCCESS",F=function(e){return{type:"LR/SET_STATUS",status:e}},D=function(e){return{type:"LR/SET_IS_AUTH",status:e}},x=function(e,t){return{type:"LRSET_USER_INFO",id:e,login:t}},B=function(){return function(e){R().then(function(t){0===t.data.resultCode&&(e(D(!0)),e(x(t.data.data.id,t.data.data.login)))})}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LR/SET_STATUS":return Object(g.a)({},e,{status:t.status});case"LR/SET_IS_AUTH":return Object(g.a)({},e,{isAuth:t.status});case"LRSET_USER_INFO":return Object(g.a)({},e,{userInfo:Object(g.a)({},e.userInfo,{userId:t.id,userName:t.login})});default:return e}},H=Object(p.b)(function(e){return{isAuth:e.login.isAuth,myId:e.login.userInfo.userId}},function(e){return{logOut:function(){return e(function(e,t){t(),P().then(function(t){0===t.data.resultCode&&(e(x(null,"")),e(D(!1)))})})},me:function(){return e(B())}}})(function(e){return Object(a.useEffect)(function(){e.me()}),r.a.createElement("div",{className:i.a.header},r.a.createElement("div",{className:i.a.allHeaderButton},!e.isAuth&&r.a.createElement("div",{className:i.a.oneHeaderButton},r.a.createElement(f,null,r.a.createElement(d.b,{to:"/profile"},r.a.createElement("img",{src:"https://img.icons8.com/dusk/64/000000/contract-job.png",alt:"profile"}),"Profile"))),e.isAuth&&r.a.createElement("div",{className:i.a.oneHeaderButton},r.a.createElement(f,null,r.a.createElement(d.b,{to:"/profile/".concat(e.myId)},r.a.createElement("img",{src:"https://img.icons8.com/dusk/64/000000/contract-job.png",alt:"profile"}),"Profile"))),r.a.createElement("div",{className:i.a.oneHeaderButton},r.a.createElement(f,null,r.a.createElement(d.b,{to:"/friends"},r.a.createElement("img",{src:"https://img.icons8.com/dusk/64/000000/friends.png",alt:"friends"}),"Friends"))),r.a.createElement("div",{className:i.a.oneHeaderButton},r.a.createElement(f,null,r.a.createElement(d.b,{to:"/dialogs"},r.a.createElement("img",{src:"https://img.icons8.com/dusk/64/000000/new-message.png",alt:"dialogs"}),"Dialogs"))),r.a.createElement("div",{className:i.a.oneHeaderButton},r.a.createElement(f,null,r.a.createElement(d.b,{to:"/people"},r.a.createElement("img",{src:"https://img.icons8.com/dusk/64/000000/conference-call.png",alt:"people"}),"People"))),0==e.isAuth?r.a.createElement("div",{className:i.a.oneHeaderButton},r.a.createElement(f,null,r.a.createElement(d.b,{to:"/login"},r.a.createElement("img",{src:"https://img.icons8.com/dusk/64/000000/login-rounded-right.png",alt:"login"}),"Login"))):r.a.createElement("div",{className:i.a.oneHeaderButton},r.a.createElement(f,{onClick:e.logOut},r.a.createElement(d.b,{to:"/login"},r.a.createElement("img",{src:"https://img.icons8.com/cute-clipart/64/000000/exit.png",alt:"logout"}),"Logout")))))}),G=n(88),Z=n.n(G),W=n(67),z=n.n(W),J=function(e){return r.a.createElement("div",{className:z.a.myAlbum},r.a.createElement("div",{className:z.a.headline},"My album"),r.a.createElement("div",{className:z.a.photos},r.a.createElement("img",{src:"https://pp.userapi.com/c625322/v625322253/4880c/Rje7PYRyPL0.jpg"}),r.a.createElement("img",{src:"https://pp.userapi.com/c849328/v849328914/12fcbd/Jz1l1YnQmy8.jpg"}),r.a.createElement("img",{src:"https://pp.userapi.com/c849124/v849124094/21175/QpU4byFysP4.jpg"}),r.a.createElement("img",{src:"https://pp.userapi.com/c629307/v629307330/38333/wfffSYowsYM.jpg"}),r.a.createElement("img",{src:"https://pp.userapi.com/c543109/v543109717/1fdd3/jfmA65f2PZA.jpg"}),r.a.createElement("img",{src:"https://pp.userapi.com/c604628/v604628784/2fc6d/K47mv6IHsNA.jpg"})))},Q=n(38),K=n.n(Q),V=Object(p.b)(function(e){return{friends:e.friends.myFriends,status:e.friends.status}},null)(function(e){var t=e.friends.slice(0,6).map(function(e){return r.a.createElement("div",{className:K.a.oneFriend,key:e.id},r.a.createElement("span",null,r.a.createElement(d.b,{to:"/profile/".concat(e.id)},r.a.createElement("img",{src:e.photos.large?e.photos.large:"https://via.placeholder.com/100",alt:"avatar"}),r.a.createElement("div",null," ",r.a.createElement("span",null,e.name)))))});return r.a.createElement("div",{className:K.a.profileFriends},r.a.createElement("div",{className:K.a.headline},"My friends"),"INPROGRESS"!==e.status?r.a.createElement("div",{className:K.a.allFriend},t):r.a.createElement("img",{className:K.a.pending,src:"https://posuda.lenta.com/local/templates/zwilling/img/loading.gif"}))}),X=n(59),Y=n(60),q=n(65),$=n(61),ee=n(66),te=n(23),ne=n.n(te),ae=n(30),re=n.n(ae),oe=function(e){return r.a.createElement("div",{className:re.a.myPostsApp},r.a.createElement("div",{className:re.a.post},r.a.createElement("div",{className:re.a.headlinePost},r.a.createElement("div",{className:re.a.imgPost},r.a.createElement("img",{src:e.foto?e.foto:"https://pp.userapi.com/c840425/v840425508/681da/H8uCjuWrgn0.jpg",alt:"foto"})),r.a.createElement("div",{className:re.a.nikNamePost},"Roma kurilovich")),r.a.createElement("div",{className:re.a.contentPost},r.a.createElement("span",null,e.message))))},se=function(e){var t=e.posts.map(function(t){return r.a.createElement(oe,{key:t.id,message:t.message,foto:e.foto})});return r.a.createElement("div",{className:ne.a.myPostsApp},e.isAuth&&r.a.createElement("div",{className:ne.a.addPost},r.a.createElement("div",{className:ne.a.textareaWithPhotosBlock},r.a.createElement("div",{className:ne.a.headlineAddPost},r.a.createElement("div",{className:ne.a.imgAddPost},r.a.createElement("img",{src:e.foto?e.foto:"https://pp.userapi.com/c840425/v840425508/681da/H8uCjuWrgn0.jpg",alt:"foto"})),r.a.createElement("div",{className:ne.a.nikNameAddPost},"Roma Kurilovich")),r.a.createElement("div",{className:ne.a.inputArea},r.a.createElement("textarea",{value:e.newText,onChange:function(t){var n=t.target.value;e.updatePostText(n)}}),r.a.createElement("button",{onClick:function(){e.addPost(),e.updatePostText("")}},"add post")))),r.a.createElement("div",{className:ne.a.posts},t))},ce=n(35),ie=n.n(ce),ue=n(62),le=n(58),me=n(132),fe="INPROGRESS",de="SUCCESS",pe={status:"NOT_INITIALIZED",myPosts:{postText:"",posts:[{id:1,message:"every day like birth day",likesCount:777},{id:2,message:"hello",likesCount:23},{id:3,message:"good day",likesCount:11},{id:4,message:"good day",likesCount:99}]},profileInfo:{fullName:"Anonymous",newValue:null,newValueAboutMe:null,newValueLookingForAJobDescription:null,photos:{small:"https://via.placeholder.com/100",large:"https://via.placeholder.com/500"},contacts:{vk:"Anonymous can not have contacts"}}},ge=function(e){return{type:"PPR/SET_PROFILE_INFO",profileInfo:e}},Ee=function(e){return{type:"PPR/SET_STATUS",status:e}},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PPR/SET_STATUS":return Object(g.a)({},e,{status:t.status});case"PPR/SET_PROFILE_INFO":return Object(g.a)({},e,{profileInfo:t.profileInfo});case"PPR/UPDATE_POST_TEXT":return Object(g.a)({},e,{myPosts:Object(g.a)({},e.myPosts,{postText:t.value})});case"PPR/ADD_POST":var n={id:5,message:e.myPosts.postText,likesCount:0};return Object(g.a)({},e,{myPosts:Object(g.a)({},e.myPosts,{posts:[n].concat(Object(me.a)(e.myPosts.posts))})});case"PPR/CONTACT_CHANGE":return Object(g.a)({},e,{profileInfo:Object(g.a)({},e.profileInfo,{contacts:Object(g.a)({},e.profileInfo.contacts,Object(le.a)({},t.contactKey,t.newValue))})});case"PPR/ABOUT_ME_CHANGE":return Object(g.a)({},e,{profileInfo:Object(g.a)({},e.profileInfo,{aboutMe:t.newValue})});default:return e}},be=function(e){function t(){return Object(X.a)(this,t),Object(q.a)(this,Object($.a)(t).apply(this,arguments))}return Object(ee.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){return r.a.createElement(se,this.props)}}]),t}(r.a.Component),ve=Object(p.b)(function(e){return{posts:e.profilePage.myPosts.posts,newText:e.profilePage.myPosts.postText,foto:e.profilePage.profileInfo.photos.large,isAuth:e.login.isAuth}},function(e){return{updatePostText:function(t){e(function(e){return{type:"PPR/UPDATE_POST_TEXT",value:e}}(t))},addPost:function(){e({type:"PPR/ADD_POST"})}}})(be),Pe=n(37),he=n(8),Ne=n.n(he),Se=function(e){var t=Object(a.useRef)(null);return r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var n=t.target[0].files[0];e.fetchSetNewPhotoOfAvatar(n)}},r.a.createElement("input",{ref:t,type:"file",className:Ne.a.button}),r.a.createElement("button",{type:"submit",className:Ne.a.button,onClick:function(){e.setEditAvatarMode(!1)}},"Upload"))},Ie=function(e){var t=Object(a.useState)(!1),n=Object(Pe.a)(t,2),o=n[0],s=n[1],c=Object(a.useState)(!1),i=Object(Pe.a)(c,2),u=i[0],l=i[1],m=Object(a.useState)(!1),f=Object(Pe.a)(m,2),p=f[0],g=f[1];Object(a.useEffect)(function(){s(!1),e.friends&&e.friends.map(function(t){t.id===e.profileInfo.userId&&s(!0)})},[e.profileInfo.userId]);return r.a.createElement("div",{className:Ne.a.profileInfo},"INPROGRESS"!==e.status?r.a.createElement("div",{className:Ne.a.userInfo},r.a.createElement("div",{className:Ne.a.buttonWithAvatar},r.a.createElement("div",{className:Ne.a.avatar},r.a.createElement("img",{src:e.profileInfo.photos.large?e.profileInfo.photos.large:"https://pp.userapi.com/c840425/v840425508/681da/H8uCjuWrgn0.jpg",alt:"foto"})),e.isAuth&&r.a.createElement("div",{className:Ne.a.buttonForUser},e.profileInfo.userId===e.myId?r.a.createElement(r.a.Fragment,null,p?r.a.createElement(Se,{setEditAvatarMode:g,fetchSetNewPhotoOfAvatar:e.fetchSetNewPhotoOfAvatar}):r.a.createElement("div",{className:Ne.a.button,onClick:function(){return g(!0)}},"Edit avatar"),p&&r.a.createElement("div",{className:Ne.a.button,onClick:function(){return g(!1)}},"Back"),u?r.a.createElement("div",{className:Ne.a.button,onClick:function(){l(!1),e.putNewInfo()}},"Save"):r.a.createElement("div",{className:Ne.a.button,onClick:function(){return l(!0)}},"Edit my contact")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Ne.a.button},r.a.createElement(d.b,{to:"/dialogs/"+e.profileInfo.userId},"Send Message")),o?r.a.createElement("div",{className:Ne.a.button,onClick:function(){var t=e.profileInfo.userId;e.unSubscribe(t),s(!1)}},"Unsubscribe"):r.a.createElement("div",{className:Ne.a.button,onClick:function(){var t=e.profileInfo.userId;e.subscribe(t),s(!0)}},"Subscribe")))),r.a.createElement("div",{className:Ne.a.myContactsAndAboutMe},r.a.createElement("div",{className:Ne.a.myContacts},r.a.createElement("div",{className:Ne.a.spanMyContacts},"My contacts"),Object.keys(e.profileInfo&&e.profileInfo.contacts).map(function(t){return r.a.createElement("div",{className:Ne.a.oneContactKey,key:t},r.a.createElement("span",{className:Ne.a.oneContactKeySpan},"  ",t," :",u&&r.a.createElement("input",{value:e.profileInfo.contacts[t],onChange:function(n){var a=n.target.value;e.onContactChange(a,t)}}),!u&&e.profileInfo.contacts[t]))})),!u&&r.a.createElement("div",{className:Ne.a.aboutMe},r.a.createElement("div",null," About me:"),"  ",e.profileInfo.aboutMe),u&&r.a.createElement("div",{className:Ne.a.aboutMe},r.a.createElement("div",null," About me:")," ",r.a.createElement("input",{value:e.profileInfo.aboutMe,onChange:function(t){return e.aboutMeChange(t.target.value)}})))):r.a.createElement("img",{src:"https://posuda.lenta.com/local/templates/zwilling/img/loading.gif"}))},ye=n(16),Oe="NOT_INITIALIZED",Ae="INPROGRESS",Te="SUCCESS",je={status:Oe,users:[],totalCount:0},Ce=function(e){return{type:"PR/SET_STATUS",status:e}},Re=function(e){return function(t){je.status===Oe&&(t(Ce(Ae)),h(e).then(function(e){t(Ce(Te)),t({type:"PR/SET_USERS",users:e.data.items}),t({type:"PR/SET_TOTAL_COUNT",totalCount:e.data.totalCount})}))}},we=function(e){return function(t){N(e).then(function(n){t(function(e){return{type:"PR/SUBSCRIBE",userId:e}}(e))})}},ke=function(e){return function(t){S(e).then(function(n){t(function(e){return{type:"PR/UNSUBSCRIBE",userId:e}}(e))})}},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PR/SET_STATUS":return Object(g.a)({},e,{status:t.status});case"PR/SET_USERS":return Object(g.a)({},e,{users:t.users});case"PR/SET_TOTAL_COUNT":return Object(g.a)({},e,{totalCount:t.totalCount});case"PR/SUBSCRIBE":case"PR/UNSUBSCRIBE":return Object(g.a)({},e,{users:e.users.map(function(e){return e.id===t.userId?Object(g.a)({},e,{followed:!e.followed}):e})});default:return e}},Me="INPROGRESS",Fe="SUCCESS",De={status:"NOT_INITIALIZED",allUsers:[],myFriends:[],totalCount:null},xe=function(e){return{type:"FR/SET_STATUS",status:e}};var Be=function(){return function(){var e=Object(ue.a)(ie.a.mark(function e(t,n){var a,r,o,s,c;return ie.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n().friends.status===Me){e.next=23;break}return t(xe(Me)),a=0,e.next=6,h(1);case 6:r=e.sent,a=r.data.totalCount,t({type:"FR/SET_DELETE_USERS"}),o=Math.ceil(a/100),s=1;case 11:if(!(s<=o)){e.next=21;break}return e.next=14,new Promise(function(e,t){setTimeout(function(){e("done!")},10)});case 14:return e.next=16,I(s);case 16:c=e.sent,t({type:"FR/SET_USERS",users:c.data.items});case 18:s++,e.next=11;break;case 21:t({type:"FR/SET_FRIENDS"}),t(xe(Fe));case 23:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FR/SET_STATUS":return Object(g.a)({},e,{status:t.status});case"FR/SET_USERS":return Object(g.a)({},e,{allUsers:e.allUsers.concat(t.users)});case"FR/SET_FRIENDS":return Object(g.a)({},e,{myFriends:e.allUsers.filter(function(e){return e.followed})});case"FR/SET_DELETE_USERS":return Object(g.a)({},e,{allUsers:[]});case"FR/UNSUBSCRIBE":return Object(g.a)({},e,{allUsers:e.allUsers.map(function(e){return e.id===t.userId?Object(g.a)({},e,{followed:!e.followed}):e})});default:return e}},He=function(e){function t(e){var n;return Object(X.a)(this,t),(n=Object(q.a)(this,Object($.a)(t).call(this,e))).componentDidMount=function(){var e=n.props.match.params.userId;n.props.getProfileInfo(e),n.props.getPeople(1),n.props.getFriends(),n.props.me()},n}return Object(ee.a)(t,e),Object(Y.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.match.params.userId!==e.match.params.userId&&this.props.getProfileInfo(this.props.match.params.userId)}},{key:"render",value:function(){return r.a.createElement(Ie,this.props)}}]),t}(r.a.Component),Ge=Object(ye.f)(Object(p.b)(function(e){return{profileInfo:e.profilePage.profileInfo,isAuth:e.login.isAuth,myId:e.login.userInfo.userId,friends:e.friends.myFriends,status:e.profilePage.status}},function(e){return{getProfileInfo:function(t){e(function(e){return function(t){t(Ee(fe)),b(e).then(function(e){t(ge(e.data)),t(Ee(de))})}}(t))},getPeople:function(t){e(Re(t))},getFriends:function(){e(Be())},subscribe:function(t){return e(we(t))},unSubscribe:function(t){return e(ke(t))},fetchSetNewPhotoOfAvatar:function(t){return e(function(e){return function(){var t=Object(ue.a)(ie.a.mark(function t(n){return ie.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e);case 2:t.sent;case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}(t))},onContactChange:function(t,n){return e(function(e,t){return{type:"PPR/CONTACT_CHANGE",newValue:e,contactKey:t}}(t,n))},putNewInfo:function(){return e(function(e,t){var n=t();C(n.profilePage.profileInfo)})},aboutMeChange:function(t){return e(function(e){return{type:"PPR/ABOUT_ME_CHANGE",newValue:e}}(t))},me:function(){return e(B())}}})(He)),Ze=Object(ye.f)(Object(p.b)(function(e){return{nikName:e.profilePage.profileInfo.fullName,status:e.profilePage.status}},null)(function(e){return void 0===e.match.params.userId?r.a.createElement(ye.a,{to:"/login"}):r.a.createElement("div",{className:Z.a.profile},r.a.createElement("span",{className:Z.a.nikName},e.nikName),r.a.createElement(Ge,null),r.a.createElement(J,null),r.a.createElement(ve,null),r.a.createElement(V,null))})),We=n(27),ze=n.n(We),Je=n(128),Qe=n.n(Je),Ke=function(e){return r.a.createElement("div",{className:Qe.a.dialog}," ",r.a.createElement("b",null,e.message.senderName,": "),e.message.body)},Ve=n(89),Xe=n.n(Ve),Ye=function(e){return r.a.createElement("div",{className:Xe.a.dialog},r.a.createElement(d.b,{exact:!0,to:"/dialogs/"+e.id,activeClassName:Xe.a.active},"  ",e.name," "))},qe={dialogs:[],messages:[],currentDialogId:null,message:""},$e=function(e){return{type:"MPP/SET_MESSAGES",messages:e}},et=function(e){return{type:"MPP/SET_DIALOGS",dialogs:e}},tt=function(e){return{type:"MPP/SET_CURRENT_DISALOGS_ID",id:e}},nt=function(e){return{type:"MPP/ADD_MESSAGE",value:e}},at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MPP/ADD_MESSAGE":return Object(g.a)({},e,{message:t.value});case"MPP/SET_DIALOGS":return Object(g.a)({},e,{dialogs:t.dialogs});case"MPP/SET_MESSAGES":return Object(g.a)({},e,{messages:t.messages});case"MPP/SET_CURRENT_DISALOGS_ID":return Object(g.a)({},e,{currentDialogId:t.id});default:return e}},rt=Object(ye.f)(Object(p.b)(function(e){return{dialogs:e.messagePage.dialogs,messages:e.messagePage.messages,message:e.messagePage.message,isAuth:e.login.isAuth}},function(e){return{setDialogs:function(t){e(et(t))},setCurrentDialogId:function(t){e(tt(t))},setMessages:function(t){e($e(t))},addMessage:function(t){e(nt(t))},sendMessageThunk:function(t){e(function(e){return function(t,n){var a=n().messagePage.message;y(e,a).then(function(){return O(e)}).then(function(e){t(nt("")),t($e(e.data.items))})}}(t))},getDialogsAndMessageThunk:function(t){e(function(e){return function(t,n){n(),e?A(e).then(function(){return T()}).then(function(n){t(et(n.data)),t(tt(e))}).then(function(){return O(e)}).then(function(e){t($e(e.data.items))}):T().then(function(e){t(et(e.data))})}}(t))}}})(function(e){var t=e.dialogs.map(function(e){return r.a.createElement("div",{key:e.id,className:ze.a.oneDialog}," ",r.a.createElement(Ye,{name:e.userName,id:e.id})," ")}),n=e.messages.map(function(e){return r.a.createElement(Ke,{key:e.id,message:e})}),o=e.match.params.userId;return Object(a.useEffect)(function(){var t=e.match.params.userId;e.getDialogsAndMessageThunk(t)},[o]),!1===e.isAuth?r.a.createElement(ye.a,{to:"/login"}):r.a.createElement("div",{className:ze.a.dialogs},r.a.createElement("div",null,r.a.createElement("div",{className:ze.a.dialogsItems},t)),r.a.createElement("div",{className:ze.a.messageArea}," ",r.a.createElement("div",{className:ze.a.message},n),r.a.createElement("div",{className:ze.a.textAndButton},r.a.createElement("textarea",{className:ze.a.textarea,value:e.message,onChange:function(t){e.addMessage(t.currentTarget.value)}}),r.a.createElement("button",{onClick:function(){var t=e.match.params.userId;e.sendMessageThunk(t)}},"Send"))))})),ot=n(45),st=n.n(ot),ct=n(264),it=n(263),ut=Object(it.a)({form:"login"})(function(e){return r.a.createElement("form",{className:st.a.loginBox,onSubmit:e.handleSubmit},r.a.createElement("div",null,"mail:  kamazaff22@gmail.com "),r.a.createElement("div",null,"password: pentagon11 "),r.a.createElement("h1",null,"Login"),r.a.createElement("div",{className:st.a.form_row},r.a.createElement(ct.a,{component:"input",name:"login",type:"text",placeholder:"Username"})),r.a.createElement("div",{className:st.a.form_row},r.a.createElement(ct.a,{component:"input",name:"password",type:"password",placeholder:"Password"})),r.a.createElement("button",{name:"buttonLogin",type:"submit",value:"Sing in"},"Sing in"))}),lt=Object(p.b)(function(e){return{myId:e.login.userInfo.userId}},function(e){return{login:function(t,n,a){e(function(e,t,n){return function(a){a(F(U)),v(e,t,n).then(function(e){0===e.data.resultCode?(a(F(M)),a(x(e.data.data.userId,e.data.data.login)),a(D(!0))):(a(F(k)),alert(e.data.messages[0]))})}}(t,n,a))}}})(function(e){if(null!==e.myId)return r.a.createElement(ye.a,{to:"/profile/".concat(e.myId)});return r.a.createElement("div",{className:st.a.login},r.a.createElement(ut,{onSubmit:function(t){e.login(t.login,t.password,t.rememberMe)}}))}),mt=n(36),ft=n.n(mt),dt=n(39),pt=n.n(dt),gt=function(e){var t=e.user,n=e.subscribe,a=e.unSubscribe;return r.a.createElement("div",{className:pt.a.oneUser},r.a.createElement("div",{className:pt.a.userName},r.a.createElement(d.b,{to:"/profile/".concat(t.id)},r.a.createElement("span",null,t.name))),r.a.createElement("div",{className:pt.a.imgDiv},r.a.createElement("img",{src:null==t.photos.small?"https://via.placeholder.com/100":t.photos.small,alt:"foto"})),r.a.createElement(d.b,{to:"/dialogs/"+t.id},"Send Message"),t.followed?r.a.createElement("div",{className:pt.a.buttonFollow}," ",r.a.createElement("button",{"data-user-id":t.id,onClick:function(e){var t=+e.target.dataset.userId;a(t)}},"Unsubscribe")," "):r.a.createElement("div",{className:pt.a.buttonFollow}," ",r.a.createElement("button",{"data-user-id":t.id,onClick:function(e){var t=+e.target.dataset.userId;n(t)}},"Subscribe")," "))};function Et(){var e=Object(u.a)(["\nborder: 1px solid grey;\npadding:2px;\n\nbackground-color: ",";\ncolor: ",";\ncursor: ",";\n\n"]);return Et=function(){return e},e}var _t=Object(l.a)("div")(Et(),function(e){return e.selected?"#8298BE":"white"},function(e){return e.selected?"#D3D3AA":"black"},function(e){return e.selected?"default":"pointer"}),bt=function(e){for(var t=Math.ceil(e.totalCount/24),n=[],a=function(t){n.push(r.a.createElement(_t,{key:t,selected:e.pageNumber===t,onClick:function(){e.setNewPageNumber(t)}},t))},o=1;o<t+1;o++)a(o);return r.a.createElement("div",{className:ft.a.allButtons},n)},vt=function(e){return e.users.length?r.a.createElement("div",{className:ft.a.people},"INPROGRESS"!==e.status?r.a.createElement("div",{className:ft.a.divContainer},e.users.map(function(t){return r.a.createElement("div",{key:t.id},r.a.createElement(gt,{user:t,unSubscribe:e.unSubscribe,subscribe:e.subscribe}))})):r.a.createElement("img",{src:"https://posuda.lenta.com/local/templates/zwilling/img/loading.gif"}),r.a.createElement("div",{className:ft.a.pagination},r.a.createElement(bt,{totalCount:e.totalCount,pageNumber:e.pageNumber,setNewPageNumber:e.setNewPageNumber}))):r.a.createElement("div",null," People not found")},Pt=Object(p.b)(function(e){return{users:e.people.users,status:e.people.status,totalCount:e.people.totalCount}},function(e){return{getPeopleThunk:function(t){return e(Re(t))},subscribe:function(t){return e(we(t))},unSubscribe:function(t){return e(ke(t))}}})(function(e){var t=Object(a.useState)(1),n=Object(Pe.a)(t,2),o=n[0],s=n[1];return Object(a.useEffect)(function(){e.getPeopleThunk(o)},[o]),r.a.createElement(vt,Object.assign({},e,{setNewPageNumber:s,pageNumber:o}))}),ht=n(130),Nt=n.n(ht),St=function(e){return r.a.createElement(r.a.Fragment,null,"INPROGRESS"!==e.status?r.a.createElement("div",{className:Nt.a.friends},e.friends.map(function(t){return r.a.createElement("div",{key:t.id},r.a.createElement(gt,{user:t,subscribe:e.subscribe,unSubscribe:e.unsubscribe}))})):r.a.createElement("img",{src:"https://posuda.lenta.com/local/templates/zwilling/img/loading.gif"}))},It=Object(p.b)(function(e){return{totalCount:e.people.totalCount,friends:e.friends.myFriends,isAuth:e.login.isAuth,status:e.friends.status}},function(e){return{getFriends:function(){e(Be())},unsubscribe:function(t){e(function(e){return function(t){S(e).then(function(n){t(function(e){return{type:"FR/UNSUBSCRIBE",userId:e}}(e)),t({type:"FR/SET_FRIENDS"})})}}(t))},subscribe:function(t){e(we(t))}}})(function(e){return Object(a.useEffect)(function(){e.getFriends()},[e.friends.lenght]),!1===e.isAuth?r.a.createElement(ye.a,{to:"/login"}):r.a.createElement(St,e)}),yt=function(e){return r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(H,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(ye.b,{path:"/dialogs/:userId?",render:function(){return r.a.createElement(rt,null)}}),r.a.createElement(ye.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(Ze,null)}}),r.a.createElement(ye.b,{path:"/people",render:function(){return r.a.createElement(Pt,null)}}),r.a.createElement(ye.b,{path:"/login",render:function(){return r.a.createElement(lt,null)}}),r.a.createElement(ye.b,{path:"/friends",render:function(){return r.a.createElement(It,null)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ot=n(9),At=n(131),Tt=n(265),jt=Object(Ot.c)({profilePage:_e,form:Tt.a,login:L,people:Ue,friends:Le,messagePage:at}),Ct=Object(Ot.d)(jt,Object(Ot.a)(At.a));window.store=Ct;var Rt=Ct;s.a.render(r.a.createElement(p.a,{store:Rt},r.a.createElement(d.a,null,r.a.createElement(yt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},27:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__3NzE_",dialogsItems:"Dialogs_dialogsItems__2QaFI",message:"Dialogs_message__7Zvyj",oneDialog:"Dialogs_oneDialog__2fRgn",textAndButton:"Dialogs_textAndButton__tWsZQ",textarea:"Dialogs_textarea__29yrG",messageArea:"Dialogs_messageArea__2E1Ja"}},30:function(e,t,n){e.exports={post:"Post_post__1oq4p",myPostsApp:"Post_myPostsApp__NMwMe",imgPost:"Post_imgPost__3D3K2",contentPost:"Post_contentPost__1SGzd",headlinePost:"Post_headlinePost__ovWI-",nikNamePost:"Post_nikNamePost__2NI7_"}},36:function(e,t,n){e.exports={divContainer:"People_divContainer__c7gWe",allButtons:"People_allButtons__1w_mj",pagination:"People_pagination__3J0L2"}},38:function(e,t,n){e.exports={profileFriends:"ProfileFriends_profileFriends__16JRB",oneFriend:"ProfileFriends_oneFriend__EJciZ",allFriend:"ProfileFriends_allFriend__1g5bW",headline:"ProfileFriends_headline__Hnvsc",pending:"ProfileFriends_pending__1faXm"}},39:function(e,t,n){e.exports={divContainer:"OnePerson_divContainer__2Bt7w",imgDiv:"OnePerson_imgDiv__1FEtZ",spanUsersName:"OnePerson_spanUsersName__4HXw4",oneUser:"OnePerson_oneUser__3ykt2",userName:"OnePerson_userName__3ymju",buttonFollow:"OnePerson_buttonFollow__3tkLQ",pagination:"OnePerson_pagination__2w91d",footer:"OnePerson_footer__2eB2O",oneButton:"OnePerson_oneButton__2kpD1"}},45:function(e,t,n){e.exports={loginBox:"Login_loginBox__zU334",form_row:"Login_form_row__1N85O"}},67:function(e,t,n){e.exports={myAlbum:"MyAlbum_myAlbum__DeZ_o",photos:"MyAlbum_photos__mZnZT",headline:"MyAlbum_headline__2y2q3"}},8:function(e,t,n){e.exports={profileInfo:"ProfileInfo_profileInfo__1StgS",myContactsAndAboutMe:"ProfileInfo_myContactsAndAboutMe__2Vbsp",avatar:"ProfileInfo_avatar__2Dxuc",buttonForUser:"ProfileInfo_buttonForUser__3oGTt",userInfo:"ProfileInfo_userInfo__26tmf",button:"ProfileInfo_button__17UGQ",myContacts:"ProfileInfo_myContacts__277pz",aboutMe:"ProfileInfo_aboutMe__jGLXa",spanMyContacts:"ProfileInfo_spanMyContacts__3Hfue"}},88:function(e,t,n){e.exports={profile:"Profile_profile__3yyZh",nikName:"Profile_nikName__3KeN8"}},89:function(e,t,n){e.exports={dialog:"DialogItem_dialog__3JJxs",active:"DialogItem_active__1Mg9A"}}},[[136,1,2]]]);
//# sourceMappingURL=main.8c72a658.chunk.js.map