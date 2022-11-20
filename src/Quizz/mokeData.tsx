const questionsSet = [
  {
    question: 'Pour un développeur JavaScript Que signifie ES',
    time: 10,
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
    question: 'Quand on parle de "state" react, parle de ?',
    time: 20,
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
        title: 'Un etat local défini dans un composant',
        valid: true,
      },
      {
        title:
          'Une valeur privé dont la modification va re-rendre le composant',
        valid: true,
      },
    ],
  },
  {
    question: 'Parmi ces hooks react lesquels existent réellement',
    time: 20,
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
    question: 'Les "props" permettent ?',
    time: 20,
    responses: [
      {
        title:
          'De communiquer entre un composant parent et un composant enfant',
        valid: true,
      },
      {
        title:
          'De communiquer entre un composant enfant et un composant parent',
        valid: true,
      },
      {
        title:
          'De communiquer avec des composants "voisins" et sans lien de parité',
        valid: false,
      },
      {
        title: "D'utiliser un reducer afin de gérer le state",
        valid: false,
      },
    ],
  },
]

export default questionsSet
