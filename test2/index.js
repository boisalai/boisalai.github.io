

// 1. Define route components.
// These can be imported from other files
const Foo = { template: `
<div>
<h2>Alain Boisvert, MBA</h2>
<p>Gestionnaire ayant réalisé plusieurs mandats stratégiques au gouvernement du Québec. 
Reconnu pour sa persévérance, son esprit d’équipe, son côté analytique, rigoureux et «&nbsp;touche à tout&nbsp;». 
Cherche à créer des choses utiles et rendre simple ce qui est compliqué.</p>
</div>
` }
const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes
})

// Now the app has started!
var app = new Vue({
    el: '#app',
    router,
    data: {
        cv: false
    },
    methods: {
        beta: function () {
            console.log("alpha");
            app.cv = true;
            $('.nav-collapse').click('li', function() {
                $('.nav-collapse').collapse('hide');
            });
        }
    }
})

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});