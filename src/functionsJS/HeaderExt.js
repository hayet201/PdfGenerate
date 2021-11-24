import ToHtmlTag from "../JsFunction";
function HeaderExt(header){
    let items=header.items;
    let res=""; 
    for (let i in items){
        res+= ToHtmlTag(items[i]);
    }
    return res;
}
export default HeaderExt;