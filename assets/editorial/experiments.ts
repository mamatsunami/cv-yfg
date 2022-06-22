export default [
  {
    name: 'Formateur React Native @Campus Academy',
    period: 'Juin 2022',
    description: `Je dispense pour un module du Bachelor Infotech de Campus Academy une formation autour de React Native et du développement iOS & Android.

Pour une première en tant que formateur (alors que c'était une idée qui me trottait en tête depuis un moment), j'en tire autant d'enseignements que j'ai pu en transmettre et espère avoir l'occasion de renouveller l'expérience !`
  },
  {
    name: 'Responsable informatique @Radio DY10',
    period: '2019 - Present',
    description: `Impliqué dans le projet de webradio nantaise Radio DY10 qui émet depuis le blockhaus éponyme, je m'occupe bénévolement de gérer toutes les problématiques informatiques.

Le projet se divise en deux parties :
  - Un côté plus infrastructure/réseau avec la maintenance des outils open source Libretime, Azuracast et Icecast qui permettent de gérer le calendrier des émissions, les playlists et la diffusion du flux audio.
  - De l'autre, la création et l'évolution du site internet, actuellement en cours de refonte avec un couple Next.js/Strapi.`
  },
  {
    name: 'Maintenance de Sebastien Loeb Racing Experience @Futuroscope',
    period: '2018 - Present',
    description: `Arrivé en cours de route dans le projet, j'interviens encore maintenant afin de faire évoluer l'attraction et faciliter son exploitation. Le principe de l'attraction est de simuler une course en compagnie de Sebastien Loeb à l'aide d'un casque de réalité virtuelle et d'un siège de simulation automobile.

Le projet est complexe et se base sur un serveur Node.js qui va être responsable d'orchestrer via :
  - une table Modbus : les lumières de la salle, la detection de pesons et la gestion du déclenchement d'une alarme incendie
  - des websockets : les PCs afin de configurer les casques et lancer des séquences crées avec Unity
  - des sockets UDP : les sièges afin qu'ils bougent en rythme avec la séquence lancée dans les casques.

Il y a également une API qui permet aux exploitants via une interface fait en React de visualiser l'état de la salle et de chaque siège et de gérer le flux de personnes.

Ma dernière intervention consistait par exemple à effectuer des ajustements suite à la mise en place de la dernière génération des casques HTC Vive.`
  },
  {
    name: 'Lead Developer Mobile @Noelse',
    period: 'Dec 19 - Nov 21',
    description: `Je rejoins l'entreprise Afone en tant que consultant en Décembre 2019, afin de participer à la mise en place de son nouveau projet de néobanque : Noelse. On m'y confie le rôle de lead technique sur la partie application mobile développée en React Native par 5 développeurs en mode agile. Je profite de cette expérience pour faire évoluer mes compétences sur un projet à grande échelle, régit par de nombreuses contraintes en terme de sécurité, protection des données et conformité.

  - Développement et suivi de l'application mobile avec la mise en place de l'architecture du projet et de guidelines techniques. Je suis également responsable dies revues de code, de traduire les besoins métiers en spécification technique, de faire progresser la qualité et la couverture de code et enfin de la synchronisation avec l'équipe back-end dans l'élaboration des APIs et des modèles de données.
  - Mise en place avec les designers d'une styleguide associée à une librairie de composants React Native cross-platform (iOS, Android et Web) réutilisables dans les différents projets d'interfaces (application mobile, portail web, espace pro...)
  - Création de bridges React Native sur-mesure pour intégrer les SDKs iOS & Android de nos partenaires qui nous permettent de mettre en place de l'analyse automatique de documents légaux, un portefeuille électronique et la gestion de l'authentification forte pour la validation des opérations sensibles.
  - Conception et maintenance d'un ensemble de diagrammes interactifs qui documentent les flows de navigation, les interactions complexes entre back-end et front-end, la cartographie des événements Google Analytics et les dépendances avec les partenaires.`
  },
  {
    name: 'Clone d\'Amazon Go @XXII',
    period: 'Été 2019',
    description: `L'agence XXII spécialisée dans l'intelligence artificielle avec laquelle j'avais l'habitude de collaborer pour des besoins Javascript a fait appel à moi pour la mise en place d'un POC visant à reproduire le fonctionnement d'Amazon Go, c'est à dire une superette autonome sans caissier.

Je suis en charge de fixer l'architecture logicielle qui va permettre de communiquer entre :
  - une IA : responsable d'effectuer une reconnaissance facile à l'entrée et de détecter à partir de caméras quand un client pose ou dépose un produit
  - le système de caisse : responsable de récupérer les empreintes bancaires et de facturer le client à la fin
  - les portes automatiques et les écrans : responsable de gérer l'accès et de communiquer les instructions aux clients

Le tout a été développé avec Node.js et RabbitMQ.`
  },
  {
    name: 'Moteur de recherche de PdL @EDF',
    period: '2019',
    description: `Le numéro de PdL (Point de Livraison) est souvent un frein lorsqu'on désire changer de fournisseur d'éléctricité. Ce numéro technique est nécessaire pour souscrire à une offre d'éléctricité, mais il est méconnu du grand public et parfois difficile à obtenir.

En se basant sur la façon dont on souscrit à une offre Internet, l'idée de l'expérimentation était de rendre le renseignement du numéro de PdL plus simple en lui proposant de rentrer son adresse et retrouver son logement à partir d'indications du type "ETAGE 2 Pte droite".

L'interface codé en Vue.js avait aussi une visée pédagogique en donnant des manières alternatives de retrouver le numéro de PdL si le client ne retrouvait pas son logement dans la recherche.

Le gros du travail a été de devoir retravailler le referentiel d'adresse d'Enedis pour l'ingérer dans un Elasticsearch afin de rendre ces dizaines de millions d'entrées recherchables auprès d'une API Node.js` 
  },
  {
    name: 'Skills Alexa "EDF & Moi" et "EDF Jeux" @EDF',
    period: '2018',
    description: `En 2018 Amazon lance son enceinte connectée Alexa en France et collabore avant la sortie avec de grands groupes français pour proposer sur son store les premières applications vocales ou "skills" françaises.

Je suis responsable de développer deux skills pour EDF avec Node.js et AWS Lamba. La première "EDF & Moi" reprend la finalité de l'application mobile éponyme, la seconde est plus ludique et se présente sous la forme d'un quiz à niveaux destiné aux enfants.

Je découvre grâce à ce projet toutes les problématiques fascinantes liées au monde des chatbots et des assistants vocaux. Programmer une interface vocale après des années à travailler avec du visuel est un véritable challenge.`
  },
  {
    name: 'ERP sur-mesure pour vols touristiques @montgolfieres.fr',
    period: '2016 - 2020',
    description: `Anjou Nantes Montgolfieres nous contacte en 2016 afin de numériser son entreprise. Les réservations de vol en montgolfieres sujettes aux aléas climatiques et donc à de nombreux reports devenaient compliqués à gérer dans un tableur Excel.

Nous développons avec Meteor.js et React une solution sur-mesure pour lui permettre de gérer son planning de vol et communiquer simplement avec ses clients.`
  },
  {
    name: 'ERP/CRM sur-mesure pour infogérance @ITSense',
    period: '2015 - 2020',
    description: `ITSense, société spécialisée dans l'infogérance de serveur, fait appel à nous pour lui développer un outil sur-mesure pour gérer les parcs de serveurs de ses nombreux clients.

Développé avec une API REST Laravel et deux interfaces Angular 1 puis 2, celui-ci permet par exemple :
  - de gérer les tickets clients avec des workflows personnalisés
  - d'effectuer des opérations de maintenance simples sur les serveurs depuis l'interface
  - de monitorer les renouvellements de noms de domaine et certificats SSL
  - de gérer les cycles de facturation de chaque client`
  },
  {
    name: 'CMS Amaia @2pulse',
    period: '2014 - 2020',
    description: `Déçus par des solutions comme Wordpress ou Drupal, nous décidons avec 2pulse de développer en interne notre propre outil de gestion de contenu pour mettre en place les sites vitrines et e-commerce que nous créons.

À une époque où le PHP est encore roi, nous réutilisons des modules Laravel pour construire notre solution. Celle-ci a la particularité de pouvoir gérer plusieurs sites internets depuis une seule et même instance afin de faciliter son infogérance et permettait entre autre :
  - de gérer des catalogues de données complexes
  - éditer "en live" du contenu texte et image directement dans la page du site internet
  - avoir par défaut des performances optimales avec une bonne utilisation de Memcached
  - de gérer des commandes clientes e-commerce
  - de développer des modules personnalisés pour les besoins spécifiques de chaque client`
  }
]
