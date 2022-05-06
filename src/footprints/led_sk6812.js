module.exports = {
  nets: {
    GND: "GND",
    VCC: "VCC",
    DIN: "DIN",
    DOUT: "DOUT",
  },
  params: {
    reverse: false,
  },
  body: p => {
    const standard = `
      (module SK6812-Mini-3535 (layer F.Cu) (tedit 5DD50112)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
      
      ${'' /* diode outline */}
      (fp_line (start 2.8 -2) (end -2.8 -2) (layer Dwgs.User) (width 0.05))
      (fp_line (start 2.8 2) (end 2.8 -2) (layer Dwgs.User) (width 0.05))
      (fp_line (start -2.8 2) (end 2.8 2) (layer Dwgs.User) (width 0.05))
      (fp_line (start -2.8 -2) (end -2.8 2) (layer Dwgs.User) (width 0.05))
      (fp_line (start 1.75 0.75) (end 0.75 1.75) (layer F.Fab) (width 0.1))
      (fp_line (start -1.75 -1.75) (end -1.75 1.75) (layer F.Fab) (width 0.1))
      (fp_line (start -1.75 1.75) (end 1.75 1.75) (layer F.Fab) (width 0.1))
      (fp_line (start 1.75 1.75) (end 1.75 -1.75) (layer F.Fab) (width 0.1))
      (fp_line (start 1.75 -1.75) (end -1.75 -1.75) (layer F.Fab) (width 0.1))
      (fp_line (start -2.95 -1.95) (end 2.95 -1.95) (layer F.SilkS) (width 0.12))
      (fp_line (start -2.95 1.95) (end 2.95 1.95) (layer F.SilkS) (width 0.12))
      (fp_line (start 2.95 1.95) (end 2.95 0.875) (layer F.SilkS) (width 0.12))
      (fp_circle (center 0 0) (end 0 -1.5) (layer F.Fab) (width 0.1))

      

      
    `

    function pads(def_side) {
      return `
        (pad 3 smd rect (at 1.75 0.875 ${p.rot}) (size 1.6 0.85) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${p.net.DIN.str})
        (pad 4 smd rect (at 1.75 -0.875 ${p.rot}) (size 1.6 0.85) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${p.net.VCC.str})
        (pad 2 smd rect (at -1.75 0.875 ${p.rot}) (size 1.6 0.85) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${p.net.GND.str})
        (pad 1 smd rect (at -1.75 -0.875 ${p.rot}) (size 1.6 0.85) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${p.net.DOUT.str})
      `
    }
    if (p.param.reverse) {
      return `
      ${standard}
      ${pads('B')}
      ${pads('F')})
      `
    }
    return `
    ${standard}
    ${pads('F')})
    `

    return standard
  }
}