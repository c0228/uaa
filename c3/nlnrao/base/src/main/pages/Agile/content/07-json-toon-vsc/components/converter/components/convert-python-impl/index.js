import React from "react";
import { Highlight } from "e-ui-react";

const CONVERT_EXAMPLE_PYTHON= `import json
import xmltodict
import yaml


# ------------------------------------------
# 1. PARSE INPUT (any format → Python dict)
# ------------------------------------------

def parse_data(input_str: str, from_type: str):
    from_type = from_type.lower()

    if from_type == "json":
        return json.loads(input_str)

    elif from_type == "xml":
        return xmltodict.parse(input_str)

    elif from_type in ("toon", "yaml"):
        return yaml.safe_load(input_str)

    elif from_type == "vsc":
        return yaml.safe_load(input_str)

    else:
        raise ValueError(f"Unsupported input format: {from_type}")


# ------------------------------------------
# 2. DUMP OUTPUT (dict → desired format)
# ------------------------------------------

def dump_data(data: dict, to_type: str):
    to_type = to_type.lower()

    if to_type == "json":
        return json.dumps(data, indent=4)

    elif to_type == "xml":
        return xmltodict.unparse(data, pretty=True)

    elif to_type in ("toon", "yaml"):
        return yaml.dump(data, sort_keys=False)

    elif to_type == "vsc":
        return yaml.dump(data, sort_keys=False)

    else:
        raise ValueError(f"Unsupported output format: {to_type}")


# ------------------------------------------
# 3. MAIN CONVERSION FUNCTION
# ------------------------------------------

def convert_format(input_str: str, from_type: str, to_type: str) -> str:
    """Convert XML ↔ JSON ↔ TOON ↔ VSC using one reusable function."""
    data = parse_data(input_str, from_type)
    return dump_data(data, to_type)


# ------------------------------------------
# 4. LOAD & SAVE HELPERS (optional)
# ------------------------------------------

def load_file(path: str) -> str:
    with open(path, "r", encoding="utf-8") as f:
        return f.read()


def save_file(path: str, text: str):
    with open(path, "w", encoding="utf-8") as f:
        f.write(text)


# ------------------------------------------
# 5. FULL PIPELINE WRAPPER
# ------------------------------------------

def convert_file(input_path: str, from_type: str, to_path: str, to_type: str):
    file_data = load_file(input_path)
    out_data = convert_format(file_data, from_type, to_type)
    save_file(to_path, out_data)
    print(f"Converted {input_path} ({from_type}) → {to_path} ({to_type})")`;

const CONVERT_XMLJSON_PYTHON = `xml_text = load_file("engine.xml")
json_text = convert_format(xml_text, "xml", "json")
save_file("engine.json", json_text)`;

const CONVERT_JSONTOON_PYTHON = `json_text = load_file("engine.json")
toon_text = convert_format(json_text, "json", "toon")
save_file("engine.toon", toon_text)`;

const CONVERT_TOONVSC_PYTHON = `toon_data = load_file("config.toon")
vsc_text = convert_format(toon_data, "toon", "vsc")
save_file("config.vsc", vsc_text)`;

const CONVERT_VSCXML_PYTHON = `vsc_data = load_file("system.vsc")
xml_text = convert_format(vsc_data, "vsc", "xml")
save_file("system.xml", xml_text)`;

const ConversionPythonImplementation = () =>{
  return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
    <div><h5><b>1. Install dependencies (if not installed)</b></h5></div>
    <div className="padLeft5p"><Highlight content={`pip install xmltodict pyyaml`} lang="python" /></div>
    <div><h5><b>2. Code</b></h5></div>
    <div className="padLeft5p"><Highlight content={CONVERT_EXAMPLE_PYTHON} lang="python" /></div>
    <div><h5><b>3. How to use it?</b></h5></div>
    <div className="padLeft5p">
        <div><b>a) Convert XML to JSON</b></div>
        <div className="padLeft5p"><Highlight content={CONVERT_XMLJSON_PYTHON} lang="python" /></div>
    </div>
    <div className="padLeft5p">
        <div><b>b) Convert JSON to TOON</b></div>
        <div className="padLeft5p"><Highlight content={CONVERT_JSONTOON_PYTHON} lang="python" /></div>
    </div>
    <div className="padLeft5p">
        <div><b>c) Convert TOON to VSC</b></div>
        <div className="padLeft5p"><Highlight content={CONVERT_TOONVSC_PYTHON} lang="python" /></div>
    </div>
    <div className="padLeft5p">
        <div><b>d) Convert VSC to XML</b></div>
        <div className="padLeft5p"><Highlight content={CONVERT_VSCXML_PYTHON} lang="python" /></div>
    </div>
  </div>);
};

export default ConversionPythonImplementation;