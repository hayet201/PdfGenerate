
import ToHtmlTag from "../JsFunction";
function BodyExt(body){
    let parts=body.parts;
    let res="";
    for (let p=0;p<parts.length;p++ ){
        let items=parts[p].items;
        for (let i in items){
         res+=ToHtmlTag(items[i])
        }
    }
    return res;
}
export default BodyExt;