/**
 * author-datalist-showroom v1.0.0 generated on Mon Apr 29 2019.
 * Built at 20:41:39 GMT-0700 (Pacific Daylight Time)
 * Copyright (c) 2019 Author.io
 */
"use strict";var Demo=new NGNX.VIEW.Registry({selector:".demo",namespace:"demo.",references:{datalistControl:".demo .default"},init:function(){var e=this.ref.datalistControl;window.datalist=e.element.input,datalist.on("focus",function(e){console.log(e)})}});