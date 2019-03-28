/**
 * author-datalist-showroom v1.0.0 generated on Wed Mar 27 2019.
 * Built at 22:07:13 GMT-0700 (Pacific Daylight Time)
 * Copyright (c) 2019 Author.io
 */
"use strict";var Demo=new NGNX.VIEW.Registry({selector:".demo",namespace:"demo.",references:{datalist:".demo .default"},init:function(){this.ref.datalist.element.input.on("option.selected",function(e){console.log(e)})}});