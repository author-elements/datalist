const Demo = new NGNX.VIEW.Registry({
  selector: '.demo',
  namespace: 'demo.',

  references: {
    datalist: '.demo .default'
  },

  init () {
    this.ref.datalist.element.input.on('option.selected', detail => {
      console.log(detail);
    })
  }
})
