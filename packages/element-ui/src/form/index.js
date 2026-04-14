import formCreate from '@form-create/element-ui';
import FcEditor from '@form-create/component-wangeditor';
import FcTitle from '../components/FcTitle.vue';
import SignaturePad from '../components/SignaturePad.vue';
import { InputTag } from '@agree/aui-plus/es/aui-web';

const install = (formCreate) => {
    formCreate.component('FcEditor', FcEditor);
    formCreate.component('FcTitle', FcTitle);
    formCreate.component('SignaturePad', SignaturePad);
    formCreate.component('fcInputTag', InputTag);
}

install(formCreate);

export default install;
