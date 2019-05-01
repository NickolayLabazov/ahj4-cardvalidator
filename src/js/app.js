import '../css/style.css';
import Validator from './validtorcreateclass.js';
import ValidLogic from './validclass.js';


const validator = new Validator(document.body);
const validLogic = new ValidLogic(validator);

validLogic.paySyst()
