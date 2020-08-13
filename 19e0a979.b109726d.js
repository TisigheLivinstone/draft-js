/*! For license information please see 19e0a979.b109726d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),i=n(9),o=(n(181),n(180)),a={id:"advanced-topics-entities",title:"Entities"},c={id:"advanced-topics-entities",title:"Entities",description:"This article discusses the Entity system, which Draft uses for annotating",source:"@site/../docs/Advanced-Topics-Entities.md",permalink:"/docs/advanced-topics-entities",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/Advanced-Topics-Entities.md",lastUpdatedBy:"Andrew Lauria",lastUpdatedAt:1588289436,sidebar:"docs",previous:{title:"Rich Styling",permalink:"/docs/quickstart-rich-styling"},next:{title:"v0.10 API Migration",permalink:"/docs/v0-10-api-migration"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Creating and Retrieving Entities",id:"creating-and-retrieving-entities",children:[]},{value:"&quot;Mutability&quot;",id:"mutability",children:[{value:"Immutable",id:"immutable",children:[]},{value:"Mutable",id:"mutable",children:[]},{value:"Segmented",id:"segmented",children:[]}]},{value:"Modifying Entities",id:"modifying-entities",children:[]},{value:"Using Entities for Rich Content",id:"using-entities-for-rich-content",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This article discusses the Entity system, which Draft uses for annotating\nranges of text with metadata. Entities introduce levels of richness beyond\nstyled text. Links, mentions, and embedded content can all be implemented\nusing entities."),Object(o.b)("p",null,"In the Draft repository, the\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/link"}),"link editor"),"\nand\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/entity"}),"entity demo"),"\nprovide live code examples to help clarify how entities can be used, as well\nas their built-in behavior."),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference-entity"}),"Entity API Reference")," provides\ndetails on the static methods to be used when creating, retrieving, or updating\nentity objects."),Object(o.b)("p",null,"For information about recent changes to the Entity API, and examples of how to\nupdate your application,\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/v0-10-api-migration#content"}),"see our v0.10 API Migration Guide"),"."),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"An entity is an object that represents metadata for a range of text within a\nDraft editor. It has three properties:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"type"),": A string that indicates what kind of entity it is, e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"'LINK'"),",\n",Object(o.b)("inlineCode",{parentName:"li"},"'MENTION'"),", ",Object(o.b)("inlineCode",{parentName:"li"},"'PHOTO'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"mutability"),": Not to be confused with immutability a la ",Object(o.b)("inlineCode",{parentName:"li"},"immutable-js"),", this\nproperty denotes the behavior of a range of text annotated with this entity\nobject when editing the text range within the editor. This is addressed in\ngreater detail below."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"data"),": An optional object containing metadata for the entity. For instance,\na ",Object(o.b)("inlineCode",{parentName:"li"},"'LINK'")," entity might contain a ",Object(o.b)("inlineCode",{parentName:"li"},"data")," object that contains the ",Object(o.b)("inlineCode",{parentName:"li"},"href")," value\nfor that link.")),Object(o.b)("p",null,"All entities are stored in the ContentState record. The entities are referenced\nby key within ",Object(o.b)("inlineCode",{parentName:"p"},"ContentState")," and React components used to decorate annotated\nranges. (We are currently deprecating a previous API for accessing Entities; see\nissue\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/issues/839"}),"#839"),".)"),Object(o.b)("p",null,"Using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/advanced-topics-decorators"}),"decorators")," or\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/advanced-topics-block-components"}),"custom block components"),", you can\nadd rich rendering to your editor based on entity metadata."),Object(o.b)("h2",{id:"creating-and-retrieving-entities"},"Creating and Retrieving Entities"),Object(o.b)("p",null,"Entities should be created using ",Object(o.b)("inlineCode",{parentName:"p"},"contentState.createEntity"),", which accepts the\nthree properties above as arguments. This method returns a ",Object(o.b)("inlineCode",{parentName:"p"},"ContentState")," record updated to include the newly created entity, then you can call ",Object(o.b)("inlineCode",{parentName:"p"},"contentState.getLastCreatedEntityKey")," to get the key of the newly created entity record."),Object(o.b)("p",null,"This key is the value that should be used when applying entities to your\ncontent. For instance, the ",Object(o.b)("inlineCode",{parentName:"p"},"Modifier")," module contains an ",Object(o.b)("inlineCode",{parentName:"p"},"applyEntity")," method:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const contentState = editorState.getCurrentContent();\nconst contentStateWithEntity = contentState.createEntity('LINK', 'MUTABLE', {\n  url: 'http://www.zombo.com',\n});\nconst entityKey = contentStateWithEntity.getLastCreatedEntityKey();\nconst contentStateWithLink = Modifier.applyEntity(\n  contentStateWithEntity,\n  selectionState,\n  entityKey,\n);\nconst newEditorState = EditorState.push(editorState, {\n  currentContent: contentStateWithLink,\n});\n")),Object(o.b)("p",null,"For a given range of text, then, you can extract its associated entity key by using\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"getEntityAt()")," method on a ",Object(o.b)("inlineCode",{parentName:"p"},"ContentBlock")," object, passing in the target\noffset value."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const contentState = editorState.getCurrentContent();\nconst blockWithLinkAtBeginning = contentState.getBlockForKey('...');\nconst linkKey = blockWithLinkAtBeginning.getEntityAt(0);\nconst linkInstance = contentState.getEntity(linkKey);\nconst {url} = linkInstance.getData();\n")),Object(o.b)("h2",{id:"mutability"},'"Mutability"'),Object(o.b)("p",null,'Entities may have one of three "mutability" values. The difference between them\nis the way they behave when the user makes edits to them.'),Object(o.b)("p",null,"Note that ",Object(o.b)("inlineCode",{parentName:"p"},"DraftEntityInstance"),' objects are always immutable Records, and this\nproperty is meant only to indicate how the annotated text may be "mutated" within\nthe editor. ',Object(o.b)("em",{parentName:"p"},"(Future changes may rename this property to ward off potential\nconfusion around naming.)")),Object(o.b)("h3",{id:"immutable"},"Immutable"),Object(o.b)("p",null,"This text cannot be altered without removing the entity annotation\nfrom the text. Entities with this mutability type are effectively atomic."),Object(o.b)("p",null,"For instance, in a Facebook input, add a mention for a Page (e.g. Barack Obama).\nThen, either add a character within the mentioned text, or try to delete a character.\nNote that when adding or deleting characters, the entity is removed."),Object(o.b)("p",null,"This mutability value is useful in cases where the text absolutely must match\nits relevant metadata, and may not be altered."),Object(o.b)("h3",{id:"mutable"},"Mutable"),Object(o.b)("p",null,'This text may be altered freely. For instance, link text is\ngenerally intended to be "mutable" since the href and linkified text are not\ntightly coupled.'),Object(o.b)("h3",{id:"segmented"},"Segmented"),Object(o.b)("p",null,'Entities that are "segmented" are tightly coupled to their text in much the\nsame way as "immutable" entities, but allow customization via deletion.'),Object(o.b)("p",null,"For instance, in a Facebook input, add a mention for a friend. Then, add a\ncharacter to the text. Note that the entity is removed from the entire string,\nsince your mentioned friend may not have their name altered in your text."),Object(o.b)("p",null,"Next, try deleting a character or word within the mention. Note that only the\nsection of the mention that you have deleted is removed. In this way, we can\nallow short names for mentions."),Object(o.b)("h2",{id:"modifying-entities"},"Modifying Entities"),Object(o.b)("p",null,"Since ",Object(o.b)("inlineCode",{parentName:"p"},"DraftEntityInstance")," records are immutable, you may not update the ",Object(o.b)("inlineCode",{parentName:"p"},"data"),"\nproperty on an instance directly."),Object(o.b)("p",null,"Instead, two ",Object(o.b)("inlineCode",{parentName:"p"},"Entity")," methods are available to modify entities: ",Object(o.b)("inlineCode",{parentName:"p"},"mergeData")," and\n",Object(o.b)("inlineCode",{parentName:"p"},"replaceData"),". The former allows updating data by passing in an object to merge,\nwhile the latter completely swaps in the new data object."),Object(o.b)("h2",{id:"using-entities-for-rich-content"},"Using Entities for Rich Content"),Object(o.b)("p",null,"The next article in this section covers the usage of decorator objects, which\ncan be used to retrieve entities for rendering purposes."),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/link"}),"link editor example"),"\nprovides a working example of entity creation and decoration in use."))}s.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,b=p["".concat(a,".").concat(f)]||p[f]||d[f]||o;return n?i.a.createElement(b,c(c({ref:t},u),{},{components:n})):i.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},181:function(e,t,n){"use strict";e.exports=n(182)},182:function(e,t,n){"use strict";var r=n(183),i="function"==typeof Symbol&&Symbol.for,o=i?Symbol.for("react.element"):60103,a=i?Symbol.for("react.portal"):60106,c=i?Symbol.for("react.fragment"):60107,l=i?Symbol.for("react.strict_mode"):60108,u=i?Symbol.for("react.profiler"):60114,s=i?Symbol.for("react.provider"):60109,p=i?Symbol.for("react.context"):60110,d=i?Symbol.for("react.forward_ref"):60112,f=i?Symbol.for("react.suspense"):60113,b=i?Symbol.for("react.memo"):60115,h=i?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function O(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||g}function v(){}function w(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||g}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=O.prototype;var k=w.prototype=new v;k.constructor=w,r(k,O.prototype),k.isPureReactComponent=!0;var E={current:null},C=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r,i={},a=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)C.call(t,r)&&!S.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===i[r]&&(i[r]=l[r]);return{$$typeof:o,type:e,key:a,ref:c,props:i,_owner:E.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g,T=[];function _(e,t,n,r){if(T.length){var i=T.pop();return i.result=e,i.keyPrefix=t,i.func=n,i.context=r,i.count=0,i}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function A(e,t,n){return null==e?0:function e(t,n,r,i){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var l=!1;if(null===t)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case o:case a:l=!0}}if(l)return r(i,t,""===n?"."+R(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var s=n+R(c=t[u],u);l+=e(c,s,r,i)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=y&&t[y]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),u=0;!(c=t.next()).done;)l+=e(c=c.value,s=n+R(c,u++),r,i);else if("object"===c)throw r=""+t,Error(m(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return l}(e,"",t,n)}function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function $(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,n){var r=e.result,i=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,r,n,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,i+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n)),r.push(e))}function D(e,t,n,r,i){var o="";null!=n&&(o=(""+n).replace(P,"$&/")+"/"),A(e,M,t=_(t,o,r,i)),I(t)}var L={current:null};function F(){var e=L.current;if(null===e)throw Error(m(321));return e}var U={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return D(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;A(e,$,t=_(null,null,t,n)),I(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return D(e,t,null,(function(e){return e})),t},only:function(e){if(!x(e))throw Error(m(143));return e}},t.Component=O,t.Fragment=c,t.Profiler=u,t.PureComponent=w,t.StrictMode=l,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,t.cloneElement=function(e,t,n){if(null==e)throw Error(m(267,e));var i=r({},e.props),a=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=E.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)C.call(t,s)&&!S.hasOwnProperty(s)&&(i[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)i.children=n;else if(1<s){u=Array(s);for(var p=0;p<s;p++)u[p]=arguments[p+2];i.children=u}return{$$typeof:o,type:e.type,key:a,ref:c,props:i,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=N,t.createFactory=function(e){var t=N.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return F().useCallback(e,t)},t.useContext=function(e,t){return F().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return F().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return F().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return F().useLayoutEffect(e,t)},t.useMemo=function(e,t){return F().useMemo(e,t)},t.useReducer=function(e,t,n){return F().useReducer(e,t,n)},t.useRef=function(e){return F().useRef(e)},t.useState=function(e){return F().useState(e)},t.version="16.13.1"},183:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,t){for(var n,c,l=a(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))i.call(n,s)&&(l[s]=n[s]);if(r){c=r(n);for(var p=0;p<c.length;p++)o.call(n,c[p])&&(l[c[p]]=n[c[p]])}}return l}}}]);