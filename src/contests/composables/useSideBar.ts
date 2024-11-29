import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default function useSidebar() {

    const isRouteSelected = ref(sessionStorage.getItem('isRouteSelected') ?? 'supplier');
    const isExpanded = ref(sessionStorage.getItem('isExpanded') === 'true' ? true : sessionStorage.getItem('isExpanded') === 'false' ? false : true);

    const routes = [
        { path: '/contests/contestInformation', name: 'contestInformation', icon: 'pi-briefcase', title: 'Concursos' },
        { path: 'products-list', name: 'ProductsList', icon: 'pi-book', title: 'Plantilla' },
    ];

    function toggleSidebar() {
        isExpanded.value = !isExpanded.value;
        sessionStorage.setItem('isExpanded', isExpanded.value.toString());
    };

    function changeRoute(route: string) {
        isRouteSelected.value = route;
        sessionStorage.setItem('isRouteSelected', route);
    }

    return {
        //vars
        routes,
        isRouteSelected,
        isExpanded,
        //functions
        toggleSidebar,
        changeRoute,
        //stores
    };
}
