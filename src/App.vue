<template>
    <div id="app" class="bg-white">
        <ramp-header></ramp-header>
        <ramp-map></ramp-map>
        <info-shell></info-shell>
        <ramp-footer></ramp-footer>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import RampHeaderV from '@/components/header.vue';
import RampMapV from '@/components/map.vue';
import InfoShellV from '@/components/info/shell.vue';
import RampFooterV from '@/components/footer.vue';

@Component({
    components: {
        'ramp-header': RampHeaderV,
        'ramp-map': RampMapV,
        'info-shell': InfoShellV,
        'ramp-footer': RampFooterV
    }
})
export default class App extends Vue {}
</script>

<style lang="scss">
// overriding rv-styles
.flex,
.flex-grow {
    flex: unset;
}

a {
    @apply no-underline #{!important};
}
</style>
