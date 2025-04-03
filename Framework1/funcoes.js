    var ctxCabecalho;
    var ctxLinks;
    var ctxConteudo;
    var ctxRodape;

    function configEstiloCabecalho(){
        bg=document.getElementById("corFundo").value;
        corFonte=document.getElementById("corFonte").value;
        tamFonte=document.getElementById("tamFonte").value;
        ctxCabecalho="#cabecalho{\n background-color:"+bg+";\n";
        ctxCabecalho+=" color:"+corFonte+";\n";
        ctxCabecalho+=" font-size:"+tamFonte+"pt;\n}\n";
        return ctxCabecalho;
    };
    function configEstiloLinks(){
        corLink=document.getElementById("corLinks").value;
        estiloLinks=document.querySelector('input[name="estiloLinks"]:checked').value;
        ctxLinks="a{\n color:"+corLink+";\n";
        let aux=estiloLinks=="0"?"none":"underline";
        ctxLinks+=" text-decoration:"+aux+";\n}\n";
        return ctxLinks;
    };
    function configHtmlLinks(){
        links=document.getElementsByName("links");
        href=document.getElementsByName("href");
        ctxLinks="";
        for(let i=0;i<links.length;i++){
            href=href[i].value.split("\\");
            ctxLinks+='<a href="'+href[href.length-1]+'">'+links[i].value+'</a>';
        }
        return ctxLinks;   
    };
    function configHTMLCabecalho(){
        let aux=document.querySelector("#textoCabecalho").value;
        ctxCabecalho='<h1>'+aux+"</h1>";
        return ctxCabecalho;
    }




    function gerarCodigo(){
        //codigo para css
        let codeCSS=document.querySelector("#codeCSS");
        let css=configEstiloCabecalho();
        css+=configEstiloLinks();
        codeCSS.value=css;
        //codigo para HTML
        let codeHTML=document.querySelector("#codeHTML");
        ctxHTML="<html>\n<head>\n"+
        "<link rel='stylesheet' href='estilo.css'>\n"+
        "<title>Minha pagina</title>\n"+
        "</head>\n<body>" +
        "<div id='cabecalho'>"+configHTMLCabecalho()+"</div>\n" +
        "<nav id='links'>\n"+configHtmlLinks()+"\n</nav>\n" +
        "<div id='conteudo'></div>\n" +
        "</body>\n</html>";
        codeHTML.value=ctxHTML;

    }
    function download(campo,arquivo){
        if(arquivo.trim()==='')
            arquivo=document.getElementById("nomeHTML").value+".html";
        var text = document.getElementById(campo).value;
        var blob = new Blob([text], {type: "text/plain"});
        var a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = arquivo.trim();
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }


    function addLink() {
        let linkText = document.createElement("input");
        linkText.type = "text";
        linkText.name = "links";
        linkText.classList.add("rounded-3", "border-dark", "mb-2");
        linkText.placeholder = "Texto do link";
    
        let linkURL = document.createElement("input");
        linkURL.type = "file";  
        linkURL.name = "href";
        linkURL.classList.add("rounded-3", "border-dark", "mb-2");
        
        let linksContainer = document.querySelector("#linksContainer");
        linksContainer.appendChild(linkText);
        linksContainer.appendChild(linkURL);
        linksContainer.appendChild(document.createElement("br"));
    }