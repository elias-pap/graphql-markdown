"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[3251],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},266:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"media-list-options",title:"MediaListOptions"},l=void 0,c={unversionedId:"schema/objects/media-list-options",id:"schema/objects/media-list-options",title:"MediaListOptions",description:"A user's list options",source:"@site/docs/schema/objects/media-list-options.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/media-list-options",permalink:"/graphql-markdown/schema/objects/media-list-options",tags:[],version:"current",frontMatter:{id:"media-list-options",title:"MediaListOptions"},sidebar:"basic",previous:{title:"MediaListGroup",permalink:"/graphql-markdown/schema/objects/media-list-group"},next:{title:"MediaListTypeOptions",permalink:"/graphql-markdown/schema/objects/media-list-type-options"}},d=[{value:"Fields",id:"fields",children:[{value:"<code>scoreFormat</code> (ScoreFormat)",id:"scoreformat-scoreformat",children:[],level:4},{value:"<code>rowOrder</code> (String)",id:"roworder-string",children:[],level:4},{value:"<code>useLegacyLists</code> (Boolean)",id:"uselegacylists-boolean",children:[],level:4},{value:"<code>animeList</code> (MediaListTypeOptions)",id:"animelist-medialisttypeoptions",children:[],level:4},{value:"<code>mangaList</code> (MediaListTypeOptions)",id:"mangalist-medialisttypeoptions",children:[],level:4},{value:"<code>sharedTheme</code> (Json)",id:"sharedtheme-json",children:[],level:4},{value:"<code>sharedThemeEnabled</code> (Boolean)",id:"sharedthemeenabled-boolean",children:[],level:4}],level:3}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A user's list options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type MediaListOptions {\n  scoreFormat: ScoreFormat\n  rowOrder: String\n  useLegacyLists: Boolean\n  animeList: MediaListTypeOptions\n  mangaList: MediaListTypeOptions\n  sharedTheme: Json\n  sharedThemeEnabled: Boolean\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"scoreformat-scoreformat"},(0,i.kt)("inlineCode",{parentName:"h4"},"scoreFormat")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/enums/score-format"},(0,i.kt)("inlineCode",{parentName:"a"},"ScoreFormat")),")"),(0,i.kt)("p",null,"The score format the user is using for media lists"),(0,i.kt)("h4",{id:"roworder-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"rowOrder")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The default order list rows should be displayed in"),(0,i.kt)("h4",{id:"uselegacylists-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"useLegacyLists")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"animelist-medialisttypeoptions"},(0,i.kt)("inlineCode",{parentName:"h4"},"animeList")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/media-list-type-options"},(0,i.kt)("inlineCode",{parentName:"a"},"MediaListTypeOptions")),")"),(0,i.kt)("p",null,"The user's anime list options"),(0,i.kt)("h4",{id:"mangalist-medialisttypeoptions"},(0,i.kt)("inlineCode",{parentName:"h4"},"mangaList")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/media-list-type-options"},(0,i.kt)("inlineCode",{parentName:"a"},"MediaListTypeOptions")),")"),(0,i.kt)("p",null,"The user's manga list options"),(0,i.kt)("h4",{id:"sharedtheme-json"},(0,i.kt)("inlineCode",{parentName:"h4"},"sharedTheme")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/json"},(0,i.kt)("inlineCode",{parentName:"a"},"Json")),")"),(0,i.kt)("p",null,"The list theme options for both lists"),(0,i.kt)("h4",{id:"sharedthemeenabled-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"sharedThemeEnabled")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"If the shared theme should be used instead of the individual list themes"))}m.isMDXComponent=!0}}]);