import Promise from 'bluebird'

import common from './common'
import glob from '../../promised/glob'

let self = {
  // skip some typical junk we find in archives that's supposed
  // to be hidden / in trash / isn't in anyway relevant to what
  // we're trying to do
  skip_junk: function (bundle_paths) {
    return Promise.resolve(bundle_paths).filter((file) => {
      if (/__MACOSX/.test(file)) {
        // should be hidden
        return false
      }
      return true
    }).then((files) => files.filter((x) => !!x))
  },

  configure: function (install_path) {
    // gotcha: return '.app' bundles, not actual Mach-O executables
    return (
      glob(`${install_path}/**/*.app/`)
      .then(self.skip_junk)
      .each(common.fix_execs)
      .then((executables) => ({executables}))
    )
  }
}

export default self
