import './style.css'
import './../node_modules/preline/dist/preline.js'


import $ from 'jquery';
window.jQuery = window.$ = $;

import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind("[data-fancybox='intro-videos']", {})
