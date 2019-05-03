const Demo = new NGNX.VIEW.Registry({
  selector: '.demo',
  namespace: 'demo.',

  references: {
    datalistControl: '.demo .default'
  },

  init () {
    let { datalistControl } = this.ref

    window.datalist = datalistControl.element.input

    // datalist.addFilter('test', () => {
    //   console.log(test);
    // })

    datalist.on('focus', evt => {
      console.log(evt);
    })

    datalist.focus()
  }
})
