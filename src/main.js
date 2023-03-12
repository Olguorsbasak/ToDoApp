import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';


import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import FileUpload from 'primevue/fileupload';
import DataTable from 'primevue/datatable';
import InputText from 'primevue/inputtext';
import Column from 'primevue/column';
import Rating from 'primevue/rating';
import Dialog from 'primevue/dialog';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import RadioButton from 'primevue/radiobutton';
import InputNumber from 'primevue/inputnumber';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import "./index.css";

const app = createApp(App);

app.use(PrimeVue);

app.component('Button', Button);
app.component('Toolbar', Toolbar);
app.component('FileUpload', FileUpload);
app.component('DataTable', DataTable);
app.component('InputText', InputText);
app.component('Column', Column);
app.component('Rating', Rating);
app.component('Dialog', Dialog);
app.component('Textarea', Textarea);
app.component('Dropdown', Dropdown);
app.component('RadioButton', RadioButton);
app.component('InputNumber', InputNumber);
app.component('Toast', Toast);
app.use(ToastService);

app.mount('#app')
