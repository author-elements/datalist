const Demo = new NGNX.VIEW.Registry({
  selector: '.demo',
  namespace: 'demo.',

  references: {
    datalist: '.demo .default'
  },

  init () {
    window.datalist = this.ref.datalist.element.input

    datalist.focus()
  }
})
