var _$_969e = ["scenegraph", "commands", "localFileSystem", "storage", "uxp", "./utils", "./widgets", "Spec", "createText", "Vector", "Point", "moveElement", "./materialcolors", "name", "forEach", "children", "allColors", "Material Colors", "Material Colors already Exists", "log", "height", "width", "fillEnabled", "addChild", "items", "material_colors_title", "Material Color Pallets", "createToolBar", "all_colors_bg", "#212121", "createRectC", "all_colors_material_title", "#494949", "Material", "styleRanges", "x", "y", "moveInParentCoordinates", "length", "text", "#FFFFFF", "Segoe UI", "Regular", "#F44336", "", "getColors", "light", "dark", "index", "pallet_color_main", "50", "toString", "Secondary  ", "selected_color_name", "pallet_color_dark", "Light", "pallet_color_light", "Dark", "Bold", "Semibold", "#2B2B2B", "cornerRadii", "fill", "insertionParent", "-fav", "reverse", "slice", "red", "line_break", "#000000", "stroke", "#707070", "strokeWidth", "getDataFolder", "color", "exports"]; var { Artboard, Rectangle, Color } = require(_$_969e[0]); const commands = require(_$_969e[1]); const fs = require(_$_969e[4])[_$_969e[3]][_$_969e[2]]; const utils = require(_$_969e[5]); const widgets = require(_$_969e[6]); const Spec = widgets[_$_969e[7]]; const createText = widgets[_$_969e[8]]; const Vector = widgets[_$_969e[9]]; const Point = utils[_$_969e[10]]; const moveElement = utils[_$_969e[11]]; const colors = require(_$_969e[12]); function checkIfExists(_0x74A1, _0x760E) { var _0x7931 = false; _0x74A1[_$_969e[15]][_$_969e[14]]((_0x74EA) => { if (_0x74EA instanceof Artboard) { if (_0x74EA[_$_969e[13]] == _0x760E) { _0x7931 = true } } }); return _0x7931 } var allColors = colors[_$_969e[16]]; function secColorsUi(_0x76A0, _0x74A1, _0x7AE7) { var _0x7931 = checkIfExists(_0x74A1, _$_969e[17]); if (_0x7931) { console[_$_969e[19]](_$_969e[18]) } else { const _0x852B = new Artboard(); _0x852B[_$_969e[13]] = _$_969e[17]; _0x852B[_$_969e[20]] = 2731; _0x852B[_$_969e[21]] = 866; _0x852B[_$_969e[22]] = false; _0x74A1[_$_969e[23]](_0x852B); _0x76A0[_$_969e[24]] = [_0x852B]; var _0x812D = [_$_969e[25], _$_969e[26]]; const _0x85BD = new Spec(0, 0, 232, 50); const _0x8176 = widgets[_$_969e[27]](_0x76A0, _0x812D, _0x85BD); createMainPallets(_0x76A0); widgets[_$_969e[30]](_0x76A0, new Spec(866, 2095, 0, 636), _$_969e[28], _$_969e[29], new Vector(0, 0, 26, 26)); widgets[_$_969e[30]](_0x76A0, new Spec(784, 125, 41, 663), _$_969e[31], _$_969e[32], new Vector(20, 20, 20, 20)); var _0x8574 = widgets[_$_969e[8]](_0x76A0, new Spec(0, 0, 355, 46 + 697), _$_969e[33]); _0x8574[_$_969e[34]] = style_title(_0x8574); moveElement(_0x8574, new Point(355, 697)); createSwatches(_0x76A0); var _0x7732 = _0x7AE7[_$_969e[35]]; var _0x777B = _0x7AE7[_$_969e[36]]; var _0x76E9 = _0x7AE7[_$_969e[21]]; _0x852B[_$_969e[37]](_0x7732 + _0x76E9 + 100, _0x777B) } } function style_title(_0x8574) { return [{ length: _0x8574[_$_969e[39]][_$_969e[38]], fill: new Color(_$_969e[40]), fontFamily: _$_969e[41], fontStyle: _$_969e[42], fontSize: 43, charSpacing: 0, underline: false }] } var sec_colors_selected = _$_969e[43]; var sec_colors_index; var sec_colors_light = _$_969e[44]; var sec_colors_dark = _$_969e[44]; function createMainPallets(_0x76A0) { var _0x7B30 = utils[_$_969e[45]](sec_colors_selected); sec_colors_dark = _0x7B30[_$_969e[46]]; sec_colors_light = _0x7B30[_$_969e[47]]; sec_colors_index = _0x7B30[_$_969e[48]]; const _0x7E53 = new Spec(433, 480, 0, 156); const _0x7E0A = _$_969e[49]; const _0x7DC1 = sec_colors_selected; createMainPallet(_0x76A0, _0x7E53, _0x7E0A, _0x7DC1); var _0x780D = (sec_colors_index == 0) ? _$_969e[50] : sec_colors_index[_$_969e[51]](); var _0x7E9C = widgets[_$_969e[8]](_0x76A0, new Spec(0, 0, 39, 198 + 53), _$_969e[52] + _0x780D); _0x7E9C[_$_969e[13]] = _$_969e[53]; _0x7E9C[_$_969e[34]] = style_sec_main_title(_0x7E9C); moveElement(_0x7E9C, new Point(39, 198)); const _0x7D2F = new Spec(433, 240, 433, 156); const _0x7CE6 = _$_969e[54]; const _0x7C9D = sec_colors_light; createMainPallet(_0x76A0, _0x7D2F, _0x7CE6, _0x7C9D); var _0x7D78 = widgets[_$_969e[8]](_0x76A0, new Spec(0, 0, 494, 231 + 53), _$_969e[55]); _0x7D78[_$_969e[34]] = style_sec_light_title(_0x7D78); moveElement(_0x7D78, new Point(494, 231)); const _0x7C0B = new Spec(433, 240, 433, 396); const _0x7BC2 = _$_969e[56]; const _0x7B79 = sec_colors_dark; createMainPallet(_0x76A0, _0x7C0B, _0x7BC2, _0x7B79); var _0x7C54 = widgets[_$_969e[8]](_0x76A0, new Spec(0, 0, 494, 451 + 53), _$_969e[57]); _0x7C54[_$_969e[34]] = style_sec_dark_title(_0x7C54); moveElement(_0x7C54, new Point(494, 451)) } function style_sec_main_title(_0x8574) { return [{ length: _0x8574[_$_969e[39]][_$_969e[38]], fill: new Color(_$_969e[40]), fontFamily: _$_969e[41], fontSize: 49, fontStyle: _$_969e[58], charSpacing: 0, underline: false }] } function style_sec_dark_title(_0x8574) { return [{ length: _0x8574[_$_969e[39]][_$_969e[38]], fill: new Color(_$_969e[40]), fontFamily: _$_969e[41], fontSize: 49, fontStyle: _$_969e[59], charSpacing: 0, underline: false }] } function style_sec_light_title(_0x8574) { return [{ length: _0x8574[_$_969e[39]][_$_969e[38]], fill: new Color(_$_969e[60]), fontFamily: _$_969e[41], fontSize: 49, fontStyle: _$_969e[59], charSpacing: 0, underline: false }] } function createMainPallet(_0x76A0, _0x7AE7, _0x760E, _0x797A) { const _0x7A9E = new Rectangle(); _0x7A9E[_$_969e[13]] = _0x760E; _0x7A9E[_$_969e[21]] = _0x7AE7[_$_969e[21]]; _0x7A9E[_$_969e[20]] = _0x7AE7[_$_969e[20]]; _0x7A9E[_$_969e[61]] = { topLeft: 0, topRight: 0, bottomLeft: 0, bottomRight: 0 }; _0x7A9E[_$_969e[62]] = new Color(_0x797A); _0x76A0[_$_969e[63]][_$_969e[23]](_0x7A9E); _0x7A9E[_$_969e[37]](_0x7AE7[_$_969e[35]], _0x7AE7[_$_969e[36]]) } function createSwatches(_0x76A0) { var _0x7533 = 60; var _0x76E9 = 78; var _0x7732 = 44; var _0x777B = 824; colors[_$_969e[67]][_$_969e[66]]()[_$_969e[65]]()[_$_969e[14]]((_0x77C4, _0x757C) => { palletItemList(_0x76A0, new PalletItem(new Spec(_0x76E9, _0x7533, _0x7732 + _0x76E9 * _0x757C, _0x777B), _0x77C4, _0x77C4 + _$_969e[64])) }); var _0x8009 = widgets[_$_969e[30]](_0x76A0, new Spec(780, 3, 44, 918), _$_969e[68], _$_969e[69], new Vector(0, 0, 0, 0)); _0x8009[_$_969e[70]] = new Color(_$_969e[71]); _0x8009[_$_969e[72]] = 1; var _0x7F77 = 44; var _0x7FC0 = 921 - _0x7533; allColors[_$_969e[14]]((_0x8052) => { _0x7FC0 = _0x7FC0 + 33 + _0x7533; _0x8052[_$_969e[66]]()[_$_969e[65]]()[_$_969e[14]]((_0x77C4, _0x757C, _0x809B) => { var _0x75C5 = palletItemList(_0x76A0, new PalletItem(new Spec(_0x76E9, _0x7533, _0x7F77 + _0x76E9 * _0x757C, _0x7FC0), _0x77C4, _0x77C4)) }) }) } async function getFavColor() { var _0x832C = await fs[_$_969e[73]]() } function palletItemList(_0x76A0, _0x75C5) { const _0x8450 = new Rectangle(); _0x8450[_$_969e[13]] = _0x75C5[_$_969e[13]]; _0x8450[_$_969e[21]] = _0x75C5[_$_969e[21]]; _0x8450[_$_969e[20]] = _0x75C5[_$_969e[20]]; _0x8450[_$_969e[61]] = { topLeft: 0, topRight: 0, bottomLeft: 0, bottomRight: 0 }; _0x8450[_$_969e[62]] = new Color(_0x75C5[_$_969e[74]]); _0x76A0[_$_969e[63]][_$_969e[23]](_0x8450); _0x8450[_$_969e[37]](_0x75C5[_$_969e[35]], _0x75C5[_$_969e[36]]); return _0x8450 } class PalletItem extends Spec { constructor(_0x7AE7, _0x797A, _0x760E) { super(_0x7AE7[_$_969e[21]], _0x7AE7[_$_969e[20]], _0x7AE7[_$_969e[35]], _0x7AE7[_$_969e[36]]); this[_$_969e[74]] = _0x797A; this[_$_969e[13]] = _0x760E } }; module[_$_969e[75]] = { secColorsUi, PalletItem, palletItemList, getFavColor }