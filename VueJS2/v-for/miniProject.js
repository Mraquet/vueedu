new Vue ({
   el: '#app',
   data: {
       password: '',
       categories: [
           {
               name: 'Javascript',
               sub: ['Vue.js', 'React', 'Angular2']
           },
           {
               name: 'Databases',
               sub: ['MySQL', 'PostgreSQL', 'MariaDB']
           },
           {
               name: 'Operation Systems',
               sub: ['macOS', 'Linux', 'Windows']
           }
       ]
   }
});