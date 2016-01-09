import components from 'rijs.components'
import singleton from 'rijs.singleton'
import features from 'rijs.features'
import helpers from 'rijs.helpers'
import precss from 'rijs.precss'
import needs from 'rijs.needs'
import core from 'rijs.core'
import data from 'rijs.data'
import css from 'rijs.css'
import fn from 'rijs.fn'

!window.ripple && create()

export default function create(opts){
  var ripple = core()    // empty base collection of resources
 
  // enrich..
  singleton(ripple)      // exposes a single instance
  data(ripple)           // register data types
  css(ripple)            // register css types
  fn(ripple)             // register fn types
  helpers(ripple)        // expose helper functions and constants
  components(ripple)     // invoke web components, fn.call(<el>, data)
  features(ripple)       // extend components with features
  needs(ripple)          // define default attrs for components
  precss(ripple)         // preapplies scoped css 
  
  return ripple
}