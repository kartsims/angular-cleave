import { Directive, ElementRef } from '@angular/core'
import Cleave from 'cleave.js'

const availableTypes = [
  'creditCard',
  'phone',
  'date',
  'numeral'
]

@Directive({
  selector: '[cleave]',
  inputs: ['cleave']
})
export class CleaveDirective {
  cleaveInstance = null

  constructor(private el: ElementRef) {
    this.el = el
  }

  set cleave(options: any){
    let cleaveOpts = null

    // simple type (see availableTypes)
    if (typeof options === 'string' && availableTypes.indexOf(options) !== -1) {
      cleaveOpts = {}
      cleaveOpts[options] = true
    }

    // literal options object
    if (typeof options === 'string' && options.match(/^\{/)) {
      try {
        cleaveOpts = JSON.parse(options)
      } catch (e) {
        console.error('Angular2 Cleave : options object could not be parsed. Check that JSON syntax is correct.')
      }
    }

    // handle error if option is not available
    if (typeof options === 'string' && cleaveOpts === null) {
      console.error('Angular2 Cleave : option is not valid (%s).\n Available options : %s', options, availableTypes.join(', '))
    }

    // Cleave.js options object
    if (typeof options === 'object') {
      cleaveOpts = options
    }

    // let's go !
    if (cleaveOpts !== null) {
      this.initCleave(cleaveOpts)
    }
  }

  // instanciate Cleave.js
  private initCleave(opts) {
    this.cleaveInstance = new Cleave(this.el.nativeElement, opts)
  }
}
