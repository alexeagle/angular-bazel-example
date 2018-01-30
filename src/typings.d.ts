import * as _d3 from 'd3';

// External libraries that are included as scripts such as D3 are declared as globals
// here with their appropriate types. This typings files is compiled into
// any ts_library or ng_module that requires these types and it makes them available
// as global variables that are properly typed in typescript.
declare global {
  const d3: typeof _d3;
}
