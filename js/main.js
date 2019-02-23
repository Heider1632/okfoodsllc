const app = new Vue({
  el: '#app',
  created(){
    setTimeout(() => {
      this.loading = false;
    },3000);
  },
  data: {
    loading: true,
    history1: 'Ok´Foods llc es una compañía formada desde el 12 de Diciembre de 2018, actualmente realiza la distribución de productos alimenticios en la zona metropolitana de Orlando y sus alrededores.',
    history2: 'La Compañía Abastece los diferentes canales del área metropolitana de la florida, como nicho principal el canal HORECA, Hoteles, restaurantes, cafeterías y panaderías. Ofreciendo sus productos alimenticios latinoamericanos que permiten satisfacer la demanda de la comunidad Hispano/latina, principalmente de los países Colombia, México, Puerto Rico, Rep. Dominicana, Jamaica , Brasil, Perú.',
    items: [
      {item: 'Implementar una propuesta poderosa de Productos Alimenticios ofreciendo un portafolio de alta Calidad/Valor, que permita mantener los sectores de nicho de mercado (Comunidad Hispana/Latina),que se estima en un 27% de la población. '},
      {item: 'Planificación en la Promesa de entregas Confiables y Oportunas que garanticen el almacenamiento, Alistamiento y entregas a largo plazo, teniendo en cuenta las practicas comerciales estadounidense.'},
      {item: 'Una Administración Confiable, que realice  un seguimiento  a las labores adtvas, que este lista para  atender pedidos, gastos, recaudación de las cuentas por cobrar, generando con los Clientes una relación Ganar – Ganar.'},
      {item: 'Implementación y desarrollo de planes estratégicos para cumplir con los objetivos y metas comerciales. Con un portafolio de alta Calidad/Valor, que permita mantener los sectores de nicho de mercado (Comunidad Hispana/Latina).'},
      {item: 'Fortalecer y complementar eficazmente estos planes de desarrollo a través  de campañas de marketing Exitosas. Como Marketing digital, sitios Web, redes sociales, correo electrónico.'},
      {item: 'Optimizar los Ingresos de la compañía a través de la distribución de los productos  que permita expandir  el negocio en otras áreas metropolitanas de la florida.'}
    ]
  }
})
