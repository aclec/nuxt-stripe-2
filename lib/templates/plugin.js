import Vue from "vue";
export default function (context) {
  <% if (options.publishableKey) { %>
    if (typeof window !== 'undefined') {
      const stripePlugin = {
        import() {
          return window['Stripe'] && window['Stripe']('<%= options.publishableKey %>');
        },
      };
      
      Vue.prototype.$stripe = stripePlugin;
    }
  <% } %>
}
