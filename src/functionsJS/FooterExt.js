import ToHtmlTag from "../JsFunction";
function FooterExt(footer){
    let res="";
    res+=ToHtmlTag(footer.items[0]);
    let SignItems=footer.signatories;
    let k=1;
    res+="<div class=\"signature\" >";
    for (let i in SignItems){
        res+="<div class=\"sign" +k+"\">";
        for (let j in SignItems[i].items){
            res+=ToHtmlTag(SignItems[i].items[j]);
        }
        k+=1;
        res+="</div>"
    }
    res+="</div>";
    return res;
}
export default FooterExt;