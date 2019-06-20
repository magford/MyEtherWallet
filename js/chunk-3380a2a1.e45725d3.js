(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3380a2a1"],{"4dc8":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"interact-with-contract-container"},[s("interface-container-title",{attrs:{title:t.$t("common.interactWcontract")}}),t.interact?s("div",{staticClass:"contract-methods-container"},[s("h4",[t._v("Read/Write Contract")]),s("div",{staticClass:"contract-addr-container"},[s("div",{staticClass:"contract-addr"},[s("p",[t._v("Contract Address: "+t._s(t.address))])]),s("div",{staticClass:"picker-container"},[s("currency-picker",{attrs:{currency:t.contractMethods,token:!1,page:"interactWContract"},on:{selectedCurrency:t.selectedFunction}})],1)]),void 0!==t.selectedMethod.name?s("div",{staticClass:"method-arguments-container"},[s("h4",[t._v(t._s(t._f("capitalize")(t.selectedMethod.name)))]),t._l(t.selectedMethod.inputs,function(e,a){return s("div",{key:e.name+a,staticClass:"input-item-container"},[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("h5",[t._v(t._s(t._f("capitalize")(e.name))+" ("+t._s(e.type)+"):")])])]),s("div",{staticClass:"input-container"},["checkbox"===t.getType(e.type).type&&"radio"!==t.getType(e.type).type?s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],staticClass:"non-bool-input",attrs:{disabled:t.noInput,type:"checkbox"},domProps:{checked:Array.isArray(t.inputs[e.name])?t._i(t.inputs[e.name],null)>-1:t.inputs[e.name]},on:{change:function(a){var s=t.inputs[e.name],n=a.target,i=!!n.checked;if(Array.isArray(s)){var r=null,o=t._i(s,r);n.checked?o<0&&t.$set(t.inputs,e.name,s.concat([r])):o>-1&&t.$set(t.inputs,e.name,s.slice(0,o).concat(s.slice(o+1)))}else t.$set(t.inputs,e.name,i)}}}):"radio"===t.getType(e.type).type&&"radio"!==t.getType(e.type).type?s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],staticClass:"non-bool-input",attrs:{disabled:t.noInput,type:"radio"},domProps:{checked:t._q(t.inputs[e.name],null)},on:{change:function(a){return t.$set(t.inputs,e.name,null)}}}):"radio"!==t.getType(e.type).type?s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],staticClass:"non-bool-input",attrs:{disabled:t.noInput,type:t.getType(e.type).type},domProps:{value:t.inputs[e.name]},on:{input:function(a){a.target.composing||t.$set(t.inputs,e.name,a.target.value)}}}):t._e(),"radio"===t.getType(e.type).type?s("div",{staticClass:"bool-input-container"},[s("div",{staticClass:"bool-items"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],attrs:{name:e.name,type:"radio"},domProps:{value:!0,checked:t._q(t.inputs[e.name],!0)},on:{change:function(a){return t.$set(t.inputs,e.name,!0)}}}),s("label",{attrs:{for:e.name}},[t._v("True")])]),s("div",{staticClass:"bool-items"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],attrs:{name:e.name,type:"radio",checked:""},domProps:{value:!1,checked:t._q(t.inputs[e.name],!1)},on:{change:function(a){return t.$set(t.inputs,e.name,!1)}}}),s("label",{attrs:{for:e.name}},[t._v("False")])])]):t._e(),t.noInput?t._e():s("i",{class:["radio"!==t.getType(e.type).type?"non-bool-i":"",t.isValidInput(t.inputs[e.name],t.getType(e.type).solidityType)?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])])}),s("div",[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("h4",[t._v(t._s(t.$t("common.value"))+" in ETH:")])])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"non-bool-input",attrs:{step:"any",type:"text",name:"",placeholder:"ETH"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})]),t.selectedMethod.constant?s("div",[t._m(0),s("div",{staticClass:"result-inputs"},["string"===t.resType||"boolean"===t.resType||"number"===t.resType?s("input",{directives:[{name:"model",rawName:"v-model",value:t.result,expression:"result"}],staticClass:"non-bool-input",attrs:{type:"text",name:"",placeholder:"0x00000000000000",disabled:""},domProps:{value:t.result},on:{input:function(e){e.target.composing||(t.result=e.target.value)}}}):t._e(),"object"===t.resType?s("div",t._l(t.selectedMethod.outputs,function(e,a){return s("div",{key:e.name+a,staticClass:"result-container"},[s("label",{attrs:{for:""!==e.name?e.name:e.type+a}},[t._v(t._s(t._f("capitalize")(""!==e.name?e.name:e.type)))]),s("input",{staticClass:"result-input",attrs:{name:""!==e.name?e.name:e.type+a,type:"text",placeholder:"0x00000000000000",disabled:""},domProps:{value:t.result[a]}})])}),0):t._e()])]):t._e()],2):t._e(),s("div",{staticClass:"submit-button-container"},[s("div",{staticClass:"interact-buttons"},[s("div",{staticClass:"submit-button large-round-button-green-border clickable",on:{click:function(e){return t.switchView("backwards")}}},[t._v("\n          "+t._s(t.$t("common.back"))+"\n        ")]),t.selectedMethod.hasOwnProperty("inputs")&&(t.selectedMethod.constant&&t.selectedMethod.inputs.length>0||!t.selectedMethod.constant)?s("div",{class:[t.allValid?"":"disabled",t.loading?"disabled":"","submit-button large-round-button-green-filled clickable"],on:{click:t.write}},[s("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading&&!t.selectedMethod.constant,expression:"!loading && !selectedMethod.constant"}]},[t._v("\n            "+t._s(t.$t("interface.write"))+"\n          ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading&&t.selectedMethod.constant,expression:"!loading && selectedMethod.constant"}]},[t._v(t._s(t.$t("interface.read")))]),s("i",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin fa-lg"})]):t._e()]),s("interface-bottom-text",{attrs:{"link-text":t.$t("interface.helpCenter"),question:t.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)]):s("div",{staticClass:"interact-div"},[s("div",{staticClass:"send-form contract-address-container"},[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("h4",{staticClass:"contract-address-title"},[t._v("\n            "+t._s(t.$t("interface.contractAddr"))+"\n          ")]),s("div",{staticClass:"select-contract no-border"},[s("currency-picker",{attrs:{currency:t.mergedContracts,token:!1,page:"interactWContract"},on:{selectedCurrency:t.selectedContract}})],1)])]),s("div",{staticClass:"the-form domain-name"},[s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{type:"text",name:"nameAddr",placeholder:"Enter Contract Address"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),s("i",{staticClass:"address-validation-check",class:[t.isValidAddress&&""!==t.address?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])]),s("div",{staticClass:"send-form"},[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("h4",[t._v(t._s(t.$t("interface.abiJsonInt")))]),s("div",{staticClass:"copy-buttons"},[s("span",{on:{click:function(e){return t.deleteInput("abi")}}},[t._v(t._s(t.$t("common.clear")))]),s("span",{on:{click:function(e){return t.copyToClipboard("abi")}}},[t._v(t._s(t.$t("common.copy")))])])])]),s("div",{staticClass:"the-form domain-name"},[s("textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.abi,expression:"abi"}],ref:"abi",staticClass:"custom-textarea-1",attrs:{name:"abiField"},domProps:{value:t.abi},on:{input:function(e){e.target.composing||(t.abi=e.target.value)}}}),s("i",{class:[t.isValidAbi&&""!==t.abi?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])]),s("div",{staticClass:"submit-button-container"},[s("div",{class:[t.isValidAbi&&t.isValidAddress&&!t.errors.has("nameAddr")&&!t.errors.has("abiField")?"":"disabled","submit-button large-round-button-green-filled clickable"],on:{click:function(e){return t.switchView("forward")}}},[t._v("\n        "+t._s(t.$t("common.continue"))+"\n        "),s("img",{attrs:{src:a("2ab9")}})]),s("interface-bottom-text",{attrs:{"link-text":t.$t("interface.helpCenter"),question:t.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title-container"},[a("div",{staticClass:"title"},[a("h4",[t._v("Result:")])])])}],i=(a("c5f6"),a("75fc")),r=(a("96cf"),a("3b8d")),o=(a("a481"),a("28a5"),a("7f7f"),a("ac6a"),a("7618")),c=a("cebc"),d=a("2f62"),l=a("d7a2"),u=a("55c1"),p=a("539d"),h=a("ce96"),m=a("b7d3"),v=a("70c1"),f=a("8ded"),b=a.n(f),y={components:{"interface-container-title":u["a"],"interface-bottom-text":p["a"],"currency-picker":l["a"]},data:function(){return{abi:"",address:"",interact:!1,contractMethods:[],selectedMethod:{},result:"",loading:!1,value:0,inputs:{}}},computed:Object(c["a"])({},Object(d["b"])(["network","gasPrice","account","web3"]),{mergedContracts:function(){var t=b.a.get("customContracts")||[];return this.network.type.contracts.concat(t)},isValidAbi:function(){return h["c"].isJson(this.abi)},isValidAddress:function(){return Object(m["a"])(this.address)},noInput:function(){return this.selectedMethod.constant&&0===this.selectedMethod.inputs.length},resType:function(){return Object(o["a"])(this.result)},allValid:function(){var t=this,e=!0;return this.selectedMethod.inputs&&this.selectedMethod.inputs.forEach(function(a){t.isValidInput(t.inputs[a.name],t.getType(a.type).solidityType)||(e=!1)}),e&&this.isValidAbi&&this.isValidAddress},contractArgs:function(){var t=this,e=[];return this.selectedMethod&&this.selectedMethod.inputs.forEach(function(a){if("bytes32[]"===a.type){var s=t.formatInput(t.inputs[a.name]);e.push(s)}else"address"===a.type?e.push(t.inputs[a.name].toLowerCase().trim()):e.push(t.inputs[a.name])}),e}}),watch:{network:function(){this.abi="",this.address="",this.interact=!1,this.contractMethods=[],this.selectedMethod={},this.result=""}},methods:{resetDefaults:function(){this.abi="",this.address="",this.interact=!1,this.contractMethods=[],this.selectedMethod={},this.result="",this.loading=!1,this.value=0,this.inputs={}},isValidInput:h["c"].isContractArgValid,getType:h["c"].solidityType,selectedContract:function(t){""===t.abi?this.abi="":this.abi=JSON.stringify(t.abi),this.address=t.address},selectedFunction:function(t){var e=this;if(t.hasOwnProperty("constant")){var a=new this.web3.eth.Contract([t],this.address.toLowerCase());!0===t.constant&&0===t.inputs.length?a.methods[t.name]().call({from:this.account.address.toLowerCase()}).then(function(t){e.result=t}).catch(function(t){e.loading=!1,h["d"].responseHandler(t,h["d"].WARN)}):this.result="",this.loading=!1,this.selectedMethod=t,this.selectedMethod.inputs.forEach(function(t){"bool"===t.type&&(e.inputs[t.name]=!1)})}},formatInput:function(t){if("["===t[0])return t;var e=t.split(",");return e.map(function(t){return t.replace(" ","")})},copyToClipboard:function(t){this.$refs[t].select(),document.execCommand("copy")},deleteInput:function(t){this.$refs[t].value=""},switchView:function(t){var e=this;switch(t){case"forward":JSON.parse(this.abi).forEach(function(t){"constructor"!==t.type&&void 0!==t.constant&&e.contractMethods.push(t)}),this.interact=!0,this.loading=!1;break;default:this.resetDefaults()}},write:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,a,s,n,r,o,c,d,l,u,p=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.web3,a=new e.eth.Contract([this.selectedMethod],this.address.toLowerCase()),this.loading=!0,!0!==this.selectedMethod.constant){t.next=7;break}(s=a.methods)[this.selectedMethod.name].apply(s,Object(i["a"])(this.contractArgs)).call({from:this.account.address.toLowerCase()}).then(function(t){p.result=t,p.loading=!1}).catch(function(t){p.loading=!1,h["d"].responseHandler(t,!1)}),t.next=15;break;case 7:return t.next=9,e.eth.getTransactionCount(this.account.address.toLowerCase());case 9:return r=t.sent,o=!1,t.next=13,(n=a.methods)[this.selectedMethod.name].apply(n,Object(i["a"])(this.contractArgs)).estimateGas({from:this.account.address.toLowerCase()}).then(function(t){return t}).catch(function(t){p.loading=!1,h["d"].responseHandler(t,h["d"].ERROR),o=!0});case 13:c=t.sent,o||(l=(d=a.methods)[this.selectedMethod.name].apply(d,Object(i["a"])(this.contractArgs)).encodeABI(),u={from:this.account.address.toLowerCase(),gas:c,nonce:r,gasPrice:Number(v["toWei"](this.gasPrice,"gwei")),value:0,to:this.address.toLowerCase(),data:l},this.loading=!1,e.eth.sendTransaction(u).catch(function(t){h["d"].responseHandler(t,h["d"].ERROR)}));case 15:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},g=y,C=(a("698a"),a("2877")),w=Object(C["a"])(g,s,n,!1,null,"06583efb",null),_=w.exports;a.d(e,"default",function(){return _})},"698a":function(t,e,a){"use strict";var s=a("a170"),n=a.n(s);n.a},a170:function(t,e,a){}}]);
//# sourceMappingURL=chunk-3380a2a1.e45725d3.js.map