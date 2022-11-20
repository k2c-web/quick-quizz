const questionsSet = [
  {
    question: 'Pour un développeur JavaScript Que signifie ES',
    time: 15,
    responses: [
      {
        title: ' Economique et Social',
        valid: false,
      },
      {
        title: 'Ecma Script',
        valid: true,
      },
      {
        title: 'Energie Solaire',
        valid: false,
      },
      {
        title: 'Energie Sombre',
        valid: false,
      },
    ],
  },
  {
    question: 'Quand on parle de "state" react ?',
    time: 25,
    responses: [
      {
        title: 'Communication entre un composant parent et un composant enfant',
        valid: false,
      },
      {
        title: 'Communication entre un composant enfant et un composant parent',
        valid: false,
      },
      {
        title: "Un etat local défini à l'interieur d'u composant",
        valid: true,
      },
      {
        title:
          'Une valeur dont la modification va re-rendre le composant',
        valid: true,
      },
    ],
  },
  {
    question: 'Parmi ces hooks react lesquels existent ?',
    time: 25,
    responses: [
      {
        title: 'UseEffect',
        valid: true,
      },
      {
        title: 'UseLayoutState',
        valid: false,
      },
      {
        title: 'UseRef',
        valid: true,
      },
      {
        title: 'UseLayoutEffect',
        valid: true,
      },
    ],
  },
  {
    question: 'Les props permettent de ?',
    time: 25,
    responses: [
      {
        title:
          'Communiquer entre un composant parent et un composant enfant',
        valid: true,
      },
      {
        title:
          'Communiquer entre un composant enfant et un composant parent',
        valid: true,
      },
      {
        title:
          'Communiquer avec des composants "voisins" et sans lien de parité',
        valid: false,
      },
      {
        title: "Utiliser un reducer afin de gérer le state du store",
        valid: false,
      },
    ],
  },
  {
    question: 'Les attributs des balises renommés en jsx ?',
    time: 25,
    responses: [
      {
        title:
          'htmlFor',
        valid: true,
      },
      {
        title:
          'altText',
        valid: false,
      },
      {
        title:
          'className',
        valid: true,
      },
      {
        title: "cssStyle",
        valid: false,
      },
    ],
  },
]

export default questionsSet
