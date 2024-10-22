import m from "https://esm.sh/mithril";
import Parser from "../models/SaveParser.js";

const UploadForm = {
    oncreate: (vnode) => {
      vnode.dom.addEventListener("change", Parser.readSave.bind(Parser));
    },
  
    view: () => {
      return m("form",
          [m("input#saveFile", {type: "file", accept: ".gci", style: "display:none;", onchange: "Parser.readSave.bind(this)"}),
          m("label#saveFileLabel", {for: "saveFile"}, "Upload your SMS save")]
      )
    }
}

export default UploadForm;