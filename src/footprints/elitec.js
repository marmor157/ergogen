module.exports = {
  nets: {
    GND: "GND",
    RST: "RST",
    VCC: "VCC",
    B0: "B0",
    B1: "B1",
    B2: "B2",
    B3: "B3",
    B4: "B4",
    B5: "B5",
    B6: "B6",
    B7: "B7",
    C6: "C6",
    C7: "C7",
    D0: "D0",
    D1: "D1",
    D2: "D2",
    D3: "D3",
    D4: "D4",
    D5: "D5",
    D7: "D7",
    E6: "E6",
    F0: "F0",
    F1: "F1",
    F4: "F4",
    F5: "F5",
    F6: "F6",
    F7: "F7",
  },
  params: {
    class: "MCU",
    orientation: "down",
  },
  body: (p) => {
    const standard = `
      (module Elite-C (layer F.Cu) (tedit 5BDF551E)
      ${p.at /* parametric position */}

      ${"" /* footprint reference */}
      (fp_text reference ${p.ref} (at 0 1.625) (layer F.SilkS) ${p.ref_hide}(effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

      ${"" /* illustration of the (possible) USB port overhang */}
      (fp_line (start -14.224 -3.556) (end -14.224 3.81) (layer Dwgs.User) (width 0.2))
      (fp_line (start -14.224 3.81) (end -19.304 3.81) (layer Dwgs.User) (width 0.2))
      (fp_line (start -19.304 3.81) (end -19.304 -3.556) (layer Dwgs.User) (width 0.2))
      (fp_line (start -19.304 -3.556) (end -14.224 -3.556) (layer Dwgs.User) (width 0.2))

      ${"" /* component outline */}
      (fp_line (start -17.78 8.89) (end 15.24 8.89) (layer F.SilkS) (width 0.15))
      (fp_line (start 15.24 8.89) (end 15.24 -8.89) (layer F.SilkS) (width 0.15))
      (fp_line (start 15.24 -8.89) (end -17.78 -8.89) (layer F.SilkS) (width 0.15))
      (fp_line (start -17.78 -8.89) (end -17.78 8.89) (layer F.SilkS) (width 0.15))
    `;

    function pins(def_neg, def_pos) {
      return `
        ${"" /* extra border around "RAW", in case the rectangular shape is not distinctive enough */}
        (fp_line (start -15.24 ${def_pos}6.35) (end -12.7 ${def_pos}6.35) (layer F.SilkS) (width 0.15))
        (fp_line (start -15.24 ${def_pos}6.35) (end -15.24 ${def_pos}8.89) (layer F.SilkS) (width 0.15))
        (fp_line (start -12.7 ${def_pos}6.35) (end -12.7 ${def_pos}8.89) (layer F.SilkS) (width 0.15))

        ${"" /* pin names */}
        (fp_text user GND (at -11.43 ${def_neg}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user GND (at -8.89 ${def_pos}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user GND (at -6.35 ${def_pos}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user VCC (at -6.35 ${def_neg}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user RST (at -8.92 ${def_neg}5.73312 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))

        (fp_text user B0 (at -13.97 ${def_neg}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B1 (at 6.35 ${def_neg}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B2 (at 11.43 ${def_neg}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B3 (at 8.89 ${def_neg}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B4 (at 11.43 ${def_pos}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user B5 (at 12.7 ${def_pos}6.4 ${p.rot + 45}) (layer F.SilkS) (effects (font (size 0.7 0.7) (thickness 0.15))))
        (fp_text user B6 (at 12.7 ${def_neg}6.4 ${p.rot + 135} unlocked) (layer F.SilkS) (effects (font (size 0.7 0.7) (thickness 0.15))))
        (fp_text user B7 (at 12.6 ${def_pos}4.5 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.7 0.7) (thickness 0.15))))

        (fp_text user C6 (at 3.81 ${def_pos}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user C7 (at 12.4 0 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))

        (fp_text user D0 (at -1.27 ${def_pos}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user D1 (at -3.81 ${def_pos}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user D2 (at -11.43 ${def_pos}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user D3 (at -13.97 ${def_pos}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user D4 (at 1.27 ${def_pos}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user D5 (at 12.4 ${def_pos}2.54 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user D7 (at 6.35 ${def_pos}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))

        (fp_text user E6 (at 8.89 ${def_pos}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))

        (fp_text user F0 (at 12.6 ${def_neg}4.5 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.7 0.7) (thickness 0.15))))
        (fp_text user F1 (at 12.4 ${def_neg}2.54 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user F4 (at -3.81 ${def_neg}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user F5 (at -1.27 ${def_neg}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user F6 (at 1.27 ${def_neg}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user F7 (at 3.81 ${def_neg}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))


        ${"" /* and now the actual pins */}
        (pad 1 thru_hole rect (at -13.97 ${def_pos}7.62 ${p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.D3.str})
        (pad 2 thru_hole circle (at -11.43 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.D2.str})
        (pad 3 thru_hole circle (at -8.89 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.GND.str})
        (pad 4 thru_hole circle (at -6.35 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.GND.str})
        (pad 5 thru_hole circle (at -3.81 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.D1.str})
        (pad 6 thru_hole circle (at -1.27 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.D0.str})
        (pad 7 thru_hole circle (at 1.27 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.D4.str})
        (pad 8 thru_hole circle (at 3.81 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.C6.str})
        (pad 9 thru_hole circle (at 6.35 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.D7.str})
        (pad 10 thru_hole circle (at 8.89 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.E6.str})
        (pad 11 thru_hole circle (at 11.43 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B4.str})
        (pad 12 thru_hole circle (at 13.97 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B5.str})

        (pad 13 thru_hole circle (at 13.97 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B6.str})
        (pad 14 thru_hole circle (at 11.43 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B2.str})
        (pad 15 thru_hole circle (at 8.89 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B3.str})
        (pad 16 thru_hole circle (at 6.35 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B1.str})
        (pad 17 thru_hole circle (at 3.81 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.F7.str})
        (pad 18 thru_hole circle (at 1.27 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.F6.str})
        (pad 19 thru_hole circle (at -1.27 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.F5.str})
        (pad 20 thru_hole circle (at -3.81 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.F4.str})
        (pad 21 thru_hole circle (at -6.35 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.VCC.str})
        (pad 22 thru_hole circle (at -8.89 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.RST.str})
        (pad 23 thru_hole circle (at -11.43 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.GND.str})
        (pad 24 thru_hole circle (at -13.97 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B0.str})

        (pad 25 thru_hole circle (at 13.97 ${def_pos}5.08) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.B7.str})
        (pad 26 thru_hole circle (at 13.97 ${def_pos}2.54) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.D5.str})
        (pad 27 thru_hole circle (at 13.97 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.C7.str})
        (pad 28 thru_hole circle (at 13.97 ${def_neg}2.54) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.F1.str})
        (pad 29 thru_hole circle (at 13.97 ${def_neg}5.08) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.net.F0.str})
      `;
    }

    if (p.param.orientation == "down") {
      return `
        ${standard}
        ${pins("-", "")})
      `;
    }
    return `
      ${standard}
      ${pins("", "-")})
    `;
  },
}