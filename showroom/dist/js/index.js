/**
 * author-datalist-showroom v1.0.0 generated on Mon Apr 15 2019.
 * Built at 13:32:08 GMT-0700 (Pacific Daylight Time)
 * Copyright (c) 2019 Author.io
 */
"use strict";var Demo=new NGNX.VIEW.Registry({selector:".demo",namespace:"demo.",references:{datalist:".demo .default"},init:function(){window.datalist=this.ref.datalist.element.input,window.datalist.on("blur",function(e){console.log("heyyy")})}});