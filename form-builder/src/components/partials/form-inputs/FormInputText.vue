<template>
    <validation-provider
        tag="div"
        :rules="opts.rules"
        :name="opts.name"
        :vid="vid"
        v-slot="v"
    >
        <b-form-group
            :label="opts.label"
            :label-sr-only="opts.hideLabel"
            :label-for="divId"
            :description="opts.description"
            label-class="oneapp-form-label"
        >
            <b-form-input
                :id="divId"
                :name="opts.name"
                v-model="currentValue"
                type="text"
                :disabled="opts.disabled"
                :placeholder="opts.placeholder"
                :state="getValidationState(v)"
            ></b-form-input>

            <b-form-invalid-feedback>{{ v.errors[0] }}</b-form-invalid-feedback>

        </b-form-group>
    </validation-provider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import InputMixin from '@/components/mixins/InputMixin.js';

export default {
    name: 'form-input-text',
    components: {
        ValidationProvider
    },
    mixins: [InputMixin],
    props: {
        // value, required, disabled, name, label, placeholder, description, hideLabel
        // provided by the InputMixin
    },
    mounted() {},
    data() {
        // divId, isUpdating, vid, currentValue, inputName
        // provided by the InputMixin
        return {};
    },
    methods: {
        // getValidationState method provided by InputMixin
    }
};
</script>
