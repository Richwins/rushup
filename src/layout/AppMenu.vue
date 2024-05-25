<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Acceuil',
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    {
        label: '',
        items: [
            {
                label: 'Etablissements',
                icon: 'pi pi-fw pi-pencil',
                to: '/pages/crud'
            },

            { label: 'QR code', icon: 'pi pi-fw pi-bars', to: '' },
            { label: 'Statistiques', icon: 'pi pi-fw pi-chart-bar', to: '/uikit/charts' },
            { label: 'Jeux', icon: 'pi pi-fw pi-circle', to: '' }
        ]
    },
    {
        label: 'Support',
        items: [
            { label: 'Template', icon: 'pi pi-fw pi-bars', to: '' },
            { label: 'Boutique', icon: 'pi pi-fw pi-bars', to: '' },
            { label: 'Commandes', icon: 'pi pi-fw pi-bars', to: '' },


        ]
    },
    {
        label: 'Pages',
        icon: 'pi pi-fw pi-briefcase',
        to: '',
        items: [
            {
                label: 'Paramètre',
                icon: 'pi pi-fw pi-sign-in',
                to: ''
            },
            {
                label: 'Actualité',
                icon: 'pi pi-fw pi-sign-in',
                to: ''
            },
            {
                label: 'Profil',
                icon: 'pi pi-fw pi-sign-in',
                to: ''
            },
            {
                label: 'Déconnexion',
                icon: 'pi pi-fw pi-sign-in',
                to: '/auth/login'
            },


        ]
    },


]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
        <li>

        </li>
    </ul>
</template>

<style lang="scss" scoped></style>
