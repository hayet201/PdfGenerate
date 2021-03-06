


import React, {Component} from 'react';
import signature from '../assets/images/signature.png';
import header from '../assets/images/image2.png';
import sign from '../assets/images/sign.png';

import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from '@react-pdf/renderer';
const newstyles = StyleSheet.create({
  page: {
    display: 'flex',
    // marginTop: 10,
  },      
  bodyView: {
    margin: 0,
    padding: 0,
    width: '100%',
    display: 'flex',
    height: '100%',
  },
  wiewLeft: {
    float: 'left',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    margin: 0,
  },
  wiewLeft2:{
    float: 'left',
    backgroundColor: 'white',
    top:20,
    left:28
  },
  wiewLeftContent: {
    padding: 10,
    left:'20px',
    lineHeight:'2px'
  },
  header:{
    color: 'black',
    fontSize:18,
    textAlign:'center'
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
  wiewLeft1: {
    display:'flex',
    justifyContent:'space-around',
    padding:'0px',
    top:'20px',
    flexDirection:'row',
   
  },
  wiewLeft8: {
    display:'flex',
    justifyContent:'flex-start',
    padding:'0px',
    top:'40px',
    flexDirection:'row',
    marginLeft:'50px',
    
   
  },
  viewContent:{
    //   top: 10,
      padding: 10,
      marginLeft:'20px',
      lineHeight:'1.5',
    
  },
  viewContentEmploy:{
    top: 10,
    padding: 10,
    marginLeft:'20px',
    lineHeight:'2'
  },
  wiewLeftContent1: {
    top:100,
    lineHeight:'2px',
    width:'50%',
    marginLeft:50
  },
  wiewLeftContent8: {
    top:100,
    lineHeight:'2px',
    width:'50%',
    marginLeft:0
  },
  textTitle2: {
    fontSize: 11,
    fontWeight: '8000',
    color: 'black',
    // width: '80%',
  }, 
  textTitle22: {
    fontSize: 9,
    fontWeight: '8000',
    fontStyle:'italic',
    color: 'black',
    // width: '80%',
  }, 
  textTitle1: {
    fontSize: 11,
    fontWeight: '1000',
    color: 'black',
  }, 
  textTitle11: {
    fontSize: 5,
    fontWeight: 'bold',
    color: 'gray',
    textAlign:'center'
  },
bannerImage:{
    display:'flex',
    flexDirection:'row',
  
},
Title:{
  fontSize:14,
  fontWeight:'8000',
  color:'black'
},
content:{
  fontSize:11,
  textAlign:'justify',
  width:'90%',

},
content1:{
  fontSize:11,
  textAlign:'justify',
  width:'90%',
  lineHeight:'2px'
},
TitleArticle:{
  color: 'black',
  fontSize:16,
  fontWeight:'8000',

},
wiewLeftContent11:{
    bottom:10,
    padding: 10,
    width:'90%',
    marginLeft:'20px',
    lineHeight:'1.5px'
  },
  wiewLeftContent111:{
    top:60,
    padding: 10,
    width:'90%',
    marginLeft:'20px',
    lineHeight:'1.5px'
  },
  wiewLeftContentFooter1:{
    top:50,
    padding: 10,
    width:'90%',
    marginLeft:'20px',
    lineHeight:'1.5px'
  },
  footer:{
    bottom:40,
    padding: 10,
    width:'90%',
    marginLeft:'20px',
    lineHeight:'1.5px'
  },
  wiewLeftContentfoot4:{
    top:20,
    padding: 10,
    width:'90%',
    marginLeft:'20px',
    lineHeight:'1.5px'
  },
  wiewLeftContentfooter:{
    top:515,
    padding: 10,
    width:'90%',
    marginLeft:'20px',
    lineHeight:'1.5px'
  },
image:{
  width:'100%',
},
image1:{
    width:70,
    height:70,
    marginLeft:10
},
line:{
        border: '1px solid #302e2e',
          width: '150px',
          bottom:20,
          marginLeft:0,
          fontWeight:'8000'    
}
});
const pdfGenerator= () => {
  return (
    <Document>
      <Page size="A4">
        <View style={newstyles.bodyView}>
          <View style={newstyles.banner}>
            <Image
            style={newstyles.image}
            src={header}
            />
          </View>
          <View style={newstyles.wiewLeft}>
            <View style={newstyles.viewContent}>
              <Text style={newstyles.header}>
              Contrat de prestations de services
              </Text>
              <Text style={newstyles.header}>
              Formateur ind??pendant           
                </Text>
            </View>
            <View style={newstyles.viewContentEmploy}>
                <Text style={newstyles.Title}>
                ENTRE-LES SOUSSIGN??S :
                </Text>
                <Text style={newstyles.content}>
                <Text style={newstyles.Title}>1. M.PLAIS Ludovic</Text> n?? le 17/08/1969 ?? Saint-Cloud, de nationalit?? Fran??aise, demeurant 23 av. de
                Longueil B??t. D, 78600 Maisons-Laffitte immatricul?? au registre du commerce et des soci??t??s sous le
                num??ro SIRET 83143395800012;
                Ci-apr??s d??nomm?? le <Text style={newstyles.Title}>"Prestataire" ;</Text>
                </Text>
                <Text style={newstyles.Title}>
                ET
                </Text>
                <Text style={newstyles.content}>
                <Text style={newstyles.Title}>2. SIELI,</Text> SAS, dont le si??ge social est situ?? 15 rue des Halles 75001 Paris, immatricul??e au registre
                du commerce et des soci??t??s sous le num??ro d'identification 882 869 300013 RCS de Paris,
                repr??sent?? par Silvya STOJANOVIC en sa qualit?? de Pr??sidente, d??ment habilit?? ;
                Ci-apr??s d??nomm?? le <Text style={newstyles.Title}>"Client"</Text> ;
                Le Prestataire et le Client ??tant ci-apr??s d??nomm??s, ensemble, les <Text style={newstyles.Title}>"Parties"</Text> ou, l'un d'entre eux
                indiff??remment, une <Text style={newstyles.Title}>"Partie". </Text>             
                </Text>
            </View>
            <View style={newstyles.viewContentEmploy}>
                <Text style={newstyles.Title}>
                ETANT PREALABLEMENT RAPPELE CE QUI SUIT :
                </Text>
                <Text style={newstyles.content}>
                Le Prestataire exerce une activit?? de formateur en <Text style={newstyles.Title}>graphisme et communication</Text> 
                Le Client a souhait?? avoir recours aux services du Prestataire.
                A cet effet, le Client a sign?? un bon de commande (figurant en Annexe au pr??sent contrat) du
                Prestataire.
                </Text>
                <Text style={newstyles.content}>
                Dans ces circonstances, le Prestataire et le Client se sont rapproch??s pour conclure le pr??sent
                  contrat de prestations de services (le "Contrat") afin de d??finir et convenir des modalit??s des
                  services du Prestataire au b??n??fice du Client.
                </Text>
            </View>
            <View style={newstyles.viewContentEmploy}>
                <Text style={newstyles.Title}>
                IL A ETE CONVENU CE QUI SUIT :
                </Text>
            </View>
            <View style={newstyles.viewContent}>
                <Text style={newstyles.TitleArticle}>
                Article 1 - Objet du Contrat et missions du prestataire
                </Text>
                <Text style={newstyles.content}>
                Le pr??sent Contrat a pour objet la r??alisation de prestations de services de formation, telles que
                d??finies ci-dessous :
                </Text>
                <Text style={newstyles.content}>
                Formation en t??l??pr??sentiel sur Adobe XD interm??diaire
                (ci-apr??s la <Text style={newstyles.Title}>"Mission"</Text> )
                </Text>
            </View>
          </View>        
        </View> 
        
        <View style={newstyles.bodyView}>
          <View style={newstyles.banner}>
          <Image
            style={newstyles.image}
            src={header}
            />
          </View>
          <View style={newstyles.wiewLeft}>
            <View style={newstyles.viewContent}>
                <Text style={newstyles.content}>
                Ce contrat est subordonn?? ?? la remise des documents suivants, par <Text style={newstyles.Title}>M.PLAIS Ludovic,</Text> le prestataire
                formateur, au centre de formation SIELI :
                </Text>
            </View>
            <View style={newstyles.viewContent}>
                <Text style={newstyles.content}>
                ??? Curriculum vitae
                </Text>
                <Text style={newstyles.content}>
                ??? Dipl??mes
                </Text>
                <Text style={newstyles.content}>
                ??? Photocopie de la Carte Nationale d???Identit??
                </Text>
                <Text style={newstyles.content}>
                ??? KBIS de l???organisme de facturations
                </Text>
                <Text style={newstyles.content}>
                ??? Une attestation sur l???honneur du d??p??t des d??clarations fiscales obligatoires aupr??s de
                l???administration fiscale et le r??c??piss?? du d??p??t de d??claration effectu??e au centre de
                formalit??s des entreprises (CFE) ou de l???URSSAF
                </Text>
                <Text style={newstyles.content}>
                ??? Num??ro de d??claration d???activit??s
                </Text>
                <Text style={newstyles.content}>
                ??? Une attestation provenant des organismes de protection sociale de moins de six mois
                ??tablissant qu???il/elle est ?? jour de ses d??clarations sociales
                </Text>
            </View>
            <View style={newstyles.viewContent}>
                <Text style={newstyles.TitleArticle}>
                Article 2 - Modalit??s de r??alisation de la Mission
                </Text>
                <Text style={newstyles.content}>
                <Text style={newstyles.Title}>2.1.</Text> Le Prestataire s'engage envers le Client ?? r??aliser la Mission telle que d??finie ?? l'Article 1 du
                pr??sent Contrat, avec le plus grand professionnalisme, ?? respecter les dispositions l??gales et
                r??glementaires applicables et ?? se conformer aux normes et proc??dures applicables.                </Text>
                <Text style={newstyles.content}>
                Le Prestataire s???engage ?? mobiliser les moyens techniques n??cessaires ?? l???ex??cution de la Mission
                qu???il s???engage ainsi ?? fournir, ??tant convenu en tant que de besoin que le Prestataire sera seul ma??tre
                de la d??finition des moyens affect??s ?? l???ex??cution de la Mission sans que le Client ne puisse
                interf??rer de quelque mani??re que ce soit dans ce choix.                
                </Text>
                <Text style={newstyles.content}>
                Le Prestataire informera le Client du d??roulement de la Mission dans un d??lai raisonnable suivant
                toute demande en ce sens du Client.                
                </Text>
                <Text style={newstyles.content}>
                <Text style={newstyles.Title}>2.2.</Text>  Le Client s???engage ?? coop??rer pleinement avec le Prestataire en vue de faciliter au mieux les
                conditions d'intervention du Prestataire et la bonne ex??cution des pr??sentes et, ?? cet effet,
                notamment :                
                </Text>
                <Text style={newstyles.content}>
                ??? ne rien faire ou laisser faire qui puisse ??tre de nature ?? emp??cher l???ex??cution par le Prestataire
                de la Mission ou ?? la rendre plus difficile ou on??reuse, sous r??serve de la protection l??gitime par
                le Client de ses int??r??ts ;              
                </Text>
                <Text style={newstyles.content}>
                ??? transmettre en temps utile au Prestataire l???ensemble des informations n??cessaires ?? l???ex??cution
                par ce dernier de sa Mission dans les meilleures conditions ;              
                </Text>
                <Text style={newstyles.content}>
                ??? informer en temps utile le Prestataire de toute d??cision, tout ??l??ment et toute pr??cision
                susceptibles d???avoir un impact sur la Mission.              
                </Text>
                <Text style={newstyles.content}>
                <Text style={newstyles.Title}>2.3.</Text>  Le formateur s'engage au respect du r??f??rentiel Qualiopi et notamment des missions suivantes
                qui lui sont confi??es, ?? savoir :           
                </Text>
                <Text style={newstyles.content}>
                ??? L?????laboration des supports p??dagogiques         
                </Text>
                <Text style={newstyles.content}>
                ??? Le process d?????valuation           
                </Text>
            </View>
          </View>       
        </View> 

        <View style={newstyles.bodyView}>
            <View style={newstyles.banner}>
                <Image
                    style={newstyles.image}
                    src={header}
                    />
            </View>
            <View style={newstyles.wiewLeft}>
                <View style={newstyles.viewContent}>
                    <Text style={newstyles.content}>
                    ??? L???accueil, le suivi, l???accompagnement du stagiaire             
                    </Text>
                    <Text style={newstyles.content}>
                    ??? Engagement des b??n??ficiaires et gestion des absences              
                    </Text>
                    <Text style={newstyles.content}>
                    ??? Adaptation au public et aux PSH             
                    </Text>
                    <Text style={newstyles.content}>
                    ??? La mise ?? jour des supports p??dagogiques            
                    </Text>
                    <Text style={newstyles.content}>
                    ??? La mise ?? jour des comp??tences              
                    </Text>
                    <Text style={newstyles.content}>
                    ??? Les contrats et CV               
                    </Text>
                    <Text style={newstyles.content}>
                    ??? ??valuation des formateurs              
                    </Text>
                    <Text style={newstyles.content}>
                    ??? La veille m??tier et technologique et p??dagogique              
                    </Text>
                    <Text style={newstyles.content}>
                    ??? Recueil des appr??ciations des parties prenantes               
                    </Text>
                </View>
                <View style={newstyles.viewContent}>
                  <Text style={newstyles.TitleArticle}>
                  Article 3 - Usage des r??sultats
                  </Text>
                  <Text style={newstyles.content}>
                  Les r??sultats de la Mission seront en la pleine ma??trise du Client, ?? compter du paiement int??gral de
                  la prestation ?? ??ch??ance et le Client pourra en disposer comme il l'entend. Le Prestataire, pour sa
                  part, s'interdit de faire ??tat des r??sultats dont il s'agit et de les utiliser de quelque mani??re, sauf ??
                  obtenir pr??alablement l'autorisation ??crite du Client (??tant pr??cis?? en tant que de besoin que cette
                  stipulation n'interdit pas au prestataire d'utiliser librement son propre savoir-faire).
                  </Text>
                </View>
                <View style={newstyles.viewContent}>
                  <Text style={newstyles.TitleArticle}>
                  Article 4 - Information pr??contractuelle
                  </Text>
                  <Text style={newstyles.content}>
                  Le Prestataire s'est renseign?? sur les besoins du Client et a, avant la conclusion du Contrat, mis le
                  Client en mesure de conna??tre les caract??ristiques essentielles du service au titre de la Mission, ce
                  que le Client reconna??t.
                  </Text>
                  <Text style={newstyles.content}>
                  Il a ??galement apport?? les conseils n??cessaires au Client pour l'appr??ciation de l'utilit?? de la
                  prestation au titre de la Mission.
                  </Text>
                </View> 
                <View style={newstyles.viewContent}>
                  <Text style={newstyles.TitleArticle}>
                  Article 5 - Dur??e du Contrat et horaires
                  </Text>
                  <Text style={newstyles.content}>
                  Le Contrat prend effet le 08/09/2021. Il est conclu pour une dur??e ferme de 7H, soit 1 jours ?? compter
                  de sa date de prise d'effet.
                  </Text>
                  <Text style={newstyles.content}>
                  La prestation sera r??alis??e selon les horaires fix??s par le Client, c'est-??-dire de 9H00 ?? 17H00 avec
                  une pause d???une heure le midi.
                  </Text>
                  <Text style={newstyles.content}>
                  Il ne sera pas renouvelable par tacite reconduction, sauf d??cision expresse et commune des Parties
                  de le reconduire.
                  </Text>
                  <Text style={newstyles.content}>
                  Sans pr??judice de la responsabilit?? de l'une ou l'autre des Parties en cas d'ex??cution d??fectueuse du
                  Contrat, il est express??ment convenu qu'aucune indemnit?? de part ou d'autre ne sera due du seul fait
                  de la cessation du Contrat.
                  </Text>
                  <Text style={newstyles.content}>
                  Le Prestataire s'engage ?? ce que la prestation de services au titre de la Mission soit pleinement
                  r??alis??e et livr??e au plus tard 08/09/21
                  </Text>
                </View> 
            </View>            
        </View>  

        <View style={newstyles.bodyView}>
            <View style={newstyles.banner}>
                <Image
                    style={newstyles.image}
                    src={header}
                    />
            </View>
            <View style={newstyles.wiewLeft}>
                <View style={newstyles.viewContent}>
                  <Text style={newstyles.TitleArticle}>
                  Article 6 - R??siliation anticip??e du Contrat
                  </Text>
                  <Text style={newstyles.content}>
                  En cas de manquement de l???une des Parties ?? l???une de ses obligations essentielles express??ment
                  pr??vues au Contrat, l???autre Partie pourra notifier le manquement et sa volont?? de r??silier le Contrat
                  de mani??re anticip??e ?? l???autre Partie.
                  </Text>
                  <Text style={newstyles.content}>
                    Cette notification, valant mise en demeure, devra se r??f??rer ?? la pr??sente clause, pr??ciser le
                    manquement consid??r?? et ??tre adress??e par lettre recommand??e avec avis de r??ception. Une telle
                    notification sera irr??fragablement pr??sum??e avoir ??t?? re??ue au jour de la premi??re pr??sentation de la
                    lettre recommand??e pr??cit??e au domicile ou si??ge de la Partie concern??e indiqu?? dans les
                    pr??sentes.                  
                  </Text>
                  <Text style={newstyles.content}>
                  Sauf ?? ce que le manquement soit r??par?? ou que les Parties trouvent un accord, la r??siliation du
                  Contrat prendra effet apr??s l'expiration d'un d??lai de pr??avis de 10 jours ?? compter de la r??ception de
                  la notification vis??e ci-avant.
                  </Text>
                </View>
                <View style={newstyles.viewContent}>
                  <Text style={newstyles.TitleArticle}>
                  Article 7 - R??mun??ration du Prestataire et Paiement de la
                  r??mun??ration
                  </Text>
                  <Text style={newstyles.content}>
                    En contrepartie de la r??alisation des prestations au titre de la Mission, le Prestataire aura droit ?? une
                    r??mun??ration au temps pass?? de prestations calcul??e sur la base d'un taux de 300 eur TTC par jour.
                    Tout paiement donnera lieu ?? une facture ?? en-t??te ??tablie par le Prestataire comportant l'ensemble
                    des indications l??gales en vigueur.
                  </Text>
                  <Text style={newstyles.content}>
                  Le paiement de la r??mun??ration interviendra selon le calendrier suivant :
                  </Text>
                  <Text style={newstyles.content}>
                  30/45 jours ?? date de facture.
                  </Text>
                  <Text style={newstyles.content}>
                  Le paiement par le Client de la prestation au titre de la Mission s'effectuera par le(s) moyen(s) de
                  paiement suivant(s) :
                  </Text>
                  <Text style={newstyles.content}>
                  virement bancaire.
                  </Text>
                  <Text style={newstyles.content}>
                  Le Prestataire aura par ailleurs droit, en m??me temps que sa r??mun??ration, au remboursement des
                  frais expos??s dans le cadre de l???exercice de la Mission pr??alablement valid??s par le Client et sur
                  production des justificatifs correspondants.
                  </Text>
                </View> 
                <View style={newstyles.viewContent}>
                  <Text style={newstyles.TitleArticle}>
                  Article 8 - Intuitu Personae - Sous-traitance
                  </Text>
                  <Text style={newstyles.content}>
                  Le Contrat ne peut pas faire l'objet d'une cession totale ou partielle par une Partie (y compris en cas
                  de fusion ou d'op??ration assimilable), ?? titre on??reux ou gracieux, sans l'accord pr??alable et ??crit de
                  l'autre Partie.
                  </Text>
                  <Text style={newstyles.content}>
                  Le Prestataire n'aura pas la possibilit?? de sous-traiter tout ou partie de sa Mission sans l'accord
                  pr??alable et ??crit du Client. Sauf accord expr??s du Client en ce sens, aucune sous-traitance de tout
                  </Text>
                </View>
            </View>            
        </View> 

        <View style={newstyles.bodyView}>
            <View style={newstyles.banner}>
                <Image
                    style={newstyles.image}
                    src={header}
                    />
            </View>
            <View style={newstyles.wiewLeft}>
                <View style={newstyles.viewContent}>
                  <Text style={newstyles.content}>
                  ou partie de la Mission autoris??e par le Client ne pourra avoir pour effet de d??charger le Prestataire
                  de ses obligations et/ou de sa responsabilit?? au titre du Contrat.
                  </Text>
                  <Text style={newstyles.TitleArticle}>
                  Article 9 - D??claration d'ind??pendance r??ciproque
                  </Text>
                  <Text style={newstyles.content}>
                  La relation ??tablie entre le Client et le Prestataire est celle d'entreprises ind??pendantes et
                  autonomes. Aucune clause du Contrat ne pourra ??tre interpr??t??e comme donnant ?? l'une des Parties
                  le pouvoir de diriger les activit??s de l'autre Partie ni de contr??ler l???autre d???une mani??re ou d???une autre.
                  Le Contrat vise exclusivement l'objet d??fini en son Article 1 et ne contient aucune forme ni intention
                  de constituer une soci??t?? de droit ou de fait, les Parties ??tant d??pourvues d'affectio societatis. Le
                  Prestataire pourra s???organiser librement dans l???ex??cution du Contrat, dans la mesure o?? il n???existe
                  entre les Parties aucun lien de subordination mais uniquement un lien contractuel de nature
                  commerciale.
                  </Text>
                  <Text style={newstyles.content}>
                  Aucune des Parties ne pourra, en outre, sauf mandat particulier, ??crit, expr??s et pr??alable de l???autre
                  Partie, ??tre consid??r??e comme repr??sentant de l???autre Partie, et ce ?? quelque titre et sous quelque
                  modalit?? que ce soit.
                  </Text>
                  <Text style={newstyles.content}>
                  Il est express??ment convenu que le Contrat est sp??cifique et qu???aucune de ses stipulations ne peut
                  amener ?? des revendications autres que celles d??coulant des obligations express??ment pr??vues
                  dans le Contrat.
                  </Text>
                  <Text style={newstyles.content}>
                  Le pr??sent Contrat n???habilite en aucun cas le Prestataire ?? engager le Client vis-??-vis de quiconque
                  dans la mesure o?? il ne comporte aucun mandat.
                  </Text>
                  <Text style={newstyles.content}>
                  Il est enfin pr??cis?? en tant que de besoin que le Client sera libre de suivre ou non toutes
                  pr??conisations ??ventuelles du Prestataire.
                  </Text>
                </View>
                <View style={newstyles.viewContent}>
                  <Text style={newstyles.TitleArticle}>
                  Article 10 - D??clarations des Parties
                  </Text>
                  <Text style={newstyles.content}>
                  Chacune des Parties d??clare :
                  </Text>
                  <Text style={newstyles.content}>
                  ??? avoir la pleine capacit?? juridique,
                  </Text>
                  <Text style={newstyles.content}>
                  ??? que rien ne s'oppose ?? la conclusion du Contrat.
                  </Text>
                  <Text style={newstyles.content}>
                  ??? exercer ses activit??s en conformit?? avec la r??glementation qui lui est applicable,
                  </Text>
                  <Text style={newstyles.content}>
                  ??? que la conclusion du Contrat ne contrevient ?? aucune obligation l??gale r??glementaire,
                  professionnelle ou contractuelle qui la lie.
                  </Text>
                  <Text style={newstyles.content}>
                  ??? ??tre en r??gle dans ses d??clarations fiscales et sociales
                  </Text>
                  <Text style={newstyles.content}>
                  Le Client d??clare :
                  </Text>
                  <Text style={newstyles.content}>
                  ??? exister valablement et r??guli??rement au regard du droit auquel il est soumis,
                  </Text>
                  <Text style={newstyles.content}>
                  ??? que la personne qui signe le Contrat en son nom a tout pouvoir ?? cet effet et que ce Contrat lui
                  est valablement et r??guli??rement opposable.
                  </Text>
                </View> 
                <View style={newstyles.viewContent}>
                  <Text style={newstyles.TitleArticle}>
                  Article 11 - Travail dissimul??
                  </Text>
                  <Text style={newstyles.content}>
                      <Text style={newstyles.Title}>11.1.</Text>En application de la loi sur le travail ill??gal et de ses d??crets d'application, le Prestataire certifie
                  que dans l???hypoth??se o?? il recourait pour l???ex??cution des pr??sentes ?? un ou plusieurs salari??s ou ??
                  </Text>
                </View>
            </View>            
        </View> 

        <View style={newstyles.bodyView}>
            <View style={newstyles.banner}>
                <Image
                    style={newstyles.image}
                    src={header}
                    />
            </View>
            <View style={newstyles.wiewLeft}>
                <View style={newstyles.viewContent}>
                  <Text style={newstyles.content1}>
                    un ou plusieurs prestataires, les prestations objet du Contrat seront r??alis??es par des salari??s
                    r??guli??rement embauch??s ou des prestataires intervenant de mani??re valable et r??guli??re.
                  </Text>
                  <Text style={newstyles.content1}>
                    <Text style={newstyles.Title}>11.2.</Text>  En outre, dans l???hypoth??se o?? le Prestataire recourait ?? des salari??s pour l???ex??cution du
                    Contrat, ce dernier s???engage ?? compter de leur embauche et tous les six (6) mois jusqu'?? la fin de
                    l???ex??cution du Contrat, ?? communiquer au Client tous les documents requis au titre de l'article
                    D. 8222-5 du Code du travail et notamment :
                  </Text>
                  <Text style={newstyles.content1}>
                    ??? une attestation de fourniture de d??clarations sociales ??manant de l'organisme de protection
                    sociale charg?? du recouvrement des cotisations lui incombant et datant de moins de six (6) mois
                    ;
                  </Text>
                  <Text style={newstyles.content1}>
                    ??? un extrait de l'inscription du Prestataire au registre du commerce et des soci??t??s ;
                  </Text>
                  <Text style={newstyles.content1}>
                    ??? une attestation sur l'honneur de la r??alisation du travail par des salari??s employ??s r??guli??rement
                    au regard des articles L.1221-10 et suivants, L.3243-1 et suivants et R.3243-3 et suivants du
                    Code du travail.
                  </Text>
                  <Text style={newstyles.TitleArticle}>
                  Article 12 - Responsabilit?? - Assurance
                  </Text>
                  <Text style={newstyles.content1}>
                    Chacune des Parties sera responsable de la bonne ex??cution des obligations qui lui incombent aux
                    termes des pr??sentes. Le Prestataire restera par ailleurs seul responsable du fait de ses pr??pos??s le
                    cas ??ch??ant.
                  </Text>
                  <Text style={newstyles.content1}>
                    Le Prestataire ne sera responsable que des dommages directs caus??s au client r??sultant de ses
                    fautes ou de sa n??gligence (?? l'exclusion de tout cas de force majeure ou de l'usage par le Client du
                    service non conforme aux pr??conisations du Prestataire).
                  </Text>
                  <Text style={newstyles.content1}>
                    Chacune des Parties s???engage en cons??quence ?? pr??venir l???autre sans d??lai de tout retard ou de tout
                    manquement dans l???ex??cution du Contrat ou des missions pr??vues au Contrat qu???elle identifiera, de
                    fa??on ?? ??viter la survenance d???un pr??judice pour quiconque.
                  </Text>
                  <Text style={newstyles.content1}>
                    Le Prestataire d??clare avoir souscrit une assurance responsabilit?? civile professionnelle le couvrant
                    dans le cadre de ses activit??s et notamment au titre de la Mission.
                  </Text>
                </View>
                <View style={newstyles.viewContent}>
                  <Text style={newstyles.TitleArticle}>
                    Article 13 - Exclusion de garantie
                  </Text>
                  <Text style={newstyles.content1}>
                    Le Prestataire exclut toute garantie autre que les garanties l??gales pr??vues par le droit en vigueur
                    applicables ?? la prestation de services au titre du Contrat.
                  </Text>
                  <Text style={newstyles.content1}>
                    La garantie l??gale applicable ne pourra pas jouer en cas de non-paiement par le Client des
                    prestations au titre du Contrat.
                  </Text>
                </View> 
            </View>            
        </View> 

        <View style={newstyles.bodyView}>
            <View style={newstyles.banner}>
                <Image
                    style={newstyles.image}
                    src={header}
                    />
            </View>
            <View style={newstyles.wiewLeft}>
                <View style={newstyles.viewContent}>
                  <Text style={newstyles.TitleArticle}>
                  Article 14 - Dispositions g??n??rales
                  </Text>
                  <Text style={newstyles.Title}>
                  14.1. Bonne foi et coop??ration
                  </Text>
                  <Text style={newstyles.content}>
                  Les Parties s'engagent ?? toujours se comporter l'une envers l'autre comme des partenaires loyaux et
                  de bonne foi et notamment ?? s'informer mutuellement de toute difficult?? qu'elles pourraient rencontrer
                  ?? l'occasion de l'ex??cution du Contrat ainsi qu????? coop??rer ?? la bonne ex??cution du Contrat.
                  </Text>
                  <Text style={newstyles.Title}>
                  14.2. Modification du Contrat
                  </Text>
                  <Text style={newstyles.content}>
                  Aucun document post??rieur, aucune modification du Contrat quelle qu'en soit la forme ne produira
                  d'effet entre les Parties sans prendre la forme d'un avenant d??ment dat?? et sign?? par elles.
                  </Text>
                  <Text style={newstyles.Title}>
                  14.3. Nullit??
                  </Text>
                  <Text style={newstyles.content}>
                  Si l'une quelconque des stipulations du Contrat s'av??rait nulle au regard d'une r??gle de droit en
                  vigueur ou d'une d??cision judiciaire devenue d??finitive, elle serait alors r??put??e non ??crite, sans pour
                  autant entra??ner la nullit?? du Contrat ni alt??rer la validit?? de ses autres stipulations.                  
                  </Text>
                  <Text style={newstyles.Title}>
                  14.4. Renonciation
                  </Text>
                  <Text style={newstyles.content}>
                  Toute renonciation, quelle qu???en soit la dur??e, ?? invoquer l???existence ou la violation totale ou partielle
                  d???une quelconque des clauses du Contrat ne peut constituer une modification, une suppression de
                  ladite clause ou une renonciation ?? invoquer les validations ant??rieures, concomitantes ou
                  post??rieures de la m??me clause ou d???autres clauses. Une telle renonciation n???aura d'effet que si elle
                  est exprim??e par un ??crit sign?? par la personne d??ment habilit??e ?? cet effet.                 
                  </Text>
                  <Text style={newstyles.Title}>
                  14.5. Domiciliation
                  </Text>
                  <Text style={newstyles.content}>
                  Pour l'ex??cution de l'ensemble du Contrat et de ses suites, le B??n??ficiaire et le Prestataire font
                  ??lection de domicile en leurs adresses telles que mentionn??es dans leurs comparutions ci-avant.                 
                  </Text>
                  <Text style={newstyles.content1}>
                  Tout changement de domicile et toute notification au titre du Contrat par l???une des Parties ne sera
                  opposable ?? l???autre que si elle est faite (i) par lettre recommand??e avec accus?? de r??ception ou par
                  courrier remis en main propre contre re??u, ??tant pr??cis?? que toute notification sera pr??sum??e avoir
                  ??t?? re??ue dans le premier cas ?? la date de premi??re pr??sentation de ladite lettre ?? l???adresse de la
                  Partie concern??e et dans le second cas ?? la date de remise en main propre.                 
                  </Text>
                  <Text style={newstyles.Title}>
                  14.6. Droit applicable - R??glement des diff??rends
                  </Text>
                  <Text style={newstyles.content}>
                  Le Contrat est soumis au droit fran??ais.                
                  </Text>
                  <Text style={newstyles.content}>
                  Les diff??rends qui surviendraient entre les Parties relatifs ?? la conclusion, l'ex??cution ou
                  l'interpr??tation du Contrat seront soumis aux tribunaux comp??tents.                 
                  </Text>
                  <Text style={newstyles.content}>
                  Fait ?? Paris en deux exemplaires originaux,               
                  </Text>
                  <Text style={newstyles.content}>
                    Le 06/09/2021                 
                  </Text>
                </View>
            </View>            
        </View> 

        <View style={newstyles.bodyView}>
            <View style={newstyles.banner}>
                <Image
                    style={newstyles.image}
                    src={header}
                    />
            </View>
            <View style={newstyles.wiewLeft}>              
                <View style={newstyles.wiewLeft1}>
                      <View style={newstyles.wiewLeftContent1}>
                        <hr style={newstyles.line}/>
                        <Text style={newstyles.textTitle1}>
                        Le Client
                        </Text>
                        <Text style={newstyles.textTitle1}>
                        SIELI
                        </Text>
                        <Text style={newstyles.textTitle1}>
                        Silvya Stojanovic, Pr??sidente
                        </Text>
                        <View style={newstyles.bannerImage}>
                          <Image src={signature} style={newstyles.image1}/>               
                        </View> 
                      </View>
                      <View style={newstyles.wiewLeftContent1}>
                          <hr style={newstyles.line}/>
                          <Text style={newstyles.textTitle2}>
                          Le Prestataire
                          </Text>
                          <Text style={newstyles.textTitle2}>
                          Ludovic PLAIS
                          </Text>
                          <View style={newstyles.bannerImage}>
                            <Image src={sign} style={newstyles.image1}/>                 
                          </View>                   
                      </View>
                  </View> 
                <View style={newstyles.wiewLeft8}>
                      <View style={newstyles.wiewLeftContent8}>
                          <Text style={newstyles.textTitle2}>
                            Paraphez chaque page du contrat
                          </Text>
                        <Text style={newstyles.textTitle22}>
                          Annexes
                        </Text>
                        <Text style={newstyles.textTitle22}>
                          ??? Copie du bon de commande du Client
                        </Text>                   
                      </View>
                </View> 
            </View>            
        </View>   
            <Text style={newstyles.pageNumber} render={({ pageNumber, totalPages }) => (
            `${pageNumber} / ${totalPages}`
          )} fixed />
            <View  style={newstyles.footer} fixed>
                    <Text style={newstyles.textTitle11}>
                    www.sieli.fr | 15 rue des Halles 75001 Paris
                    </Text>
                    <Text style={newstyles.textTitle11}>
                    SAS au capital de 5000 ??? inscrite au RCS de Paris | SIRET : 882 869 183 000 13 | Code NAF : 8559A | D??claration d???activit?? enregistr??e sous le num??ro 11756025375 aupr??s du pr??fet                    </Text>
                    <Text style={newstyles.textTitle11}>
                    de r??gion d???Ile-de-France. | Cet enregistrement ne vaut pas agr??ment de l'Etat ?? (article L. 6352-12 du code du travail)
                    </Text>
        
            </View>
      </Page>
  </Document>
  );
  
}
class PDFGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = { 
     }
}

  render() { 

    return ( 
      <div className="App">
      <div>

    <PDFDownloadLink document={pdfGenerator()} fileName="pdfgenerator.pdf" id='data'>
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' :<button type="button" class="btn btn-secondary btn">PDF Generator</button>)}
    </PDFDownloadLink>
  </div>
    </div>
     );
  }
}

export default PDFGenerator; 

