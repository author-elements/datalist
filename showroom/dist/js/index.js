/**
 * author-datalist-showroom v1.0.0 generated on Thu May 02 2019.
 * Built at 23:08:54 GMT-0700 (Pacific Daylight Time)
 * Copyright (c) 2019 Author.io
 */
"use strict";var Demo=new NGNX.VIEW.Registry({selector:".demo",namespace:"demo.",references:{datalistControl:".demo .default"},init:function(){var t=this.ref.datalistControl;window.datalist=t.element.input,datalist.on("focus",function(t){console.log(t)}),datalist.focus(),setTimeout(function(){return datalist.blur()},1e3)}});