


import React from 'react';
import signature from '../assets/images/signature.png';
import header from '../assets/images/img.png';
import sign from '../assets/images/sign.png';
import sign2 from '../assets/images/image.png';

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
    color: 'gray',
    fontSize:18,
    textAlign:'center'
  },
  article:{
    fontSize:10,
    textAlign:'center'
  },
  wiewLeft1: {
    display:'flex',
    justifyContent:'space-around',
    padding:'0px',
    top:'20px',
    flexDirection:'row',
   
  },

  viewContent3:{
  top: 80,
  padding: 10,
  width:'90%',
  marginLeft:'20px',
  lineHeight:'2px',

},
  viewContent:{
    //   top: 10,
      padding: 10,
      marginLeft:'20px',
      lineHeight:'1.5'
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
  textTitle2: {
    fontSize: 11,
    fontWeight: 'bold',
    color: 'black',
    // width: '80%',
  }, 
  wiewLeftContentSignature:{
    top:100,
    padding: 10,
    width:'90%',
    marginLeft:'20px',
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
  banner:{
    width: '100%',
},
bannerimg:{
    width:'100%',  
},
bannerImage:{
    display:'flex',
    flexDirection:'row',
  
},
Title:{
  fontSize:14,
  fontWeight:'8000'
},
content:{
  fontSize:11,
  textAlign:'justify',
  width:'90%',

},
TitleArticle:{
  color: 'gray',

  // fontSize:18,
 
},
wiewLeftContent11:{
    bottom:8,
    padding: 10,
    width:'90%',
    marginLeft:'20px',
    lineHeight:'1.5px'
  },
  wiewLeftContentfooter:{
    top:450,
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
  
        border: '0.5px solid #777373',
          width: '400px',
          marginLeft:100,
          fontWeight:'8000'

      
      
}
});
const pdfGenerator=() => {
  
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
              Convention de formation professionnelle
              </Text>
              <Text style={newstyles.header}>
              N° 20210903            
                </Text>
              <Text style={newstyles.article}>
              (Article L.6353-1 du code du travail
              </Text>
              <Text style={newstyles.article}>
              Décret N° 2018-1341 du 28 décembre 2018)
              </Text>
            </View>
         <View style={newstyles.line}></View>
            <View style={newstyles.viewContentEmploy}>
                <Text style={newstyles.Title}>
                Entre les soussignés, d’une part employeur :
                </Text>
                <Text style={newstyles.content}>
                  Entreprise : DAVIDSON R et D
                </Text>
                <Text style={newstyles.content}>
                  Téléphone : 04 92 90 39 00
                </Text>
                <Text style={newstyles.content}>
                  Adresse : 40 rue Fanfan la Tulipe 92 100 Boulogne Billancourt              
                </Text>
                <Text style={newstyles.content}>
                  Activité principale : Expertise et management de projets technologiques                
                </Text>
                <Text style={newstyles.content}>
                  Contact : Anaïs ZAMOUN               
                </Text>
                <Text style={newstyles.content}>
                  Qualité : Human Resources Assistant                
                </Text>
            </View>
            <View style={newstyles.viewContentEmploy}>
                <Text style={newstyles.Title}>
                Organisme de formation, d’autre part, SIELI :
                </Text>
                <Text style={newstyles.content}>
                Siège : 15 rue des Halles 75001 PARIS
                </Text>
                <Text style={newstyles.content}>
                Numéro de déclaration préalable : 11756025375
                </Text>
                <Text style={newstyles.content}>
                Représentant : Mme Silvya STOJANOVIC
                </Text>
                <Text style={newstyles.content}>
                Qualité : Présidente
                </Text>
            </View>

            <View style={newstyles.viewContent}>
                <Text style={newstyles.TitleArticle}>
                ARTICLE 1 : OBJET DE LA CONVENTION
                </Text>
                <Text style={newstyles.content}>
                La présente convention a pour objet de fixer :
                </Text>
                <Text style={newstyles.content}>
                ● les conditions dans lesquelles SIELI dispensera les actions de formation du contrat de
                    Professionnalisation,
                </Text>
                <Text style={newstyles.content}>
                ● le prix total hors taxe et les conditions de financement de ces actions de formation.
                </Text>
            </View>
            <View style={newstyles.viewContent}>
                <Text style={newstyles.TitleArticle}>
                ARTICLE 2 : PRÉSENTATION DE LA FORMATION
                </Text>
                <Text style={newstyles.content}>
                La formation professionnelle, faisant l'objet de la présente convention, sera suivie par Mme CAUMONT
                Ophélie de l’apprenant dans le cadre d'un contrat de Professionnalisation d'une durée d’un jour pour
                préparer la formation « Adobe XD intermédiaire ».
                </Text>
                <Text style={newstyles.content}>
                L’action de formation débuta le 08/09/2021 et prendra fin le 08/09/2021 à 17h. Le programme détaillé
                sera présenté en annexe. Les dates et horaires de formation sont indicatifs et susceptibles de
                modification, en fonction des évènements pouvant survenir au cours de la réalisation de l'action de
                formation.
                </Text>
                <Text style={newstyles.content}>
                Le formateur qui assurera la formation est M.PLAIS Ludovic, formateur en graphisme et communication.                </Text>
            </View>
            <View style={newstyles.viewContent}>
                <Text style={newstyles.TitleArticle}>
                ARTICLE 3 : MODALITÉS DE SANCTION
                </Text>
                <Text style={newstyles.content}>
                Formation “ Adobe XD intermédiaire”
                </Text>
                <Text style={newstyles.content}>
                Objectifs :
                </Text>
                <Text style={newstyles.content}>
                ● Réviser les fonctionnalités du logiciel
                ● Connaitre et utiliser différents plugins
                ● Utiliser des composants
                ● Créer des prototypes en incluant de l'interactivité              
                </Text>
            </View>
          </View> 
          <View >
          <View  style={newstyles.wiewLeftContent11}>
              <Text style={newstyles.textTitle11}>
              www.sieli.fr | 15 rue des Halles 75001 Paris
              </Text>
              <Text style={newstyles.textTitle11}>
              SAS au capital de 5000 € inscrite au RCS de Paris | SIRET : 882 869 183 000 13 | Code NAF : 8559A | Déclaration d’activité enregistrée sous le numéro 11756025375 auprès du préfet              </Text>
              <Text style={newstyles.textTitle11}>
             de région d’Ile-de-France. | Cet enregistrement ne vaut pas agrément de l'Etat » (article L. 6352-12 du code du travail)
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
                ARTICLE 4 : MODALITÉS DE DÉROULEMENT
                </Text>
                <Text style={newstyles.content}>
                À distance, en téléprésentiel
                </Text>
            </View>
            <View style={newstyles.viewContent}>
                <Text style={newstyles.TitleArticle}>
                ARTICLE 5 : RÈGLEMENT
                </Text>
                <Text style={newstyles.content}>
                Durant les heures de cours, le salarié en formation devra se conformer à la discipline et au règlement intérieur de
                SIELI. Le non suivi de ce règlement pourra entraîner le renvoi de l'établissement. En particulier, l'Employeur est
                informé de l'assiduité du salarié en formation. Les absences sont signalées dans les meilleurs délais.
                </Text>
            </View>
            <View style={newstyles.viewContent}>
                <Text style={newstyles.TitleArticle}>
                ARTICLE 6 : DISPOSITIONS FINANCIÈRES
                </Text>
                <Text style={newstyles.content}>
                En contrepartie de cette action de formation, le Client s’acquittera des couts suivants :
                </Text>
                <Text style={newstyles.content}>
                Modalités de règlement : Facturation mensuelle au prorata temporis
                </Text>
                <Text style={newstyles.content}>
                Nombre de jours : 1             
                </Text>
                <Text style={newstyles.content}>
                  Prix HT pour 1 jour : 450 Euros           
                </Text>
                <Text style={newstyles.content}>
                  TVA : 0 % (organisme de formation exonéré de TVA)            
                </Text>
                <Text style={newstyles.content}>
                  Prix TTC pour 1 jour : 450 Euros            
                </Text>
                <Text style={newstyles.content}>
                  Règlement à 30 jours net.            
                </Text>
                <Text style={newstyles.content}>
                  Frais de déplacement et/ou de séjour : sans objet         
                </Text>
                <Text style={newstyles.content}>
                  Type de règlement : Virement             
                </Text>
            </View>
            <View style={newstyles.viewContent}>
                <Text style={newstyles.TitleArticle}>
                ARTICLE 7 : ENGAGEMENT DE L’EMPLOYEUR
                </Text>
                <Text style={newstyles.content}>
                L'entreprise s'engage à libérer le salarié en contrat de professionnalisation les jours prévus pour sa formation,
                afin qu'il puisse recevoir un enseignement continu et méthodique. Ainsi, !'Employeur gérera les congés payés du
                jeune en fonction du planning de formation.                
                </Text>
            </View>
            <View style={newstyles.viewContent}>
                <Text style={newstyles.TitleArticle}>
                ARTICLE 8 : CAS PARTICULIERS
                </Text>
                <Text style={newstyles.content}>
                En cas de refus de l’OPCO :                
                </Text>
                <Text style={newstyles.content}>
                le contrat de professionnalisation est alors annulé. L'entreprise doit informer (sous huitaine) l'école du refus de
                prise en charge de l'OPCO ou de la DOTE afin que le centre de formation puisse décider de ne pas facturer
                l'entreprise.               
                </Text>
                <Text style={newstyles.content}>
                À défaut, le centre de formation facturera à l'entreprise le coût de la formation, au prorata de la durée de la
                formation déjà suivie.               
                </Text>
                <Text style={newstyles.content}>
                En cas de prise en charge partielle de la formation par l’OPCO :
                L'employeur s'engage à s'acquitter du montant de la différence correspondant au coût de la non prise en charge
                par l'OPCO. SIELI facturera l'entreprise dans les 15 jours suivant la réception de la prise en charge partielle.               
                </Text>
            </View>
            <View style={newstyles.viewContent}>
                <Text style={newstyles.TitleArticle}>
                ARTICLE 9 : EN CAS DE DIFFÉRENDS
                </Text>
                <Text style={newstyles.content}>
                Il peut être mis fin judiciairement à cette convention auprès du tribunal dont dépend le centre de formation, à la
                demande de l'une des parties lorsque celle-ci constate, de la part de l'autre partie, un manquement aux
                obligations inscrites dans le présent texte.                
                </Text>
                <Text style={newstyles.content}>
                Auparavant, les parties tenteront de régler entre elles leur différend à l'amiable ou demanderont l'arbitrage de
                l'inspecteur du travail.               
                </Text>
                <Text style={newstyles.content}>
                En cas de rupture du contrat de travail, qui entraîne obligatoirement la fin de la formation, l'entreprise s'engage à
                prévenir l'école, l'OPCO et la DOTE par lettre recommandée avec AR, sous huitaine, en notifiant la raison de la 
                          
                </Text>
               
            </View>
          </View> 
          <View >
          <View  style={newstyles.wiewLeftContent11}>
              <Text style={newstyles.textTitle11}>
              www.sieli.fr | 15 rue des Halles 75001 Paris
              </Text>
              <Text style={newstyles.textTitle11}>
              SAS au capital de 5000 € inscrite au RCS de Paris | SIRET : 882 869 183 000 13 | Code NAF : 8559A | Déclaration d’activité enregistrée sous le numéro 11756025375 auprès du préfet              </Text>
              <Text style={newstyles.textTitle11}>
             de région d’Ile-de-France. | Cet enregistrement ne vaut pas agrément de l'Etat » (article L. 6352-12 du code du travail)
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
                    rupture. Le montant des frais de formation sera calculé au prorata temporis jusqu'à la fin du mois de résiliation.
                    En cas de rupture de la convention de formation pour changement de centre, l'entreprise s'engage à régler la
                    formation pour l'année en cours.
                    Dans tous les cas de rupture, le candidat ne pourra se présenter devant le jury d'examen final, ni prétendre au
                    diplôme.                
                    </Text>
                </View>
                <View style={newstyles.wiewLeft2}>
                    <Text style={newstyles.content}>
                        Fait en double exemplaire, à PARIS, le 03/09/2021
                    </Text>
                </View>
                <View style={newstyles.wiewLeft1}>
                      <View style={newstyles.wiewLeftContent1}>
                        <Text style={newstyles.textTitle1}>
                        Employeur
                      </Text>
                      <Text style={newstyles.textTitle1}>
                      (DAVDISON R et D)
                      </Text>
                      <Text style={newstyles.textTitle1}>
                      Signature et cachet
                      </Text>
                      <View style={newstyles.bannerImage}>
                        <Image src={sign2} style={newstyles.image1}/>
                                          
                      </View> 
                      </View>
                      <View style={newstyles.wiewLeftContent1}>
                        <Text style={newstyles.textTitle2}>
                        Pour SIELI
                      </Text>
                      <Text style={newstyles.textTitle2}>
                      (STOJANOVIC Silvya, Présidente)
                      </Text>
                      <Text style={newstyles.textTitle1}>
                      Signature et cachet
                      </Text>
                      <View style={newstyles.bannerImage}>
                        <Image src={sign} style={newstyles.image1}/>
                        <Image src={signature} style={newstyles.image1}/>                   
                      </View>                   
                      </View>
                </View> 
                <View  style={newstyles.wiewLeftContentfooter}>
                    <Text style={newstyles.textTitle11}>
                    www.sieli.fr | 15 rue des Halles 75001 Paris
                    </Text>
                    <Text style={newstyles.textTitle11}>
                    SAS au capital de 5000 € inscrite au RCS de Paris | SIRET : 882 869 183 000 13 | Code NAF : 8559A | Déclaration d’activité enregistrée sous le numéro 11756025375 auprès du préfet                    </Text>
                    <Text style={newstyles.textTitle11}>
                    de région d’Ile-de-France. | Cet enregistrement ne vaut pas agrément de l'Etat » (article L. 6352-12 du code du travail)
                    </Text>
                </View>
          </View>            
        </View>  
      </Page>
  </Document>
  );
  
}
function PDFGenerator() {
  return (
    <div className="App">
      <div>
    <PDFDownloadLink document={pdfGenerator()} fileName="pdfgenerator.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' :<button type="button" class="btn btn-secondary btn">PDF Generator</button>)}
    </PDFDownloadLink>
  </div>
    </div>
  );
}

export default PDFGenerator;

