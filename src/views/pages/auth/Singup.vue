<script setup>
import { useLayout } from '@/layout/composables/layout';
import { ref, computed } from 'vue';
import AppConfig from '@/layout/AppConfig.vue';


const { layoutConfig } = useLayout();
const email = ref('');
const password = ref('');
const checked = ref(false);

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
                    <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px">
                        <div class="text-center mb-5">
                            <span class="block text-5xl font-bold mb-3"><span style="color: var(--primary-color)">Créez
                                    votre compte</span> </span>
                            <span class="text-600 font-medium">Rejoignez
                                <b>Rushup</b> dès maintenant pour recolter de réactions sur vos réseaux sociaux
                                .</span>
                        </div>

                        <div>
                            <label for="email1" class="block text-900 font-medium mb-2">Email</label>
                            <InputText id="email1" type="text" placeholder="Email address" class="w-full mb-5"
                                style="padding: 1rem" v-model="email" />

                            <label for="password1" class="block text-900 font-medium  mb-2">Mot de passe</label>
                            <Password id="password1" v-model="password" placeholder="Mot de passe" :toggleMask="true"
                                class="w-full mb-5" inputClass="w-full" :inputStyle="{ padding: '1rem' }"></Password>

                            <div class="flex align-items-center justify-content-between mb-5 gap-5">
                                <div class="flex align-items-center">
                                    <Checkbox v-model="checked" id="rememberme1" binary class="mr-2"></Checkbox>
                                    <label for="rememberme1">Se souvenir de moi</label>
                                </div>

                            </div>
                            <router-link to="/auth/verifie">
                                <Button type="submit" label="créez un compte" class="w-full p-2 text-md mb-3"></Button>
                            </router-link>
                            <hr>
                            <div class="flex" style="justify-content: center; margin-top:25px; font-weight:bold;">
                                <span>Vous avez déjà un compte ?
                                    <router-link to="/auth/login"
                                        style="color: var(--primary-color); text-decoration: underline;">
                                        <span>Se connecter</span>
                                    </router-link>
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class=" col-12 md:col-6 overflow-hidden">
            <img src="/layout/images/hero-1.png" alt="Image" class="md:ml-auto block md:h-full"
                style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
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
