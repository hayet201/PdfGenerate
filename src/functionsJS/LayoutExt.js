function Layout(layout){
    let footer=layout.footer;
    let res="";
    res+="<div class=\"fixed-footer\">";
    for (let i in footer){
    res+="<p>"+footer[i]+"</p>";
    }
    res+="</div>"

return res;
}
export default Layout;