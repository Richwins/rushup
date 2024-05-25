<script setup>
import { useLayout } from '@/layout/composables/layout';
import { ref, computed } from 'vue';
import AppConfig from '@/layout/AppConfig.vue';

const { layoutConfig } = useLayout();
const dropdownValues = ref([
    { name: 'PDG Fondateur', code: 'PDG' },
    { name: 'Directeur', code: 'DG' },
    { name: 'Charger de communication', code: 'CC' },
    { name: 'Stagiare', code: 'stage' },
    { name: 'Freelance', code: 'Freelance' }
]);
const secteurEntreprise = ref([
    { name: 'Restauration', code: 'PDG' },
    { name: 'Services', code: 'DG' },
]);

const logoUrl = computed(() => {
    return `/layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.png`;
});
</script>

<template>
    <AppConfig simple />
    <div
        class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="flex flex-column align-items-center justify-content-center">
            <img :src="logoUrl" alt="rushup logo" class="mb-5 w-6rem flex-shrink-0" />
            <div
                style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, #F5AC0B 10%, rgba(33, 150, 243, 0) 30%)">
                <div class="w-full surface-card py-8  sm:px-8" style="border-radius: 53px">
                    <Stepper>
                        <StepperPanel header="Etape I">
                            <template #content="{ nextCallback }">
                                <div class="flex flex-column">
                                    <div class="text-center mb-5 mt-3">
                                        <span class="block text-2xl font-bold mb-3"> <span
                                                style="color: var(--primary-color)">
                                                Configuration du compte
                                            </span> </span>
                                        <span class="text-600 font-medium">Entrez vos informations
                                            <b>personnelles</b> pour passer à l'étape suivante.</span>
                                    </div>
                                    <div class="mt-3">
                                        <label for="email1" class="block text-900 font-medium mb-2"> Numéro de téléphone
                                            (sans le 0 au début)</label>
                                        <InputGroup class="mb-3 w-full">
                                            <InputGroupAddon class="p-3">
                                                + 33
                                            </InputGroupAddon>
                                            <InputText type="numero" placeholder="000000000" class="p-3" />
                                        </InputGroup>

                                        <div class="formgroup-inline mb-3 ">
                                            <div class="field">
                                                <label for="firstname1"
                                                    class="block text-900 font-medium mb-2">Prénom</label>
                                                <InputText id="firstname1" type="text" class="p-3 w-full"
                                                    placeholder="Prénom" />
                                            </div>
                                            <div class="field">
                                                <label for="lastname1"
                                                    class="block text-900 font-medium mb-2">Nom</label>
                                                <InputText id="lastname1" class="p-3 w-full" type="text"
                                                    placeholder="Nom" />
                                            </div>
                                        </div>
                                        <div class="field mb-4">
                                            <label for="lastname1" class="block text-900 font-medium mb-2">Nom de
                                                votre entreprise</label>
                                            <InputText id="lastname1" class="p-3 w-full" type="text"
                                                placeholder="Nom de l'entreprise" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="lastname1" class="block text-900 font-medium mb-2">Votre
                                                fonction au
                                                sein de l'entreprise</label>
                                            <Dropdown v-model="fonction" :options="dropdownValues" optionLabel="name"
                                                placeholder="Votre fonction " class="w-full p-2" />
                                        </div>

                                        <hr>
                                    </div>
                                </div>
                                <div class="flex pt-4 justify-content-end">
                                    <Button label="Suivant" class="p-3 px-4" icon="pi pi-arrow-right" iconPos="right"
                                        @click="nextCallback" />
                                </div>
                            </template>
                        </StepperPanel>
                        <StepperPanel header="Etape II">
                            <template #content="{ prevCallback, nextCallback }">
                                <div class="flex flex-column">
                                    <div class="text-center mb-5 mt-3">
                                        <span class="block text-2xl font-bold mb-3"> <span
                                                style="color: var(--primary-color)">
                                                Configuration du compte
                                            </span> </span>
                                        <span class="text-600 font-medium">Entrez vos informations
                                            <b>personnelles</b> pour passer à l'étape suivante.</span>
                                    </div>
                                    <div class="mt-3">
                                        <div class="mb-3">
                                            <label for="lastname1" class="block text-900 font-medium mb-2">Secteur
                                                d'activité</label>
                                            <Dropdown v-model="secteur" :options="secteurEntreprise" optionLabel="name"
                                                placeholder="Votre profession " class="w-full p-2" />
                                        </div>
                                        <div class="field mb-4">
                                            <label for="lastname1"
                                                class="block text-900 font-medium mb-2">Adresse</label>
                                            <InputText id="lastname1" class="p-3 w-full" type="text"
                                                placeholder="Adresse" />
                                        </div>
                                        <div class="field mb-4">
                                            <label for="lastname1" class="block text-900 font-medium mb-2">Code
                                                postal</label>
                                            <InputText id="lastname1" class="p-3 w-full" type="text"
                                                placeholder="Code postal" />
                                        </div>
                                        <div class="field mb-4">
                                            <label for="lastname1" class="block text-900 font-medium mb-2">Pays</label>
                                            <InputText id="lastname1" class="p-3 w-full" type="text"
                                                placeholder="Pays" />
                                        </div>


                                        <hr>
                                    </div>
                                </div>
                                <div class="flex pt-4 justify-content-between">
                                    <Button label="Précédent" severity="secondary" class="p-3 px-4"
                                        icon="pi pi-arrow-left" @click="prevCallback" />
                                    <Button label="Suivant" icon="pi pi-arrow-right" class="p-3 px-4" iconPos="right"
                                        @click="nextCallback" />
                                </div>
                            </template>
                        </StepperPanel>
                        <StepperPanel header="Etape III">
                            <template #content="{ prevCallback }">
                                <div class="flex flex-column">
                                    <div class="text-center mb-5 mt-3">
                                        <span class="block text-2xl font-bold mb-3"> <span
                                                style="color: var(--primary-color)">
                                                Configuration du compte
                                            </span> </span>
                                        <span class="text-600 font-medium">Donnez nous quelques <b>détails</b>
                                            sur votre
                                            entreprise.
                                        </span>
                                    </div>
                                    <div class="mt-3">
                                        <div class="mb-3">
                                            <label for="lastname1" class="block text-900 font-medium mb-2">Secteur
                                                d'activité</label>
                                            <Dropdown v-model="secteur" :options="secteurEntreprise" optionLabel="name"
                                                placeholder="Votre profession " class="w-full p-2" />
                                        </div>
                                        <hr>
                                    </div>
                                </div>
                                <div class="flex pt-4 justify-content-start">
                                    <Button label="Back" severity="secondary" icon="pi pi-arrow-left" class="p-3 px-4"
                                        @click="prevCallback" />
                                </div>
                            </template>
                        </StepperPanel>
                    </Stepper>




                </div>

            </div>
        </div>
    </div>

</template>

<style scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}

.surface-ground {

    margin: 0px;
}
</style>
