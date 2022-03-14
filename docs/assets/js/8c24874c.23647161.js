"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[4620],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),h=c(n),u=r,p=h["".concat(l,".").concat(u)]||h[u]||m[u]||o;return n?a.createElement(p,i(i({ref:t},s),{},{components:n})):a.createElement(p,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8462:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],d={id:"thread-comment",title:"ThreadComment"},l=void 0,c={unversionedId:"schema/objects/thread-comment",id:"schema/objects/thread-comment",title:"ThreadComment",description:"Forum Thread Comment",source:"@site/docs/schema/objects/thread-comment.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/thread-comment",permalink:"/graphql-markdown/schema/objects/thread-comment",tags:[],version:"current",frontMatter:{id:"thread-comment",title:"ThreadComment"},sidebar:"basic",previous:{title:"ThreadCommentSubscribedNotification",permalink:"/graphql-markdown/schema/objects/thread-comment-subscribed-notification"},next:{title:"ThreadLikeNotification",permalink:"/graphql-markdown/schema/objects/thread-like-notification"}},s={},m=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>userId</code> (<code>Int</code>)",id:"userid-int",level:4},{value:"<code>threadId</code> (<code>Int</code>)",id:"threadid-int",level:4},{value:"<code>comment</code> (<code>String</code>)",id:"comment-string",level:4},{value:"<code>likeCount</code> (<code>Int</code>)",id:"likecount-int",level:4},{value:"<code>isLiked</code> (<code>Boolean</code>)",id:"isliked-boolean",level:4},{value:"<code>siteUrl</code> (<code>String</code>)",id:"siteurl-string",level:4},{value:"<code>createdAt</code> (<code>Int</code>)",id:"createdat-int",level:4},{value:"<code>updatedAt</code> (<code>Int</code>)",id:"updatedat-int",level:4},{value:"<code>thread</code> (<code>Thread</code>)",id:"thread-thread",level:4},{value:"<code>user</code> (<code>User</code>)",id:"user-user",level:4},{value:"<code>likes</code> (<code>User</code>)",id:"likes-user",level:4},{value:"<code>childComments</code> (<code>Json</code>)",id:"childcomments-json",level:4},{value:"<code>isLocked</code> (<code>Boolean</code>)",id:"islocked-boolean",level:4}],h={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Forum Thread Comment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type ThreadComment {\n  id: Int!\n  userId: Int\n  threadId: Int\n  comment(asHtml: Boolean): String\n  likeCount: Int!\n  isLiked: Boolean\n  siteUrl: String\n  createdAt: Int!\n  updatedAt: Int!\n  thread: Thread\n  user: User\n  likes: [User]\n  childComments: Json\n  isLocked: Boolean\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"id-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The id of the comment"),(0,o.kt)("h4",{id:"userid-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"userId")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The user id of the comment's owner"),(0,o.kt)("h4",{id:"threadid-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"threadId")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The id of thread the comment belongs to"),(0,o.kt)("h4",{id:"comment-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"comment")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"The text content of the comment (Markdown)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"ashtml-boolean"},(0,o.kt)("inlineCode",{parentName:"h5"},"asHtml")," (",(0,o.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,o.kt)("p",null,"Return the string in pre-parsed html instead of markdown"),(0,o.kt)("h4",{id:"likecount-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"likeCount")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The amount of likes the comment has"),(0,o.kt)("h4",{id:"isliked-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"isLiked")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("p",null,"If the currently authenticated user liked the comment"),(0,o.kt)("h4",{id:"siteurl-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"siteUrl")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"The url for the comment page on the AniList website"),(0,o.kt)("h4",{id:"createdat-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The time of the comments creation"),(0,o.kt)("h4",{id:"updatedat-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The time of the comments last update"),(0,o.kt)("h4",{id:"thread-thread"},(0,o.kt)("inlineCode",{parentName:"h4"},"thread")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/thread"},(0,o.kt)("inlineCode",{parentName:"a"},"Thread")),")"),(0,o.kt)("p",null,"The thread the comment belongs to"),(0,o.kt)("h4",{id:"user-user"},(0,o.kt)("inlineCode",{parentName:"h4"},"user")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,o.kt)("p",null,"The user who created the comment"),(0,o.kt)("h4",{id:"likes-user"},(0,o.kt)("inlineCode",{parentName:"h4"},"likes")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,o.kt)("p",null,"The users who liked the comment"),(0,o.kt)("h4",{id:"childcomments-json"},(0,o.kt)("inlineCode",{parentName:"h4"},"childComments")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/json"},(0,o.kt)("inlineCode",{parentName:"a"},"Json")),")"),(0,o.kt)("p",null,"The comment's child reply comments"),(0,o.kt)("h4",{id:"islocked-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"isLocked")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("p",null,"If the comment tree is locked and may not receive replies or edits"))}u.isMDXComponent=!0}}]);