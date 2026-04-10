import formCreate from '@form-create/element-ui';
import FcEditor from '@form-create/component-wangeditor';
import FcTitle from '../components/FcTitle.vue';
import SignaturePad from '../components/SignaturePad.vue';
import TableForm from '../components/tableForm/TableForm.vue';
import Table from '../components/table/Table.vue';
import { InputTag } from '@agree/aui-plus/es/aui-web';

const install = (formCreate) => {
    formCreate.component('FcEditor', FcEditor);
    formCreate.component('FcTitle', FcTitle);
    formCreate.component('SignaturePad', SignaturePad);
    formCreate.component('TableForm', TableForm);
    formCreate.component('FcTable', Table);
    formCreate.component('fcInputTag', InputTag);
}

install(formCreate);

export default install;
