import Vue from 'vue';
import CustomButton from './CustomButton/CustomButton';

const Components = {
  CustomButton,
};

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;
