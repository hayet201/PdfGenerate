


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
              Formateur indépendant           
                </Text>
            </View>
            <View style={newstyles.viewContentEmploy}>
                <Text style={newstyles.Title}>
                ENTRE-LES SOUSSIGNÉS :
                </Text>
                <Text style={newstyles.content}>
                <Text style={newstyles.Title}>1. M.PLAIS Ludovic</Text> né le 17/08/1969 à Saint-Cloud, de nationalité Française, demeurant 23 av. de
                Longueil Bât. D, 78600 Maisons-Laffitte immatriculé au registre du commerce et des sociétés sous le
                numéro SIRET 83143395800012;
                Ci-après dénommé le <Text style={newstyles.Title}>"Prestataire" ;</Text>
                </Text>
                <Text style={newstyles.Title}>
                ET
                </Text>
                <Text style={newstyles.content}>
                <Text style={newstyles.Title}>2. SIELI,</Text> SAS, dont le siège social est situé 15 rue des Halles 75001 Paris, immatriculée au registre
                du commerce et des sociétés sous le numéro d'identification 882 869 300013 RCS de Paris,
                représenté par Silvya STOJANOVIC en sa qualité de Présidente, dûment habilité ;
                Ci-après dénommé le <Text style={newstyles.Title}>"Client"</Text> ;
                Le Prestataire et le Client étant ci-après dénommés, ensemble, les <Text style={newstyles.Title}>"Parties"</Text> ou, l'un d'entre eux
                indifféremment, une <Text style={newstyles.Title}>"Partie". </Text>             
                </Text>
            </View>
            <View style={newstyles.viewContentEmploy}>
                <Text style={newstyles.Title}>
                ETANT PREALABLEMENT RAPPELE CE QUI SUIT :
                </Text>
                <Text style={newstyles.content}>
                Le Prestataire exerce une activité de formateur en <Text style={newstyles.Title}>graphisme et communication</Text> 
                Le Client a souhaité avoir recours aux services du Prestataire.
                A cet effet, le Client a signé un bon de commande (figurant en Annexe au présent contrat) du
                Prestataire.
                </Text>
                <Text style={newstyles.content}>
                Dans ces circonstances, le Prestataire et le Client se sont rapprochés pour conclure le présent
                  contrat de prestations de services (le "Contrat") afin de définir et convenir des modalités des
                  services du Prestataire au bénéfice du Client.
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
                Le présent Contrat a pour objet la réalisation de prestations de services de formation, telles que
                définies ci-dessous :
                </Text>
                <Text style={newstyles.content}>
                Formation en téléprésentiel sur Adobe XD intermédiaire
                (ci-après la <Text style={newstyles.Title}>"Mission"</Text> )
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
                Ce contrat est subordonné à la remise des documents suivants, par <Text style={newstyles.Title}>M.PLAIS Ludovic,</Text> le prestataire
                formateur, au centre de formation SIELI :
                </Text>
            </View>
            <View style={newstyles.viewContent}>
                <Text style={newstyles.content}>
                • Curriculum vitae
                </Text>
                <Text style={newstyles.content}>
                • Diplômes
                </Text>
                <Text style={newstyles.content}>
                • Photocopie de la Carte Nationale d’Identité
                </Text>
                <Text style={newstyles.content}>
                • KBIS de l’organisme de facturations
                </Text>
                <Text style={newstyles.content}>
                • Une attestation sur l’honneur du dépôt des déclarations fiscales obligatoires auprès de
                l’administration fiscale et le récépissé du dépôt de déclaration effectuée au centre de
                formalités des entreprises (CFE) ou de l’URSSAF
                </Text>
                <Text style={newstyles.content}>
                • Numéro de déclaration d’activités
                </Text>
                <Text style={newstyles.content}>
                • Une attestation provenant des organismes de protection sociale de moins de six mois
                établissant qu’il/elle est à jour de ses déclarations sociales
                </Text>
            </View>
            <View style={newstyles.viewContent}>
                <Text style={newstyles.TitleArticle}>
                Article 2 - Modalités de réalisation de la Mission
                </Text>
                <Text style={newstyles.content}>
                <Text style={newstyles.Title}>2.1.</Text> Le Prestataire s'engage envers le Client à réaliser la Mission telle que définie à l'Article 1 du
                présent Contrat, avec le plus grand professionnalisme, à respecter les dispositions légales et
                réglementaires applicables et à se conformer aux normes et procédures applicables.                </Text>
                <Text style={newstyles.content}>
                Le Prestataire s’engage à mobiliser les moyens techniques nécessaires à l’exécution de la Mission
                qu’il s’engage ainsi à fournir, étant convenu en tant que de besoin que le Prestataire sera seul maître
                de la définition des moyens affectés à l’exécution de la Mission sans que le Client ne puisse
                interférer de quelque manière que ce soit dans ce choix.                
                </Text>
                <Text style={newstyles.content}>
                Le Prestataire informera le Client du déroulement de la Mission dans un délai raisonnable suivant
                toute demande en ce sens du Client.                
                </Text>
                <Text style={newstyles.content}>
                <Text style={newstyles.Title}>2.2.</Text>  Le Client s’engage à coopérer pleinement avec le Prestataire en vue de faciliter au mieux les
                conditions d'intervention du Prestataire et la bonne exécution des présentes et, à cet effet,
                notamment :                
                </Text>
                <Text style={newstyles.content}>
                • ne rien faire ou laisser faire qui puisse être de nature à empêcher l’exécution par le Prestataire
                de la Mission ou à la rendre plus difficile ou onéreuse, sous réserve de la protection légitime par
                le Client de ses intérêts ;              
                </Text>
                <Text style={newstyles.content}>
                • transmettre en temps utile au Prestataire l’ensemble des informations nécessaires à l’exécution
                par ce dernier de sa Mission dans les meilleures conditions ;              
                </Text>
                <Text style={newstyles.content}>
                • informer en temps utile le Prestataire de toute décision, tout élément et toute précision
                susceptibles d’avoir un impact sur la Mission.              
                </Text>
                <Text style={newstyles.content}>
                <Text style={newstyles.Title}>2.3.</Text>  Le formateur s'engage au respect du référentiel Qualiopi et notamment des missions suivantes
                qui lui sont confiées, à savoir :           
                </Text>
                <Text style={newstyles.content}>
                • L’élaboration des supports pédagogiques         
                </Text>
                <Text style={newstyles.content}>
                • Le process d’évaluation           
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
                    • L’accueil, le suivi, l’accompagnement du stagiaire             
                    </Text>
                    <Text style={newstyles.content}>
                    • Engagement des bénéficiaires et gestion des absences              
                    </Text>
                    <Text style={newstyles.content}>
                    • Adaptation au public et aux PSH             
                    </Text>
                    <Text style={newstyles.content}>
                    • La mise à jour des supports pédagogiques            
                    </Text>
                    <Text style={newstyles.content}>
                    • La mise à jour des compétences              
                    </Text>
                    <Text style={newstyles.content}>
                    • Les contrats et CV               
                    </Text>
                    <Text style={newstyles.content}>
                    • Évaluation des formateurs              
                    </Text>
                    <Text style={newstyles.content}>
                    • La veille métier et technologique et pédagogique              
                    </Text>
                    <Text style={newstyles.content}>
                    • Recueil des appréciations des parties prenantes               
                    </Text>
                </View>
                <View style={newstyles.viewContent}>
                  <Text style={newstyles.TitleArticle}>
                  Article 3 - Usage des résultats
                  </Text>
                  <Text style={newstyles.content}>
                  Les résultats de la Mission seront en la pleine maîtrise du Client, à compter du paiement intégral de
                  la prestation à échéance et le Client pourra en disposer comme il l'entend. Le Prestataire, pour sa
                  part, s'interdit de faire état des résultats dont il s'agit et de les utiliser de quelque manière, sauf à
                  obtenir préalablement l'autorisation écrite du Client (étant précisé en tant que de besoin que cette
                  stipulation n'interdit pas au prestataire d'utiliser librement son propre savoir-faire).
                  </Text>
                </View>
                <View style={newstyles.viewContent}>
                  <Text style={newstyles.TitleArticle}>
                  Article 4 - Information précontractuelle
                  </Text>
                  <Text style={newstyles.content}>
                  Le Prestataire s'est renseigné sur les besoins du Client et a, avant la conclusion du Contrat, mis le
                  Client en mesure de connaître les caractéristiques essentielles du service au titre de la Mission, ce
                  que le Client reconnaît.
                  </Text>
                  <Text style={newstyles.content}>
                  Il a également apporté les conseils nécessaires au Client pour l'appréciation de l'utilité de la
                  prestation au titre de la Mission.
                  </Text>
                </View> 
                <View style={newstyles.viewContent}>
                  <Text style={newstyles.TitleArticle}>
                  Article 5 - Durée du Contrat et horaires
                  </Text>
                  <Text style={newstyles.content}>
                  Le Contrat prend effet le 08/09/2021. Il est conclu pour une durée ferme de 7H, soit 1 jours à compter
                  de sa date de prise d'effet.
                  </Text>
                  <Text style={newstyles.content}>
                  La prestation sera réalisée selon les horaires fixés par le Client, c'est-à-dire de 9H00 à 17H00 avec
                  une pause d’une heure le midi.
                  </Text>
                  <Text style={newstyles.content}>
                  Il ne sera pas renouvelable par tacite reconduction, sauf décision expresse et commune des Parties
                  de le reconduire.
                  </Text>
                  <Text style={newstyles.content}>
                  Sans préjudice de la responsabilité de l'une ou l'autre des Parties en cas d'exécution défectueuse du
                  Contrat, il est expressément convenu qu'aucune indemnité de part ou d'autre ne sera due du seul fait
                  de la cessation du Contrat.
                  </Text>
                  <Text style={newstyles.content}>
                  Le Prestataire s'engage à ce que la prestation de services au titre de la Mission soit pleinement
                  réalisée et livrée au plus tard 08/09/21
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
                  Article 6 - Résiliation anticipée du Contrat
                  </Text>
                  <Text style={newstyles.content}>
                  En cas de manquement de l’une des Parties à l’une de ses obligations essentielles expressément
                  prévues au Contrat, l’autre Partie pourra notifier le manquement et sa volonté de résilier le Contrat
                  de manière anticipée à l’autre Partie.
                  </Text>
                  <Text style={newstyles.content}>
                    Cette notification, valant mise en demeure, devra se référer à la présente clause, préciser le
                    manquement considéré et être adressée par lettre recommandée avec avis de réception. Une telle
                    notification sera irréfragablement présumée avoir été reçue au jour de la première présentation de la
                    lettre recommandée précitée au domicile ou siège de la Partie concernée indiqué dans les
                    présentes.                  
                  </Text>
                  <Text style={newstyles.content}>
                  Sauf à ce que le manquement soit réparé ou que les Parties trouvent un accord, la résiliation du
                  Contrat prendra effet après l'expiration d'un délai de préavis de 10 jours à compter de la réception de
                  la notification visée ci-avant.
                  </Text>
                </View>
                <View style={newstyles.viewContent}>
                  <Text style={newstyles.TitleArticle}>
                  Article 7 - Rémunération du Prestataire et Paiement de la
                  rémunération
                  </Text>
                  <Text style={newstyles.content}>
                    En contrepartie de la réalisation des prestations au titre de la Mission, le Prestataire aura droit à une
                    rémunération au temps passé de prestations calculée sur la base d'un taux de 300 eur TTC par jour.
                    Tout paiement donnera lieu à une facture à en-tête établie par le Prestataire comportant l'ensemble
                    des indications légales en vigueur.
                  </Text>
                  <Text style={newstyles.content}>
                  Le paiement de la rémunération interviendra selon le calendrier suivant :
                  </Text>
                  <Text style={newstyles.content}>
                  30/45 jours à date de facture.
                  </Text>
                  <Text style={newstyles.content}>
                  Le paiement par le Client de la prestation au titre de la Mission s'effectuera par le(s) moyen(s) de
                  paiement suivant(s) :
                  </Text>
                  <Text style={newstyles.content}>
                  virement bancaire.
                  </Text>
                  <Text style={newstyles.content}>
                  Le Prestataire aura par ailleurs droit, en même temps que sa rémunération, au remboursement des
                  frais exposés dans le cadre de l’exercice de la Mission préalablement validés par le Client et sur
                  production des justificatifs correspondants.
                  </Text>
                </View> 
                <View style={newstyles.viewContent}>
                  <Text style={newstyles.TitleArticle}>
                  Article 8 - Intuitu Personae - Sous-traitance
                  </Text>
                  <Text style={newstyles.content}>
                  Le Contrat ne peut pas faire l'objet d'une cession totale ou partielle par une Partie (y compris en cas
                  de fusion ou d'opération assimilable), à titre onéreux ou gracieux, sans l'accord préalable et écrit de
                  l'autre Partie.
                  </Text>
                  <Text style={newstyles.content}>
                  Le Prestataire n'aura pas la possibilité de sous-traiter tout ou partie de sa Mission sans l'accord
                  préalable et écrit du Client. Sauf accord exprès du Client en ce sens, aucune sous-traitance de tout
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
                  ou partie de la Mission autorisée par le Client ne pourra avoir pour effet de décharger le Prestataire
                  de ses obligations et/ou de sa responsabilité au titre du Contrat.
                  </Text>
                  <Text style={newstyles.TitleArticle}>
                  Article 9 - Déclaration d'indépendance réciproque
                  </Text>
                  <Text style={newstyles.content}>
                  La relation établie entre le Client et le Prestataire est celle d'entreprises indépendantes et
                  autonomes. Aucune clause du Contrat ne pourra être interprétée comme donnant à l'une des Parties
                  le pouvoir de diriger les activités de l'autre Partie ni de contrôler l’autre d’une manière ou d’une autre.
                  Le Contrat vise exclusivement l'objet défini en son Article 1 et ne contient aucune forme ni intention
                  de constituer une société de droit ou de fait, les Parties étant dépourvues d'affectio societatis. Le
                  Prestataire pourra s’organiser librement dans l’exécution du Contrat, dans la mesure où il n’existe
                  entre les Parties aucun lien de subordination mais uniquement un lien contractuel de nature
                  commerciale.
                  </Text>
                  <Text style={newstyles.content}>
                  Aucune des Parties ne pourra, en outre, sauf mandat particulier, écrit, exprès et préalable de l’autre
                  Partie, être considérée comme représentant de l’autre Partie, et ce à quelque titre et sous quelque
                  modalité que ce soit.
                  </Text>
                  <Text style={newstyles.content}>
                  Il est expressément convenu que le Contrat est spécifique et qu’aucune de ses stipulations ne peut
                  amener à des revendications autres que celles découlant des obligations expressément prévues
                  dans le Contrat.
                  </Text>
                  <Text style={newstyles.content}>
                  Le présent Contrat n’habilite en aucun cas le Prestataire à engager le Client vis-à-vis de quiconque
                  dans la mesure où il ne comporte aucun mandat.
                  </Text>
                  <Text style={newstyles.content}>
                  Il est enfin précisé en tant que de besoin que le Client sera libre de suivre ou non toutes
                  préconisations éventuelles du Prestataire.
                  </Text>
                </View>
                <View style={newstyles.viewContent}>
                  <Text style={newstyles.TitleArticle}>
                  Article 10 - Déclarations des Parties
                  </Text>
                  <Text style={newstyles.content}>
                  Chacune des Parties déclare :
                  </Text>
                  <Text style={newstyles.content}>
                  • avoir la pleine capacité juridique,
                  </Text>
                  <Text style={newstyles.content}>
                  • que rien ne s'oppose à la conclusion du Contrat.
                  </Text>
                  <Text style={newstyles.content}>
                  • exercer ses activités en conformité avec la réglementation qui lui est applicable,
                  </Text>
                  <Text style={newstyles.content}>
                  • que la conclusion du Contrat ne contrevient à aucune obligation légale règlementaire,
                  professionnelle ou contractuelle qui la lie.
                  </Text>
                  <Text style={newstyles.content}>
                  • être en règle dans ses déclarations fiscales et sociales
                  </Text>
                  <Text style={newstyles.content}>
                  Le Client déclare :
                  </Text>
                  <Text style={newstyles.content}>
                  • exister valablement et régulièrement au regard du droit auquel il est soumis,
                  </Text>
                  <Text style={newstyles.content}>
                  • que la personne qui signe le Contrat en son nom a tout pouvoir à cet effet et que ce Contrat lui
                  est valablement et régulièrement opposable.
                  </Text>
                </View> 
                <View style={newstyles.viewContent}>
                  <Text style={newstyles.TitleArticle}>
                  Article 11 - Travail dissimulé
                  </Text>
                  <Text style={newstyles.content}>
                      <Text style={newstyles.Title}>11.1.</Text>En application de la loi sur le travail illégal et de ses décrets d'application, le Prestataire certifie
                  que dans l’hypothèse où il recourait pour l’exécution des présentes à un ou plusieurs salariés ou à
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
                    un ou plusieurs prestataires, les prestations objet du Contrat seront réalisées par des salariés
                    régulièrement embauchés ou des prestataires intervenant de manière valable et régulière.
                  </Text>
                  <Text style={newstyles.content1}>
                    <Text style={newstyles.Title}>11.2.</Text>  En outre, dans l’hypothèse où le Prestataire recourait à des salariés pour l’exécution du
                    Contrat, ce dernier s’engage à compter de leur embauche et tous les six (6) mois jusqu'à la fin de
                    l’exécution du Contrat, à communiquer au Client tous les documents requis au titre de l'article
                    D. 8222-5 du Code du travail et notamment :
                  </Text>
                  <Text style={newstyles.content1}>
                    • une attestation de fourniture de déclarations sociales émanant de l'organisme de protection
                    sociale chargé du recouvrement des cotisations lui incombant et datant de moins de six (6) mois
                    ;
                  </Text>
                  <Text style={newstyles.content1}>
                    • un extrait de l'inscription du Prestataire au registre du commerce et des sociétés ;
                  </Text>
                  <Text style={newstyles.content1}>
                    • une attestation sur l'honneur de la réalisation du travail par des salariés employés régulièrement
                    au regard des articles L.1221-10 et suivants, L.3243-1 et suivants et R.3243-3 et suivants du
                    Code du travail.
                  </Text>
                  <Text style={newstyles.TitleArticle}>
                  Article 12 - Responsabilité - Assurance
                  </Text>
                  <Text style={newstyles.content1}>
                    Chacune des Parties sera responsable de la bonne exécution des obligations qui lui incombent aux
                    termes des présentes. Le Prestataire restera par ailleurs seul responsable du fait de ses préposés le
                    cas échéant.
                  </Text>
                  <Text style={newstyles.content1}>
                    Le Prestataire ne sera responsable que des dommages directs causés au client résultant de ses
                    fautes ou de sa négligence (à l'exclusion de tout cas de force majeure ou de l'usage par le Client du
                    service non conforme aux préconisations du Prestataire).
                  </Text>
                  <Text style={newstyles.content1}>
                    Chacune des Parties s’engage en conséquence à prévenir l’autre sans délai de tout retard ou de tout
                    manquement dans l’exécution du Contrat ou des missions prévues au Contrat qu’elle identifiera, de
                    façon à éviter la survenance d’un préjudice pour quiconque.
                  </Text>
                  <Text style={newstyles.content1}>
                    Le Prestataire déclare avoir souscrit une assurance responsabilité civile professionnelle le couvrant
                    dans le cadre de ses activités et notamment au titre de la Mission.
                  </Text>
                </View>
                <View style={newstyles.viewContent}>
                  <Text style={newstyles.TitleArticle}>
                    Article 13 - Exclusion de garantie
                  </Text>
                  <Text style={newstyles.content1}>
                    Le Prestataire exclut toute garantie autre que les garanties légales prévues par le droit en vigueur
                    applicables à la prestation de services au titre du Contrat.
                  </Text>
                  <Text style={newstyles.content1}>
                    La garantie légale applicable ne pourra pas jouer en cas de non-paiement par le Client des
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
                  Article 14 - Dispositions générales
                  </Text>
                  <Text style={newstyles.Title}>
                  14.1. Bonne foi et coopération
                  </Text>
                  <Text style={newstyles.content}>
                  Les Parties s'engagent à toujours se comporter l'une envers l'autre comme des partenaires loyaux et
                  de bonne foi et notamment à s'informer mutuellement de toute difficulté qu'elles pourraient rencontrer
                  à l'occasion de l'exécution du Contrat ainsi qu’à coopérer à la bonne exécution du Contrat.
                  </Text>
                  <Text style={newstyles.Title}>
                  14.2. Modification du Contrat
                  </Text>
                  <Text style={newstyles.content}>
                  Aucun document postérieur, aucune modification du Contrat quelle qu'en soit la forme ne produira
                  d'effet entre les Parties sans prendre la forme d'un avenant dûment daté et signé par elles.
                  </Text>
                  <Text style={newstyles.Title}>
                  14.3. Nullité
                  </Text>
                  <Text style={newstyles.content}>
                  Si l'une quelconque des stipulations du Contrat s'avérait nulle au regard d'une règle de droit en
                  vigueur ou d'une décision judiciaire devenue définitive, elle serait alors réputée non écrite, sans pour
                  autant entraîner la nullité du Contrat ni altérer la validité de ses autres stipulations.                  
                  </Text>
                  <Text style={newstyles.Title}>
                  14.4. Renonciation
                  </Text>
                  <Text style={newstyles.content}>
                  Toute renonciation, quelle qu’en soit la durée, à invoquer l’existence ou la violation totale ou partielle
                  d’une quelconque des clauses du Contrat ne peut constituer une modification, une suppression de
                  ladite clause ou une renonciation à invoquer les validations antérieures, concomitantes ou
                  postérieures de la même clause ou d’autres clauses. Une telle renonciation n’aura d'effet que si elle
                  est exprimée par un écrit signé par la personne dûment habilitée à cet effet.                 
                  </Text>
                  <Text style={newstyles.Title}>
                  14.5. Domiciliation
                  </Text>
                  <Text style={newstyles.content}>
                  Pour l'exécution de l'ensemble du Contrat et de ses suites, le Bénéficiaire et le Prestataire font
                  élection de domicile en leurs adresses telles que mentionnées dans leurs comparutions ci-avant.                 
                  </Text>
                  <Text style={newstyles.content1}>
                  Tout changement de domicile et toute notification au titre du Contrat par l’une des Parties ne sera
                  opposable à l’autre que si elle est faite (i) par lettre recommandée avec accusé de réception ou par
                  courrier remis en main propre contre reçu, étant précisé que toute notification sera présumée avoir
                  été reçue dans le premier cas à la date de première présentation de ladite lettre à l’adresse de la
                  Partie concernée et dans le second cas à la date de remise en main propre.                 
                  </Text>
                  <Text style={newstyles.Title}>
                  14.6. Droit applicable - Règlement des différends
                  </Text>
                  <Text style={newstyles.content}>
                  Le Contrat est soumis au droit français.                
                  </Text>
                  <Text style={newstyles.content}>
                  Les différends qui surviendraient entre les Parties relatifs à la conclusion, l'exécution ou
                  l'interprétation du Contrat seront soumis aux tribunaux compétents.                 
                  </Text>
                  <Text style={newstyles.content}>
                  Fait à Paris en deux exemplaires originaux,               
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
                        Silvya Stojanovic, Présidente
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
                          • Copie du bon de commande du Client
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
                    SAS au capital de 5000 € inscrite au RCS de Paris | SIRET : 882 869 183 000 13 | Code NAF : 8559A | Déclaration d’activité enregistrée sous le numéro 11756025375 auprès du préfet                    </Text>
                    <Text style={newstyles.textTitle11}>
                    de région d’Ile-de-France. | Cet enregistrement ne vaut pas agrément de l'Etat » (article L. 6352-12 du code du travail)
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

