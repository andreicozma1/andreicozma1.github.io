"use strict";(self.webpackChunkpersonal_portfolio=self.webpackChunkpersonal_portfolio||[]).push([[834],{9150:function(t,e,n){var i=n(4578),r=n(7294),a=n(1255),s=n(1883),o=n(2708),l=n(131),c=function(t){function e(e){var n;return(n=t.call(this,e)||this).title="Skills",n.notes=[{text:"An overview of my skillset based on the contents listed in this portfolio.",severity:"info"}],n.state={skillsList:{},displayOrder:["languages","libraries","tools"]},n}(0,i.Z)(e,t);var n=e.prototype;return n.countSkills=function(){var t=this,e={};return Object.keys(a.i).forEach((function(n){var i=a.i[n].sections;i&&i.forEach((function(n){var i=n.items;i&&i.forEach((function(n){var i=n.chips;i&&Object.keys(i).forEach((function(n){t.state.displayOrder.includes(n)&&(e[n]||(e[n]={}),i&&i[n].forEach((function(t){e[n][t]||(e[n][t]=0),e[n][t]++})))}))}))}))})),e},n.componentDidMount=function(){var t=this.countSkills();this.setState({skillsList:t})},n.render=function(){var t=this;return r.createElement(s.Z,{title:this.title,notes:this.notes},this.state.skillsList&&this.state.displayOrder.map((function(e){var n=t.state.skillsList[e];if(n){var i="Other";"languages"===e&&(i="Programming Languages"),"libraries"===e&&(i="Libraries & Frameworks"),"tools"===e&&(i="Other");var a=[];Object.entries(n).forEach((function(t){var e=t[0],n=t[1];a.push({name:e,count:n})})),a.sort((function(t,e){return e.count-t.count}));var s=[];return a.forEach((function(t){s.push(t.name+" ("+t.count+")")})),r.createElement(o.Z,{itemProps:{title:i},key:e},r.createElement(l.Z,{text:s,defaultVariant:"filled"}))}})))},e}(r.Component);e.Z=c},4690:function(t,e,n){var i=n(7294),r=n(1533);e.Z=function(t){var e=(0,r.$W)(),n=e.siteUrl,a=e.image,s=e.title,o=e.description,l={title:t.title||s,description:t.description||o,image:""+n+a,url:""+n+(t.pathname||"")};return i.createElement(i.Fragment,null,i.createElement("title",null,l.title),i.createElement("meta",{name:"description",content:l.description}),i.createElement("meta",{name:"image",content:l.image}),i.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"}),t.children)}},9032:function(t,e,n){n.r(e),n.d(e,{Head:function(){return l}});var i=n(7294),r=n(5570),a=n(9150),s=n(1533),o=n(4690);e.default=function(){var t=(0,s.qt)("Academics");return i.createElement(r.Z,{pageProps:t},i.createElement(a.Z,null))};var l=function(){return i.createElement(o.Z,null)}}}]);
//# sourceMappingURL=component---src-pages-academics-tsx-c6c637e7509065630423.js.map