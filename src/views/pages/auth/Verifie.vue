<script setup>
import { useLayout } from '@/layout/composables/layout';
import { computed } from 'vue';
import AppConfig from '@/layout/AppConfig.vue';

const { layoutConfig } = useLayout();
const logoUrl = computed(() => {
    return `/layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.png`;
});
</script>

<template>

    <AppConfig simple />
    <div class="grid grid-nogutter surface-section text-800">
        <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
            <div class="flex flex-column align-items-center justify-content-center">
                <img :src="logoUrl" alt="rushup logo" class="mb-5 w-6rem flex-shrink-0" />
                <div
                    style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, #F5AC0B 10%, rgba(33, 150, 243, 0) 30%)">
                    <div class="w-full surface-card py-8 px-5 sm:px-8 pt-16" style="border-radius: 53px">
                        <div class="text-center mb-5">
                            <span class="block text-5xl font-bold mb-3"> Super, plus qu'une étape avant de nous
                                rejoindre<span style="color: var(--primary-color)"> complètement !
                                </span> </span>
                            <span class="text-600 font-medium">Nous venons de vous envoyer un email contenant un lien,

                                <b>merci de cliquer dessus afin d'activer votre comtpe !</b>.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class=" col-12 md:col-6 overflow-hidden">
            <img src="/layout/images/hero-1.png" alt="Image" class="md:ml-auto block md:h-full"
                style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%); height: 100%;">
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
</style>
