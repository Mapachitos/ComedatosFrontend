import { defineStore } from 'pinia';
import { ref } from 'vue'


export const navInfoStore = defineStore("navInfoStore",() => {
   
    const selectedView = ref("");
    const trackModulView = ref("");
    const title = ref("");
    function setSelectedView(newselectedView: string) {
        selectedView.value = newselectedView;
    }
    function setTitle(newTitle: string) {
        title.value = newTitle;
    }
    function getSelectedView() :string{
        return selectedView.value;
    }
    function getTrackModulView() :string{
        return trackModulView.value;
    }
    function getTitle() :string{
        return title.value;
    }
 
    return {
        setSelectedView,
        setTitle,
        getSelectedView,
        getTitle,
        getTrackModulView,
    }
});