import { createApp } from "vue";
import App from "./App.vue";


// Component & Library Import
import axios from "axios";
import VueAxios from "vue-axios";
import Store from "./store/index";
import Router from "./routes/index";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import PrimeVue from 'primevue/config';
import AutoComplete from 'primevue/autocomplete';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Badge from 'primevue/badge';
import BadgeDirective from "primevue/badgedirective";
import BlockUI from 'primevue/blockui';
import Button from 'primevue/button';
import Breadcrumb from 'primevue/breadcrumb';
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
import CascadeSelect from 'primevue/cascadeselect';
import Carousel from 'primevue/carousel';
import Checkbox from 'primevue/checkbox';
import Chip from 'primevue/chip';
import Chips from 'primevue/chips';
import ColorPicker from 'primevue/colorpicker';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmPopup from 'primevue/confirmpopup';
import ConfirmationService from 'primevue/confirmationservice';
import ContextMenu from 'primevue/contextmenu';
import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import DeferredContent from 'primevue/deferredcontent';
import Dialog from 'primevue/dialog';
import DialogService from 'primevue/dialogservice'
import Divider from 'primevue/divider';
import Dock from 'primevue/dock';
import Dropdown from 'primevue/dropdown';
import DynamicDialog from 'primevue/dynamicdialog';
import Fieldset from 'primevue/fieldset';
import FileUpload from 'primevue/fileupload';
import FocusTrap from 'primevue/focustrap';
import Galleria from 'primevue/galleria';
import Image from 'primevue/image';
import InlineMessage from 'primevue/inlinemessage';
import Inplace from 'primevue/inplace';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import Knob from 'primevue/knob';
import Listbox from 'primevue/listbox';
import MegaMenu from 'primevue/megamenu';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Message from 'primevue/message';
import MultiSelect from 'primevue/multiselect';
import OrderList from 'primevue/orderlist';
import OrganizationChart from 'primevue/organizationchart';
import OverlayPanel from 'primevue/overlaypanel';
import Paginator from 'primevue/paginator';
import Panel from 'primevue/panel';
import PanelMenu from 'primevue/panelmenu';
import Password from 'primevue/password';
import PickList from 'primevue/picklist';
import ProgressBar from 'primevue/progressbar';
import ProgressSpinner from 'primevue/progressspinner';
import Rating from 'primevue/rating';
import RadioButton from 'primevue/radiobutton';
import Ripple from 'primevue/ripple';
import Row from 'primevue/row';
import SelectButton from 'primevue/selectbutton';
import ScrollPanel from 'primevue/scrollpanel';
import ScrollTop from 'primevue/scrolltop';
import Skeleton from 'primevue/skeleton';
import Slider from 'primevue/slider';
import Sidebar from 'primevue/sidebar';
import SpeedDial from 'primevue/speeddial';
import SplitButton from 'primevue/splitbutton';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Steps from 'primevue/steps';
import StyleClass from 'primevue/styleclass';
import TabMenu from 'primevue/tabmenu';
import TieredMenu from 'primevue/tieredmenu';
import Textarea from 'primevue/textarea';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Toolbar from 'primevue/toolbar';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Tag from 'primevue/tag';
import Terminal from 'primevue/terminal';
import Timeline from 'primevue/timeline';
import ToggleButton from 'primevue/togglebutton';
import Tooltip from 'primevue/tooltip';
import Tree from 'primevue/tree';
import TreeSelect from 'primevue/treeselect';
import TreeTable from 'primevue/treetable';
import TriStateCheckbox from 'primevue/tristatecheckbox';
import VirtualScroller from 'primevue/virtualscroller';


// Global url and header import
import "./url/axios";


// Country library import
import VueTelInput from "vue3-tel-input";
import "vue3-tel-input/dist/vue3-tel-input.css";


// PrimeVue css
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import "primevue/resources/themes/lara-light-blue/theme.css";


// Custom css
import "./style/css/style.css";
import "./style/css/flag.css";


// Bootstarp css library import
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


// import Datatable "bootstrap/dist/css/bootstrap.min.css";
import "jszip";
import "datatables.net-bs4";
import "datatables.net-buttons-bs4";
import "datatables.net-buttons/js/buttons.flash";
import "datatables.net-buttons/js/buttons.html5";
import "datatables.net-buttons/js/buttons.print";
import "datatables.net-buttons/js/buttons.colVis";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import "datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css";


// Datatable pdf maker
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;


// Create App
const app = createApp(App);
app.config.productionTip = false;


