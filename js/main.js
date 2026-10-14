// Embed every Vega-Lite specification into its container.
var specs = {
  "#vis1": "js/01_almond_growth.vg.json",
  "#vis2": "js/02_value_waffle.vg.json",
  "#vis3": "js/03_state_heatmap.vg.json",
  "#vis4": "js/04_choropleth_diversity.vg.json",
  "#vis5": "js/05_symbol_maps.vg.json",
  "#vis6": "js/06_almond_region_dumbbell.vg.json",
  "#vis7": "js/07_macadamia_slope.vg.json",
  "#vis8": "js/08_macadamia_trend.vg.json",
  "#vis9": "js/09_export_flow_map.vg.json",
  "#vis10": "js/10_almond_export_bump.vg.json",
  "#vis11": "js/11_trade_butterfly.vg.json",
  "#vis12": "js/12_global_macadamia_range.vg.json"
};

Object.keys(specs).forEach(function (id) {
  vegaEmbed(id, specs[id], { actions: false, renderer: "svg" }).catch(console.error);
});