// Use Component
app.use(Store);
app.use(Router);
app.use(PrimeVue);
app.use(VueTelInput);
app.use(VueAxios, axios);
app.use(ToastService);
app.use(DialogService);
app.use(ConfirmationService);


// Primevue Directive
app.directive('tooltip', Tooltip);
app.directive('badge', BadgeDirective);
app.directive('ripple', Ripple);
app.directive('styleclass', StyleClass);
app.directive('focustrap', FocusTrap);


// PrimeVue Component
app.component('AccordionPrime', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('AutoComplete', AutoComplete);
app.component('AvatarPrime', Avatar);
app.component('AvatarGroup', AvatarGroup);
app.component('BadgePrime', Badge);
app.component('BlockUI', BlockUI);
app.component('BreadcrumbPrime', Breadcrumb);
app.component('ButtonPrime', Button);
app.component('CalendarPrime', Calendar);
app.component('CardPrime', Card);
app.component('CarouselPrime', Carousel);
app.component('CascadeSelect', CascadeSelect);
app.component('CheckboxPrime', Checkbox);
app.component('ChipPrime', Chip);
app.component('ChipsPrime', Chips);
app.component('ColorPicker', ColorPicker);
app.component('ColumnPrime', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('ConfirmDialog', ConfirmDialog);
app.component('ConfirmPopup', ConfirmPopup);
app.component('ContextMenu', ContextMenu);
app.component('DataTable', DataTable);
app.component('DataView', DataView);
app.component('DataViewLayoutOptions', DataViewLayoutOptions);
app.component('DeferredContent', DeferredContent);
app.component('DialogPrime', Dialog);
app.component('DividerPrime', Divider);
app.component('DockPrime', Dock);
app.component('DropdownPrime', Dropdown);
app.component('DynamicDialog', DynamicDialog);
app.component('FieldsetPrime', Fieldset);
app.component('FileUpload', FileUpload);
app.component('GalleriaPrime', Galleria);
app.component('ImagePrime', Image);
app.component('InlineMessage', InlineMessage);
app.component('InplacePrime', Inplace);
app.component('InputMask', InputMask);
app.component('InputNumber', InputNumber);
app.component('InputSwitch', InputSwitch);
app.component('InputText', InputText);
app.component('KnobPrime', Knob);
app.component('ListboxPrime', Listbox);
app.component('MegaMenu', MegaMenu);
app.component('MenuPrime', Menu);
app.component('MenubarPrime', Menubar);
app.component('MessagePrime', Message);
app.component('MultiSelect', MultiSelect);
app.component('OrderList', OrderList);
app.component('OrganizationChart', OrganizationChart);
app.component('OverlayPanel', OverlayPanel);
app.component('PaginatorPrime', Paginator);
app.component('PanelPrime', Panel);
app.component('PanelMenu', PanelMenu);
app.component('PasswordPrime', Password);
app.component('PickList', PickList);
app.component('ProgressBar', ProgressBar);
app.component('ProgressSpinner', ProgressSpinner);
app.component('RadioButton', RadioButton);
app.component('RatingPrime', Rating);
app.component('RowPrime', Row);
app.component('SelectButton', SelectButton);
app.component('ScrollPanel', ScrollPanel);
app.component('ScrollTop', ScrollTop);
app.component('SliderPrime', Slider);
app.component('SidebarPrime', Sidebar);
app.component('SkeletonPrime', Skeleton);
app.component('SpeedDial', SpeedDial);
app.component('SplitButton', SplitButton);
app.component('SplitterPrime', Splitter);
app.component('SplitterPanel', SplitterPanel);
app.component('StepsPrime', Steps);
app.component('TabMenu', TabMenu);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('TagPrime', Tag);
app.component('TextareaPrime', Textarea);
app.component('TerminalPrime', Terminal);
app.component('TieredMenu', TieredMenu);
app.component('TimelinePrime', Timeline);
app.component('ToastPrime', Toast);
app.component('ToolbarPrime', Toolbar);
app.component('ToggleButton', ToggleButton);
app.component('TreePrime', Tree);
app.component('TreeSelect', TreeSelect);
app.component('TreeTable', TreeTable);
app.component('TriStateCheckbox', TriStateCheckbox);
app.component('VirtualScroller', VirtualScroller);


// Google map
app.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyBUawov7kqnC68Nh6pB9CU5Ybc9FDzrJXs",
        libraries: "places",
    },
});


// Mount Your App
app.mount("#app");